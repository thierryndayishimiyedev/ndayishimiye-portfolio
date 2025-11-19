const menuToggle = document.querySelector('.menu-toggle');
const navList = document.getElementById('nav-list');
const yearSpan = document.getElementById('year');

// Toggle mobile menu
menuToggle.addEventListener('click', (e) => {
  navList.classList.toggle('open');
  e.stopPropagation();
});

// Close when clicking link
navList.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navList.classList.remove('open'));
});

// Close on outside click
document.addEventListener('click', (e) => {
  if (!navList.contains(e.target) && !menuToggle.contains(e.target)) {
    navList.classList.remove('open');
  }
});

// Footer year
yearSpan.textContent = new Date().getFullYear();

// Contact form
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thanks! Your message has been received (demo only).');
  form.reset();
});


const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
document.querySelectorAll('.gallery-grid img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});
lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});


