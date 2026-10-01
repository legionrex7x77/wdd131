let currentLang = localStorage.getItem("site-lang") || "es";
let dictionary = {};

async function initI18n() {
    try {
        const response = await fetch("data/translations.json");
        dictionary = await response.json();
        applyLanguage(currentLang);
    } catch (err) {
        console.error("Error al cargar diccionario i18n:", err);
    }
}

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("site-lang", lang);
    document.documentElement.lang = lang;

    // Actualizar elementos con atributo data-i18n
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (dictionary[lang] && dictionary[lang][key]) {
            el.innerHTML = dictionary[lang][key];
        }
    });

    // Actualizar botón de idioma
    const langBtn = document.querySelector("#lang-toggle");
    if (langBtn) {
        langBtn.textContent = lang === "es" ? "EN" : "ES";
    }

    // Refrescar eventos si estamos en la página de eventos
    if (typeof refreshEventsLanguage === "function") {
        refreshEventsLanguage();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    initI18n();

    const langBtn = document.querySelector("#lang-toggle");
    if (langBtn) {
        langBtn.addEventListener("click", () => {
            const nextLang = currentLang === "es" ? "en" : "es";
            applyLanguage(nextLang);
        });
    }
});