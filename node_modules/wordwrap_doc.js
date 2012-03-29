exports.__doc__ = "NAME\n".yellow
    + "\twordwrap\n"
    + "\n"
    + "MODULE DOCS\n".yellow
    + "\thttp://startic.kr/njs/package/wordwrap\n"
    + "\n"
    + "DESCRIPTION\n".yellow
    + "\twordwrap\n".red
    + "\t----------\n"
    + "\tWrap your words.\n"
    + "\n"

    + "\texample\n".red
    + "\t----------\n"
    + "\tmade out of meat\n"
    + "\tmeat.js\n"
    + "\n"

    + "\tvar wrap = require('wordwrap')(15);\n".green
    + "\tconsole.log(wrap('You and your whole family are made out of meat.'));\n".green
    + "\n"
    + "\toutput:\n".red
    + "\t----------\n"
    + "\n"

    + "\tYou and your\n".green
    + "\twhole family\n".green
    + "\tare made out\n".green
    + "\tof meat.\n".green
    + "\tcentered\n".green
    + "\tcenter.js\n".green
    + "\n"

    + "\tvar wrap = require('wordwrap')(20, 60);\n".green
    + "\tconsole.log(wrap(\n".green
    + "\t    'At long last the struggle and tumult was over.'\n".green
    + "\t    + ' The machines had finally cast off their oppressors'\n".green
    + "\t    + ' and were finally free to roam the cosmos.'\n".green
    + "\t    + '\n".green
    + "\t    + 'Free of purpose, free of obligation.'\n".green
    + "\t    + ' Just drifting through emptiness.'\n".green
    + "\t    + ' The sun was just another point of light.'\n".green
    + "\t));\n".green
    + "\n"
    + "\toutput:\n".red
    + "\t----------\n"

    + "\t                    At long last the struggle and tumult\n".green
    + "\t                    was over. The machines had finally cast\n".green
    + "\t                    off their oppressors and were finally\n".green
    + "\t                    free to roam the cosmos.\n".green
    + "\t                    Free of purpose, free of obligation.\n".green
    + "\t                    Just drifting through emptiness. The\n".green
    + "\t                    sun was just another point of light.\n".green
    + "\n"
    + "\tmethods\n".red
    + "\t----------\n"
    + "\tvar wrap = require('wordwrap');\n".green

    + "\twrap(stop), wrap(start, stop, params={mode:\"soft\"})\n".green
    + "\n"
    + "\tReturns a function that takes a string and returns a new string.\n"
    + "\n"

    + "\tPad out lines with spaces out to column start and then wrap until column\n"
    + "\tstop. If a word is longer than stop - start characters it will overflow.\n"
    + "\n"

    + "\tIn \"soft\" mode, split chunks by /(\S+\s+/ and don't break up chunks which are\n"
    + "\tlonger than stop - start, in \"hard\" mode, split chunks with /\b/ and break\n"
    + "\tup chunks longer than stop - start.\n"
    + "\n"

    + "\twrap.hard(start, stop)\n".green
    + "\n"
    + "\tLike wrap() but with params.mode = \"hard\".\n"
    ;
