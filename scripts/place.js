// Footer Dates
const currentYearSpan = document.querySelector("#currentyear");
currentYearSpan.textContent = new Date().getFullYear();

const lastModifiedElement = document.querySelector("#lastModified");
lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;

// Static weather inputs (matching the HTML content)
const temperature = 8; // °C (Conditions <= 10 °C)
const windSpeed = 12;  // km/h (Conditions > 4.8 km/h)

/**
 * Calculates metric wind chill factor based on temperature (°C) and wind velocity (km/h)
 * Formula: 13.12 + 0.6215*T - 11.37*(V^0.16) + 0.3965*T*(V^0.16)
 */
const calculateWindChill = (temp, speed) => 
    (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);

const chillElement = document.querySelector("#chill");

// Check eligibility limits before calling the function
if (temperature <= 10 && windSpeed > 4.8) {
    chillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
    chillElement.textContent = "N/A";
}