// Generated from /Users/artemee/WebstormProjects/antlr4-error-handling/expressionprecedence.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var expressionprecedenceListener = require('./expressionprecedenceListener').expressionprecedenceListener;
var expressionprecedenceVisitor = require('./expressionprecedenceVisitor').expressionprecedenceVisitor;

var grammarFileName = "expressionprecedence.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\b0\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0003\u0002\u0006\u0002\f\n\u0002\r\u0002\u000e",
    "\u0002\r\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0007\u0003\u0015\n\u0003\f\u0003\u000e\u0003\u0018\u000b\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0007\u0004\u001d\n\u0004\f\u0004\u000e",
    "\u0004 \u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0005\u0005&\n\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005",
    "+\n\u0005\f\u0005\u000e\u0005.\u000b\u0005\u0003\u0005\u0002\u0003\b",
    "\u0006\u0002\u0004\u0006\b\u0002\u0002\u00020\u0002\u000b\u0003\u0002",
    "\u0002\u0002\u0004\u0011\u0003\u0002\u0002\u0002\u0006\u0019\u0003\u0002",
    "\u0002\u0002\b%\u0003\u0002\u0002\u0002\n\f\u0005\u0004\u0003\u0002",
    "\u000b\n\u0003\u0002\u0002\u0002\f\r\u0003\u0002\u0002\u0002\r\u000b",
    "\u0003\u0002\u0002\u0002\r\u000e\u0003\u0002\u0002\u0002\u000e\u000f",
    "\u0003\u0002\u0002\u0002\u000f\u0010\u0007\u0002\u0002\u0003\u0010\u0003",
    "\u0003\u0002\u0002\u0002\u0011\u0016\u0005\u0006\u0004\u0002\u0012\u0013",
    "\u0007\u0006\u0002\u0002\u0013\u0015\u0005\u0006\u0004\u0002\u0014\u0012",
    "\u0003\u0002\u0002\u0002\u0015\u0018\u0003\u0002\u0002\u0002\u0016\u0014",
    "\u0003\u0002\u0002\u0002\u0016\u0017\u0003\u0002\u0002\u0002\u0017\u0005",
    "\u0003\u0002\u0002\u0002\u0018\u0016\u0003\u0002\u0002\u0002\u0019\u001e",
    "\u0005\b\u0005\u0002\u001a\u001b\u0007\u0005\u0002\u0002\u001b\u001d",
    "\u0005\b\u0005\u0002\u001c\u001a\u0003\u0002\u0002\u0002\u001d \u0003",
    "\u0002\u0002\u0002\u001e\u001c\u0003\u0002\u0002\u0002\u001e\u001f\u0003",
    "\u0002\u0002\u0002\u001f\u0007\u0003\u0002\u0002\u0002 \u001e\u0003",
    "\u0002\u0002\u0002!\"\b\u0005\u0001\u0002\"#\u0007\u0007\u0002\u0002",
    "#&\b\u0005\u0001\u0002$&\u0007\b\u0002\u0002%!\u0003\u0002\u0002\u0002",
    "%$\u0003\u0002\u0002\u0002&,\u0003\u0002\u0002\u0002\'(\f\u0005\u0002",
    "\u0002()\u0007\u0004\u0002\u0002)+\u0005\b\u0005\u0005*\'\u0003\u0002",
    "\u0002\u0002+.\u0003\u0002\u0002\u0002,*\u0003\u0002\u0002\u0002,-\u0003",
    "\u0002\u0002\u0002-\t\u0003\u0002\u0002\u0002.,\u0003\u0002\u0002\u0002",
    "\u0007\r\u0016\u001e%,"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "' '", "'^'" ];

var symbolicNames = [ null, "WHITESPACE", "POWER", "AND", "OR", "NUMBER", 
                      "LITERAL" ];

var ruleNames =  [ "parse", "or_expr", "and_expr", "expr" ];

function expressionprecedenceParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;

	    function log(a) {
	        console.log(a);
	    }

    return this;
}

expressionprecedenceParser.prototype = Object.create(antlr4.Parser.prototype);
expressionprecedenceParser.prototype.constructor = expressionprecedenceParser;

Object.defineProperty(expressionprecedenceParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

expressionprecedenceParser.EOF = antlr4.Token.EOF;
expressionprecedenceParser.WHITESPACE = 1;
expressionprecedenceParser.POWER = 2;
expressionprecedenceParser.AND = 3;
expressionprecedenceParser.OR = 4;
expressionprecedenceParser.NUMBER = 5;
expressionprecedenceParser.LITERAL = 6;

expressionprecedenceParser.RULE_parse = 0;
expressionprecedenceParser.RULE_or_expr = 1;
expressionprecedenceParser.RULE_and_expr = 2;
expressionprecedenceParser.RULE_expr = 3;


function ParseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expressionprecedenceParser.RULE_parse;
    return this;
}

ParseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParseContext.prototype.constructor = ParseContext;

ParseContext.prototype.EOF = function() {
    return this.getToken(expressionprecedenceParser.EOF, 0);
};

ParseContext.prototype.or_expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Or_exprContext);
    } else {
        return this.getTypedRuleContext(Or_exprContext,i);
    }
};

ParseContext.prototype.enterRule = function(listener) {
    if(listener instanceof expressionprecedenceListener ) {
        listener.enterParse(this);
	}
};

ParseContext.prototype.exitRule = function(listener) {
    if(listener instanceof expressionprecedenceListener ) {
        listener.exitParse(this);
	}
};

ParseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expressionprecedenceVisitor ) {
        return visitor.visitParse(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expressionprecedenceParser.ParseContext = ParseContext;

expressionprecedenceParser.prototype.parse = function() {

    var localctx = new ParseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, expressionprecedenceParser.RULE_parse);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 9; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 8;
            this.or_expr();
            this.state = 11; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===expressionprecedenceParser.NUMBER || _la===expressionprecedenceParser.LITERAL);
        this.state = 13;
        this.match(expressionprecedenceParser.EOF);
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


function Or_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expressionprecedenceParser.RULE_or_expr;
    return this;
}

Or_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Or_exprContext.prototype.constructor = Or_exprContext;

Or_exprContext.prototype.and_expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(And_exprContext);
    } else {
        return this.getTypedRuleContext(And_exprContext,i);
    }
};

Or_exprContext.prototype.OR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(expressionprecedenceParser.OR);
    } else {
        return this.getToken(expressionprecedenceParser.OR, i);
    }
};


Or_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof expressionprecedenceListener ) {
        listener.enterOr_expr(this);
	}
};

Or_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof expressionprecedenceListener ) {
        listener.exitOr_expr(this);
	}
};

Or_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expressionprecedenceVisitor ) {
        return visitor.visitOr_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expressionprecedenceParser.Or_exprContext = Or_exprContext;

expressionprecedenceParser.prototype.or_expr = function() {

    var localctx = new Or_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, expressionprecedenceParser.RULE_or_expr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 15;
        this.and_expr();
        this.state = 20;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===expressionprecedenceParser.OR) {
            this.state = 16;
            this.match(expressionprecedenceParser.OR);
            this.state = 17;
            this.and_expr();
            this.state = 22;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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


function And_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expressionprecedenceParser.RULE_and_expr;
    return this;
}

And_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
And_exprContext.prototype.constructor = And_exprContext;

And_exprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

And_exprContext.prototype.AND = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(expressionprecedenceParser.AND);
    } else {
        return this.getToken(expressionprecedenceParser.AND, i);
    }
};


And_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof expressionprecedenceListener ) {
        listener.enterAnd_expr(this);
	}
};

And_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof expressionprecedenceListener ) {
        listener.exitAnd_expr(this);
	}
};

And_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expressionprecedenceVisitor ) {
        return visitor.visitAnd_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expressionprecedenceParser.And_exprContext = And_exprContext;

expressionprecedenceParser.prototype.and_expr = function() {

    var localctx = new And_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, expressionprecedenceParser.RULE_and_expr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 23;
        this.expr(0);
        this.state = 28;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===expressionprecedenceParser.AND) {
            this.state = 24;
            this.match(expressionprecedenceParser.AND);
            this.state = 25;
            this.expr(0);
            this.state = 30;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expressionprecedenceParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.NUMBER = function() {
    return this.getToken(expressionprecedenceParser.NUMBER, 0);
};

ExprContext.prototype.LITERAL = function() {
    return this.getToken(expressionprecedenceParser.LITERAL, 0);
};

ExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprContext.prototype.POWER = function() {
    return this.getToken(expressionprecedenceParser.POWER, 0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof expressionprecedenceListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof expressionprecedenceListener ) {
        listener.exitExpr(this);
	}
};

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expressionprecedenceVisitor ) {
        return visitor.visitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



expressionprecedenceParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 6;
    this.enterRecursionRule(localctx, 6, expressionprecedenceParser.RULE_expr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 35;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case expressionprecedenceParser.NUMBER:
            this.state = 32;
            this.match(expressionprecedenceParser.NUMBER);
             log(_input.LT(1).GetText())
            break;
        case expressionprecedenceParser.LITERAL:
            this.state = 34;
            this.match(expressionprecedenceParser.LITERAL);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 42;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ExprContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, expressionprecedenceParser.RULE_expr);
                this.state = 37;
                if (!( this.precpred(this._ctx, 3))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                }
                this.state = 38;
                this.match(expressionprecedenceParser.POWER);
                this.state = 39;
                this.expr(3); 
            }
            this.state = 44;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


expressionprecedenceParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 3:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

expressionprecedenceParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.expressionprecedenceParser = expressionprecedenceParser;
