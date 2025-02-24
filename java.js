// script.js

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select the header element
  const header = document.querySelector("header");

  // Change header background color when clicked
  header.addEventListener("click", function () {
    header.style.backgroundColor = "#FF5722"; // Change to orange
    alert("Access denied");
  });

  // Log a message to the console
  console.log("Welcome to Daud's Portfolio!");
});
