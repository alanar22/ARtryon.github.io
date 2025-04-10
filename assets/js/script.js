'use strict';



/*
- add event on element 
*/

const addEventOnElem = function (elem, type, callback) {
    if (NodeList.prototype.isPrototypeOf(elem)) {
        for (let i = 0; i < elem.length; i++) {
            elem[i] .addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
}



/*
- navbar toggle
*/

const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
    if (navbar) navbar.classList.toggle("active");
    if (overlay) overlay.classList.toggle("active");
};

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
    if (navbar) navbar.classList.remove("active");
    if (overlay) overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/*
- header sticky & back top btn active 
*/

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
    if (header) {
        if (window.scrollY > 150) {
            header.classList.add("active");
            backTopBtn.classList.add("active");
        } else {
            header.classList.remove("active")
            backTopBtn.classList.remove("active");
        }
    }
    
}

window.addEventListener("scroll", headerActive);

let lastScrolledPos = 0;

const headerSticky = function () {
    if (header) {
        if (lastScrolledPos >= window.scrollY) {
            header.classList.remove("header-hide");
        } else {
            header.classList.add("header-hide");
        }
        lastScrolledPos = window.scrollY;
    }
};

addEventOnElem(window, "scroll", headerSticky);


/*
- Scroll reveal effect
*/

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
            sections[i].classList.add("active");
        }
    }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);


document.getElementById("chatbot-button").addEventListener("click", function() {
    document.getElementById("chatbot-container").style.display = "flex";
});

document.getElementById("close-chat").addEventListener("click", function() {
    document.getElementById("chatbot-container").style.display = "none";
});

document.getElementById("send-button").addEventListener("click", function() {
    let userText = document.getElementById("user-input").value.toLowerCase();
    let chatbox = document.getElementById("chatbot-messages");

    // Display user message
    chatbox.innerHTML += `<div><b>You:</b> ${userText}</div>`;

    // Fashion chatbot responses
    let responses = {
        "greeting": ["Hi!", "Hello!", "Hey!", "Hi, how can I help you today?"],
        "goodbye": ["Bye!", "Have a good day!", "Talk to you later!", "Enjoy the rest of your day!"],
        "brown halter neck top": ["You can wear this top with blue jeans, black heels and a black shoulder bag. This outfit would be best suited with gold jewellery."],
        "white top": ["You could wear this with black or blue fitted jeans and a white closed heel. It would look nice with small jewellery that is layered."],
        "black off the shoulder top": ["This would look nice with blue jeans and black heels. If you were to wear jewellery, bulky gold jewellery would pair nicely. In colder months, a black trench coat would suit this outfit."],
        "brown leather skirt": ["You can wear this with a white fitted crew neckline top and brown leather boot heels. A baby pink bag to match."],
        "black maxi dress": ["This would go well with a black or nude heel and a black bag. Sometimes, the simpler the outfit, the more timeless."],
        "fur skirt": ["Either wear this with a white or brown short sleeve fitted top. With brown knee-high boots and a brown bag to match."],
        "black dress": ["You could wear this with gold heels and a gold bag if you were to wear this to a dinner. Or a white shoe with a bag color of your choice. This outfit would be best suited with gold jewellery."]
    };

    // Find response based on input
    let response = "I'm not sure, can you be more specific?";
    for (let key in responses) {
        if (userText.includes(key)) {
            response = responses[key][Math.floor(Math.random() * responses[key].length)];
            break;
        }
    }

    // Display bot response
    setTimeout(() => {
        chatbox.innerHTML += `<div><b>Bot:</b> ${response}</div>`;
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 500);

    // Clear input field
    document.getElementById("user-input").value = "";
});
