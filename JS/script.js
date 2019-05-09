window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() { //todo comment code
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

