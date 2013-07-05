calculator:
	bison -o calculator.js.tmp -S ./lalr1.js calculator.y
	cpp -E -CC -P calculator.js.tmp > calculator.js
