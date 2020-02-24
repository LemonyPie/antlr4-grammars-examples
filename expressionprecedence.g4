grammar expressionprecedence;
@members {
    function log(a) {
        console.log(a);
    }
}
parse
: or_expr+ EOF
;

or_expr
: and_expr (OR and_expr)*
;

and_expr
: expr (AND expr)*
;

expr
: <assoc=right>expr POWER expr
| NUMBER { log(_input.LT(1).GetText())}
| LITERAL
;

WHITESPACE
: ' ' -> skip
;

POWER
: '^'
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
