import {InputStream, CommonTokenStream} from 'antlr4';
import {PredictionMode} from 'antlr4/atn/PredictionMode';
import {DefaultErrorStrategy, BailErrorStrategy} from 'antlr4/error/ErrorStrategy';
import {ConsoleErrorListener} from 'antlr4/error/ErrorListener';
import {targetLanguageInRulesLexer as Lexer} from './gen/targetLanguageInRulesLexer';
import {targetLanguageInRulesParser as Parser} from './gen/targetLanguageInRulesParser';
import {targetLanguageInRulesVisitor as Visitor} from './gen/targetLanguageInRulesVisitor';

// const input = 'define define =1000define variable = 200\ndefine v  1; define something = 20;';
const value = 'define define  1000';
const input = Array(10000).fill(value).join(';') + '';

const chars = new InputStream(input);
const lexer = new Lexer(chars);
const tokens = new CommonTokenStream(lexer);
const parser = new Parser(tokens);

class TextVisitor extends Visitor {
  visitTerminal(ctx) { return ctx.getText(); }
  visitChildren(ctx) {
    return `(${ctx.children.map(child => super.visit(child)).join(' ')})`;
  }
}

// try with simpler/faster SLL(*)
parser._interp.predictionMode = PredictionMode.SLL;
// we don't want error messages or recovery during first try
parser.removeErrorListeners();
parser._errHandler = new BailErrorStrategy();
try {
  console.time('SLL');
  const tree = parser.parse();
  console.timeEnd('SLL');
  console.log('Parsed with SLL', new TextVisitor().visit(tree))
} catch(e) {
  // console.error(e);
  tokens.reset(); // rewind input stream
  parser.reset();
  // back to standard listeners/handlers
  parser.addErrorListener(new ConsoleErrorListener());
  parser._errHandler = new DefaultErrorStrategy();
  // full now with full LL(*)
  parser._interp.predictionMode = PredictionMode.LL;
  console.time('LL');
  const tree = parser.parse();
  console.timeEnd('LL');
  console.log('Parsed with LL', new TextVisitor().visit(tree))
}
