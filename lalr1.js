# JavaScript skeleton for Bison -*- autoconf -*-

# Copyright (C) 2013 Free Software Foundation, Inc.

# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.


# b4_comment(TEXT)
m4_define([b4_comment], [/* m4_bpatsubst([$1], [
], [
   ])  */])


# needed in list terminations
m4_define([b4_null], [null])


# b4_token_enum(TOKEN-NAME, TOKEN-NUMBER)
# Output the definition of this token as an enum.
m4_define([b4_token_enum], [  $1 = $2])


# b4_token_enums(LIST-OF-PAIRS-TOKEN-NAME-TOKEN-NUMBER)
# Output the definition of the tokens (if there are) as enums.
m4_define([b4_token_enums],
[m4_if([$#$1], [1], [],
[m4_map_sep([b4_token_enum], [,
], [$@])])])


# b4-case(ID, CODE)
m4_define([b4_case], [  $1: function ()$2,


])


m4_define([b4_list_of_actions], [m4_join([,
],b4_actions)])


# $$
m4_define([b4_lhs_value], [yyval])


# b4_rhs_value(RULE-LENGTH, NUM)
# $N
# TODO: optimize access to the N-th stack element
# m4_define([b4_rhs_value], [(yystack.valueAt($1-($2)))])
m4_define([b4_rhs_value], [[yyvs[yyvs.length-1-(($1-($2)))]]])
m4_define([b4_rhs_value_debug], [[yystack.valueStack[yystack.valueStack.length-1-(($1-($2)))]]])


b4_defines_if([b4_fatal([%s: %%defines does not make sense in JavaScript], [b4_skeleton])])
m4_ifval(m4_defn([b4_symbol_destructors]), [b4_fatal([%s: %%destructor does not make sense in JavaScript], [b4_skeleton])], [])


b4_output_begin([b4_parser_file_name])
b4_copyright([Skeleton implementation for Bison LALR(1) parsers in JavaScript], [2007-2013])

/* First part of user declarations.  */
[]b4_pre_prologue[

// Tokens.
// Token numbers, to be returned by the scanner.
var
]b4_token_enums(b4_tokens)[;


// here goes all the lexer code that depends on token numbers
]b4_percent_code_get([[lexer]])[


/**
 * A Bison parser, automatically generated from <tt>]m4_bpatsubst(b4_file_name, [^"\(.*\)"$], [\1])[</tt>.
 *
 * @@author LALR (1) parser skeleton written by Paolo Bonzini.
 * @@author JavaScript skeleton ported by Peter Leonov.
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

#if YYDEBUG
  // enable/disable all the debug messages
  parser.yydebug = 0;
  // enable/disable printing the token values
  parser.yydebug_yylval = true;
  // enable/disable printing the whole action functions applied
  parser.yydebug_action = false;
  var debug_reduce_print = this.debug_reduce_print.bind(this);
  var debug_symbol_print = this.debug_symbol_print.bind(this);
  var debug_stack_print  = this.debug_stack_print.bind(this);
  var debug_action       = this.debug_action.bind(this);
  var debug_print        = this.debug_print.bind(this);
#else // YYDEBUG
#define debug_reduce_print(yyn)
#define debug_symbol_print(message, yytype, yyvaluep)
#define debug_stack_print(yystack)
#define debug_action(yystack)
#define debug_print(message)
#endif // YYDEBUG
  

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

  var yyntokens_ = this.yyntokens_ = ]b4_tokens_number[;
  
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
   * @@return <tt>true</tt> if the parsing succeeds.  Note that this does not
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

    debug_print("Starting parse\n");
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

        debug_print("Entering state " + yystate + "\n");

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
          debug_print("Reading a token: ");
          yychar = lexer.yylex();
          yylval = lexer.yylval;
        }


        // Convert token to internal form.
        if (yychar <= EOF)
        {
          yychar = yytoken = EOF;
          debug_print("Now at end of input.\n");
        }
        else
        {
          if (yychar >= 0 && yychar <= yyuser_token_number_max_)
            yytoken = yytranslate_table_[yychar];
          else
            yytoken = yyundef_token_;

          debug_symbol_print("Next token is", yytoken, yylval);
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
          debug_symbol_print("Shifting", yytoken, yylval);

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
            // debug_symbol_print("Error: discarding", yystos_[yystate], yylval);
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
        debug_stack_print(yystack);
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

          debug_symbol_print("Error: popping", yystos_[yystate], yylval);
          yystack.pop(1);
          yystate = yystack.stateAt(0);
          debug_stack_print(yystack);
        }


        // Shift the error token.
        debug_symbol_print("Shifting", yystos_[yyn], yylval);

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
        // debug_symbol_print("Error: popping", yystos_[yyn], yylval);
        // yystack.pop(1);
        // yystate = yystack.stateAt(0);
        // debug_stack_print(yystack);
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

    debug_reduce_print(yyn);

    var actionClosure = actionsTable[yyn]
    debug_action(actionClosure);
    if (actionClosure)
      actionClosure();

    debug_symbol_print("-> $$ =", yyr1_[yyn], yyval);

    yystack.pop(yylen);
    yylen = 0;
    debug_stack_print(yystack);

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
  var yypact_ninf_ = this.yypact_ninf_ = ]b4_pact_ninf[;
  var yypact_ = this.yypact_ =
  [
    //]]
    b4_pact
    //[[
  ];

  // YYDEFACT[S] -- default reduction number in state S.
  // Performed when YYTABLE doesn't specify something else to do.
  // Zero means the default is an error.  */
  var yydefact_ =
  [
    //]]
    b4_defact
    //[[
  ];

  // YYPGOTO[NTERM-NUM].
  var yypgoto_ =
  [
    //]]
    b4_pgoto
    //[[
  ];

  // YYDEFGOTO[NTERM-NUM].
  var yydefgoto_ =
  [
    //]]
    b4_defgoto
    //[[
  ];

  // YYTABLE[YYPACT[STATE-NUM]]. What to do in state STATE-NUM.
  // If positive, shift that token.
  // If negative, reduce the rule which number is the opposite.
  // If yytable_NINF_, syntax error.
  var yytable_ninf_ = this.yytable_ninf_ = ]b4_table_ninf[;
  var yytable_ = this.yytable_ =
  [
    //]]
    b4_table
    //[[
  ];

  // YYCHECK.
  var yycheck_ = this.yycheck_ =
  [
    //]]
    b4_check
    //[[
  ];

  // STOS_[STATE-NUM]
  // The (internal number of the) accessing symbol of state STATE-NUM.
  var yystos_ =
  [
    //]]
    b4_stos
    //[[
  ];

  // TOKEN_NUMBER_[YYLEX-NUM]
  // Internal symbol number corresponding to YYLEX-NUM.
  var yytoken_number_ =
  [
    //]]
    b4_toknum
    //[[
  ];

  // YYR1[YYN] -- Symbol number of symbol that rule YYN derives.
  var yyr1_ =
  [
    //]]
    b4_r1
    //[[
  ];

  // YYR2[YYN] -- Number of symbols composing right hand side of rule YYN.
  var yyr2_ = this.yyr2_ =
  [
    //]]
    b4_r2
    //[[
  ];

  // YYTNAME[SYMBOL-NUM] -- String name of the symbol SYMBOL-NUM.
  // First, the terminals, then, starting at \a yyntokens_, nonterminals.
  var yytname_ = this.yytname_ =
  [
    //]]
    b4_tname
    //[[
  ];

  // YYRHS -- A `-1'-separated list of the rules' RHS.
  var yyrhs_ = this.yyrhs_ =
  [
    //]]
    b4_rhs
    //[[
  ];

  // YYPRHS[YYN] -- Index of the first RHS symbol of rule number YYN in YYRHS.
  var yyprhs_= this.yyprhs_ =
  [
    //]]
    b4_prhs
    //[[
  ];
#if YYDEBUG
  // YYRLINE[YYN] -- Source line where rule number YYN was defined.
  var yyrline_ = this.yyrline_ =
  [
    //]]
    b4_rline
    //[[
  ];
#endif // YYDEBUG
  // YYTRANSLATE(YYLEX) -- Bison symbol number corresponding to YYLEX.
  var yytranslate_table_ =
  [
    //]]
    b4_translate
    //[[
  ];

  var yylast_ = this.yylast_ = ]b4_last[;
  var yynnts_ = ]b4_nterms_number[;
  var yyempty_ = this.yyempty_ = -2;
  var yyfinal_ = ]b4_final_state_number[;
  var yyterror_ = this.yyterror_ = 1;
  var yyerrcode_ = 256;

  var yyuser_token_number_max_ = ]b4_user_token_number_max[;
  var yyundef_token_ = ]b4_undef_token_number[;

}).call(this); // end of the Parser very own namespase

;(function(){ // actions table namespace start

]b4_percent_code_get([[actions]])[

actionsTable =
{
  ]b4_list_of_actions[
};

})(); // actions table namespace end


} // YYParser

// rare used functions
YYParser.prototype =
{
  // Report on the debug stream that the rule yyrule is going to be reduced.
#if YYDEBUG
  yyinspect: function (obj)
  {
    return (obj && obj.yyinspect) ? obj.yyinspect() : JSON.stringify(obj);
  },

  debug_reduce_print: function debug_reduce_print (yyrule)
  {
    if (this.yydebug >= 2)
    {
      var yystack = this.yystack;
      var yylno = this.yyrline_[yyrule];
      var yynrhs = this.yyr2_[yyrule];
      // Print the symbols being reduced, and their result.
      this.print("Reducing stack by rule " + (yyrule - 1) + " (line " + yylno + "):\n");

      // The symbols being reduced.
      for (var yyi = 0; yyi < yynrhs; yyi++)
      {
        this.debug_symbol_print(
          "   $" + (yyi + 1) + " =",
          this.yyrhs_[this.yyprhs_[yyrule] + yyi],
          ]b4_rhs_value_debug(yynrhs, yyi + 1)[
        );
      }
    }
    else if (this.yydebug >= 1)
    {
      var yystack = this.yystack;
      var yylno = this.yyrline_[yyrule];
      var yynrhs = this.yyr2_[yyrule];
      // Print the symbols being reduced, and their result.
      yylno = ''+yylno;
      
      var pad = '..................................';
      write(yylno + ' ' + pad.substr(yylno.length) + ' : ');
      
      // The symbols being reduced.
      for (var yyi = 0; yyi < yynrhs; yyi++)
      {
        var name = this.yytname_[[this.yyrhs_[this.yyprhs_[yyrule] + yyi]]];
        write(name + " ");
      }
      write("\n");
      
      if (this.yydebug_yylval)
      {
        // The symbols being reduced.
        for (var yyi = 0; yyi < yynrhs; yyi++)
        {
          var name = this.yytname_[[this.yyrhs_[this.yyprhs_[yyrule] + yyi]]];
          var value = ]b4_rhs_value_debug(yynrhs, yyi + 1)[;
          this.print("$" + (yyi + 1) + " " + name + " = "+ this.yyinspect(value) + "\n");
        }
      }
    }
    // debug <= 0
  },

  debug_symbol_print: function debug_symbol_print (message, yytype, yyvaluep)
  {
    if (this.yydebug >= 2)
    {
      this.print
      (
        message
        + (yytype < this.yyntokens_ ? " token " : " nterm ")
        + this.yytname_[yytype]
        + " ("
        + (this.yydebug_yylval ? this.yyinspect(yyvaluep) : '')
        + ")\n"
      );
    }
    else if (this.yydebug >= 1)
    {
      this.print
      (
        "$$ "
        + this.yytname_[yytype]
        + " = "
        + (this.yydebug_yylval ? this.yyinspect(yyvaluep) : '')
        + "\n"
      );
      this.print("\n");
    }
    // yydebug <= 0
  },

  debug_stack_print: function debug_stack_print ()
  {
    if (this.yydebug < 2)
      return;

    puts("Stack now " + this.yystack.stateStack.join(' '));
  },

  debug_action: function debug_action (action)
  {
    if (!this.yydebug_action)
      return;
    
    if (this.yydebug >= 2)
    {
      puts(action);
    }
    else if (this.yydebug >= 1)
    {
      if (/^function\s*\([^)]*\)\s*{\s*}$/.test(actionClosure))
      {
        throw 'empty action';
      }
    }
    // yydebug <= 0
  },

  debug_print: function debug_print (message)
  {
    if (this.yydebug < 2)
      return;

    write(message);
  },
  print: function print (message)
  {
    write(message);
  },
#endif // YYDEBUG

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
YYParser.bisonVersion = "]b4_version[";

// Name of the skeleton that generated this parser.
YYParser.bisonSkeleton = ]b4_skeleton[;

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
]b4_epilogue[

]
b4_output_end()
