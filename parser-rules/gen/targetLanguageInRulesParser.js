// Generated from /Users/artemee/WebstormProjects/antlr4-error-handling/parser-rules/targetLanguageInRules.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var targetLanguageInRulesListener = require('./targetLanguageInRulesListener').targetLanguageInRulesListener;
var targetLanguageInRulesVisitor = require('./targetLanguageInRulesVisitor').targetLanguageInRulesVisitor;

var grammarFileName = "targetLanguageInRules.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\b\u0018\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0003\u0002\u0006\u0002\n\n\u0002\r\u0002\u000e\u0002\u000b\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0002\u0002\u0005",
    "\u0002\u0004\u0006\u0002\u0003\u0003\u0002\u0003\u0004\u0002\u0015\u0002",
    "\t\u0003\u0002\u0002\u0002\u0004\u000f\u0003\u0002\u0002\u0002\u0006",
    "\u0014\u0003\u0002\u0002\u0002\b\n\u0005\u0004\u0003\u0002\t\b\u0003",
    "\u0002\u0002\u0002\n\u000b\u0003\u0002\u0002\u0002\u000b\t\u0003\u0002",
    "\u0002\u0002\u000b\f\u0003\u0002\u0002\u0002\f\r\u0003\u0002\u0002\u0002",
    "\r\u000e\u0007\u0002\u0002\u0003\u000e\u0003\u0003\u0002\u0002\u0002",
    "\u000f\u0010\u0005\u0006\u0004\u0002\u0010\u0011\u0007\u0006\u0002\u0002",
    "\u0011\u0012\u0007\u0005\u0002\u0002\u0012\u0013\u0007\u0007\u0002\u0002",
    "\u0013\u0005\u0003\u0002\u0002\u0002\u0014\u0015\u0007\u0003\u0002\u0002",
    "\u0015\u0016\t\u0002\u0002\u0002\u0016\u0007\u0003\u0002\u0002\u0002",
    "\u0003\u000b"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'define'", null, null, "'='", "';'" ];

var symbolicNames = [ null, "DEFINE", "IDENTIFIER", "NUMBER", "EQ", "SEMICOLON", 
                      "WHITESPACE" ];

var ruleNames =  [ "parse", "declaration", "define" ];

function targetLanguageInRulesParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;

	    notify = (x) => this.notifyErrorListeners(x);

    return this;
}

targetLanguageInRulesParser.prototype = Object.create(antlr4.Parser.prototype);
targetLanguageInRulesParser.prototype.constructor = targetLanguageInRulesParser;

Object.defineProperty(targetLanguageInRulesParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

targetLanguageInRulesParser.EOF = antlr4.Token.EOF;
targetLanguageInRulesParser.DEFINE = 1;
targetLanguageInRulesParser.IDENTIFIER = 2;
targetLanguageInRulesParser.NUMBER = 3;
targetLanguageInRulesParser.EQ = 4;
targetLanguageInRulesParser.SEMICOLON = 5;
targetLanguageInRulesParser.WHITESPACE = 6;

targetLanguageInRulesParser.RULE_parse = 0;
targetLanguageInRulesParser.RULE_declaration = 1;
targetLanguageInRulesParser.RULE_define = 2;


function ParseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = targetLanguageInRulesParser.RULE_parse;
    return this;
}

ParseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParseContext.prototype.constructor = ParseContext;

ParseContext.prototype.EOF = function() {
    return this.getToken(targetLanguageInRulesParser.EOF, 0);
};

ParseContext.prototype.declaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DeclarationContext);
    } else {
        return this.getTypedRuleContext(DeclarationContext,i);
    }
};

ParseContext.prototype.enterRule = function(listener) {
    if(listener instanceof targetLanguageInRulesListener ) {
        listener.enterParse(this);
	}
};

ParseContext.prototype.exitRule = function(listener) {
    if(listener instanceof targetLanguageInRulesListener ) {
        listener.exitParse(this);
	}
};

ParseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof targetLanguageInRulesVisitor ) {
        return visitor.visitParse(this);
    } else {
        return visitor.visitChildren(this);
    }
};




targetLanguageInRulesParser.ParseContext = ParseContext;

targetLanguageInRulesParser.prototype.parse = function() {

    var localctx = new ParseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, targetLanguageInRulesParser.RULE_parse);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 7; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 6;
            this.declaration();
            this.state = 9; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===targetLanguageInRulesParser.DEFINE);
        this.state = 11;
        this.match(targetLanguageInRulesParser.EOF);
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


function DeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = targetLanguageInRulesParser.RULE_declaration;
    return this;
}

DeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclarationContext.prototype.constructor = DeclarationContext;

DeclarationContext.prototype.define = function() {
    return this.getTypedRuleContext(DefineContext,0);
};

DeclarationContext.prototype.EQ = function() {
    return this.getToken(targetLanguageInRulesParser.EQ, 0);
};

DeclarationContext.prototype.NUMBER = function() {
    return this.getToken(targetLanguageInRulesParser.NUMBER, 0);
};

DeclarationContext.prototype.SEMICOLON = function() {
    return this.getToken(targetLanguageInRulesParser.SEMICOLON, 0);
};

DeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof targetLanguageInRulesListener ) {
        listener.enterDeclaration(this);
	}
};

DeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof targetLanguageInRulesListener ) {
        listener.exitDeclaration(this);
	}
};

DeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof targetLanguageInRulesVisitor ) {
        return visitor.visitDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




targetLanguageInRulesParser.DeclarationContext = DeclarationContext;

targetLanguageInRulesParser.prototype.declaration = function() {

    var localctx = new DeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, targetLanguageInRulesParser.RULE_declaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 13;
        this.define();
        this.state = 14;
        this.match(targetLanguageInRulesParser.EQ);
        this.state = 15;
        this.match(targetLanguageInRulesParser.NUMBER);
        this.state = 16;
        this.match(targetLanguageInRulesParser.SEMICOLON);
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


function DefineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = targetLanguageInRulesParser.RULE_define;
    return this;
}

DefineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DefineContext.prototype.constructor = DefineContext;

DefineContext.prototype.DEFINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(targetLanguageInRulesParser.DEFINE);
    } else {
        return this.getToken(targetLanguageInRulesParser.DEFINE, i);
    }
};


DefineContext.prototype.IDENTIFIER = function() {
    return this.getToken(targetLanguageInRulesParser.IDENTIFIER, 0);
};

DefineContext.prototype.enterRule = function(listener) {
    if(listener instanceof targetLanguageInRulesListener ) {
        listener.enterDefine(this);
	}
};

DefineContext.prototype.exitRule = function(listener) {
    if(listener instanceof targetLanguageInRulesListener ) {
        listener.exitDefine(this);
	}
};

DefineContext.prototype.accept = function(visitor) {
    if ( visitor instanceof targetLanguageInRulesVisitor ) {
        return visitor.visitDefine(this);
    } else {
        return visitor.visitChildren(this);
    }
};




targetLanguageInRulesParser.DefineContext = DefineContext;

targetLanguageInRulesParser.prototype.define = function() {

    var localctx = new DefineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, targetLanguageInRulesParser.RULE_define);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 18;
        this.match(targetLanguageInRulesParser.DEFINE);
        this.state = 19;
        _la = this._input.LA(1);
        if(!(_la===targetLanguageInRulesParser.DEFINE || _la===targetLanguageInRulesParser.IDENTIFIER)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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


exports.targetLanguageInRulesParser = targetLanguageInRulesParser;
