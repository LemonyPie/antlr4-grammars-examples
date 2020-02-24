grammar expression;

parse
: expr+ EOF
;

expr
: expr '^'<assoc=right> expr
| expr (AND expr)+
| expr (OR expr)+
| NUMBER
| LITERAL
;

WHITESPACE
: ' ' -> skip
;

AND
: 'and'
| '*'
;

OR
: 'or'
| '+'
;

NUMBER
: [0-9]+
;

LITERAL
: [a-zA-Z]+
;
