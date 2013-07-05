calculator:
	bison -o calculator.js.tmp -S ./lalr1.js calculator.y
	cpp -E -CC -P calculator.js.tmp > calculator.js

calculator-debug:
	bison -o calculator.js.tmp -S ./lalr1.js calculator.y
	cpp -E -CC -P -DYYDEBUG calculator.js.tmp > calculator.js
