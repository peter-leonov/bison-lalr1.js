# lalr1.js

A JavaScript skeleton for Bison GNU Parser Generator.

Allows to easily port any Bison grammars from other languages to JavaScript. As it is just Bison with a different target platform, `lalr1.js` supports all the features of the BNF syntax and also Bison specific extensions. The state transitions during parsing are gonna be exactly the same (given the same feedback from the lexer for non-trivial grammars) which makes debugging a breeze: if something worked, say, in C it's gonna work in JS too, just keep folowing the same lexer integration. Also, Bison generates efficient tables which do fit modern JS engines nicely, thus expect good performance!

Take a look at an example produced code in [calculator.js](calculator.js).

P.S. If someone ports Flex to JavaScript, there will be a full professional stack for creating parsers in pure JavaScript.

## Example

Open `calculator.js` in editor, see the bison parser beauty, then run:

    node calculator.js

it calculates the result of the expression `(-(2+2*2)/1)*-7` and outputs:

    Parsed OK.
    Answer is 42

Source of `calculator.js` is in `calculator.y` (lexer is at the bottom).

## Prerequisites

`bison` (version 2.7+), `make`, and `cpp` (The C Preprocessor, not the C++ compiler).

On my system their versions look like this:

`$ bison --version`

    bison (GNU Bison) 2.7.12-4996
    Written by Robert Corbett and Richard Stallman.

    Copyright (C) 2013 Free Software Foundation, Inc.
    This is free software; see the source for copying conditions.  There is NO
    warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

`$ make --version`

    GNU Make 3.81
    Copyright (C) 2006  Free Software Foundation, Inc.
    This is free software; see the source for copying conditions.
    There is NO warranty; not even for MERCHANTABILITY or FITNESS FOR A
    PARTICULAR PURPOSE.

    This program built for i386-apple-darwin11.3.0

`$ cpp --version`

    i686-apple-darwin11-llvm-gcc-4.2 (GCC) 4.2.1 (Based on Apple Inc. build 5658) (LLVM build 2336.11.00)
    Copyright (C) 2007 Free Software Foundation, Inc.
    This is free software; see the source for copying conditions.  There is NO
    warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

`$ man cpp` gives this:

    […]
    The C preprocessor, often known as cpp, is a macro processor that is used automatically by the C compiler to transform your program before compilation.
    […]

Almost every thing came from GNU. Kudos!

## Test

    make calculator

then:

    node calculator.js

outputs:

    Parsed OK.
    Answer is 42

which is good :)

If you want to trace all the state transitions run `make calculator-debug` in the first step. Then run `node calculator.js` to see something like this:

    Starting parse
    Entering state 0
    Reading a token: Next token is token '(' ("(")
    Shifting token '(' ("(")
    Entering state 5

    …

    Entering state 11
    Reducing stack by rule 1 (line 26):
       $1 = nterm e (-7)
       $2 = token tEND ("")
    -> $$ = nterm expressions (-7)
    Stack now 0
    Entering state 6
    Reading a token: Now at end of input.
    Shifting token $end ("")
    Entering state 10
    Parsed OK.
    Answer is 42

which is good too :)

The `calcolator.y` example has a built-in lexer emulator with a simple token stream for the `((3+2*3)*1)/-3` expression. In [ruby-parser.js](https://github.com/kung-fu-tzu/ruby-parser.js) project you can find a full featured parser build with `lalr1.js`.

Thanks to [jison](https://github.com/zaach/jison) project for the example and the inspiration!

## Features

The main and only feature is that this skeleton does its job exactly the same way the original C and Java skeletons do.

In debug mode (`cpp -DYYDEBUG …`) the resulting parser produces exactly the same debug output (excepting memory management entries), state transitions and even states and token numbers as the `yacc.c` skeleton does. This gives a handy way of testing your ported parser just by comparing the original and ported parsers output with `diff`. In ruby parser project both parsers produce bit-to-bit equal output on complex ruby source of 48,000 lines.
