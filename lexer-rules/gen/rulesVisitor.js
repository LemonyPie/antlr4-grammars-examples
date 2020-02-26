// Generated from /Users/artemee/WebstormProjects/antlr4-error-handling/lexer-rules/rules.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by rulesParser.

function rulesVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

rulesVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
rulesVisitor.prototype.constructor = rulesVisitor;

// Visit a parse tree produced by rulesParser#parse.
rulesVisitor.prototype.visitParse = function(ctx) {
  return this.visitChildren(ctx);
};



exports.rulesVisitor = rulesVisitor;