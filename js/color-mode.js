// Define DOM elements

// #hero__animation WRONG WAY

const toggleButton = document.querySelector("#toggle_button");
// console.log(toggleButton);

const root = document.querySelector(":root");
const storageKey = "color-mode";
const defaultMode = "light-mode";

//load the user's preferred color mode from local storage.
function loadColorMode() {
    const colorMode = localStorage.getItem(storageKey);
    root.classList.add(colorMode || defaultMode);
    // updateToggleButton();
}

loadColorMode();

//Toggle the color mode
toggleButton.addEventListener("click", () => {
    saveColorMode();
})

//Save the user's preferred color mode to local storage
function saveColorMode(){
    //check if the root element has a class of "dark-mode". If yes, then the current mode is switched to light, and vice versa.
    const currentMode = root.classList.contains("dark-mode") 
    ? "light-mode" 
    : "dark-mode";
    root.classList.remove("light-mode", "dark-mode");
    root.classList.add(currentMode);
    localStorage.setItem(storageKey, currentMode);
    // updateToggleButton();
}

// function updateToggleButton() {
//     if (root.classList.contains("dark-mode")){
//         toggleButton.style.backgroundImage = "var(--moon)";
//     } else{
//         toggleButton.style.backgroundImage = "var(--sun)";
//     }
// }