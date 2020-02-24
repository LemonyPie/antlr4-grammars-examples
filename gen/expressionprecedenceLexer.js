// Generated from /Users/artemee/WebstormProjects/antlr4-error-handling/expressionprecedence.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\b*\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004\u001a\n",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005\u001f\n\u0005",
    "\u0003\u0006\u0006\u0006\"\n\u0006\r\u0006\u000e\u0006#\u0003\u0007",
    "\u0006\u0007\'\n\u0007\r\u0007\u000e\u0007(\u0002\u0002\b\u0003\u0003",
    "\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u0003\u0002\u0004\u0003",
    "\u00022;\u0004\u0002C\\c|\u0002-\u0002\u0003\u0003\u0002\u0002\u0002",
    "\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002",
    "\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002",
    "\u0002\r\u0003\u0002\u0002\u0002\u0003\u000f\u0003\u0002\u0002\u0002",
    "\u0005\u0013\u0003\u0002\u0002\u0002\u0007\u0019\u0003\u0002\u0002\u0002",
    "\t\u001e\u0003\u0002\u0002\u0002\u000b!\u0003\u0002\u0002\u0002\r&\u0003",
    "\u0002\u0002\u0002\u000f\u0010\u0007\"\u0002\u0002\u0010\u0011\u0003",
    "\u0002\u0002\u0002\u0011\u0012\b\u0002\u0002\u0002\u0012\u0004\u0003",
    "\u0002\u0002\u0002\u0013\u0014\u0007`\u0002\u0002\u0014\u0006\u0003",
    "\u0002\u0002\u0002\u0015\u0016\u0007c\u0002\u0002\u0016\u0017\u0007",
    "p\u0002\u0002\u0017\u001a\u0007f\u0002\u0002\u0018\u001a\u0007,\u0002",
    "\u0002\u0019\u0015\u0003\u0002\u0002\u0002\u0019\u0018\u0003\u0002\u0002",
    "\u0002\u001a\b\u0003\u0002\u0002\u0002\u001b\u001c\u0007q\u0002\u0002",
    "\u001c\u001f\u0007t\u0002\u0002\u001d\u001f\u0007-\u0002\u0002\u001e",
    "\u001b\u0003\u0002\u0002\u0002\u001e\u001d\u0003\u0002\u0002\u0002\u001f",
    "\n\u0003\u0002\u0002\u0002 \"\t\u0002\u0002\u0002! \u0003\u0002\u0002",
    "\u0002\"#\u0003\u0002\u0002\u0002#!\u0003\u0002\u0002\u0002#$\u0003",
    "\u0002\u0002\u0002$\f\u0003\u0002\u0002\u0002%\'\t\u0003\u0002\u0002",
    "&%\u0003\u0002\u0002\u0002\'(\u0003\u0002\u0002\u0002(&\u0003\u0002",
    "\u0002\u0002()\u0003\u0002\u0002\u0002)\u000e\u0003\u0002\u0002\u0002",
    "\u0007\u0002\u0019\u001e#(\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function expressionprecedenceLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());

	    function log(a) {
	        console.log(a);
	    }

    return this;
}

expressionprecedenceLexer.prototype = Object.create(antlr4.Lexer.prototype);
expressionprecedenceLexer.prototype.constructor = expressionprecedenceLexer;

Object.defineProperty(expressionprecedenceLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

expressionprecedenceLexer.EOF = antlr4.Token.EOF;
expressionprecedenceLexer.WHITESPACE = 1;
expressionprecedenceLexer.POWER = 2;
expressionprecedenceLexer.AND = 3;
expressionprecedenceLexer.OR = 4;
expressionprecedenceLexer.NUMBER = 5;
expressionprecedenceLexer.LITERAL = 6;

expressionprecedenceLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

expressionprecedenceLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

expressionprecedenceLexer.prototype.literalNames = [ null, "' '", "'^'" ];

expressionprecedenceLexer.prototype.symbolicNames = [ null, "WHITESPACE", 
                                                      "POWER", "AND", "OR", 
                                                      "NUMBER", "LITERAL" ];

expressionprecedenceLexer.prototype.ruleNames = [ "WHITESPACE", "POWER", 
                                                  "AND", "OR", "NUMBER", 
                                                  "LITERAL" ];

expressionprecedenceLexer.prototype.grammarFileName = "expressionprecedence.g4";


exports.expressionprecedenceLexer = expressionprecedenceLexer;

