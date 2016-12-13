export default `<div class="lines" style="height: 920.5px; background-color: rgb(26, 35, 38);"><div style="isolation: isolate; z-index: 0;"><div style="position: absolute; display: block; z-index: 4; height: 126px; width: 882px; transform: translate3d(0px, 0px, 0px); background-color: rgb(26, 35, 38);"><div class="highlights"></div><div class="line cursor-line" data-screen-row="0"><span class="source cs omnisharp"><span class="keyword other using cs">using</span> <span class="entity name type namespace cs">System</span>;<span class="invisible-character eol">¬</span></span></div><div class="line" data-screen-row="1"><span class="source cs omnisharp"><span class="invisible-character eol">¬</span></span></div><div class="line" data-screen-row="2"><span class="source cs omnisharp"><span class="meta class cs"><span class="storage modifier cs">public</span> <span class="meta class identifier cs"><span class="storage modifier cs">class</span> <span class="entity name type class cs">SyntaxPreview</span></span><span class="invisible-character eol">¬</span></span></span></div><div class="line" data-screen-row="3"><span class="source cs omnisharp"><span class="meta class cs"><span class="meta class body cs"><span class="punctuation section class begin cs">{</span><span class="invisible-character eol">¬</span></span></span></span></div><div class="line" data-screen-row="4"><span class="source cs omnisharp"><span class="meta class cs"><span class="meta class body cs"><span class="invisible-character leading-whitespace indent-guide">····</span><span class="meta property cs"><span class="storage modifier cs">public</span> <span class="meta method return-type cs"><span class="storage type cs">string</span> </span><span class="meta method identifier cs"><span class="entity name function cs">Content</span> </span><span class="meta method body cs"><span class="punctuation section property begin cs">{</span> <span class="keyword other cs">get</span>; <span class="keyword other cs">set</span>; </span><span class="punctuation section property end cs">}</span></span> = <span class="string quoted double cs"><span class="punctuation definition string begin cs">"</span><span class="punctuation definition string end cs">"</span></span>;<span class="invisible-character eol">¬</span></span></span></span></div><div class="line" data-screen-row="5"><span class="source cs omnisharp"><span class="meta class cs"><span class="meta class body cs"><span class="invisible-character eol indent-guide">¬</span>   </span></span></span></div></div><div style="position: absolute; display: block; z-index: 3; height: 126px; width: 882px; transform: translate3d(0px, 126px, 0px); background-color: rgb(26, 35, 38);"><div class="highlights"></div><div class="line" data-screen-row="6"><span class="source cs omnisharp"><span class="meta class cs"><span class="meta class body cs"><span class="invisible-character leading-whitespace indent-guide">····</span><span class="meta method cs"><span class="storage modifier cs">public</span> <span class="meta method identifier cs"><span class="entity name function cs">SyntaxPreview</span>(List&lt;string&gt; options)</span><span class="invisible-character eol">¬</span></span></span></span></span></div><div class="line" data-screen-row="7"><span class="source cs omnisharp"><span class="meta class cs"><span class="meta class body cs"><span class="meta method cs"><span class="invisible-character leading-whitespace indent-guide">····</span><span class="meta method body cs"><span class="punctuation section method begin cs">{</span><span class="invisible-character eol">¬</span></span></span></span></span></span></div><div class="line" data-screen-row="8"><span class="source cs omnisharp"><span class="meta class cs"><span class="meta class body cs"><span class="meta method cs"><span class="meta method body cs"><span class="invisible-character leading-whitespace indent-guide">····</span><span class="invisible-character leading-whitespace indent-guide">····</span><span class="keyword control cs">if</span> (options.<span class="meta method-call cs"><span class="meta method cs">Count</span><span class="punctuation definition method-parameters begin cs">(</span><span class="punctuation definition method-parameters end cs">)</span></span> == <span class="constant numeric cs">0</span>)<span class="invisible-character eol">¬</span></span></span></span></span></span></div><div class="line" data-screen-row="9"><span class="source cs omnisharp"><span class="meta class cs"><span class="meta class body cs"><span class="meta method cs"><span class="meta method body cs"><span class="invisible-character leading-whitespace indent-guide">····</span><span class="invisible-character leading-whitespace indent-guide">····</span><span class="meta block cs"><span class="punctuation section block begin cs">{</span><span class="invisible-character eol">¬</span></span></span></span></span></span></span></div><div class="line" data-screen-row="10"><span class="source cs omnisharp"><span class="meta class cs"><span class="meta class body cs"><span class="meta method cs"><span class="meta method body cs"><span class="meta block cs"><span class="invisible-character leading-whitespace indent-guide">····</span><span class="invisible-character leading-whitespace indent-guide">····</span><span class="invisible-character leading-whitespace indent-guide">····</span><span class="keyword control cs">throw</span> <span class="storage modifier cs">new</span> <span class="meta method-call cs"><span class="meta method cs">Exception</span><span class="punctuation definition method-parameters begin cs">(</span><span class="punctuation definition method-parameters end cs">)</span></span>;<span class="invisible-character eol">¬</span></span></span></span></span></span></span></div><div class="line" data-screen-row="11"><span class="source cs omnisharp"><span class="meta class cs"><span class="meta class body cs"><span class="meta method cs"><span class="meta method body cs"><span class="meta block cs"><span class="invisible-character leading-whitespace indent-guide">····</span><span class="invisible-character leading-whitespace indent-guide">····</span><span class="punctuation section block end cs">}</span></span><span class="invisible-character eol">¬</span></span></span></span></span></span></div></div><div style="position: absolute; display: block; z-index: 2; height: 126px; width: 882px; transform: translate3d(0px, 252px, 0px); background-color: rgb(26, 35, 38);"><div class="highlights"></div><div class="line" data-screen-row="12"><span class="source cs omnisharp"><span class="meta class cs"><span class="meta class body cs"><span class="meta method cs"><span class="meta method body cs"><span class="invisible-character eol indent-guide">¬</span>   <span class="indent-guide">    </span></span></span></span></span></span></div><div class="line" data-screen-row="13"><span class="source cs omnisharp"><span class="meta class cs"><span class="meta class body cs"><span class="meta method cs"><span class="meta method body cs"><span class="invisible-character leading-whitespace indent-guide">····</span><span class="invisible-character leading-whitespace indent-guide">····</span><span class="constant language cs">this</span>.Content = options[<span class="constant numeric cs">0</span>];<span class="invisible-character eol">¬</span></span></span></span></span></span></div><div class="line" data-screen-row="14"><span class="source cs omnisharp"><span class="meta class cs"><span class="meta class body cs"><span class="meta method cs"><span class="meta method body cs"><span class="invisible-character leading-whitespace indent-guide">····</span></span><span class="punctuation section method end cs">}</span></span><span class="invisible-character eol">¬</span></span></span></span></div><div class="line" data-screen-row="15"><span class="source cs omnisharp"><span class="meta class cs"><span class="meta class body cs"><span class="invisible-character eol indent-guide">¬</span>   </span></span></span></div><div class="line" data-screen-row="16"><span class="source cs omnisharp"><span class="meta class cs"><span class="meta class body cs"><span class="invisible-character leading-whitespace indent-guide">····</span><span class="meta method cs"><span class="storage modifier cs">public</span> <span class="storage type cs">bool</span> <span class="meta method identifier cs"><span class="entity name function cs">IsLengthOf</span>(<span class="storage type generic cs">string</span> <span class="variable parameter function cs">str</span>)</span><span class="invisible-character eol">¬</span></span></span></span></span></div><div class="line" data-screen-row="17"><span class="source cs omnisharp"><span class="meta class cs"><span class="meta class body cs"><span class="meta method cs"><span class="invisible-character leading-whitespace indent-guide">····</span><span class="meta method body cs"><span class="punctuation section method begin cs">{</span><span class="invisible-character eol">¬</span></span></span></span></span></span></div></div><div style="position: absolute; display: block; z-index: 1; height: 126px; width: 882px; transform: translate3d(0px, 378px, 0px); background-color: rgb(26, 35, 38);"><div class="highlights"></div><div class="line" data-screen-row="18"><span class="source cs omnisharp"><span class="meta class cs"><span class="meta class body cs"><span class="meta method cs"><span class="meta method body cs"><span class="invisible-character leading-whitespace indent-guide">····</span><span class="invisible-character leading-whitespace indent-guide">····</span><span class="keyword control cs">return</span> <span class="constant language cs">this</span>.Content.Length == str.Length;<span class="invisible-character eol">¬</span></span></span></span></span></span></div><div class="line" data-screen-row="19"><span class="source cs omnisharp"><span class="meta class cs"><span class="meta class body cs"><span class="meta method cs"><span class="meta method body cs"><span class="invisible-character leading-whitespace indent-guide">····</span></span><span class="punctuation section method end cs">}</span></span><span class="invisible-character eol">¬</span></span></span></span></div><div class="line" data-screen-row="20"><span class="source cs omnisharp"><span class="meta class cs"><span class="meta class body cs"><span class="invisible-character eol indent-guide">¬</span>   </span></span></span></div><div class="line" data-screen-row="21"><span class="source cs omnisharp"><span class="meta class cs"><span class="meta class body cs"><span class="invisible-character leading-whitespace indent-guide">····</span><span class="meta method cs"><span class="storage modifier cs">public</span> <span class="storage type cs">bool</span> <span class="meta method identifier cs"><span class="entity name function cs">IsEven</span>()</span><span class="invisible-character eol">¬</span></span></span></span></span></div><div class="line" data-screen-row="22"><span class="source cs omnisharp"><span class="meta class cs"><span class="meta class body cs"><span class="meta method cs"><span class="invisible-character leading-whitespace indent-guide">····</span><span class="meta method body cs"><span class="punctuation section method begin cs">{</span><span class="invisible-character eol">¬</span></span></span></span></span></span></div><div class="line" data-screen-row="23"><span class="source cs omnisharp"><span class="meta class cs"><span class="meta class body cs"><span class="meta method cs"><span class="meta method body cs"><span class="invisible-character leading-whitespace indent-guide">····</span><span class="invisible-character leading-whitespace indent-guide">····</span><span class="keyword control cs">return</span> <span class="constant language cs">this</span>.Content.Length % <span class="constant numeric cs">2</span> === <span class="constant numeric cs">0</span>;<span class="invisible-character eol">¬</span></span></span></span></span></span></div></div><div style="position: absolute; display: block; z-index: 0; height: 63px; width: 882px; transform: translate3d(0px, 504px, 0px); background-color: rgb(26, 35, 38);"><div class="highlights"></div><div class="line" data-screen-row="24"><span class="source cs omnisharp"><span class="meta class cs"><span class="meta class body cs"><span class="meta method cs"><span class="meta method body cs"><span class="invisible-character leading-whitespace indent-guide">····</span></span><span class="punctuation section method end cs">}</span></span><span class="invisible-character eol">¬</span></span></span></span></div><div class="line" data-screen-row="25"><span class="source cs omnisharp"><span class="meta class cs"><span class="punctuation section class end cs">}</span></span><span class="invisible-character eol">¬</span></span></div><div class="line" data-screen-row="26"><span class="source cs omnisharp"></span> </div></div></div><div class="cursors blink-off"><div class="cursor" style="transform: translate(0px, 0px); height: 21px; width: 8px;"></div></div><content select=".overlayer"></content><content select=".atom--invisible-block-decoration" style="visibility: hidden; width: 882px;"></content><div is="wrap-guide" class="wrap-guide" style="left: 842px; display: block;"></div><div is="ecfg-wrap-guide" class="ecfg-wrap-guide" style="display: none;"></div></div>`;
