// Generated from /Users/artemee/WebstormProjects/antlr4-error-handling/parser-rules/targetLanguageInRules.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by targetLanguageInRulesParser.

function targetLanguageInRulesVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

targetLanguageInRulesVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
targetLanguageInRulesVisitor.prototype.constructor = targetLanguageInRulesVisitor;

// Visit a parse tree produced by targetLanguageInRulesParser#parse.
targetLanguageInRulesVisitor.prototype.visitParse = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by targetLanguageInRulesParser#declaration.
targetLanguageInRulesVisitor.prototype.visitDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by targetLanguageInRulesParser#define.
targetLanguageInRulesVisitor.prototype.visitDefine = function(ctx) {
  return this.visitChildren(ctx);
};



exports.targetLanguageInRulesVisitor = targetLanguageInRulesVisitor;