// Populate copyright year dynamically
const currentYearSpan = document.querySelector("#currentyear");
const today = new Date();
currentYearSpan.textContent = today.getFullYear();

// Populate last modified date
const lastModifiedParagraph = document.querySelector("#lastModified");
lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;