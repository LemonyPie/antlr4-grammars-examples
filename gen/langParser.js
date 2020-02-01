// Generated from /Users/artemee/WebstormProjects/antlr4-error-handling/lang.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var langListener = require('./langListener').langListener;
var langVisitor = require('./langVisitor').langVisitor;

var grammarFileName = "lang.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\t\u001a\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0003\u0002\u0006\u0002\n\n\u0002\r\u0002\u000e\u0002\u000b\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0006\u0003\u0012\n\u0003",
    "\r\u0003\u000e\u0003\u0013\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0002\u0002\u0005\u0002\u0004\u0006\u0002\u0002\u0002",
    "\u0018\u0002\t\u0003\u0002\u0002\u0002\u0004\u000f\u0003\u0002\u0002",
    "\u0002\u0006\u0017\u0003\u0002\u0002\u0002\b\n\u0005\u0004\u0003\u0002",
    "\t\b\u0003\u0002\u0002\u0002\n\u000b\u0003\u0002\u0002\u0002\u000b\t",
    "\u0003\u0002\u0002\u0002\u000b\f\u0003\u0002\u0002\u0002\f\r\u0003\u0002",
    "\u0002\u0002\r\u000e\u0007\u0002\u0002\u0003\u000e\u0003\u0003\u0002",
    "\u0002\u0002\u000f\u0011\u0007\u0005\u0002\u0002\u0010\u0012\u0005\u0006",
    "\u0004\u0002\u0011\u0010\u0003\u0002\u0002\u0002\u0012\u0013\u0003\u0002",
    "\u0002\u0002\u0013\u0011\u0003\u0002\u0002\u0002\u0013\u0014\u0003\u0002",
    "\u0002\u0002\u0014\u0015\u0003\u0002\u0002\u0002\u0015\u0016\u0007\u0006",
    "\u0002\u0002\u0016\u0005\u0003\u0002\u0002\u0002\u0017\u0018\u0007\u0004",
    "\u0002\u0002\u0018\u0007\u0003\u0002\u0002\u0002\u0004\u000b\u0013"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "' '", null, "'('", "')'", "'''", "'\"'" ];

var symbolicNames = [ null, "WHITESPACE", "STRING_LITERAL", "OPEN_PARENTHESIS", 
                      "CLOSE_PARENTHESIS", "SINGLE_QUOTE", "DOUBLE_QUOTE", 
                      "IDENTIFIER" ];

var ruleNames =  [ "parse", "expr", "literal_value" ];

function langParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

langParser.prototype = Object.create(antlr4.Parser.prototype);
langParser.prototype.constructor = langParser;

Object.defineProperty(langParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

langParser.EOF = antlr4.Token.EOF;
langParser.WHITESPACE = 1;
langParser.STRING_LITERAL = 2;
langParser.OPEN_PARENTHESIS = 3;
langParser.CLOSE_PARENTHESIS = 4;
langParser.SINGLE_QUOTE = 5;
langParser.DOUBLE_QUOTE = 6;
langParser.IDENTIFIER = 7;

langParser.RULE_parse = 0;
langParser.RULE_expr = 1;
langParser.RULE_literal_value = 2;


function ParseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = langParser.RULE_parse;
    return this;
}

ParseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParseContext.prototype.constructor = ParseContext;

ParseContext.prototype.EOF = function() {
    return this.getToken(langParser.EOF, 0);
};

ParseContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ParseContext.prototype.enterRule = function(listener) {
    if(listener instanceof langListener ) {
        listener.enterParse(this);
	}
};

ParseContext.prototype.exitRule = function(listener) {
    if(listener instanceof langListener ) {
        listener.exitParse(this);
	}
};

ParseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof langVisitor ) {
        return visitor.visitParse(this);
    } else {
        return visitor.visitChildren(this);
    }
};




langParser.ParseContext = ParseContext;

langParser.prototype.parse = function() {

    var localctx = new ParseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, langParser.RULE_parse);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 7; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 6;
            this.expr();
            this.state = 9; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===langParser.OPEN_PARENTHESIS);
        this.state = 11;
        this.match(langParser.EOF);
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


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = langParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.OPEN_PARENTHESIS = function() {
    return this.getToken(langParser.OPEN_PARENTHESIS, 0);
};

ExprContext.prototype.CLOSE_PARENTHESIS = function() {
    return this.getToken(langParser.CLOSE_PARENTHESIS, 0);
};

ExprContext.prototype.literal_value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Literal_valueContext);
    } else {
        return this.getTypedRuleContext(Literal_valueContext,i);
    }
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof langListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof langListener ) {
        listener.exitExpr(this);
	}
};

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof langVisitor ) {
        return visitor.visitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




langParser.ExprContext = ExprContext;

langParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, langParser.RULE_expr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 13;
        this.match(langParser.OPEN_PARENTHESIS);
        this.state = 15; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 14;
            this.literal_value();
            this.state = 17; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===langParser.STRING_LITERAL);
        this.state = 19;
        this.match(langParser.CLOSE_PARENTHESIS);
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


function Literal_valueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = langParser.RULE_literal_value;
    return this;
}

Literal_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Literal_valueContext.prototype.constructor = Literal_valueContext;

Literal_valueContext.prototype.STRING_LITERAL = function() {
    return this.getToken(langParser.STRING_LITERAL, 0);
};

Literal_valueContext.prototype.enterRule = function(listener) {
    if(listener instanceof langListener ) {
        listener.enterLiteral_value(this);
	}
};

Literal_valueContext.prototype.exitRule = function(listener) {
    if(listener instanceof langListener ) {
        listener.exitLiteral_value(this);
	}
};

Literal_valueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof langVisitor ) {
        return visitor.visitLiteral_value(this);
    } else {
        return visitor.visitChildren(this);
    }
};




langParser.Literal_valueContext = Literal_valueContext;

langParser.prototype.literal_value = function() {

    var localctx = new Literal_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, langParser.RULE_literal_value);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 21;
        this.match(langParser.STRING_LITERAL);
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


exports.langParser = langParser;
