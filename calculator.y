%{

if (typeof write == "undefined")
{
  write = print;
}
puts = print;

var result
%}

%output "calculator.js"

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
      return 0
    
    this.token = this.tokens.shift()
    // print('yylex', this.token)
    return this.token[0]
  },

  getLVal: function ()
  {
    return this.token[1]
  },

  getStartPos: function ()
  {
    return 0
  },

  getEndPos: function ()
  {
    return 1
  },

  yyerror: function (location, message)
  {
    console.log('at ' + location, message)
  }
}

return Lexer

})();

this.console = {log: print}

var
  tPLUS = 43, // '+'.charCodeAt(0)
  tMINUS = 45, // '-'.charCodeAt(0)
  tMULT = 42, // '*'.charCodeAt(0)
  tDIV = 47, // '/'.charCodeAt(0)
  tPOW = 94, // '^'.charCodeAt(0)
  tL = 40, // '('.charCodeAt(0)
  tR = 41; // ')'.charCodeAt(0)

// ((3+2*3)*1)/-3
var lexer = new Lexer
([
  [tL, '('],
  [tL, '('],
  [tNUMBER, '3'],
  [tPLUS, '+'],
  [tNUMBER, '2'],
  [tMULT, '*'],
  [tNUMBER, '3'],
  [tR, ')'],
  [tMULT, '*'],
  [tNUMBER, '1'],
  [tR, ')'],
  [tDIV, '/'],
  [tMINUS, '-'],
  [tNUMBER, '3'],
  [tEND, '']
])

var parser = new YYParser(lexer)
parser.enableDebug()
print(parser.parse())
print(result == -3)
