// Generated from /Users/artemee/WebstormProjects/antlr4-error-handling/lang.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by langParser.
function langListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

langListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
langListener.prototype.constructor = langListener;

// Enter a parse tree produced by langParser#parse.
langListener.prototype.enterParse = function(ctx) {
};

// Exit a parse tree produced by langParser#parse.
langListener.prototype.exitParse = function(ctx) {
};


// Enter a parse tree produced by langParser#expr.
langListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by langParser#expr.
langListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by langParser#literal_value.
langListener.prototype.enterLiteral_value = function(ctx) {
};

// Exit a parse tree produced by langParser#literal_value.
langListener.prototype.exitLiteral_value = function(ctx) {
};


// Enter a parse tree produced by langParser#operation_type.
langListener.prototype.enterOperation_type = function(ctx) {
};

// Exit a parse tree produced by langParser#operation_type.
langListener.prototype.exitOperation_type = function(ctx) {
};



exports.langListener = langListener;