window.onscroll = function () {
    scrollFunction();
};

window.addEventListener("load", highlightSyntax);

function scrollFunction() {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("floatingButton").style.display = "block";
    }  else {
        document.getElementById("floatingButton").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function openNav() {
    document.getElementById("sideNav").style.width = "250px";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}

function highlightSyntax() {
    var ca = document.getElementsByClassName("code-html");
    for(var i = 0; i < ca.length; i++) {
        var data = ca[i].innerHTML;
        data = data.replace(/"(.*?)"/g, '<span class="code-str">&quot;$1&quot;</span>');
        data = data.replace(/&lt;(.*?)&gt;/g, '<span class="code-elem">&lt;$1&gt;</span>');
        ca[i].innerHTML = data;
    }
}