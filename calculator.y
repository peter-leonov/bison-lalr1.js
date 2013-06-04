%{
var result
%}

%output "calculator.js"

/* operator associations and precedence */

%token E END NUMBER PI L R

%left '+' '-'
%left '*' '/'
%left '^'
%left UMINUS

%start expressions

%% /* language grammar */

expressions
    : e END
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
    | '-' e %prec UMINUS
        {$$ = -$2;}
    | '(' e ')'
        {$$ = $2;}
    | NUMBER
        {$$ = Number(yyval);}
    | E
        {$$ = Math.E;}
    | PI
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
      return T.EOF
    
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

T.PLUS = 43 // '+'.charCodeAt(0)
T.MINUS = 45 // '-'.charCodeAt(0)
T.MULT = 42 // '*'.charCodeAt(0)
T.DIV = 47 // '/'.charCodeAt(0)
T.POW = 94 // '^'.charCodeAt(0)
T.L = 40 // '('.charCodeAt(0)
T.R = 41 // ')'.charCodeAt(0)

// ((3+2*3)*1)/-3
var lexer = new Lexer
([
  [T.L, '('],
  [T.L, '('],
  [T.NUMBER, '3'],
  [T.PLUS, '+'],
  [T.NUMBER, '2'],
  [T.MULT, '*'],
  [T.NUMBER, '3'],
  [T.R, ')'],
  [T.MULT, '*'],
  [T.NUMBER, '1'],
  [T.R, ')'],
  [T.DIV, '/'],
  [T.MINUS, '-'],
  [T.NUMBER, '3'],
  [T.END, '']
])

var parser = new YYParser(lexer)
parser.enableDebug()
print(parser.parse())
print(result == -3)
