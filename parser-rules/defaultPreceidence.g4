grammar defaultPreceidence;

parse
: expr
;

expr
: expr (('+' | '-') expr)+
| expr (('*' | '/') expr)+
| number
;

number
: NUMBER
;

NUMBER: [0-9]+;

WHITESPACE: ' ' -> skip;

COMMENT: '//' [a-zA-Z\n ]+ -> channel(HIDDEN);
