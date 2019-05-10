let webQuestions = [
    {
        question: "What does DNS stand for?",
        answers: {
            a: "Domain Nameserver System",
            b: "Dynamic Naming System",
            c: "Digital Name Server",
            d: "Domain Name System",
        },
        correct: "d"
    },
    {
        question: "What is the purpose of a DNS Server?",
        answers: {
            a: "To provide websites, such as Google.co.uk",
            b: "To provide the IP address of a server from a Domain Name",
            c: "To purchase Domain Names for your websites",
            d: "To host data in the cloud",
        },
        correct: "b"
    },
    {
        question: "What does URI stand for?",
        answers: {
            a: "Universal Resource Identification",
            b: "Uniform Resource Identifier",
            c: "Uniform Resource Identification",
        },
        correct: "b"
    },
    {
        question: "What does URL stand for?",
        answers: {
            a: "Universal Resource Location",
            b: "Uniform Resource Locator",
            c: "Uniform Resource Location",
        },
        correct: "b"
    },
    {
        question: "Who developed HTML in 1990?",
        answers: {
            a: "Bill Gates",
            b: "Mark Zuccerberg",
            c: "Jeff Goldblum",
            d: "Tim Berners-Lee",
            e: "Bob Kahn",
        },
        correct: "d"
    },
    {
        question: "What does HTTP stand for?",
        answers: {
            a: "HyperText Transmission Profile",
            b: "HyperText Transfer Profile",
            c: "HyperTech Transfer Protocol",
            d: "HyperTech Transmission Profile",
            e: "HyperText Transfer Protocol",
        },
        correct: "e"
    },
    {
        question: "What is the name of the research institute " +
            "which introduced the WWW to the public in 1991?",
        answers: {
            a: "Microsoft",
            b: "Google",
            c: "SRI",
            d: "CERN",
            e: "Cisco",
            f: "MIT",
        },
        correct: "e"
    }
];

let htmlQuestions = [
    {
        question: "What does HTML stand for?",
        answers: {
            a: "Hyper Tech Markup Language",
            b: "Hyper Text Markup Language",
            c: "Hyperlinks and Text Markup Language"
        },
        correct: "b"
    },
    {
        question: "What does WWW stand for?",
        answers: {
            a: "World Website Web",
            b: "Wide Website Web",
            c: "World Wide Web"
        },
        correct: "c"
    },
    {
        question: "What does XML stand for?",
        answers: {
            a: "Xtra Markup Language",
            b: "Extreme Markup Language",
            c: "Extensible Markup Language",
            d: "Extendable Markup Language",
        },
        correct: "c"
    },
    {
        question: "What version of HTML tags does XHTML support?",
        answers: {
            a: "HTML 3.0",
            b: "HTML 4.01",
            c: "HTML 5",
            d: "XML",
        },
        correct: "b"
    },
    {
        question: "What should go inside the &lt;head&gt; section?",
        answers: {
            a: "Titles, Metadata and Scripts",
            b: "Titles, Content, Metadata",
            c: "Doctype declaration",
            d: "Titles, Links, Scripts",
        },
        correct: "a"
    },
    {
        question: "What should go inside the &lt;body&gt; section?",
        answers: {
            a: "Metadata",
            b: "Content, Images etc.",
            c: "Doctype declaration",
        },
        correct: "b"
    },
    {
        question: "Which of the below is a valid HTML 4.01 DOCTYPE?",
        answers: {
            a: "&lt;!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01//EN\" \"http://www.w3.org/TR/html4/strict.dtd\"&gt;",
            b: "&lt;!DOCTYPE HTML4 PUBLIC \"-//DTD HTML 4.01//EN\" \"http://www.w3.org/TR/html5/strict.dtd\"&gt;",
            c: "&lt;!DOCTYPE HTML4 PUBLIC \"-//DTD HTML 5//EN\" \"http://www.w3.org/TR/html5/strict.dtd\"&gt;",
            d: "&lt;!DOCTYPE html&gt;",
        },
        correct: "a"
    },
    {
        question: "Which of the below is a valid XHTML 1.0 DOCTYPE?",
        answers: {
            a: "&lt;!DOCTYPE PUBLIC \"-//W3C//DTD XHTML//EN\" \"http://www.w3.org/TR/xhtml1/DTD /xhtml1-strict.dtd\"&gt;",
            b: "&lt;!DOCTYPE HTML PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD /xhtml1-strict.dtd\"&gt;",
            c: "&lt;!DOCTYPE HTML4 PUBLIC \"-//DTD HTML 4.01//EN\" \"http://www.w3.org/TR/html5/strict.dtd\"&gt;",
            d: "&lt;!DOCTYPE html&gt;",
        },
        correct: "b"
    },
    {
        question: "Which of the below is a valid HTML 5 DOCTYPE?",
        answers: {
            a: "&lt;!DOCTYPE PUBLIC \"-//W3C//DTD HTML//EN\" \"http://www.w3.org/TR/xhtml1/DTD /xhtml1-strict.dtd\"&gt;",
            b: "&lt;!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML5 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD /xhtml1-strict.dtd\"&gt;",
            c: "&lt;!DOCTYPE HTML5 PUBLIC \"-//DTD HTML 5//EN\" \"http://www.w3.org/TR/html5/strict.dtd\"&gt;",
            d: "&lt;!DOCTYPE html&gt;",
        },
        correct: "d"
    },
    {
        question: "Which of the below is valid in XHTML?",
        answers: {
            a: "&lt;br&gt;",
            b: "&lt;/br&gt;",
            c: "&lt;br /&gt;",
        },
        correct: "c"
    },
    {
        question: "What is the range of available headings?",
        answers: {
            a: "h1, h2, h3, h4",
            b: "h1, h2, h3, h4, h5",
            c: "h1, h2, h3, h4, h5, h6",
            d: "h1, h2, h3, h4, h5, h6, h7",
        },
        correct: "c"
    },
    {
        question: "Which inline tags below are functionally equal to &lt;strong&gt;?",
        answers: {
            a: "&lt;b&gt;",
            b: "&lt;bold&gt;",
            c: "&lt;i&gt;",
            d: "&lt;em&gt;",
        },
        correct: "a"
    },
    {
        question: "Which of the below input types allows only one choice?",
        answers: {
            a: "Checkbox",
            b: "Text",
            c: "Single",
            d: "Radio",
        },
        correct: "d"
    },
    {
        question: "Which method sends data in the body of the request?",
        answers: {
            a: "GET",
            b: "FETCH",
            c: "POST",
            d: "BODY",
        },
        correct: "c"
    }
];

let cssQuestions = [ //todo complete these questions
    {
        question: "What does CSS stand for?",
        answers: {
            a: "Classic Style Sheets",
            b: "Cascading Style Sheets",
            c: "Cascading Stylised Sheets"
        },
        correct: "b"
    },
    {
        question: "Which identifier can be only used once per page?",
        answers: {
            a: "Link",
            b: "Class",
            c: "Id"
        },
        correct: "c"
    },
    {
        question: "Which Identifier can be used more than once per page?",
        answers: {
            a: "Link",
            b: "Class",
            c: "Id"
        },
        correct: "b"
    },
    {
        question: "Which of the below selectors has the highest specificity?",
        answers: {
            a: "#thisBox",
            b: ".special",
            c: "p",
            d: "#thisBox > p",
            e: "#thisBox p.special"
        },
        correct: "b"
    },
    {
        question: "Which pseudo element affects when you mouseover a link?",
        answers: {
            a: "hover",
            b: "link",
            c: "overview",
            d: "link",
            e: "active"
        },
        correct: "a"
    },
    {
        question: "Which of the below styling options hides the element, but still takes up the space?",
        answers: {
            a: "display: none",
            b: "visibility: hidden",
            c: "display: hidden",
            d: "hidden: inline",
        },
        correct: "b"
    }
];

let jsQuestions = [
    {
        question: "What is the purpose of JavaScript",
        answers: {
            a: "Change the behavior of the website",
            b: "Layout and design of the website",
            c: "The content of a website"
        },
        correct: "a"
    },
    {
        question: "How would you hide an image with id='Kitten'?",
        answers: {
            a: "document.getElementByQuery('kitten').style.display = 'none';",
            b: "html.getElementById('kitten').style.display = 'none';",
            c: "document.getElementById('kitten').style.display = 'none';",
            d: "document.getElementByClass('kitten').style.display = 'none';"
        },
        correct: "c"
    },
    {
        question: "What is the issue with document.write()?",
        answers: {
            a: "It only takes strings",
            b: "If it is re-run it will delete the current HTML",
            c: "It is deprecated, so shouldn't be used on your site",
            d: "It creates pop-up windows, which you don't need"
        },
        correct: "b"
    },
    {
        question: "What would fruit[2] reference in var fruit = [\"Apple\", \"Orange\", \"Pear\"]?",
        answers: {
            a: "Apple",
            b: "Orange",
            c: "Pear",
            d: "null"
        },
        correct: "c"
    },
    {
        question: "What will x in, x =  (10 < 10) ? \"A\" : \"B\" ?",
        answers: {
            a: "A",
            b: "B",
            c: "null"
        },
        correct: "b"
    }
];