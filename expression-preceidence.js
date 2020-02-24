const antlr4 = require('antlr4');
import { DefaultErrorStrategy, BailErrorStrategy } from 'antlr4/error/ErrorStrategy';
import { expressionprecedenceLexer as Lexer } from './gen/expressionprecedenceLexer';
import { expressionprecedenceParser as Parser } from './gen/expressionprecedenceParser';
import { PredictionMode } from 'antlr4/atn/PredictionMode';
import Listener from './gen/expressionprecedenceListener';

const input = `200 + 10 * 10 + 2 ^ 2 ^ 2`;

class ErrorListener extends antlr.error.ErrorListener {
  syntaxError(recognizer, symbol, line, column, message, payload) {
    console.error(message)
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
  console.log(tree)
} catch (error) {
  throw error;
}


