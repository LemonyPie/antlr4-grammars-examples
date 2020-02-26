grammar rules;

parse
: low_priotity
;


low_priotity
: high_priority ((ADDITION | SUBSTRACTION) high_priority)+
| high_priority
;

high_priority
: high_priority ((MULTIPLICATION | DIVISION) high_priority)+
| power
;

power
: <assoc=right>power (POWER power)+
| number
| group
;

group
: OPEN_PARENTHESIS (group | low_priotity | number) CLOSE_PARENTHESIS
;

number
: NUMBER
;


WHITESPACE: ' ' -> skip;

COMMENT: '//' [a-zA-Z\n ]+ -> channel(HIDDEN);

NUMBER: [0-9]+;

MULTIPLICATION
: '*'
;

DIVISION
: '/'
;


ADDITION
: '+'
;

SUBSTRACTION
: '-'
;

OPEN_PARENTHESIS
: '('
;

CLOSE_PARENTHESIS
: ')'
;

POWER
: P O W E R
| '^'
;

fragment P: [pP];
fragment O: [oO];
fragment W: [wW];
fragment E: [eE];
fragment R: [rR];
