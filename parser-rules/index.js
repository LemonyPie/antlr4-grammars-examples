import antlr from 'antlr4';
import {rulesLexer as Lexer} from './gen/rulesLexer';
import {rulesParser as Parser} from './gen/rulesParser';
import Visitor from './gen/rulesVisitor';

const input = `2 Power 2 + 500 + 100 * 2 // math expression`;

const chars = new antlr.InputStream(input);
const lexer = new Lexer(chars);
const tokens = new antlr.CommonTokenStream(lexer);
const parser = new Parser(tokens);

try {
  const tree = parser.parse();
  console.log(tokens.tokens.map(token => token.text));
  console.log(lexer)
  const HIDDEN = lexer.channelNames.indexOf('HIDDEN');
  console.log('Hidden tokens: ', tokens.tokens.filter(token => token.channel === HIDDEN));
  console.log(tree);
} catch(e) {
  console.error(e);
}
