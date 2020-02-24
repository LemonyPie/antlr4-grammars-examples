grammar lang;

parse
: expr+ EOF
;

expr
: expr (OR expr)+
| expr (AND expr)+
| expr_value
;

expr_value
: literal_value+
| OPEN_PARENTHESIS literal_value+ CLOSE_PARENTHESIS
| OPEN_PARENTHESIS literal_value+ {this.logError("Missing closing ')'");}
;

literal_value
: {_input.LT(1).GetText() === 'async' }? operation_type
| STRING_LITERAL
;

operation_type
: ASYNC
;

ASYNC: 'async';

WHITESPACE : ' ' -> skip ;

STRING_LITERAL
: IDENTIFIER
| SINGLE_QUOTE IDENTIFIER SINGLE_QUOTE
| SINGLE_QUOTE IDENTIFIER {this.logError("Missing closing '\''")}
| DOUBLE_QUOTE IDENTIFIER DOUBLE_QUOTE
| DOUBLE_QUOTE IDENTIFIER {this.logError("Missing closing '\"'")}
;

OPEN_PARENTHESIS
: '(' //-> channel(HIDDEN)
;

CLOSE_PARENTHESIS
: ')' //-> channel(HIDDEN)
;

SINGLE_QUOTE
: '\''
;

DOUBLE_QUOTE
: '"'
;

IDENTIFIER
: [a-zA-Z] [a-zA-Z0-9]*
;

AND
: A N D
;

OR
: O R
;

fragment A: [aA];
fragment N: [aN];
fragment D: [dD];
fragment O: [oO];
fragment R: [rR];


