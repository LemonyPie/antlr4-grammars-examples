import {InputStream, CommonTokenStream} from 'antlr4';
import {PredictionMode} from 'antlr4/atn/PredictionMode';
import {DefaultErrorStrategy, BailErrorStrategy} from 'antlr4/error/ErrorStrategy';
import {ConsoleErrorListener} from 'antlr4/error/ErrorListener';
import {ParseTreeWalker} from 'antlr4/tree/Tree';
import {targetLanguageInRulesLexer as Lexer} from './gen/targetLanguageInRulesLexer';
import {targetLanguageInRulesParser as Parser} from './gen/targetLanguageInRulesParser';
import {targetLanguageInRulesVisitor as Visitor} from './gen/targetLanguageInRulesVisitor';
import {targetLanguageInRulesListener as Listener} from './gen/targetLanguageInRulesListener';

function parse(input) {
  const chars = new InputStream(input);
  const lexer = new Lexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new Parser(tokens);

  try {
    return parser.parse();
  } catch (e) {
    console.error(e);
  }
}

class CustomListener extends Listener {
  constructor() {
    super();
    this.xml = '';
    this.indent = 0;
  }

  push(tag) {
    this.xml += tag.padStart(tag.length + this.indent) + '\n';
  }

  enterDeclaration() {
    this.push('<declare>');
    this.indent++;
  }

  exitDeclaration(ctx) {
    this.push(`<value>${this.visitTerminal(ctx.getChild(2))}</value>`);
    this.indent--;
    this.push('</declare>');
  }

  enterDefine(ctx) {
    this.push('<define>');
    this.indent++;
    this.push(`<variable>${this.visitTerminal(ctx.getChild(1))}</variable>`);
  }

  exitDefine() {
    this.indent--;
    this.push('</define>');
  }

  visitTerminal(ctx) {
    return ctx.toString();
  }
}

class CustomVisitor extends Visitor {
  visit(ctx) {
    if (Array.isArray(ctx)) {
      return ctx.map(function(child) {
        return child.accept(this);
      }, this);
    } else {
      return ctx.accept(this);
    }
  }

  visitChildren(ctx) {
    return `(${ctx.children.map(child => super.visit(child)).join(' ')})`;
  }

  visitTerminal(ctx) {
    return ctx.getText();
  }
}

function lispybracy(input) {
  const tree = parse(input);
  const visitor = new CustomVisitor();
  return visitor.visit(tree);
}

window.lispybracy = lispybracy;

function xml(input) {
  const tree = parse(input);
  const listener = new CustomListener();
  ParseTreeWalker.DEFAULT.walk(listener, tree);
  return listener.xml;
}

window.xml = xml;


// // try with simpler/faster SLL(*)
// parser._interp.predictionMode = PredictionMode.SLL;
// // we don't want error messages or recovery during first try
// parser.removeErrorListeners();
// parser._errHandler = new BailErrorStrategy();
// try {
//   console.time('SLL');
//   const tree = parser.parse();
//   console.timeEnd('SLL');
//   console.log('Parsed with SLL', new CustomVisitor().visit(tree))
// } catch(e) {
//   console.error(e);
//   tokens.reset(); // rewind input stream
//   parser.reset();
//   // back to standard listeners/handlers
//   parser.addErrorListener(new ConsoleErrorListener());
//   parser._errHandler = new DefaultErrorStrategy();
//   // full now with full LL(*)
//   parser._interp.predictionMode = PredictionMode.LL;
//   console.time('LL');
//   const tree = parser.parse();
//   console.timeEnd('LL');
//   console.log('Parsed with LL', new CustomVisitor().visit(tree))
// }
