

/* A Bison parser, made by GNU Bison 2.7.12-4996.  */

/* Skeleton implementation for Bison LALR(1) parsers in JavaScript
   
      Copyright (C) 2007-2013 Free Software Foundation, Inc.
   
   This program is free software: you can redistribute it and/or modify
   it under the terms of the GNU General Public License as published by
   the Free Software Foundation, either version 3 of the License, or
   (at your option) any later version.
   
   This program is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU General Public License for more details.
   
   You should have received a copy of the GNU General Public License
   along with this program.  If not, see <http://www.gnu.org/licenses/>.  */

/* As a special exception, you may create a larger work that contains
   part or all of the Bison parser skeleton and distribute that work
   under terms of your choice, so long as that work isn't itself a
   parser generator using the skeleton or a modified version thereof
   as a parser skeleton.  Alternatively, if you modify or redistribute
   the parser skeleton itself, you may (at your option) remove this
   special exception, which will cause the skeleton and the resulting
   Bison output files to be licensed under the GNU General Public
   License without this special exception.
   
   This special exception was added by the Free Software Foundation in
   version 2.2 of Bison.  */

/* First part of user declarations.  */
/* Line 73 of lalr1.js  */
/* Line 1 of "calculator.y"  */


if (typeof write == "undefined")
{
  write = print;
}
puts = print;

var result


// Tokens.
// Token numbers, to be returned by the scanner.
var
  tE = 258,
  tEND = 259,
  tNUMBER = 260,
  tPI = 261,
  tL = 262,
  tR = 263,
  tUMINUS = 264;


// here goes all the lexer code that depends on token numbers



/**
 * A Bison parser, automatically generated from <tt>calculator.y</tt>.
 *
 * @author LALR (1) parser skeleton written by Paolo Bonzini.
 * @author JavaScript skeleton ported by Peter Leonov.
 */


// Instantiates the Bison-generated parser.
// `lexer` is the scanner that will supply tokens to the parser.
function YYParser (lexer)
{
// self
var parser = this;

// The three variables shared by Parser's guts and actions world
// defined after the Parser very own namespace.
// (`lexer` and `parser` are shared too),
var yyval, yystack, yyvs, actionsTable;

;(function(){ // start of the Parser very own namespase

  // True if verbose error messages are enabled.
  this.errorVerbose = true;

  

  // Token returned by the scanner to signal the end of its input.
  var EOF = 0;

  // Returned by a Bison action in order to stop the parsing process
  // and return success (<tt>true</tt>).
  var YYACCEPT = 0;

  // Returned by a Bison action in order to stop the parsing process
  // and return failure (<tt>false</tt>).  */
  var YYABORT = 1;

  // Returned by a Bison action in order to start error recovery
  // without printing an error message.
  var YYERROR = 2;

  // Internal return codes that are not supported for user semantic
  // actions.
  var YYERRLAB = 3;
  var YYNEWSTATE = 4;
  var YYDEFAULT = 5;
  var YYREDUCE = 6;
  var YYERRLAB1 = 7;
  var YYRETURN = 8;

  var yyntokens_ = this.yyntokens_ = 17;
  
  var yyerrstatus_ = 0;
  parser.yyerrok = function yyerrok () { yyerrstatus_ = 0; }
  
  // Return whether error recovery is being done.
  // In this state, the parser reads token until it reaches a known state,
  // and then restarts normal operation.
  this.isRecovering = function isRecovering ()
  {
    return yyerrstatus_ == 0;
  }

  /**
   * Parse input from the scanner that was specified at object construction
   * time.  Return whether the end of the input was reached successfully.
   *
   * @return <tt>true</tt> if the parsing succeeds.  Note that this does not
   *          imply that there were no syntax errors.
   */
  this.parse = function parse ()
  {
    // Lookahead and lookahead in internal form.
    var yychar = yyempty_;
    var yytoken = 0;

    /* State.  */
    var yyn = 0;
    var yylen = 0;
    var yystate = 0;

    // the only place yystack value is changed
    yystack = this.yystack = new YYParser.Stack();
    yyvs = yystack.valueStack;

    /* Error handling.  */
    var yynerrs_ = 0;

    // Semantic value of the lookahead.
    var yylval = undefined;

    ;
    yyerrstatus_ = 0;


    // Initialize the stack.
    yystack.push(yystate, yylval);

    // have tried: recursive closures, breaking blocks - switch is faster,
    // next step: asm.js for the whole `parse()` function
    var label = YYNEWSTATE;
    goto_loop: for (;;)
    switch (label)
    {
      //----------------.
      // New state.     |
      //---------------/
      case YYNEWSTATE:
        // Unlike in the C/C++ skeletons, the state is already pushed when we come here.

        ;

        // Accept?
        if (yystate == yyfinal_)
          return true;

        // Take a decision.
        // First try without lookahead.
        yyn = yypact_[yystate];
        if (yyn == yypact_ninf_) // yyn pact value is default
        {
          // goto
          label = YYDEFAULT;
          continue goto_loop;
        }

        // Read a lookahead token.
        if (yychar == yyempty_)
        {
          ;
          yychar = lexer.yylex();
          yylval = lexer.yylval;
        }


        // Convert token to internal form.
        if (yychar <= EOF)
        {
          yychar = yytoken = EOF;
          ;
        }
        else
        {
          if (yychar >= 0 && yychar <= yyuser_token_number_max_)
            yytoken = yytranslate_table_[yychar];
          else
            yytoken = yyundef_token_;

          ;
        }

        // If the proper action on seeing token YYTOKEN
        // is to reduce or to detect an error, take that action.
        yyn += yytoken;
        if (yyn < 0 || yylast_ < yyn || yycheck_[yyn] != yytoken)
        {
          // goto
          label = YYDEFAULT;
          continue goto_loop;
        }
        // <= 0 means reduce or error.
        else if ((yyn = yytable_[yyn]) <= 0)
        {
          if (yyn == yytable_ninf_) // yyn's value is an error
          {
            // goto
            label = YYERRLAB;
            continue goto_loop;
          }
          else
          {
            yyn = -yyn;

            // goto
            label = YYREDUCE;
            continue goto_loop;
          }
        }

        else
        {
          // Shift the lookahead token.
          ;

          // Discard the token being shifted.
          yychar = yyempty_;

          // Count tokens shifted since error;
          // after three, turn off error status.
          if (yyerrstatus_ > 0)
            --yyerrstatus_;

          yystate = yyn;
          yystack.push(yystate, yylval);

          //goto
          label = YYNEWSTATE;
          continue goto_loop;
        }

        // won't reach here
        return false;

      //-----------------------------------------------------------.
      // yydefault -- do the default action for the current state. |
      //----------------------------------------------------------/
      case YYDEFAULT:
        yyn = yydefact_[yystate];
        if (yyn == 0)
        {
          // goto
          label = YYERRLAB;
          continue goto_loop;
        }
        else
        {
          // goto
          label = YYREDUCE;
          continue goto_loop;
        }

      // won't reach here
      return false;

      //------------------------------------.
      //  yyreduce -- Do a reduction.       |
      //-----------------------------------/
      case YYREDUCE:
        yylen = yyr2_[yyn];
        yyaction(yyn, yylen);
        yystate = yystack.stateAt(0);
        // goto
        label = YYNEWSTATE;
        continue goto_loop;

      //-------------------------------------.
      // yyerrlab -- here on detecting error |
      //------------------------------------/
      case YYERRLAB:
        // If not already recovering from an error, report this error.
        if (yyerrstatus_ == 0)
        {
          ++yynerrs_;
          if (yychar == yyempty_)
            yytoken = yyempty_;
          lexer.yyerror(this.yysyntax_error(yystate, yytoken));
        }

        if (yyerrstatus_ == 3)
        {
          // If just tried and failed to reuse lookahead token
          // after an error, discard it.

          if (yychar <= EOF)
          {
            // Return failure if at end of input.
            if (yychar == EOF)
              return false;
          }
          else
          {
            // ;
            yychar = yyempty_;
          }
        }

        // Else will try to reuse lookahead token
        // after shifting the error token.

        // goto
        label = YYERRLAB1;
        continue goto_loop;

      //--------------------------------------------------.
      // errorlab -- error raised explicitly by YYERROR.  |
      //-------------------------------------------------/
      case YYERROR:

        // Do not reclaim the symbols of the rule
        // which action triggered this YYERROR.
        yystack.pop(yylen);
        yylen = 0;
        ;
        yystate = yystack.stateAt(0);
        // goto
        label = YYERRLAB1;
        continue goto_loop;

      //--------------------------------------------------------------.
      // yyerrlab1 -- common code for both syntax error and YYERROR.  |
      //-------------------------------------------------------------/
      case YYERRLAB1:
        yyerrstatus_ = 3; // Each real token shifted decrements this.

        for (;;)
        {
          yyn = yypact_[yystate];
          if (yyn != yypact_ninf_) // yyn pact value isn't default
          {
            yyn += yyterror_;
            if (0 <= yyn && yyn <= yylast_ && yycheck_[yyn] == yyterror_)
            {
              yyn = yytable_[yyn];
              if (0 < yyn)
                break;
            }
          }

          // Pop the current state because it cannot handle the error token.
          if (yystack.height() == 0)
          {
            label = YYABORT;
            continue goto_loop;
          }

          ;
          yystack.pop(1);
          yystate = yystack.stateAt(0);
          ;
        }


        // Shift the error token.
        ;

        yystate = yyn;
        yystack.push(yyn, yylval);
        // goto
        label = YYNEWSTATE;
        continue goto_loop;

      //--------------------------.
      // Accept.                  |
      //-------------------------/
      case YYACCEPT:
        return true;

      //----------------------.
      // Abort.               |
      //---------------------/
      case YYABORT:
        // ;
        // yystack.pop(1);
        // yystate = yystack.stateAt(0);
        // ;
        return false;

      default:
        // won't reach here
        return false;
    } // for (;;) and switch (label)

    // won't reach here
    return false
  }

  function yyaction (yyn, yylen)
  {
    /* If YYLEN is nonzero, implement the default value of the action:
       `$$ = $1'.  Otherwise, use the top of the stack.

       Otherwise, the following line sets YYVAL to garbage.
       This behavior is undocumented and Bison
       users should not rely upon it.  */
    // var yyval; moved up in scope chain to share with actions
    // if (yylen > 0)
    //   yyval = yystack.valueAt(yylen - 1);
    // else
    //   yyval = yystack.valueAt(0);
    
    if (yylen > 0)
      yyval = yystack.valueAt(yylen - 1);
    else
      yyval = undefined; // yes, setting garbage value

    ;

    var actionClosure = actionsTable[yyn]
    ;
    if (actionClosure)
      actionClosure();

    ;

    yystack.pop(yylen);
    yylen = 0;
    ;

    // Shift the result of the reduction.
    yyn = yyr1_[yyn];
    var yystate = yypgoto_[yyn - yyntokens_] + yystack.stateAt(0);
    if (0 <= yystate && yystate <= yylast_ && yycheck_[yystate] == yystack.stateAt(0))
      yystate = yytable_[yystate];
    else
      yystate = yydefgoto_[yyn - yyntokens_];

    yystack.push(yystate, yyval);
    // was: usless: return YYNEWSTATE;
  }

  // YYPACT[STATE-NUM] -- Index in YYTABLE of the portion describing STATE-NUM.
  var yypact_ninf_ = this.yypact_ninf_ = -10;
  var yypact_ = this.yypact_ =
  [
    //]
        10,   -10,   -10,   -10,    10,    10,     5,    17,   -10,    22,
     -10,   -10,    10,    10,    10,    10,    10,   -10,    -9,    -9,
      -7,    -7,   -10
    //[
  ];

  // YYDEFACT[S] -- default reduction number in state S.
  // Performed when YYTABLE doesn't specify something else to do.
  // Zero means the default is an error.  */
  var yydefact_ =
  [
    //]
         0,    11,    10,    12,     0,     0,     0,     0,     8,     0,
       1,     2,     0,     0,     0,     0,     0,     9,     3,     4,
       5,     6,     7
    //[
  ];

  // YYPGOTO[NTERM-NUM].
  var yypgoto_ =
  [
    //]
       -10,   -10,    -4
    //[
  ];

  // YYDEFGOTO[NTERM-NUM].
  var yydefgoto_ =
  [
    //]
        -1,     6,     7
    //[
  ];

  // YYTABLE[YYPACT[STATE-NUM]]. What to do in state STATE-NUM.
  // If positive, shift that token.
  // If negative, reduce the rule which number is the opposite.
  // If yytable_NINF_, syntax error.
  var yytable_ninf_ = this.yytable_ninf_ = -1;
  var yytable_ = this.yytable_ =
  [
    //]
         8,     9,    14,    15,    16,    10,    16,     0,    18,    19,
      20,    21,    22,     1,     0,     2,     3,     0,     0,     0,
       4,    11,     0,     0,     0,     5,    12,    13,    14,    15,
      16,    12,    13,    14,    15,    16,     0,     0,    17
    //[
  ];

  // YYCHECK.
  var yycheck_ = this.yycheck_ =
  [
    //]
         4,     5,    11,    12,    13,     0,    13,    -1,    12,    13,
      14,    15,    16,     3,    -1,     5,     6,    -1,    -1,    -1,
      10,     4,    -1,    -1,    -1,    15,     9,    10,    11,    12,
      13,     9,    10,    11,    12,    13,    -1,    -1,    16
    //[
  ];

  // STOS_[STATE-NUM]
  // The (internal number of the) accessing symbol of state STATE-NUM.
  var yystos_ =
  [
    //]
         0,     3,     5,     6,    10,    15,    18,    19,    19,    19,
       0,     4,     9,    10,    11,    12,    13,    16,    19,    19,
      19,    19,    19
    //[
  ];

  // TOKEN_NUMBER_[YYLEX-NUM]
  // Internal symbol number corresponding to YYLEX-NUM.
  var yytoken_number_ =
  [
    //]
         0,   256,   257,   258,   259,   260,   261,   262,   263,    43,
      45,    42,    47,    94,   264,    40,    41
    //[
  ];

  // YYR1[YYN] -- Symbol number of symbol that rule YYN derives.
  var yyr1_ =
  [
    //]
         0,    17,    18,    19,    19,    19,    19,    19,    19,    19,
      19,    19,    19
    //[
  ];

  // YYR2[YYN] -- Number of symbols composing right hand side of rule YYN.
  var yyr2_ = this.yyr2_ =
  [
    //]
         0,     2,     2,     3,     3,     3,     3,     3,     2,     3,
       1,     1,     1
    //[
  ];

  // YYTNAME[SYMBOL-NUM] -- String name of the symbol SYMBOL-NUM.
  // First, the terminals, then, starting at \a yyntokens_, nonterminals.
  var yytname_ = this.yytname_ =
  [
    //]
    "$end", "error", "$undefined", "tE", "tEND", "tNUMBER", "tPI", "tL",
  "tR", "'+'", "'-'", "'*'", "'/'", "'^'", "tUMINUS", "'('", "')'",
  "$accept", "expressions", "e", null
    //[
  ];

  // YYRHS -- A `-1'-separated list of the rules' RHS.
  var yyrhs_ = this.yyrhs_ =
  [
    //]
        18,     0,    -1,    19,     4,    -1,    19,     9,    19,    -1,
      19,    10,    19,    -1,    19,    11,    19,    -1,    19,    12,
      19,    -1,    19,    13,    19,    -1,    10,    19,    -1,    15,
      19,    16,    -1,     5,    -1,     3,    -1,     6,    -1
    //[
  ];

  // YYPRHS[YYN] -- Index of the first RHS symbol of rule number YYN in YYRHS.
  var yyprhs_= this.yyprhs_ =
  [
    //]
         0,     0,     3,     6,    10,    14,    18,    22,    26,    29,
      33,    35,    37
    //[
  ];
  // YYTRANSLATE(YYLEX) -- Bison symbol number corresponding to YYLEX.
  var yytranslate_table_ =
  [
    //]
         0,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
      15,    16,    11,     9,     2,    10,     2,    12,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,    13,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     1,     2,     3,     4,
       5,     6,     7,     8,    14
    //[
  ];

  var yylast_ = this.yylast_ = 38;
  var yynnts_ = 3;
  var yyempty_ = this.yyempty_ = -2;
  var yyfinal_ = 10;
  var yyterror_ = this.yyterror_ = 1;
  var yyerrcode_ = 256;

  var yyuser_token_number_max_ = 264;
  var yyundef_token_ = 2;

}).call(this); // end of the Parser very own namespase

;(function(){ // actions table namespace start



actionsTable =
{
    2: function ()/* Line 653 of lalr1.js  */
/* Line 27 of "calculator.y"  */
    {result = yyvs[yyvs.length-1-((2-(1)))];},
  3: function ()/* Line 653 of lalr1.js  */
/* Line 32 of "calculator.y"  */
    {yyval = yyvs[yyvs.length-1-((3-(1)))] + yyvs[yyvs.length-1-((3-(3)))];},
  4: function ()/* Line 653 of lalr1.js  */
/* Line 34 of "calculator.y"  */
    {yyval = yyvs[yyvs.length-1-((3-(1)))] - yyvs[yyvs.length-1-((3-(3)))];},
  5: function ()/* Line 653 of lalr1.js  */
/* Line 36 of "calculator.y"  */
    {yyval = yyvs[yyvs.length-1-((3-(1)))] * yyvs[yyvs.length-1-((3-(3)))];},
  6: function ()/* Line 653 of lalr1.js  */
/* Line 38 of "calculator.y"  */
    {yyval = yyvs[yyvs.length-1-((3-(1)))] / yyvs[yyvs.length-1-((3-(3)))];},
  7: function ()/* Line 653 of lalr1.js  */
/* Line 40 of "calculator.y"  */
    {yyval = Math.pow(yyvs[yyvs.length-1-((3-(1)))], yyvs[yyvs.length-1-((3-(3)))]);},
  8: function ()/* Line 653 of lalr1.js  */
/* Line 42 of "calculator.y"  */
    {yyval = -yyvs[yyvs.length-1-((2-(2)))];},
  9: function ()/* Line 653 of lalr1.js  */
/* Line 44 of "calculator.y"  */
    {yyval = yyvs[yyvs.length-1-((3-(2)))];},
  10: function ()/* Line 653 of lalr1.js  */
/* Line 46 of "calculator.y"  */
    {yyval = Number(yyval);},
  11: function ()/* Line 653 of lalr1.js  */
/* Line 48 of "calculator.y"  */
    {yyval = Math.E;},
  12: function ()/* Line 653 of lalr1.js  */
/* Line 50 of "calculator.y"  */
    {yyval = Math.PI;}
};

})(); // actions table namespace end


} // YYParser

// rare used functions
YYParser.prototype =
{
  // Report on the debug stream that the rule yyrule is going to be reduced.

  // Generate an error message.
  yysyntax_error: function yysyntax_error (yystate, tok)
  {
    if (!this.errorVerbose)
      return "syntax error";

    /*
    There are many possibilities here to consider:
     - Assume YYFAIL is not used.  It's too flawed to consider.
       See
       <http://lists.gnu.org/archive/html/bison-patches/2009-12/msg00024.html>
       for details.  YYERROR is fine as it does not invoke this
       function.
     - If this state is a consistent state with a default action,
       then the only way this function was invoked is if the
       default action is an error action.  In that case, don't
       check for expected tokens because there are none.
     - The only way there can be no lookahead present (in tok) is
       if this state is a consistent state with a default action.
       Thus, detecting the absence of a lookahead is sufficient to
       determine that there is no unexpected or expected token to
       report.  In that case, just report a simple "syntax error".
     - Don't assume there isn't a lookahead just because this
       state is a consistent state with a default action.  There
       might have been a previous inconsistent state, consistent
       state with a non-default action, or user semantic action
       that manipulated yychar.  (However, yychar is currently out
       of scope during semantic actions.)
     - Of course, the expected token list depends on states to
       have correct lookahead information, and it depends on the
       parser not to perform extra reductions after fetching a
       lookahead from the scanner and before detecting a syntax
       error.  Thus, state merging (from LALR or IELR) and default
       reductions corrupt the expected token list.  However, the
       list is correct for canonical LR with one exception: it
       will still contain any token that will not be accepted due
       to an error action in a later state.
    */

    if (tok == this.yyempty_)
      return "syntax error (empty token)";

    // FIXME: This method of building the message is not compatible
    // with internationalization.
    var res = "syntax error, unexpected ";
    res += yytnamerr_(this.yytname_[tok]);
    var yyn = this.yypact_[yystate];
    if (yyn != this.yypact_ninf_) // yyn pact value isn't default
    {
      // Start YYX at -YYN if negative to avoid negative indexes in YYCHECK.
      // In other words, skip the first -YYN actions for this state
      // because they are default actions.
      var yyxbegin = yyn < 0 ? -yyn : 0;
      // Stay within bounds of both yycheck and yytname.
      var yychecklim = this.yylast_ - yyn + 1;
      var yyxend = yychecklim < this.yyntokens_ ? yychecklim : this.yyntokens_;
      var count = 0;
      for (var x = yyxbegin; x < yyxend; ++x)
      {
        if
        (
          this.yycheck_[x + yyn] == x
          && x != this.yyterror_
          && this.yytable_[x + yyn] != this.yytable_ninf_ // yytable_[x + yyn] isn't an error
        )
        {    
          ++count;
        }
      }
      if (count < 5)
      {
        count = 0;
        for (var x = yyxbegin; x < yyxend; ++x)
        {
          if
          (
            this.yycheck_[x + yyn] == x
            && x != this.yyterror_
            && this.yytable_[x + yyn] != this.yytable_ninf_ // yytable_[x + yyn] isn't an error
          )
          {
            res += (count++ == 0 ? ", expecting " : " or ");
            res += yytnamerr_(this.yytname_[x]);
          }
        }
      }
    }
    return res;

    /* Return YYSTR after stripping away unnecessary quotes and
       backslashes, so that it's suitable for yyerror.  The heuristic is
       that double-quoting is unnecessary unless the string contains an
       apostrophe, a comma, or backslash (other than backslash-backslash).
       YYSTR is taken from yytname.  */
    function yytnamerr_ (yystr)
    {
      if (yystr[0] == '"')
      {
        var yyr = '';
        strip_quotes:
        for (var i = 1; i < yystr.length; i++)
        {
          switch (yystr[i])
          {
            case '\'':
            case ',':
              break strip_quotes;

            case '\\':
              if (yystr[++i] != '\\')
                break strip_quotes;
                // Fall through.

            case '"':
              return yyr;

            default:
              yyr += yystr[i];
              break;
          }
        }
      }
      else if (yystr == "$end")
        return "end of input";

      return yystr;
    }
  }
}

// Version number for the Bison executable that generated this parser.
YYParser.bisonVersion = "2.7.12-4996";

// Name of the skeleton that generated this parser.
YYParser.bisonSkeleton = "./lalr1.js";

YYParser.Stack = function Stack ()
{
  var stateStack = this.stateStack = [];
  var valueStack = this.valueStack = [];

  this.push = function push (state, value)
  {
    stateStack.push(state);
    valueStack.push(value);
  }

  this.pop = function pop (num)
  {
    if (num <= 0)
      return;

    valueStack.length -= num;
    stateStack.length -= num; // TODO: original code lacks this line
  }

  this.stateAt = function stateAt (i)
  {
    return stateStack[stateStack.length-1 - i];
  }

  this.valueAt = function valueAt (i)
  {
    return valueStack[valueStack.length-1 - i];
  }

  // used in debug mode or in an error recovery mode only
  this.height = function height ()
  {
    return stateStack.length-1;
  }
}


// here goes the epilogue
/* Line 968 of lalr1.js  */
/* Line 53 of "calculator.y"  */


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

this.console = {log: print}

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
print(parser.parse() ? 'Parsed OK.' : 'Parsed with errors.')
print('Answer is ' + result);



