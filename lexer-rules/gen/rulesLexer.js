// Generated from /Users/artemee/WebstormProjects/antlr4-error-handling/lexer-rules/rules.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0007<\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0006\u0003 \n\u0003\r\u0003\u000e\u0003!\u0003\u0003",
    "\u0003\u0003\u0003\u0004\u0006\u0004\'\n\u0004\r\u0004\u000e\u0004(",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0002\u0002\f\u0003",
    "\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\u0002\u000f\u0002",
    "\u0011\u0002\u0013\u0002\u0015\u0002\u0003\u0002\n\u0006\u0002\f\f\"",
    "\"C\\c|\u0003\u00022;\u0005\u0002,-//11\u0004\u0002RRrr\u0004\u0002",
    "QQqq\u0004\u0002YYyy\u0004\u0002GGgg\u0004\u0002TTtt\u00028\u0002\u0003",
    "\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007",
    "\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b",
    "\u0003\u0002\u0002\u0002\u0003\u0017\u0003\u0002\u0002\u0002\u0005\u001b",
    "\u0003\u0002\u0002\u0002\u0007&\u0003\u0002\u0002\u0002\t*\u0003\u0002",
    "\u0002\u0002\u000b,\u0003\u0002\u0002\u0002\r2\u0003\u0002\u0002\u0002",
    "\u000f4\u0003\u0002\u0002\u0002\u00116\u0003\u0002\u0002\u0002\u0013",
    "8\u0003\u0002\u0002\u0002\u0015:\u0003\u0002\u0002\u0002\u0017\u0018",
    "\u0007\"\u0002\u0002\u0018\u0019\u0003\u0002\u0002\u0002\u0019\u001a",
    "\b\u0002\u0002\u0002\u001a\u0004\u0003\u0002\u0002\u0002\u001b\u001c",
    "\u00071\u0002\u0002\u001c\u001d\u00071\u0002\u0002\u001d\u001f\u0003",
    "\u0002\u0002\u0002\u001e \t\u0002\u0002\u0002\u001f\u001e\u0003\u0002",
    "\u0002\u0002 !\u0003\u0002\u0002\u0002!\u001f\u0003\u0002\u0002\u0002",
    "!\"\u0003\u0002\u0002\u0002\"#\u0003\u0002\u0002\u0002#$\b\u0003\u0003",
    "\u0002$\u0006\u0003\u0002\u0002\u0002%\'\t\u0003\u0002\u0002&%\u0003",
    "\u0002\u0002\u0002\'(\u0003\u0002\u0002\u0002(&\u0003\u0002\u0002\u0002",
    "()\u0003\u0002\u0002\u0002)\b\u0003\u0002\u0002\u0002*+\t\u0004\u0002",
    "\u0002+\n\u0003\u0002\u0002\u0002,-\u0005\r\u0007\u0002-.\u0005\u000f",
    "\b\u0002./\u0005\u0011\t\u0002/0\u0005\u0013\n\u000201\u0005\u0015\u000b",
    "\u00021\f\u0003\u0002\u0002\u000223\t\u0005\u0002\u00023\u000e\u0003",
    "\u0002\u0002\u000245\t\u0006\u0002\u00025\u0010\u0003\u0002\u0002\u0002",
    "67\t\u0007\u0002\u00027\u0012\u0003\u0002\u0002\u000289\t\b\u0002\u0002",
    "9\u0014\u0003\u0002\u0002\u0002:;\t\t\u0002\u0002;\u0016\u0003\u0002",
    "\u0002\u0002\u0005\u0002!(\u0004\b\u0002\u0002\u0002\u0003\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function rulesLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

rulesLexer.prototype = Object.create(antlr4.Lexer.prototype);
rulesLexer.prototype.constructor = rulesLexer;

Object.defineProperty(rulesLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

rulesLexer.EOF = antlr4.Token.EOF;
rulesLexer.WHITESPACE = 1;
rulesLexer.COMMENT = 2;
rulesLexer.NUMBER = 3;
rulesLexer.OPERATION = 4;
rulesLexer.POWER = 5;

rulesLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

rulesLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

rulesLexer.prototype.literalNames = [ null, "' '" ];

rulesLexer.prototype.symbolicNames = [ null, "WHITESPACE", "COMMENT", "NUMBER", 
                                       "OPERATION", "POWER" ];

rulesLexer.prototype.ruleNames = [ "WHITESPACE", "COMMENT", "NUMBER", "OPERATION", 
                                   "POWER", "P", "O", "W", "E", "R" ];

rulesLexer.prototype.grammarFileName = "rules.g4";


exports.rulesLexer = rulesLexer;

