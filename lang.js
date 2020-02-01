import antlr from 'antlr4';
import { DefaultErrorStrategy, BailErrorStrategy } from 'antlr4/error/ErrorStrategy';
import { langLexer as Lexer } from './gen/langLexer';
import { langParser as Parser } from './gen/langParser';
import { PredictionMode } from 'antlr4/atn/PredictionMode';
import Visitor from './gen/langVisitor';

const input = `(add 'string' to "ano`;

class ErrorListener extends antlr.error.ErrorListener {
  syntaxError(recognizer, symbol, line, column, message, payload) {
  }
}

const errorListener = new ErrorListener();
const chars = new antlr.InputStream(input);
const lexer = new Lexer(chars);
lexer.removeErrorListeners();
lexer.logError = function(e) {
  console.log('Lex error: ', e)
};
lexer.addErrorListener(errorListener)
const tokens = new antlr.CommonTokenStream(lexer);

const parser = new Parser(tokens);
parser._errHandler = new DefaultErrorStrategy();
parser.predictionMode  = PredictionMode.LL;
parser.logError = function(e) {
  console.log('Parse error: ', e)
};
parser.removeErrorListeners();
parser.addErrorListener(errorListener);

try {
  const tree = parser.parse();
} catch (error) {
  throw error;
}


