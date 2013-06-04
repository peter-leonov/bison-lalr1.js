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
m4_define([b4_token_enum], [  '$1': $2])


# b4_token_enums(LIST-OF-PAIRS-TOKEN-NAME-TOKEN-NUMBER)
# Output the definition of the tokens (if there are) as enums.
m4_define([b4_token_enums],
[m4_if([$#$1], [1], [],
[m4_map_sep([b4_token_enum], [,
], [$@])])])


# b4-case(ID, CODE)
m4_define([b4_case], [  '$1': function ()
    $2,
])


m4_define([b4_list_of_actions], [m4_join([,
],b4_actions)])


# $$
m4_define([b4_lhs_value], [yyval])


# b4_rhs_value(RULE-LENGTH, NUM)
# $N
m4_define([b4_rhs_value], [(yystack.valueAt($1-($2)))])


# b4_rhs_location(RULE-LENGTH, NUM)
# Expansion of @NUM, where the current rule has RULE-LENGTH symbols on RHS.
m4_define([b4_rhs_location], [yystack.locationAt($1-($2))])


b4_defines_if([b4_fatal([%s: %%defines does not make sense in JavaScript], [b4_skeleton])])
m4_ifval(m4_defn([b4_symbol_destructors]), [b4_fatal([%s: %%destructor does not make sense in JavaScript], [b4_skeleton])], [])


b4_output_begin([b4_parser_file_name])
b4_copyright([Skeleton implementation for Bison LALR(1) parsers in JavaScript], [2007-2013])


[
;(function(){ // start of the parser namespase
/* First part of user declarations.  */
]b4_pre_prologue[
]b4_percent_code_get([[imports]])[
/**
 * A Bison parser, automatically generated from <tt>]m4_bpatsubst(b4_file_name, [^"\(.*\)"$], [\1])[</tt>.
 *
 * @@author LALR (1) parser skeleton written by Paolo Bonzini.
 * @@author Java skeleton ported by Peter Leonov.
 */


/**
* A class defining a pair of positions.  Positions, defined by the
* <code>Position</code> class, denote a point in the input.
* Locations represent a part of the input through the beginning
* and ending positions.  */
function Location (begin, end) {
  /** The first, inclusive, position in the range.  */
  this.begin = begin;
  this.end = end;
}

Location.prototype.toString = function () {
  if (this.begin === this.end)
    return "" + begin;

  return this.begin + "-" + this.end;
}


function YYStack ()
{
  var stateStack = [];
  var locStack = [];
  var valueStack = [];

  this.push = function push (state, value, location)
  {
    stateStack.push(state);
    locStack.push(location);
    valueStack.push(value);
  }

  this.pop = function pop (num)
  {
    if (num <= 0)
      return;

    valueStack.length -= num;
    locStack.length -= num;
    stateStack.length -= num; // TODO: original code lacks this line
  }

  this.stateAt = function stateAt (i)
  {
    return stateStack[stateStack.length-1 - i];
  }

  this.locationAt = function locationAt (i)
  {
    return locStack[locStack.length-1 - i];
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

  this.locationFromNthItemToCurrent = function locationFromNthItemToCurrent (n)
  {
    if (n > 0)
      return new Location(this.locationAt(n-1).begin, this.locationAt(0).end);
    
    var end = this.locationAt(0).end
    return new Location(end, end);
  }
}

// Instantiates the Bison-generated parser.
function YYParser (yylexer)
{
  // The scanner that will supply tokens to the parser.
  this.yylexer = yylexer;

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

  var yyntokens_ = this.yyntokens_ = ]b4_tokens_number[;
  
  var yyerrstatus_ = 0;
  
  // Return whether error recovery is being done.
  // In this state, the parser reads token until it reaches a known state,
  // and then restarts normal operation.
  this.isRecovering = function isRecovering ()
  {
    return yyerrstatus_ == 0;
  }

  var yyval, yystack;
  var actionsTable =
  {
    ]b4_list_of_actions[
  }

  function yyaction (yyn, yylen)
  {
    var yyloc = yystack.locationFromNthItemToCurrent(yylen);

    /* If YYLEN is nonzero, implement the default value of the action:
       `$$ = $1'.  Otherwise, use the top of the stack.

       Otherwise, the following line sets YYVAL to garbage.
       This behavior is undocumented and Bison
       users should not rely upon it.  */
    // var yyval; moved up in scope chain to share with actions
    if (yylen > 0)
      yyval = yystack.valueAt(yylen - 1);
    else
      yyval = yystack.valueAt(0);

    debug_reduce_print(yyn);

    var actionClosure = actionsTable[yyn]
    if (actionClosure)
      actionClosure(yystack)

    debug_symbol_print("-> $$ =", yyr1_[yyn], yyval, yyloc); // TODO: step into

    yystack.pop(yylen);
    yylen = 0;

    // Shift the result of the reduction.
    yyn = yyr1_[yyn];
    var yystate = yypgoto_[yyn - yyntokens_] + yystack.stateAt(0);
    if (0 <= yystate && yystate <= yylast_ && yycheck_[yystate] == yystack.stateAt(0))
      yystate = yytable_[yystate];
    else
      yystate = yydefgoto_[yyn - yyntokens_];

    yystack.push(yystate, yyval, yyloc);
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
    yystack = this.yystack = new YYStack();

    /* Error handling.  */
    var yynerrs_ = 0;
    // The location where the error started.
    var yyerrloc = null;

    // Location of the lookahead.
    var yylloc = new Location(null, null);

    // @@$.
    var yyloc;

    // Semantic value of the lookahead.
    var yylval = null;

    debug_puts("Starting parse");
    yyerrstatus_ = 0;


    // Initialize the stack.
    yystack.push(yystate, yylval, yylloc);

    var label = YYNEWSTATE;
    goto_loop: for (;;)
    switch (label)
    {
      //----------------.
      // New state.     |
      //---------------/
      case YYNEWSTATE:
        // Unlike in the C/C++ skeletons, the state is already pushed when we come here.

        debug_puts("Entering state " + yystate);
        debug_stack_print(yystack)

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
          debug_puts("Reading a token: ");
          yychar = yylexer.yylex();

          yylloc = new Location(yylexer.getStartPos(), yylexer.getEndPos());
          yylval = yylexer.getLVal();
        }


        // Convert token to internal form.
        if (yychar <= EOF)
        {
          yychar = yytoken = EOF;
          debug_puts("Now at end of input.");
        }
        else
        {
          if (yychar >= 0 && yychar <= yyuser_token_number_max_)
            yytoken = yytranslate_table_[yychar];
          else
            yytoken = yyundef_token_;

          debug_symbol_print("Next token is", yytoken, yylval, yylloc);
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
          debug_symbol_print("Shifting", yytoken, yylval, yylloc);

          // Discard the token being shifted.
          yychar = yyempty_;

          // Count tokens shifted since error;
          // after three, turn off error status.
          if (yyerrstatus_ > 0)
            --yyerrstatus_;

          yystate = yyn;
          yystack.push(yystate, yylval, yylloc);

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
          this.yyerror(yylloc, this.yysyntax_error(yystate, yytoken));
        }

        yyerrloc = yylloc;
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
            yychar = yyempty_;
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

        yyerrloc = yystack.locationAt(yylen - 1);
        // Do not reclaim the symbols of the rule
        // which action triggered this YYERROR.
        yystack.pop(yylen);
        yylen = 0;
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
            debug_puts('Empty stack while handling error');
            return false;
          }

          yyerrloc = yystack.locationAt(0);
          yystack.pop(1);
          yystate = yystack.stateAt(0);
          debug_stack_print(yystack)
        }


        // Muck with the stack to setup for yylloc.
        yystack.push(0, null, yylloc);
        yystack.push(0, null, yyerrloc);
        yyloc = yylloc(yystack, 2);
        yystack.pop(2);

        // Shift the error token.
        debug_symbol_print("Shifting", yystos_[yyn], yylval, yyloc);

        yystate = yyn;
        yystack.push(yyn, yylval, yyloc);
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
        return false;

      default:
        // won't reach here
        return false;
    } // for (;;) and switch (label)

    // won't reach here
    return false
  }


  // enabling debug will switch these functions to the usefull variants
  function debug_reduce_print (yyn) {}
  function debug_symbol_print (message, yytype, yyvaluep, yylocationp) {}
  function debug_stack_print (yystack) {}
  function debug_puts (message) {}

  this.enableDebug = function enableDebug ()
  {
    debug_reduce_print = this.debug_reduce_print.bind(this)
    debug_symbol_print = this.debug_symbol_print.bind(this)
    debug_stack_print  = this.debug_stack_print.bind(this)
    debug_puts         = this.debug_puts.bind(this)
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

  // YYRLINE[YYN] -- Source line where rule number YYN was defined.
  var yyrline_ = this.yyrline_ =
  [
    //]]
    b4_rline
    //[[
  ];

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
}

// rare used functions
YYParser.prototype =
{
  yyerror: function yyerror (location, message)
  {
    this.yylexer.yyerror(location, message);
  },
  
  // Report on the debug stream that the rule yyrule is going to be reduced.
  debug_reduce_print: function debug_reduce_print (yyrule)
  {
    var yystack = this.yystack;
    var yylno = this.yyrline_[yyrule];
    var yynrhs = this.yyr2_[yyrule];
    // Print the symbols being reduced, and their result.
    this.debug_puts("Reducing stack by rule " + (yyrule - 1) + " (line " + yylno + "), ");

    // The symbols being reduced.
    for (var yyi = 0; yyi < yynrhs; yyi++)
    {
      this.debug_symbol_print(
        "   $" + (yyi + 1) + " =",
        this.yyrhs_[this.yyprhs_[yyrule] + yyi],
        ]b4_rhs_value(yynrhs, yyi + 1)[,
        ]b4_rhs_location(yynrhs, yyi + 1)[
      );
    }
  },

  debug_symbol_print: function debug_symbol_print (message, yytype, yyvaluep, yylocationp)
  {
    this.debug_puts
    (
      message
      + (yytype < this.yyntokens_ ? " token " : " nterm ")
      + this.yytname_[yytype]
      + " ("
      + yylocationp + ": "
      + (yyvaluep == null ? "(null)" : yyvaluep)
      + ")"
    );
  },

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
            yycheck_[x + yyn] == x
            && x != yyterror_
            && this.yytable_[x + yyn] != this.yytable_ninf_ // yytable_[x + yyn] isn't an error
          )
          {
            res += (count++ == 0 ? ", expecting " : " or ");
            res += yytnamerr_(yytname_[x]);
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
  },

  debug_stack_print: function debug_stack_print ()
  {
    console.log("Stack now");

    var yystack = this.yystack
    for (var i = 0, ih = yystack.height(); i <= ih; i++)
    {
      console.log(' ' + yystack.stateAt(i));
    }
  },

  debug_puts: function debug_puts (message)
  {
    console.log(message);
  }
}

// Version number for the Bison executable that generated this parser.
YYParser.bisonVersion = "]b4_version[";

// Name of the skeleton that generated this parser.
YYParser.bisonSkeleton = ]b4_skeleton[;

// Tokens.
// Token numbers, to be returned by the scanner.
YYParser.TOKENS =
{
  EOF: 0,
]b4_token_enums(b4_tokens)[
};

]b4_epilogue[

}).call(this); // end of the parser namespase
]
b4_output_end()
