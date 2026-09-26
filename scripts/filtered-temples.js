const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salta Argentina",
        location: "Salta, Argentina",
        dedicated: "2024, June, 16",
        area: 27000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salta-argentina/400x250/salta_argentina_temple_exterior.jpg"
    },
    {
        templeName: "Salt Lake Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg"
    },
    {
        templeName: "Colonia Juárez Chihuahua Mexico",
        location: "Colonia Juárez, Chihuahua, Mexico",
        dedicated: "1999, March, 6",
        area: 6800,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/colonia-juarez-mexico/400x250/colonia-juarez-mexico-temple-763428-wallpaper.jpg"
    }
];

const container = document.querySelector("#temple-cards");
const galleryTitle = document.querySelector("#gallery-title");
const menuBtn = document.querySelector("#menu-btn");
const navBar = document.querySelector("#nav-bar");
const navLinks = document.querySelectorAll("nav a");

menuBtn.addEventListener("click", () => {
    navBar.classList.toggle("open");
    menuBtn.innerHTML = navBar.classList.contains("open") ? "&times;" : "&#9776;";
});

function displayTemples(templeList) {
    container.innerHTML = "";

    templeList.forEach((temple) => {
        const card = document.createElement("figure");
        card.classList.add("temple-card");

        card.innerHTML = `
            <div class="temple-info">
                <h2>${temple.templeName}</h2>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
            </div>
            <img src="${temple.imageUrl}" 
                 alt="${temple.templeName} Temple" 
                 loading="lazy" 
                 width="400" 
                 height="250">
        `;

        container.appendChild(card);
    });
}

function getDedicationYear(dedicatedString) {
    return parseInt(dedicatedString.split(",")[0].trim(), 10);
}

function setupFilters() {
    const filterRules = {
        "filter-home": {
            title: "Home",
            filterFn: () => temples
        },
        "filter-old": {
            title: "Old Temples",
            filterFn: () => temples.filter((t) => getDedicationYear(t.dedicated) < 1900)
        },
        "filter-new": {
            title: "New Temples",
            filterFn: () => temples.filter((t) => getDedicationYear(t.dedicated) > 2000)
        },
        "filter-large": {
            title: "Large Temples",
            filterFn: () => temples.filter((t) => t.area > 90000)
        },
        "filter-small": {
            title: "Small Temples",
            filterFn: () => temples.filter((t) => t.area < 10000)
        }
    };

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            navLinks.forEach((l) => l.classList.remove("active"));
            link.classList.add("active");

            if (navBar.classList.contains("open")) {
                navBar.classList.remove("open");
                menuBtn.innerHTML = "&#9776;";
            }

            const rule = filterRules[link.id];
            if (rule) {
                galleryTitle.textContent = rule.title;
                displayTemples(rule.filterFn());
            }
        });
    });
}

const yearSpan = document.querySelector("#currentyear");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

const lastModifiedSpan = document.querySelector("#lastModified");
if (lastModifiedSpan) {
    lastModifiedSpan.textContent = `Last Modification: ${document.lastModified}`;
}

document.addEventListener("DOMContentLoaded", () => {
    displayTemples(temples);
    setupFilters();
});