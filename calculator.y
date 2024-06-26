%{

var result
%}

/* operator associations and precedence */

%token tE tEND tNUMBER tPI tL tR

%left '+' '-'
%left '*' '/'
%left '^'
%left tUMINUS

%start expressions

%% /* language grammar */

expressions
    : e tEND
        {result = $1;}
    ;

e
    : e '+' e
        {$$ = $1 + $3;}
    | e '-' e
        {$$ = $1 - $3;}
    | e '*' e
        {$$ = $1 * $3;}
    | e '/' e
        {$$ = $1 / $3;}
    | e '^' e
        {$$ = Math.pow($1, $3);}
    | '-' e %prec tUMINUS
        {$$ = -$2;}
    | '(' e ')'
        {$$ = $2;}
    | tNUMBER
        {$$ = Number(yyval);}
    | tE
        {$$ = Math.E;}
    | tPI
        {$$ = Math.PI;}
    ;

%%

var T = YYParser.TOKENS

var Lexer = (function(){

function Lexer (tokens)
{
  this.tokens = tokens
}

Lexer.prototype =
{
  yylex: function ()
  {
    if (this.tokens.length == 0)
      return 0;
    
    var token = this.tokens.shift();
    // the value of the token
    this.yylval = token[1];
    
    return token[0];
  },

  yyerror: function (location, message)
  {
    console.log('at ' + location, message)
  }
}

return Lexer

})();

var
  tPLUS = 43, // '+'.charCodeAt(0)
  tMINUS = 45, // '-'.charCodeAt(0)
  tMULT = 42, // '*'.charCodeAt(0)
  tDIV = 47, // '/'.charCodeAt(0)
  tPOW = 94, // '^'.charCodeAt(0)
  tL = 40, // '('.charCodeAt(0)
  tR = 41; // ')'.charCodeAt(0)

// (-(2+2*2)/1)*-7
var lexer = new Lexer
([
  [tL, '('],
  [tMINUS, '-'],
  [tL, '('],
  [tNUMBER, '2'],
  [tPLUS, '+'],
  [tNUMBER, '2'],
  [tMULT, '*'],
  [tNUMBER, '2'],
  [tR, ')'],
  [tDIV, '/'],
  [tNUMBER, '1'],
  [tR, ')'],
  [tMULT, '*'],
  [tMINUS, '-'],
  [tNUMBER, '7'],
  [tEND, '']
])

var parser = new YYParser(lexer);
parser.yydebug = 2;
console.log(parser.parse() ? 'Parsed OK.' : 'Parsed with errors.')
console.log('Answer is ' + result);
