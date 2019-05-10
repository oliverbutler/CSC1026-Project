window.document.onload = highlightSyntax();

function highlightSyntax() {
    var code = document.getElementsByClassName("code-html"); //syntax highlight the HTML
    for(var i = 0; i < code.length; i++) { //gets the array of all the HTML code
        var data = code[i].innerHTML; //for every line of it, data replace
        data = data.replace(/"(.*?)"/g, '<span class="code-blue">&quot;$1&quot;</span>'); //replace quotes with blue quotes
        data = data.replace(/&lt;(.*?)&gt;/g, '<span class="code-purple">&lt;$1&gt;</span>'); //replace <> with coloured < >
        code[i].innerHTML = data; //put it back into the document
    }

    var codeCSS = document.getElementsByClassName("code-css"); //exactly the same
    for(var i = 0; i < codeCSS.length; i++) {
        var data = codeCSS[i].innerHTML;
        data = data.replace(/(.*?){/g, '<span class="code-yellow">$1</span> {'); //replace anything before { so the names like body make them yellow
        data = data.replace(/: (.*?)px/g, ': <span class="code-blue">$1</span><span class="code-green">px</span>'); //replace anything called px
        codeCSS[i].innerHTML = data;
    }

    var codeJS = document.getElementsByClassName("code-js");
    for(var i = 0; i < codeJS.length; i++) {
        var data = codeJS[i].innerHTML;
        data = data.replace(/"(.*?)"/g, '<span class="code-green">&quot;$1&quot;</span>'); //replace double quotes
        data = data.replace(/'(.*?)'/g, '<span class="code-green">&#39;$1&#39;</span>'); //replace single quotes
        data = data.replace(/function/g, '<span class="code-yellow">function</span>'); //make function yellow
        codeJS[i].innerHTML = data;
    }
}