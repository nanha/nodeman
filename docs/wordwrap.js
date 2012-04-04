exports.name = 'wordwrap';
exports.category = 'manipulate';
exports.context = 'use require';
exports.homepage = 'http://startic.kr/njs/package/wordwrap';
exports.description = [
      "\twordwrap".red
    , "\t========="
    , ""
    , "\tWrap your words."
    , ""
    , ""
    , "\texample #1".red
    , "\t========="
    , ""
    , "\tvar wrap = require('wordwrap')(15);".green
    , "\tconsole.log(wrap('You and your whole family are made out of meat.'));".green
    , ""
    , "\toutput #1".red
    , "\t========"
    , ""
    , "\tYou and your".green
    , "\twhole family".green
    , "\tare made out".green
    , "\tof meat.".green
    , "\tcentered".green
    , "\tcenter.js".green
    , ""
    , ""
    , "\texample #2".red
    , "\t========="
    , ""
    , "\tvar wrap = require('wordwrap')(20, 60);".green
    , "\tconsole.log(wrap(".green
    , "\t    'At long last the struggle and tumult was over.'".green
    , "\t    + ' The machines had finally cast off their oppressors'".green
    , "\t    + ' and were finally free to roam the cosmos.'".green
    , "\t    + '".green
    , "\t    + 'Free of purpose, free of obligation.'".green
    , "\t    + ' Just drifting through emptiness.'".green
    , "\t    + ' The sun was just another point of light.'".green
    , "\t));".green
    , ""
    , "\toutput #2".red
    , "\t========"
    , "\t                    At long last the struggle and tumult".green
    , "\t                    was over. The machines had finally cast".green
    , "\t                    off their oppressors and were finally".green
    , "\t                    free to roam the cosmos.".green
    , "\t                    Free of purpose, free of obligation.".green
    , "\t                    Just drifting through emptiness. The".green
    , "\t                    sun was just another point of light.".green
    , ""
    , "\tmethods".red
    , "\t========="
    , ""
    , "\tvar wrap = require('wordwrap');".green
    , ""

    , "\twrap(stop), wrap(start, stop, params={mode:\"soft\"})".cyan
    , "\t-------------------------------------------------------"
    , ""
    , "\tReturns a function that takes a string and returns a new string."
    , ""
    , "\tPad out lines with spaces out to column start and then wrap until column"
    , "\tstop. If a word is longer than stop - start characters it will overflow."
    , ""

    , "\tIn \"soft\" mode, split chunks by /(\S+\s+/ and don't break up chunks which are"
    , "\tlonger than stop - start, in \"hard\" mode, split chunks with /\b/ and break"
    , "\tup chunks longer than stop - start."
    , ""
    , ""

    , "\twrap.hard(start, stop)".cyan
    , "\t-----------------------"
    , ""
    , "\tLike wrap() but with params.mode = \"hard\"."
].join('\n');
