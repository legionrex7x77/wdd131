// Footer: current year + last modified date
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent =
    'Last Modification: ' + document.lastModified;

// Hamburger menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('#primary-nav ul');

// Start collapsed on mobile
navMenu.classList.add('hidden');

menuToggle.addEventListener('click', () => {
    const isOpen = !navMenu.classList.contains('hidden');
    navMenu.classList.toggle('hidden');
    menuToggle.textContent = isOpen ? '\u2630' : '\u2715'; // hamburger vs X
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
});