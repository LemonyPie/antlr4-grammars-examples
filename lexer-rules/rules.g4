grammar rules;

parse
: NUMBER ((OPERATION | POWER) NUMBER)+ EOF
;

WHITESPACE: ' ' -> skip;

COMMENT: '//' [a-zA-Z\n ]+ -> channel(HIDDEN);

NUMBER: [0-9]+;

OPERATION
: '+'
| '-'
| '*'
| '/'
;

POWER: P O W E R;

fragment P: [pP];
fragment O: [oO];
fragment W: [wW];
fragment E: [eE];
fragment R: [rR];
