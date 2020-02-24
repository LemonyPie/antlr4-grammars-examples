// Generated from /Users/artemee/WebstormProjects/antlr4-error-handling/expressionprecedence.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by expressionprecedenceParser.
function expressionprecedenceListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

expressionprecedenceListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
expressionprecedenceListener.prototype.constructor = expressionprecedenceListener;

// Enter a parse tree produced by expressionprecedenceParser#parse.
expressionprecedenceListener.prototype.enterParse = function(ctx) {
};

// Exit a parse tree produced by expressionprecedenceParser#parse.
expressionprecedenceListener.prototype.exitParse = function(ctx) {
};


// Enter a parse tree produced by expressionprecedenceParser#or_expr.
expressionprecedenceListener.prototype.enterOr_expr = function(ctx) {
};

// Exit a parse tree produced by expressionprecedenceParser#or_expr.
expressionprecedenceListener.prototype.exitOr_expr = function(ctx) {
};


// Enter a parse tree produced by expressionprecedenceParser#and_expr.
expressionprecedenceListener.prototype.enterAnd_expr = function(ctx) {
};

// Exit a parse tree produced by expressionprecedenceParser#and_expr.
expressionprecedenceListener.prototype.exitAnd_expr = function(ctx) {
};


// Enter a parse tree produced by expressionprecedenceParser#expr.
expressionprecedenceListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by expressionprecedenceParser#expr.
expressionprecedenceListener.prototype.exitExpr = function(ctx) {
};



exports.expressionprecedenceListener = expressionprecedenceListener;