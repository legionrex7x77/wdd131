let currentLang = localStorage.getItem("infanciaSanaLang") || "es";

const translations = {
    es: {
        nav_home: "Inicio",
        nav_cases: "Estándares y Casos",
        nav_events: "Eventos y Convocatorias",
        nav_contact: "Solicitar Admisión",
        hero_title: "Por el Interés Superior de la Niñez",
        hero_desc: "Guía objetiva y fundamentada para familias y profesionistas ante procesos jurídicos y omisiones institucionales.",
        home_card1_title: "Marco Institucional y Legal",
        home_card1_desc: "Nuestra labor se rige bajo el principio de estricta legalidad y el parámetro de regularidad constitucional de México y tratados internacionales:",
        home_card1_item1: "<strong>No sustitución:</strong> Orientamos y documentamos; no reemplazamos las facultades del Poder Judicial ni del Ministerio Público.",
        home_card1_item2: "<strong>Diferenciación probatoria:</strong> Distinción técnica entre hechos objetivos, testimonios e indicios.",
        home_card1_item3: "<strong>Debido proceso:</strong> Respeto absoluto a la presunción de inocencia y protección de datos personales de menores.",
        home_card2_title: "Asistente Jurídico de Orientación",
        home_card2_desc: "Selecciona tu situación para evaluar la ruta correspondiente:",
        home_assistant_label: "Selecciona una situación principal:",
        opt_default: "Selecciona una opción...",
        opt_visitation: "Incumplimiento o retención de régimen de visitas",
        opt_delay: "Retraso injustificado u omisión judicial",
        opt_counsel: "Negligencia o mala práctica de defensa legal",
        opt_emergency: "Riesgo inminente o afectación grave a un menor",
        btn_evaluate: "Evaluar Ruta Procesal",
        cases_banner_title: "Estándares de Evaluación y Pruebas",
        cases_banner_desc: "Metodología formal para la integración objetiva de expedientes y defensa del debido proceso.",
        cases_card1_title: "Distinción Probatoria",
        cases_card1_desc: "Para evitar acusaciones infundadas o prejuzgamientos, todo expediente clasifica:",
        cases_c1_i1: "<strong>Hecho Objetivo:</strong> Acontecimiento verificable con fecha, lugar y documento legal que lo respalda.",
        cases_c1_i2: "<strong>Manifestación:</strong> Testimonio unilateral que debe atribuirse formalmente a quien lo expresa.",
        cases_c1_i3: "<strong>Indicio Auxiliar:</strong> Elemento circunstancial que requiere corroboración judicial plena.",
        cases_c1_i4: "<strong>Determinación de Autoridad:</strong> Acuerdos, autos o sentencias firmes dictadas por juzgados competentes.",
        cases_card2_title: "Clasificación de Expedientes",
        cases_card2_desc: "Niveles de priorización institucional:",
        cases_c2_i1: "<strong>Conflicto Familiar Particular:</strong> Disputas de custodia y regímenes de convivencia ordinarios.",
        cases_c2_i2: "<strong>Dilación u Omisión Institucional:</strong> Retrasos procesales injustificados imputables a juzgados o fiscalías.",
        cases_c2_i3: "<strong>Mala Práctica Profesional:</strong> Omisiones o plazos precluidos atribuibles a abogados postulantes.",
        cases_c2_i4: "<strong>Patrón Sistémico:</strong> Prácticas judiciales contrarias a la Convención de los Derechos del Niño.",
        cases_btn_cta: "Presentar Expediente a Revisión",
        events_banner_title: "Eventos y Convocatorias Cívicas",
        events_banner_desc: "Movilizaciones pacíficas, mesas comunitarias y talleres de capacitación legal.",
        filter_all: "Todos",
        filter_rally: "Marchas",
        filter_clinic: "Asesorías",
        filter_workshop: "Talleres",
        contact_banner_title: "Solicitud Confidencial de Admisión",
        contact_banner_desc: "Ingresa la información básica de tu expediente para evaluación institucional previa.",
        form_label_name: "Nombre Completo",
        form_label_email: "Correo Electrónico",
        form_label_scope: "Naturaleza de la Situación",
        form_label_date: "Fecha del Último Auto o Incidente",
        form_legend_urgency: "Nivel de Urgencia",
        form_urg_std: "Estándar (Revisión ordinaria)",
        form_urg_high: "Alta (Término legal próximo)",
        form_urg_urg: "Urgente (Riesgo inmediato a derechos del menor)",
        form_legend_docs: "Documentación Disponible",
        form_doc_orders: "Convenios o Sentencias Judiciales Firmes",
        form_doc_log: "Bitácora Cronológica de Visitas / Hechos",
        form_doc_complaints: "Quejas o Denuncias Previas",
        form_label_summary: "Resumen de Hechos Relevantes",
        form_btn_submit: "Enviar Solicitud de Admisión",
        review_title: "Solicitud Recibida Correctamente",
        review_desc: "La información ha sido registrada para análisis técnico bajo el protocolo Infancia Sana.",
        review_counter_label: "Total de solicitudes tramitadas en este navegador:",
        review_btn_home: "Volver al Inicio",
        footer_text: "Ricardo Corona | Chalco, México",
        footer_refs: "Referencias",
        ref_banner_title: "Fuentes, Referencias y Créditos",
        ref_banner_desc: "Marco de citación legal, tipografía y atribución de recursos visuales del portal Infancia Sana.",
        ref_card1_title: "Marco Jurídico e Institucional",
        ref_card1_item1: "<strong>Protocolo Institucional:</strong> Protocolo Nacional de Recepción, Investigación, Verificación y Dictaminación Jurídica de Casos (Infancia Sana, Versión 1.0, 2026).",
        ref_card1_item2: "<strong>Tratados Internacionales:</strong> Convención sobre los Derechos del Niño (ONU, 1989), Artículos 3 (Interés Superior) y 9 (No separación arbitraria).",
        ref_card1_item3: "<strong>Control Constitucional:</strong> Constitución Política de los Estados Unidos Mexicanos, Artículos 1, 4, 8, 14, 16 y 17.",
        ref_card2_title: "Tipografía y Licenciamiento Web",
        ref_card2_item1: "<strong>Familia Tipográfica:</strong> Kanit, diseñada por Cadson Demak.",
        ref_card2_item2: "<strong>Distribución:</strong> Google Fonts API bajo licencia SIL Open Font License (OFL).",
        ref_card2_item3: "<strong>Uso:</strong> Encabezados con pesos 600 y 700; cuerpo regular 400 y altura de línea 1.6 para accesibilidad.",
        ref_card3_title: "Recursos Gráficos y Atribución",
        ref_card3_item1: "<strong>Vectores SVG del Portal:</strong> Diagramas vectoriales originales generados a medida para hero banner, balanza de legalidad, auditoría documental y agenda cívica.",
        ref_card3_item2: "<strong>Wireframes de Planeación:</strong> Bocetos esquemáticos para resoluciones móvil y de escritorio en siteplan.html.",
        ref_card3_item3: "<strong>Iconografía Semántica:</strong> Símbolos Unicode estándar (⚖️, ✓, &#9776;) para compatibilidad sin dependencias externas.",
        ref_card4_title: "Ficha Técnica del Proyecto",
        ref_card4_item1: "<strong>Materia:</strong> WDD 131 - Dynamic Web Fundamentals",
        ref_card4_item2: "<strong>Institución:</strong> BYU-Pathway Worldwide / BYU-Idaho",
        ref_card4_item3: "<strong>Desarrollador:</strong> Ricardo Corona",
        ref_card4_item4: "<strong>Sede:</strong> Chalco, Estado de México, México",
        ref_btn_home: "Volver al Portal Principal"
    },
    en: {
        nav_home: "Home",
        nav_cases: "Case Standards",
        nav_events: "Events & Clinics",
        nav_contact: "Request Intake",
        hero_title: "Advancing the Best Interests of the Child",
        hero_desc: "Evidence-based guidance for families, citizens, and legal practitioners addressing systemic institutional delays.",
        home_card1_title: "Institutional Scope & Legal Integrity",
        home_card1_desc: "Infancia Sana functions under rigorous constitutional parameters and international treaties:",
        home_card1_item1: "<strong>Non-substitution:</strong> We orient and document; we never replace the judicial powers of courts or prosecutors.",
        home_card1_item2: "<strong>Evidence distinction:</strong> Methodological separation between objective facts, statements, and clues.",
        home_card1_item3: "<strong>Due process:</strong> Strict respect for the presumption of innocence and minors' personal data protection.",
        home_card2_title: "Interactive Guidance Assistant",
        home_card2_desc: "Select your primary legal concern to evaluate the appropriate procedural route:",
        home_assistant_label: "Select primary situation:",
        opt_default: "Choose an option...",
        opt_visitation: "Obstruction of Court-Ordered Visitation",
        opt_delay: "Unjustified Family Court Inaction",
        opt_counsel: "Legal Malpractice or Missed Deadlines",
        opt_emergency: "Imminent Risk or Harm to a Minor",
        btn_evaluate: "Evaluate Pathway",
        cases_banner_title: "Case Evaluation Standards",
        cases_banner_desc: "Formal methodology for objective docket verification and defense of procedural rights.",
        cases_card1_title: "Evidentiary Distinctions",
        cases_card1_desc: "To avoid groundless claims or premature judgment, every file classifies:",
        cases_c1_i1: "<strong>Objective Fact:</strong> A verifiable event backed by certified dates, locations, and documents.",
        cases_c1_i2: "<strong>Party Statement:</strong> A testimonial account formally attributed to the individual presenting it.",
        cases_c1_i3: "<strong>Auxiliary Clue:</strong> Circumstantial element requiring judicial corroboration.",
        cases_c1_i4: "<strong>Authority Ruling:</strong> Interlocutory orders or final rulings issued by competent courts.",
        cases_card2_title: "Docket Classifications",
        cases_card2_desc: "Institutional priority tiers:",
        cases_c2_i1: "<strong>Individual Family Dispute:</strong> Private custody and visitation regime controversies.",
        cases_c2_i2: "<strong>Institutional Inaction:</strong> Unjustified court clerk delays or prosecutorial negligence.",
        cases_c2_i3: "<strong>Professional Misconduct:</strong> Expired statutory deadlines caused by representing counsel.",
        cases_c2_i4: "<strong>Systemic Pattern:</strong> Structural administrative practices violating children's rights.",
        cases_btn_cta: "Submit File for Review",
        events_banner_title: "Community Events & Public Clinics",
        events_banner_desc: "Peaceful rallies, legal intake clinics, and procedural training workshops.",
        filter_all: "All Events",
        filter_rally: "Rallies",
        filter_clinic: "Clinics",
        filter_workshop: "Workshops",
        contact_banner_title: "Confidential Intake Request",
        contact_banner_desc: "Submit your docket information for preliminary institutional review.",
        form_label_name: "Full Name",
        form_label_email: "Email Address",
        form_label_scope: "Case Nature / Category",
        form_label_date: "Date of Latest Court Filing or Incident",
        form_legend_urgency: "Urgency Level",
        form_urg_std: "Standard (Scheduled review)",
        form_urg_high: "High (Statutory deadline approaching)",
        form_urg_urg: "Urgent (Child rights in imminent jeopardy)",
        form_legend_docs: "Available Documentation",
        form_doc_orders: "Certified Court Agreements or Orders",
        form_doc_log: "Chronological Visitation / Event Log",
        form_doc_complaints: "Prior Administrative Complaints",
        form_label_summary: "Factual Summary",
        form_btn_submit: "Submit Intake Request",
        review_title: "Intake Received Successfully",
        review_desc: "Your information has been logged for technical analysis under the Infancia Sana protocol.",
        review_counter_label: "Total intake requests submitted from this browser:",
        review_btn_home: "Return to Home",
        footer_text: "Ricardo Corona | Chalco, Mexico",
        footer_refs: "References",
        ref_banner_title: "Sources, References & Credits",
        ref_banner_desc: "Legal citation framework, typography licensing, and visual asset attribution for the Infancia Sana portal.",
        ref_card1_title: "Institutional & Legal Framework",
        ref_card1_item1: "<strong>Institutional Protocol:</strong> National Protocol for Case Intake, Investigation, Verification, and Legal Review (Infancia Sana, Version 1.0, 2026).",
        ref_card1_item2: "<strong>International Treaties:</strong> UN Convention on the Rights of the Child (1989), Articles 3 (Best Interests) and 9 (Protection against arbitrary separation).",
        ref_card1_item3: "<strong>Constitutional Law:</strong> Political Constitution of the United Mexican States, Articles 1, 4, 8, 14, 16, and 17.",
        ref_card2_title: "Typography & Web Licensing",
        ref_card2_item1: "<strong>Font Family:</strong> Kanit, designed by Cadson Demak.",
        ref_card2_item2: "<strong>Distribution:</strong> Google Fonts API under SIL Open Font License (OFL).",
        ref_card2_item3: "<strong>Usage:</strong> Headings in 600 and 700 weights; body text in regular 400 weight with 1.6 line height for accessibility.",
        ref_card3_title: "Visual Assets & Attribution",
        ref_card3_item1: "<strong>Portal SVG Vectors:</strong> Original vector diagrams created for the hero banner, scales of justice, docket audit, and civic rally agenda.",
        ref_card3_item2: "<strong>Planning Wireframes:</strong> Schematic layouts for mobile and desktop views in siteplan.html.",
        ref_card3_item3: "<strong>Semantic Icons:</strong> Standard Unicode symbols (⚖️, ✓, &#9776;) ensuring compatibility without third-party icon libraries.",
        ref_card4_title: "Project Technical Overview",
        ref_card4_item1: "<strong>Course:</strong> WDD 131 - Dynamic Web Fundamentals",
        ref_card4_item2: "<strong>Institution:</strong> BYU-Pathway Worldwide / BYU-Idaho",
        ref_card4_item3: "<strong>Developer:</strong> Ricardo Corona",
        ref_card4_item4: "<strong>Location:</strong> Chalco, State of Mexico, Mexico",
        ref_btn_home: "Back to Home"
    }
};

const communityEvents = [
    {
        id: 1,
        category: "Rally",
        date: "2026-10-18",
        time: "10:00 AM",
        location: "Monumento a la Revolución, CDMX",
        title_es: "Marcha Nacional por la Niñez y la Convivencia Familiar",
        title_en: "National Rally for Child Protection and Family Contact",
        desc_es: "Movilización pacífica exigiendo celeridad procesal en juzgados familiares y respeto a las visitas.",
        desc_en: "Peaceful gathering urging judicial promptness and full respect for children's visitation rights."
    },
    {
        id: 2,
        category: "Clinic",
        date: "2026-10-25",
        time: "11:00 AM",
        location: "Plaza Principal, Chalco, Edo. Méx.",
        title_es: "Jornada Gratuita de Orientación Jurídica Familiar",
        title_en: "Family Law Guidance Clinic",
        desc_es: "Revisión documental técnica gratuita para familias con expedientes en dilación institucional.",
        desc_en: "Free technical documentation review for families experiencing systemic procedural delays."
    },
    {
        id: 3,
        category: "Workshop",
        date: "2026-11-05",
        time: "06:00 PM",
        location: "Transmisión en Vivo (Zoom)",
        title_es: "Taller: Integración de Pruebas y Bitácora Judicial",
        title_en: "Workshop: Gathering Judicial Evidence",
        desc_es: "Capacitación práctica para madres y padres sobre cómo documentar hechos comprobables.",
        desc_en: "Educational session teaching parents how to build verifiable timelines and log official records."
    },
    {
        id: 4,
        category: "Workshop",
        date: "2026-11-14",
        time: "05:00 PM",
        location: "Centro Cívico, Texcoco",
        title_es: "Seminario: Control Constitucional y Amparo en Materia Familiar",
        title_en: "Constitutional Amparo Seminar in Family Law",
        desc_es: "Análisis técnico de procedencia del juicio de amparo indirecto por dilaciones injustificadas.",
        desc_en: "Technical analysis on the viability of indirect amparo injunctions against court delays."
    }
];

const legalPathways = {
    visitation: {
        title_es: "Ruta de Apercibimiento y Requerimiento Judicial",
        title_en: "Court-Ordered Enforcement Pathway",
        action_es: "Integrar bitácora cronológica con fechas y convenios firmes. Promover solicitud de apercibimiento y medidas de apremio ante el juzgado familiar.",
        action_en: "Gather certified court agreements, compile a chronological log of missed visitations, and file a formal motion requesting judicial warnings and coercive measures."
    },
    delay: {
        title_es: "Ruta de Celeridad Procesal e Impulso Constitucional",
        title_en: "Institutional Promptness Pathway",
        action_es: "Ingresar escrito formal bajo el Artículo 8 Constitucional. Si persiste la omisión, presentar queja administrativa ante el Consejo de la Judicatura.",
        action_en: "Draft a formal petition under Article 8 of the Constitution. If inaction persists past statutory limits, file a complaint before the Judicial Council."
    },
    counsel: {
        title_es: "Ruta de Responsabilidad Profesional y Deber de Defensa",
        title_en: "Professional Conduct Review Pathway",
        action_es: "Auditar plazos procesales precluidos en el expediente, exigir rendición de cuentas y evaluar queja colegiada o acción civil por negligencia probada.",
        action_en: "Audit expired statutory deadlines in your docket, request full accounting of services, and lodge an ethics complaint with the bar association."
    },
    emergency: {
        title_es: "Ruta Urgente de Medidas de Protección Integral",
        title_en: "Urgent Child Protective Route",
        action_es: "Dar vista inmediata a la Procuraduría de Protección de Niñas, Niños y Adolescentes y Ministerio Público para medidas cautelares urgentes.",
        action_en: "Immediately contact the Child and Adolescent Protection Agency and prosecutors to petition emergency precautionary protective orders."
    }
};

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("infanciaSanaLang", lang);
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === "INPUT" && (element.type === "submit" || element.type === "button")) {
                element.value = `${translations[lang][key]}`;
            } else {
                element.innerHTML = `${translations[lang][key]}`;
            }
        }
    });

    const langBtn = document.querySelector("#lang-toggle");
    if (langBtn) {
        langBtn.textContent = lang === "es" ? "EN" : "ES";
    }

    displayEvents(getFilteredEvents());
}

function setupLanguageToggle() {
    const langBtn = document.querySelector("#lang-toggle");
    if (langBtn) {
        langBtn.addEventListener("click", () => {
            const nextLang = currentLang === "es" ? "en" : "es";
            applyLanguage(nextLang);
        });
    }
}

function getFilteredEvents() {
    const activeBtn = document.querySelector(".filter-btn.active");
    const category = activeBtn ? activeBtn.dataset.filter : "all";

    if (category === "all") {
        return communityEvents;
    }
    return communityEvents.filter((item) => item.category === category);
}

function displayEvents(eventsList) {
    const grid = document.querySelector("#events-grid");
    if (!grid) return;

    grid.innerHTML = ``;

    if (eventsList.length === 0) {
        const noResults = currentLang === "es" ? "No hay eventos para esta categoría." : "No events found for this category.";
        grid.innerHTML = `<p>${noResults}</p>`;
        return;
    }

    eventsList.forEach((ev) => {
        const card = document.createElement("article");
        card.className = "event-card";

        const title = currentLang === "en" ? ev.title_en : ev.title_es;
        const desc = currentLang === "en" ? ev.desc_en : ev.desc_es;
        const dateLabel = currentLang === "en" ? "Date:" : "Fecha:";
        const locLabel = currentLang === "en" ? "Location:" : "Lugar:";

        card.innerHTML = `
            <span class="event-tag">${ev.category}</span>
            <h3>${title}</h3>
            <p class="event-meta">📅 <strong>${dateLabel}</strong> ${ev.date} | ⏰ ${ev.time}</p>
            <p class="event-meta">📍 <strong>${locLabel}</strong> ${ev.location}</p>
            <p class="event-desc">${desc}</p>
        `;
        grid.appendChild(card);
    });
}

function setupEventFilters() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    if (filterButtons.length === 0) return;

    filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            filterButtons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            displayEvents(getFilteredEvents());
        });
    });
}

function setupLegalAssistant() {
    const assistantForm = document.querySelector("#assistant-form");
    const selectElem = document.querySelector("#issue-select");
    const resultBox = document.querySelector("#assistant-result");
    const resultHeading = document.querySelector("#result-title");
    const resultText = document.querySelector("#result-text");

    if (assistantForm && selectElem && resultBox) {
        assistantForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const choice = selectElem.value;

            if (choice && legalPathways[choice]) {
                const route = legalPathways[choice];
                const heading = currentLang === "en" ? route.title_en : route.title_es;
                const body = currentLang === "en" ? route.action_en : route.action_es;

                resultHeading.textContent = `${heading}`;
                resultText.textContent = `${body}`;
                resultBox.classList.remove("hidden");
            } else {
                resultBox.classList.add("hidden");
            }
        });
    }
}

function setupMobileMenu() {
    const menuBtn = document.querySelector("#menu-btn");
    const navBar = document.querySelector("#nav-bar");

    if (menuBtn && navBar) {
        menuBtn.addEventListener("click", () => {
            navBar.classList.toggle("open");
            const isOpen = navBar.classList.contains("open");
            menuBtn.innerHTML = isOpen ? `&times;` : `&#9776;`;
        });
    }
}

function handleReviewTracking() {
    const counterDisplay = document.querySelector("#consultation-counter");
    if (!counterDisplay) return;

    let count = Number(localStorage.getItem("infanciaSanaSubmissions")) || 0;
    count += 1;
    localStorage.setItem("infanciaSanaSubmissions", count);

    counterDisplay.textContent = `${count}`;
}

function setFooterDates() {
    const yearSpan = document.querySelector("#currentyear");
    if (yearSpan) {
        yearSpan.textContent = `${new Date().getFullYear()}`;
    }

    const modifiedSpan = document.querySelector("#lastModified");
    if (modifiedSpan) {
        modifiedSpan.textContent = `Last Modified: ${document.lastModified}`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(currentLang);
    setupLanguageToggle();
    setupMobileMenu();
    setupEventFilters();
    setupLegalAssistant();
    handleReviewTracking();
    setFooterDates();
});