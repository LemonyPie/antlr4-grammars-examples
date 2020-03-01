grammar targetLanguageInRules;

@members{
    notify = (x) => this.notifyErrorListeners(x);
}

parse
: declaration+ EOF
;

declaration
: define EQ NUMBER SEMICOLON
;

define
: DEFINE (IDENTIFIER | DEFINE)
;

DEFINE
: 'define'
;

IDENTIFIER
: [a-zA-Z_$][a-zA-Z0-9_$]*
;

NUMBER: [0-9]+;

EQ: '=';

SEMICOLON: ';';

WHITESPACE : [ \n] -> channel(HIDDEN);
