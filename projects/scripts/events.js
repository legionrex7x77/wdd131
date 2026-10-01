const eventsGrid = document.querySelector("#events-grid");
const filterButtons = document.querySelectorAll(".filter-btn");
let cachedEvents = [];

async function loadEventsData() {
    if (!eventsGrid) return;

    try {
        const response = await fetch("data/events.json");
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        cachedEvents = await response.json();
        renderEventsList(cachedEvents);
    } catch (error) {
        eventsGrid.innerHTML = "<p>No fue posible cargar las convocatorias en este momento.</p>";
    }
}

function renderEventsList(items) {
    eventsGrid.innerHTML = "";
    const lang = localStorage.getItem("site-lang") || "es";

    if (items.length === 0) {
        eventsGrid.innerHTML = "<p>No hay eventos disponibles en esta categoría.</p>";
        return;
    }

    items.forEach((ev) => {
        const card = document.createElement("article");
        card.classList.add("event-card");

        const title = lang === "en" ? ev.title_en : ev.title_es;
        const desc = lang === "en" ? ev.desc_en : ev.desc_es;

        card.innerHTML = `
            <span class="event-tag">${ev.category}</span>
            <h3>${title}</h3>
            <p class="event-meta">📅 <strong>${ev.date}</strong> | ⏰ ${ev.time}</p>
            <p class="event-meta">📍 ${ev.location}</p>
            <p class="event-desc">${desc}</p>
        `;

        eventsGrid.appendChild(card);
    });
}

function refreshEventsLanguage() {
    const activeBtn = document.querySelector(".filter-btn.active");
    const activeCategory = activeBtn ? activeBtn.dataset.filter : "all";
    if (activeCategory === "all") {
        renderEventsList(cachedEvents);
    } else {
        renderEventsList(cachedEvents.filter((item) => item.category === activeCategory));
    }
}

if (filterButtons.length > 0) {
    filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            filterButtons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");

            const category = btn.dataset.filter;
            if (category === "all") {
                renderEventsList(cachedEvents);
            } else {
                const filtered = cachedEvents.filter((item) => item.category === category);
                renderEventsList(filtered);
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", loadEventsData);