// Generated from /Users/artemee/WebstormProjects/antlr4-error-handling/lang.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0007\"\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0005\u0005\u001e\n\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0002\u0002\u0007\u0003\u0003\u0005\u0004\u0007",
    "\u0005\t\u0006\u000b\u0007\u0003\u0002\u0004\u0004\u0002C\\c|\u0005",
    "\u00022;C\\c|\u0002\"\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005",
    "\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t",
    "\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0003\r",
    "\u0003\u0002\u0002\u0002\u0005\u000f\u0003\u0002\u0002\u0002\u0007\u0011",
    "\u0003\u0002\u0002\u0002\t\u001d\u0003\u0002\u0002\u0002\u000b\u001f",
    "\u0003\u0002\u0002\u0002\r\u000e\u0007*\u0002\u0002\u000e\u0004\u0003",
    "\u0002\u0002\u0002\u000f\u0010\u0007+\u0002\u0002\u0010\u0006\u0003",
    "\u0002\u0002\u0002\u0011\u0012\u0007\"\u0002\u0002\u0012\u0013\u0003",
    "\u0002\u0002\u0002\u0013\u0014\b\u0004\u0002\u0002\u0014\b\u0003\u0002",
    "\u0002\u0002\u0015\u0016\u0007)\u0002\u0002\u0016\u0017\u0005\u000b",
    "\u0006\u0002\u0017\u0018\u0007)\u0002\u0002\u0018\u001e\u0003\u0002",
    "\u0002\u0002\u0019\u001a\u0007$\u0002\u0002\u001a\u001b\u0005\u000b",
    "\u0006\u0002\u001b\u001c\u0007$\u0002\u0002\u001c\u001e\u0003\u0002",
    "\u0002\u0002\u001d\u0015\u0003\u0002\u0002\u0002\u001d\u0019\u0003\u0002",
    "\u0002\u0002\u001e\n\u0003\u0002\u0002\u0002\u001f \t\u0002\u0002\u0002",
    " !\t\u0003\u0002\u0002!\f\u0003\u0002\u0002\u0002\u0004\u0002\u001d",
    "\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function langLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

langLexer.prototype = Object.create(antlr4.Lexer.prototype);
langLexer.prototype.constructor = langLexer;

Object.defineProperty(langLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

langLexer.EOF = antlr4.Token.EOF;
langLexer.T__0 = 1;
langLexer.T__1 = 2;
langLexer.WHITESPACE = 3;
langLexer.STRING_LITERAL = 4;
langLexer.IDENTIFIER = 5;

langLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

langLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

langLexer.prototype.literalNames = [ null, "'('", "')'", "' '" ];

langLexer.prototype.symbolicNames = [ null, null, null, "WHITESPACE", "STRING_LITERAL", 
                                      "IDENTIFIER" ];

langLexer.prototype.ruleNames = [ "T__0", "T__1", "WHITESPACE", "STRING_LITERAL", 
                                  "IDENTIFIER" ];

langLexer.prototype.grammarFileName = "lang.g4";



exports.langLexer = langLexer;

