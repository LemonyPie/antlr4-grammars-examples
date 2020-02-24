// Generated from /Users/artemee/WebstormProjects/antlr4-error-handling/lang.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var langListener = require('./langListener').langListener;
var langVisitor = require('./langVisitor').langVisitor;

var grammarFileName = "lang.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\n)\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0003\u0002\u0006\u0002\f\n\u0002\r\u0002\u000e",
    "\u0002\r\u0003\u0003\u0003\u0003\u0006\u0003\u0012\n\u0003\r\u0003\u000e",
    "\u0003\u0013\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0006\u0003",
    "\u001a\n\u0003\r\u0003\u000e\u0003\u001b\u0003\u0003\u0003\u0003\u0005",
    "\u0003 \n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004%\n\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0002\u0002\u0006\u0002\u0004\u0006",
    "\b\u0002\u0002\u0002)\u0002\u000b\u0003\u0002\u0002\u0002\u0004\u001f",
    "\u0003\u0002\u0002\u0002\u0006$\u0003\u0002\u0002\u0002\b&\u0003\u0002",
    "\u0002\u0002\n\f\u0005\u0004\u0003\u0002\u000b\n\u0003\u0002\u0002\u0002",
    "\f\r\u0003\u0002\u0002\u0002\r\u000b\u0003\u0002\u0002\u0002\r\u000e",
    "\u0003\u0002\u0002\u0002\u000e\u0003\u0003\u0002\u0002\u0002\u000f\u0011",
    "\u0007\u0006\u0002\u0002\u0010\u0012\u0005\u0006\u0004\u0002\u0011\u0010",
    "\u0003\u0002\u0002\u0002\u0012\u0013\u0003\u0002\u0002\u0002\u0013\u0011",
    "\u0003\u0002\u0002\u0002\u0013\u0014\u0003\u0002\u0002\u0002\u0014\u0015",
    "\u0003\u0002\u0002\u0002\u0015\u0016\u0007\u0007\u0002\u0002\u0016 ",
    "\u0003\u0002\u0002\u0002\u0017\u0019\u0007\u0006\u0002\u0002\u0018\u001a",
    "\u0005\u0006\u0004\u0002\u0019\u0018\u0003\u0002\u0002\u0002\u001a\u001b",
    "\u0003\u0002\u0002\u0002\u001b\u0019\u0003\u0002\u0002\u0002\u001b\u001c",
    "\u0003\u0002\u0002\u0002\u001c\u001d\u0003\u0002\u0002\u0002\u001d\u001e",
    "\b\u0003\u0001\u0002\u001e \u0003\u0002\u0002\u0002\u001f\u000f\u0003",
    "\u0002\u0002\u0002\u001f\u0017\u0003\u0002\u0002\u0002 \u0005\u0003",
    "\u0002\u0002\u0002!\"\u0006\u0004\u0002\u0002\"%\u0005\b\u0005\u0002",
    "#%\u0007\u0005\u0002\u0002$!\u0003\u0002\u0002\u0002$#\u0003\u0002\u0002",
    "\u0002%\u0007\u0003\u0002\u0002\u0002&\'\u0007\u0003\u0002\u0002\'\t",
    "\u0003\u0002\u0002\u0002\u0007\r\u0013\u001b\u001f$"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'async'", "' '", null, "'('", "')'", "'''", 
                     "'\"'" ];

var symbolicNames = [ null, "ASYNC", "WHITESPACE", "STRING_LITERAL", "OPEN_PARENTHESIS", 
                      "CLOSE_PARENTHESIS", "SINGLE_QUOTE", "DOUBLE_QUOTE", 
                      "IDENTIFIER" ];

var ruleNames =  [ "parse", "expr", "literal_value", "operation_type" ];

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
langParser.ASYNC = 1;
langParser.WHITESPACE = 2;
langParser.STRING_LITERAL = 3;
langParser.OPEN_PARENTHESIS = 4;
langParser.CLOSE_PARENTHESIS = 5;
langParser.SINGLE_QUOTE = 6;
langParser.DOUBLE_QUOTE = 7;
langParser.IDENTIFIER = 8;

langParser.RULE_parse = 0;
langParser.RULE_expr = 1;
langParser.RULE_literal_value = 2;
langParser.RULE_operation_type = 3;


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
        this.state = 9; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 8;
            this.expr();
            this.state = 11; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===langParser.OPEN_PARENTHESIS);
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
    try {
        this.state = 29;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 13;
            this.match(langParser.OPEN_PARENTHESIS);
            this.state = 15; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 14;
            		this.literal_value();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 17; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 19;
            this.match(langParser.CLOSE_PARENTHESIS);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 21;
            this.match(langParser.OPEN_PARENTHESIS);
            this.state = 23; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 22;
            		this.literal_value();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 25; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.logError("Missing closing ')'");
            break;

        }
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

Literal_valueContext.prototype.operation_type = function() {
    return this.getTypedRuleContext(Operation_typeContext,0);
};

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
        this.state = 34;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 31;
            if (!( _input.LT(1).GetText() === 'async' )) {
                throw new antlr4.error.FailedPredicateException(this, "_input.LT(1).GetText() === 'async' ");
            }
            this.state = 32;
            this.operation_type();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 33;
            this.match(langParser.STRING_LITERAL);
            break;

        }
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


function Operation_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = langParser.RULE_operation_type;
    return this;
}

Operation_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Operation_typeContext.prototype.constructor = Operation_typeContext;

Operation_typeContext.prototype.ASYNC = function() {
    return this.getToken(langParser.ASYNC, 0);
};

Operation_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof langListener ) {
        listener.enterOperation_type(this);
	}
};

Operation_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof langListener ) {
        listener.exitOperation_type(this);
	}
};

Operation_typeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof langVisitor ) {
        return visitor.visitOperation_type(this);
    } else {
        return visitor.visitChildren(this);
    }
};




langParser.Operation_typeContext = Operation_typeContext;

langParser.prototype.operation_type = function() {

    var localctx = new Operation_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, langParser.RULE_operation_type);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 36;
        this.match(langParser.ASYNC);
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


langParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 2:
			return this.literal_value_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

langParser.prototype.literal_value_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return _input.LT(1).GetText() === 'async' ;
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.langParser = langParser;
