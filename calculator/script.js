// Select display
let display = document.getElementById("display");

// Add value
function append(value) {
    display.value += value;
}

// Clear
function clearDisplay() {
    display.value = "";
}

// Calculate
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
