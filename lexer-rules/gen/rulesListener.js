// Generated from /Users/artemee/WebstormProjects/antlr4-error-handling/lexer-rules/rules.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by rulesParser.
function rulesListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

rulesListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
rulesListener.prototype.constructor = rulesListener;

// Enter a parse tree produced by rulesParser#parse.
rulesListener.prototype.enterParse = function(ctx) {
};

// Exit a parse tree produced by rulesParser#parse.
rulesListener.prototype.exitParse = function(ctx) {
};



exports.rulesListener = rulesListener;