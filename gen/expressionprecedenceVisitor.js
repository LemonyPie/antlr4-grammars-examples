// Generated from /Users/artemee/WebstormProjects/antlr4-error-handling/expressionprecedence.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by expressionprecedenceParser.

function expressionprecedenceVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

expressionprecedenceVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
expressionprecedenceVisitor.prototype.constructor = expressionprecedenceVisitor;

// Visit a parse tree produced by expressionprecedenceParser#parse.
expressionprecedenceVisitor.prototype.visitParse = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expressionprecedenceParser#or_expr.
expressionprecedenceVisitor.prototype.visitOr_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expressionprecedenceParser#and_expr.
expressionprecedenceVisitor.prototype.visitAnd_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expressionprecedenceParser#expr.
expressionprecedenceVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};



exports.expressionprecedenceVisitor = expressionprecedenceVisitor;