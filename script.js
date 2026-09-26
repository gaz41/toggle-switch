// Access toggle input elements and status text elements from the DOM
let toggleInput1 = document.getElementById("toggleInput1");
let toggleInput2 = document.getElementById("toggleInput2");
let toggleInput3 = document.getElementById("toggleInput3");
let statusText1 = document.getElementById("status1");
let statusText2 = document.getElementById("status2");
let statusText3 = document.getElementById("status3");

// Initialize status messages for each toggle
statusText1.innerHTML = "toggle 1 ON (default)"; // initial message
statusText2.innerHTML = "toggle 2 OFF"; // initial message
statusText3.innerHTML = "toggle 3 OFF"; // initial message

// Toggle state variables
const toggleObj = {
  toggle1: false,
  toggle2: false,
  toggle3: false,
};

// Function to update the display of toggle states
const displayState = () => {
  state.innerHTML = `
  <div>toggle 1 : ${toggleObj.toggle1}</div>
  <div>toggle 2 : ${toggleObj.toggle2}</div>
  <div>toggle 3 : ${toggleObj.toggle3}</div>`;
};

// Display area for toggle status
const display = document.getElementById("toggleText");
const state = document.getElementById("toggleState");
const reset = document.getElementById("resetBtn");

display.innerHTML = "Click on a toggle switch"; // Initial message
displayState(); // Set initial state display

// Function to reset toggle switches to their default states
const resetCheckboxes = () => {
  // Reset toggle states
  toggleObj.toggle1 = true;
  toggleObj.toggle2 = false;
  toggleObj.toggle3 = false;

  // Update toggle elements in the DOM
  toggleInput1.checked = toggleObj.toggle1;
  toggleInput2.checked = toggleObj.toggle2;
  toggleInput3.checked = toggleObj.toggle3;

  // Update status text for each checkbox
  statusText1.innerHTML = `toggle 1 ON (default)`;
  statusText2.innerHTML = `toggle 2 OFF`;
  statusText3.innerHTML = `toggle 3 OFF`;

  display.innerHTML = "Click on a toggle switch"; // Reset display message
  displayState(); // Refresh the state display
};

// Event listener for reset button
reset.addEventListener("click", resetCheckboxes);

// Event listener for toggle 1
toggleInput1.addEventListener("change", function () {
  toggleObj.toggle1 = this.checked; // Update toggle state
  statusText1.innerHTML = `toggle 1 ${toggleObj.toggle1 ? "ON" : "OFF"}`; // Update status text

  // Update display based on toggle state
  display.innerHTML = `toggle 1 switched ${toggleObj.toggle1 ? "ON" : "OFF"}`;
  display.style.color = toggleObj.toggle1 ? `#000000` : `#606060`;
  display.style.textDecorationColor = toggleObj.toggle1 ? `#000000` : `#606060`;
  displayState(); // Refresh the state display
});

// Event listener for toggle 2
toggleInput2.addEventListener("change", function () {
  toggleObj.toggle2 = this.checked; // Update toggle state
  statusText2.innerHTML = `toggle 2 ${toggleObj.toggle2 ? "ON" : "OFF"}`; // Update status text

  // Update display based on toggle state
  display.innerHTML = `toggle 2 switched ${toggleObj.toggle2 ? "ON" : "OFF"}`;
  display.style.color = toggleObj.toggle2 ? `#000000` : `#606060`;
  display.style.textDecorationColor = toggleObj.toggle2 ? `#000000` : `#606060`;
  displayState(); // Refresh the state display
});

// Event listener for toggle 3
toggleInput3.addEventListener("change", function () {
  toggleObj.toggle3 = this.checked; // Update toggle state
  statusText3.innerHTML = `toggle 3 ${toggleObj.toggle3 ? "ON" : "OFF"}`; // Update status text

  // Update display based on toggle state
  display.innerHTML = `toggle 3 switched ${toggleObj.toggle3 ? "ON" : "OFF"}`;
  display.style.color = toggleObj.toggle3 ? `#000000` : `#606060`;
  display.style.textDecorationColor = toggleObj.toggle3 ? `#000000` : `#606060`;
  displayState(); // Refresh the state display
});

// COPYRIGHT NOTICE
// Dynamically generate copyright information
const copyright = document.getElementById("copy");
copyright.innerHTML =
  "Copyright &copy; " + // Start of the copyright string
  new Date().getFullYear() + // Get the current year
  ` <a href="https://www.gaz41.com">gaz41.com</a>. <span class="copy2">All Rights Reserved</span>`;
