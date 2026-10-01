// Manejo del menú hamburguesa
const menuBtn = document.querySelector("#menu-btn");
const navBar = document.querySelector("#nav-bar");

if (menuBtn && navBar) {
    menuBtn.addEventListener("click", () => {
        navBar.classList.toggle("open");
        menuBtn.innerHTML = navBar.classList.contains("open") ? "&times;" : "&#9776;";
    });
}

// Fechas dinámicas del pie de página
const yearSpan = document.querySelector("#currentyear");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

const lastModifiedElem = document.querySelector("#lastModified");
if (lastModifiedElem) {
    lastModifiedElem.textContent = `Última modificación: ${document.lastModified}`;
}

// Lógica del asistente interactivo de orientación (routes.html)
const guideForm = document.querySelector("#guide-form");
const situationSelect = document.querySelector("#situation-select");
const resultBox = document.querySelector("#result-box");
const resultText = document.querySelector("#result-text");

const pathwayData = {
    visitation: {
        es: "Ruta Prioritaria: Integrar bitácora cronológica con fechas y convenios/sentencias firmes. Solicitar judicialmente requerimiento con apercibimiento y medidas de apremio.",
        en: "Priority Pathway: Build a chronological log of missed dates and certified court agreements. File a motion requesting court-ordered enforcement with legal warnings."
    },
    delay: {
        es: "Ruta Institucional: Petición formal de impulso procesal conforme al Art. 8 Constitucional. Si persiste la omisión, iniciar queja administrativa ante el Consejo de la Judicatura.",
        en: "Institutional Pathway: Formal motion requesting procedural advancement under Article 8 of the Constitution. If inaction persists, submit an administrative complaint to the Judicial Council."
    },
    lawyer: {
        es: "Ruta Profesional: Auditoría de términos precluidos del expediente, solicitud de rendición de cuentas y queja colegiada o acción por negligencia comprobable.",
        en: "Professional Malpractice Pathway: Audit expired procedural deadlines, request an account of services, and evaluate disciplinary complaints or civil liability claims."
    },
    risk: {
        es: "Ruta Urgente: Notificación inmediata ante la Procuraduría de Protección de Niñas, Niños y Adolescentes y/o Ministerio Público para medidas de protección integral cautelares.",
        en: "Emergency Pathway: Immediate notification to the Child and Adolescent Protection Agency or prosecutor's office requesting precautionary protection measures."
    }
};

if (guideForm) {
    guideForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const value = situationSelect.value;
        const currentLang = localStorage.getItem("site-lang") || "es";

        if (value && pathwayData[value]) {
            resultText.textContent = pathwayData[value][currentLang] || pathwayData[value].es;
            resultBox.classList.remove("hidden");
        } else {
            resultBox.classList.add("hidden");
        }
    });
}