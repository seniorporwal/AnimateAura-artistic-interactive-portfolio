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

let tlActive = "translateX(5vw) translateY(0)";
let tlHidden = "translateX(-100vw) translateY(-100vh)";

let trActive = "translateX(-5vw) translateY(0)";
let trHidden = "translateX(100vw) translateY(-100vh)";

let tlActive = "translateX(10vw) translateY(7vh)";
let tlHidden = "translateX(-100vw) translateY(100vh)";

let tlActive = "translateX(-5vw) translateY(0)";
let tlHidden = "translateX(100vw) translateY(100vh)";

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

