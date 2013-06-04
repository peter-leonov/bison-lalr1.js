lalr1.js
========

JavaScript skeleton for Bison GNU Parser Generator.
Warning, beta version! :)

Allows to easily port grammars from other languages to JavaScript. As it is just a Bison with a different target platform, lalr1.js supports all the features of BNF syntax and extensions. Also, Bison generates eficient tables which do fit v8 and js17 very tight. So expect good performance!

P. S.
If someone could port flex to JavaScript, there will be a full professional stack for creating parsers in pure JavaScript.


Usage
=====

Just like any other custom skeleton:

```bash
bison -S ./lalr1.js calculator.y
```

then:
```bash
v8 calculator.js
```

results in:

```
...
Now at end of input.
Shifting token $end (0-1: )
Entering state 10
Stack now
 10
 6
 0
true
true
```

The `calcolator.y` example has a built-in lexer emulator with a simple tokens stream for the `((3+2*3)*1)/-3` expression. Yes, I'd better add a full lexer at some point ;)
