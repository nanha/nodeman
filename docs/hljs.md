# hljs

[hljs](https://github.com/pumbur/highlight.js) is heavily modified fork of
[highlight.js](https://github.com/isagalaev/highlight.js),
javascript syntax highlighter with language autodetection

**getting and building:**

```bash
git clone https://github.com/pumbur/hljs
# installing libs for make-script (need ruby and ruby-gems):
gem install haml sass yui-compressor closure-compiler uglifier
cd hljs
# if need, edit options in end of make file
ruby ./make
```
    
**usage:**

Standalone:

```html
<script src="hljs.js"></script>
<!-- add language file, if it not merged in hljs.js: -->
<!--<script src="languages/python.js"></script>-->
<link href="styles/default.css" rel="stylesheet"/>

<script>
  // automatic initialization:
  hljs.initHighlightingOnLoad();
  hljs.tabReplace = '  '; // you can insert html: '<span class="indent">\t</span>'
  // or custom initialization:
  /*
  onload = function(){
    var e = document.getElementById("code");
    hljs.highlightBlock(e, '  ', true);
    console.log( hljs('...code...', 'language') );
  }
  */
</script>

<!-- code for highlight: -->
<pre><code>...code...</code></pre>
<!-- explicitly set language -->
<pre><code class="python">...code...</code></pre>
<!-- disable highlighting -->
<pre><code class="no-highlight">...code...</code></pre>
```

JQuery:

```html
<script src="jquery.js"></script>
<script src="hljs.js"></script>
<!-- add language file, if it not merged in hljs.js: -->
<!--<script src="languages/python.js"></script>-->
<link href="styles/default.css" rel="stylesheet"/>

<script>  
  onload = function(){
    $('pre code:not(.no-highlight)').highlight();
    //$('pre code.python').highlight('python');
    //console.log( hljs('...code...', 'language') );
  }
</script>

<!-- code for highlight: -->
<pre><code>...code...</code></pre>
<!-- explicitly set language: -->
<pre><code class="python">...code...</code></pre>
<!-- disable highlighting: -->
<pre><code class="no-highlight">...code...</code></pre>
```

CommonJS:

```javascript
var hljs = require('hljs');
console.log( hljs('...code...', 'language') );
```

