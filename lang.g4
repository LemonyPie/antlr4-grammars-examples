grammar lang;

parse
: expr+ EOF
;

expr
: OPEN_PARENTHESIS literal_value+ CLOSE_PARENTHESIS
| OPEN_PARENTHESIS literal_value+ {this.logError("Missing closing ')'");}
;

literal_value
: STRING_LITERAL
;

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
