window.onscroll = function () { //whenever the user scrolls, call scrollfunction
    scrollFunction();
};

function scrollFunction() {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) //if we scrolled down 50px
        document.getElementById("floatingButton").style.display = "block"; //show the scroll button
    else
        document.getElementById("floatingButton").style.display = "none"; //hide it otherwise
}

function topFunction() { //When you press the button, scroll to the top
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function openNav() {
    document.getElementById("sideNav").style.width = "250px"; //set the sidenav width to 250px when open
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0"; //set to 0 when closed
}

