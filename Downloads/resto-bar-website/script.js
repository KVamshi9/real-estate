const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  toggle.textContent = open ? '✕' : '☰';
});
links.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  links.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation');
  toggle.textContent = '☰';
}));
document.querySelector('#year').textContent = new Date().getFullYear();
// Update the WhatsApp and Maps URLs in index.html before publishing.
