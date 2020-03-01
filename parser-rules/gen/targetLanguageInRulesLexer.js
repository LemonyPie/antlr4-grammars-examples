// Generated from /Users/artemee/WebstormProjects/antlr4-error-handling/parser-rules/targetLanguageInRules.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\b*\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0007\u0003\u0019\n\u0003\f\u0003",
    "\u000e\u0003\u001c\u000b\u0003\u0003\u0004\u0006\u0004\u001f\n\u0004",
    "\r\u0004\u000e\u0004 \u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0002\u0002\b\u0003",
    "\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u0003\u0002\u0006",
    "\u0006\u0002&&C\\aac|\u0007\u0002&&2;C\\aac|\u0003\u00022;\u0004\u0002",
    "\f\f\"\"\u0002+\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003",
    "\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003",
    "\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003",
    "\u0002\u0002\u0002\u0003\u000f\u0003\u0002\u0002\u0002\u0005\u0016\u0003",
    "\u0002\u0002\u0002\u0007\u001e\u0003\u0002\u0002\u0002\t\"\u0003\u0002",
    "\u0002\u0002\u000b$\u0003\u0002\u0002\u0002\r&\u0003\u0002\u0002\u0002",
    "\u000f\u0010\u0007f\u0002\u0002\u0010\u0011\u0007g\u0002\u0002\u0011",
    "\u0012\u0007h\u0002\u0002\u0012\u0013\u0007k\u0002\u0002\u0013\u0014",
    "\u0007p\u0002\u0002\u0014\u0015\u0007g\u0002\u0002\u0015\u0004\u0003",
    "\u0002\u0002\u0002\u0016\u001a\t\u0002\u0002\u0002\u0017\u0019\t\u0003",
    "\u0002\u0002\u0018\u0017\u0003\u0002\u0002\u0002\u0019\u001c\u0003\u0002",
    "\u0002\u0002\u001a\u0018\u0003\u0002\u0002\u0002\u001a\u001b\u0003\u0002",
    "\u0002\u0002\u001b\u0006\u0003\u0002\u0002\u0002\u001c\u001a\u0003\u0002",
    "\u0002\u0002\u001d\u001f\t\u0004\u0002\u0002\u001e\u001d\u0003\u0002",
    "\u0002\u0002\u001f \u0003\u0002\u0002\u0002 \u001e\u0003\u0002\u0002",
    "\u0002 !\u0003\u0002\u0002\u0002!\b\u0003\u0002\u0002\u0002\"#\u0007",
    "?\u0002\u0002#\n\u0003\u0002\u0002\u0002$%\u0007=\u0002\u0002%\f\u0003",
    "\u0002\u0002\u0002&\'\t\u0005\u0002\u0002\'(\u0003\u0002\u0002\u0002",
    "()\b\u0007\u0002\u0002)\u000e\u0003\u0002\u0002\u0002\u0005\u0002\u001a",
    " \u0003\u0002\u0003\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function targetLanguageInRulesLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());

	    notify = (x) => this.notifyErrorListeners(x);

    return this;
}

targetLanguageInRulesLexer.prototype = Object.create(antlr4.Lexer.prototype);
targetLanguageInRulesLexer.prototype.constructor = targetLanguageInRulesLexer;

Object.defineProperty(targetLanguageInRulesLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

targetLanguageInRulesLexer.EOF = antlr4.Token.EOF;
targetLanguageInRulesLexer.DEFINE = 1;
targetLanguageInRulesLexer.IDENTIFIER = 2;
targetLanguageInRulesLexer.NUMBER = 3;
targetLanguageInRulesLexer.EQ = 4;
targetLanguageInRulesLexer.SEMICOLON = 5;
targetLanguageInRulesLexer.WHITESPACE = 6;

targetLanguageInRulesLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

targetLanguageInRulesLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

targetLanguageInRulesLexer.prototype.literalNames = [ null, "'define'", 
                                                      null, null, "'='", 
                                                      "';'" ];

targetLanguageInRulesLexer.prototype.symbolicNames = [ null, "DEFINE", "IDENTIFIER", 
                                                       "NUMBER", "EQ", "SEMICOLON", 
                                                       "WHITESPACE" ];

targetLanguageInRulesLexer.prototype.ruleNames = [ "DEFINE", "IDENTIFIER", 
                                                   "NUMBER", "EQ", "SEMICOLON", 
                                                   "WHITESPACE" ];

targetLanguageInRulesLexer.prototype.grammarFileName = "targetLanguageInRules.g4";


exports.targetLanguageInRulesLexer = targetLanguageInRulesLexer;

