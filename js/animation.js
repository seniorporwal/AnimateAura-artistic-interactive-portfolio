// DEFINE DOM ELEMENTS

const heroImage = document.querySelector("#hero__animation__img");

const tl = document.querySelector("#grid__t1");
const tr = document.querySelector("#grid__tr");
const bl = document.querySelector("#grid__bl");
const br = document.querySelector("#grid__br");

const tlBtn = document.querySelector("#grid__t1__btn");
const trBtn = document.querySelector("#grid__tr__btn");
const blBtn = document.querySelector("#grid__bl__btn");
const brBtn = document.querySelector("#grid__br__btn");

const tlContent = document.querySelector("#grid__t1__content");
const trContent = document.querySelector("#grid__tr__content");
const blContent = document.querySelector("#grid__bl__content");
const brContent = document.querySelector("#grid__br__content");

const projectOne = document.querySelector(".p-1");
const projectTwo = document.querySelector(".p-2");
const projectThree = document.querySelector(".p-3");

// Define colors and positions
const bgColor = "var(--bg)";
const bgColorAlt = "var(--bg-alt)";
const textColor = "var(--text)";
const textColorAlt = "var(--text-alt)";

// we're going to give these positoins to tlcontent when active and hidden
let tlActive = "translateX(5vw) translateY(0)";
let tlHidden = "translateX(-100vw) translateY(-100vh)";

let trActive = "translateX(-5vw) translateY(0)";
let trHidden = "translateX(100vw) translateY(-100vh)";

let blActive = "translateX(10vw) translateY(7vh)";
let blHidden = "translateX(-100vw) translateY(100vh)";

let brActive = "translateX(-5vw) translateY(0)";
let brHidden = "translateX(100vw) translateY(100vh)";

//Define corner that is open
let activeCorner = "";

// Add an event listener to the window object to listen for resize events
window.addEventListener("resize", handleWindowResize);

// Function that handles the styling when resizing window
function handleWindowResize() {
    //some code
}

// Store last reverse animation, ready to be played
let lastReverseAnimation = "";

// Play animation function
function playAnimation(animation, reverseAnimation){
    //do something with these values
}
function playClosingAnimation(animation, reverseAnimation){
    //do something with these values
}

// handle the onclick for each corner
//Onclick corner button functions

tlBtn.onclick = function () {
    if(activeCorner === "top-left") {
        playClosingAnimation("reverse-animate-top-left");
    } else {

        //removing arrow by default
        trBtn.innerHTML = "Experience";
        blBtn.innerHTML = "Projects";
        brBtn.innerHTML = "Contacts";

        // setting active corner
        activeCorner="top-left";
        tlBtn.innerHTML = "&uarr; <br/> About";   //adding arrow above about

        handleWindowResize();
        playAnimation("animate-top-left", "reverse-animate-top-left");

        //change background colors
        trBtn.style.background = bgColor;
        brBtn.style.background = bgColor;
        blBtn.style.background = bgColor;
        tlBtn.style.background = bgColorAlt;

        //change text colors
        trBtn.style.color = textColor;
        brBtn.style.color = textColor;
        blBtn.style.color = textColor;
        tlBtn.style.color = textColorAltColorAlt;

        // Change the positoins of the corner content
        trcontent.style.transform = trHidden;
        brcontent.style.transform = brHidden;
        blcontent.style.transform = blHidden;
        tlcontent.style.transform = tlActive;
    }
};


trBtn.onclick = function () {
    if(activeCorner === "top-right") {
        playClosingAnimation(reverse-animate-top-right);
    } else {
        //removing arrow by default
        tlBtn.innerHTML = "About";
        blBtn.innerHTML = "Projects";
        brBtn.innerHTML = "Contacts";

        //setting active corner
        activeCorner="top-right";
        trBtn.innerHTML = "&uarr; <br/> Experience";   //adding arrow above about

        handleWindowResize();
        playAnimation("animate-top-right", "reverse-animate-top-right");

        //change background colors
        trBtn.style.background = bgColorAlt;
        brBtn.style.background = bgColor;
        blBtn.style.background = bgColor;
        tlBtn.style.background = bgColor;

        //change text colors
        trBtn.style.color = textColorAlt;
        brBtn.style.color = textColor;
        blBtn.style.color = textColor;
        tlBtn.style.color = textColor;

        // Change the positoins of the corner content
        trcontent.style.transform = trActive;
        brcontent.style.transform = brHidden;
        blcontent.style.transform = blHidden;
        tlcontent.style.transform = tlHidden;
    }
};

blBtn.onclick = function () {
    if(activeCorner === "buttom-left") {
        playClosingAnimation(reverse-animate-buttom-left);
    } else {
        //removing arrow by default
        tlBtn.innerHTML = "About";
        trBtn.innerHTML = "Experience";
        brBtn.innerHTML = "Contacts";

        //setting active corner
        activeCorner="buttom-left";
        blBtn.innerHTML = "Projects <br/> &darr;";   //adding arrow above about

        handleWindowResize();
        playAnimation("animate-buttom-left", "reverse-animate-buttom-left");

        //change background colors
        trBtn.style.background = bgColor;
        brBtn.style.background = bgColor;
        blBtn.style.background = bgColorAlt;
        tlBtn.style.background = bgColor;

        //change text colors
        trBtn.style.color = textColor;
        brBtn.style.color = textColor;
        blBtn.style.color = textColorAlt;
        tlBtn.style.color = textColor;

        // Change the positoins of the corner content
        trcontent.style.transform = trHidden;
        brcontent.style.transform = brHidden;
        blcontent.style.transform = blActive;
        tlcontent.style.transform = tlHidden;
    }
};

brBtn.onclick = function () {
    if(activeCorner === "buttom-right") {
        playClosingAnimation(reverse-animate-buttom-right);
    } else {
        //removing arrow by default
        tlBtn.innerHTML = "About";
        trBtn.innerHTML = "Experience";
        blBtn.innerHTML = "Projects";

        //setting active corner
        activeCorner="buttom-right";
        brBtn.innerHTML = "Contacts <br/> &darr;";   //adding arrow above about

        handleWindowResize();
        playAnimation("animate-buttom-right", "reverse-animate-buttom-right");

        //change background colors
        trBtn.style.background = bgColor;
        brBtn.style.background = bgColorAlt;
        blBtn.style.background = bgColor;
        tlBtn.style.background = bgColor;

        //change text colors
        trBtn.style.color = textColor;
        brBtn.style.color = textColorAlt;
        blBtn.style.color = textColor;
        tlBtn.style.color = textColor;

        // Change the positoins of the corner content
        trcontent.style.transform = trHidden;
        brcontent.style.transform = brActive;
        blcontent.style.transform = blHidden;
        tlcontent.style.transform = tlHidden;
    }
};