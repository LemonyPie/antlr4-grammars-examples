// Generated from /Users/artemee/WebstormProjects/antlr4-error-handling/lexer-rules/rules.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var rulesListener = require('./rulesListener').rulesListener;
var rulesVisitor = require('./rulesVisitor').rulesVisitor;

var grammarFileName = "rules.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0007\f\u0004\u0002\t\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0006\u0002\b\n\u0002\r\u0002\u000e\u0002\t\u0003\u0002\u0002\u0002",
    "\u0003\u0002\u0002\u0003\u0003\u0002\u0006\u0007\u0002\u000b\u0002\u0004",
    "\u0003\u0002\u0002\u0002\u0004\u0007\u0007\u0005\u0002\u0002\u0005\u0006",
    "\t\u0002\u0002\u0002\u0006\b\u0007\u0005\u0002\u0002\u0007\u0005\u0003",
    "\u0002\u0002\u0002\b\t\u0003\u0002\u0002\u0002\t\u0007\u0003\u0002\u0002",
    "\u0002\t\n\u0003\u0002\u0002\u0002\n\u0003\u0003\u0002\u0002\u0002\u0003",
    "\t"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "' '" ];

var symbolicNames = [ null, "WHITESPACE", "COMMENT", "NUMBER", "OPERATION", 
                      "POWER" ];

var ruleNames =  [ "parse" ];

function rulesParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

rulesParser.prototype = Object.create(antlr4.Parser.prototype);
rulesParser.prototype.constructor = rulesParser;

Object.defineProperty(rulesParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

rulesParser.EOF = antlr4.Token.EOF;
rulesParser.WHITESPACE = 1;
rulesParser.COMMENT = 2;
rulesParser.NUMBER = 3;
rulesParser.OPERATION = 4;
rulesParser.POWER = 5;

rulesParser.RULE_parse = 0;


function ParseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rulesParser.RULE_parse;
    return this;
}

ParseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParseContext.prototype.constructor = ParseContext;

ParseContext.prototype.NUMBER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(rulesParser.NUMBER);
    } else {
        return this.getToken(rulesParser.NUMBER, i);
    }
};


ParseContext.prototype.OPERATION = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(rulesParser.OPERATION);
    } else {
        return this.getToken(rulesParser.OPERATION, i);
    }
};


ParseContext.prototype.POWER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(rulesParser.POWER);
    } else {
        return this.getToken(rulesParser.POWER, i);
    }
};


ParseContext.prototype.enterRule = function(listener) {
    if(listener instanceof rulesListener ) {
        listener.enterParse(this);
	}
};

ParseContext.prototype.exitRule = function(listener) {
    if(listener instanceof rulesListener ) {
        listener.exitParse(this);
	}
};

ParseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rulesVisitor ) {
        return visitor.visitParse(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rulesParser.ParseContext = ParseContext;

rulesParser.prototype.parse = function() {

    var localctx = new ParseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, rulesParser.RULE_parse);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 2;
        this.match(rulesParser.NUMBER);
        this.state = 5; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 3;
            _la = this._input.LA(1);
            if(!(_la===rulesParser.OPERATION || _la===rulesParser.POWER)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 4;
            this.match(rulesParser.NUMBER);
            this.state = 7; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===rulesParser.OPERATION || _la===rulesParser.POWER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.rulesParser = rulesParser;
