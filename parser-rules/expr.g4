grammar expr;

parse
: expr
;

expr
: expr (OPERATOR expr)+
| group
| number
;

group
: OPEN_PARENTHESIS (group | expr | number) CLOSE_PARENTHESIS
;

number
: NUMBER
;

NUMBER: [0-9]+;

OPEN_PARENTHESIS
: '('
;

CLOSE_PARENTHESIS
: ')'
;

OPERATOR
: '+'
| '-'
| '*'
| '/'
;

WHITESPACE: ' ' -> skip;

COMMENT: '//' [a-zA-Z\n ]+ -> channel(HIDDEN);
