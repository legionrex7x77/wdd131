const countDisplay = document.querySelector("#review-count");

function trackReviews() {
    let reviewCount = Number(localStorage.getItem("reviewCount-ls")) || 0;
    reviewCount += 1;
    localStorage.setItem("reviewCount-ls", reviewCount);

    if (countDisplay) {
        countDisplay.textContent = reviewCount;
    }
}

const yearSpan = document.querySelector("#currentyear");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

const lastModifiedSpan = document.querySelector("#lastModified");
if (lastModifiedSpan) {
    lastModifiedSpan.textContent = `Last Modification: ${document.lastModified}`;
}

document.addEventListener("DOMContentLoaded", trackReviews);