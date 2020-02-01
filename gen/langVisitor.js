// Generated from /Users/artemee/WebstormProjects/antlr4-error-handling/lang.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by langParser.

function langVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

langVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
langVisitor.prototype.constructor = langVisitor;

// Visit a parse tree produced by langParser#parse.
langVisitor.prototype.visitParse = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by langParser#expr.
langVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by langParser#literal_value.
langVisitor.prototype.visitLiteral_value = function(ctx) {
  return this.visitChildren(ctx);
};



exports.langVisitor = langVisitor;