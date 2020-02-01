grammar lang;

parse
: expr+
;

expr
: '(' literal_value+ ')'
;

literal_value
: STRING_LITERAL
;

WHITESPACE : ' ' -> skip ;

STRING_LITERAL
: IDENTIFIER
| '\'' IDENTIFIER '\''
| '"' IDENTIFIER '"'
;

IDENTIFIER
: [a-zA-Z] [a-zA-Z0-9]*
;
