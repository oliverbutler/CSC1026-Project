window.document.onload = highlightSyntax();
//todo comment
function highlightSyntax() { //todo code-css
    var ca = document.getElementsByClassName("code-html");
    for(var i = 0; i < ca.length; i++) {
        var data = ca[i].innerHTML;
        data = data.replace(/"(.*?)"/g, '<span class="code-str">&quot;$1&quot;</span>');
        data = data.replace(/&lt;(.*?)&gt;/g, '<span class="code-elem">&lt;$1&gt;</span>');
        ca[i].innerHTML = data;
    }
}