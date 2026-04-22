// ─── Mobile nav toggle ────────────────────────────────
const navToggle = document.querySelector('.nav-toggle');
const mainNav   = document.getElementById('main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close nav when a link is clicked
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ─── Highlight active nav link on scroll ─────────────
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.main-nav a[href^="#"]');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle(
          'active',
          link.getAttribute('href') === '#' + entry.target.id
        );
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(section => observer.observe(section));

// ─── Contact form (replace with real backend / EmailJS) ──
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = contactForm.querySelector('[type="submit"]');
    btn.textContent = 'Pošiljanje...';
    btn.disabled = true;

    // TODO: wire up to real endpoint or EmailJS
    setTimeout(() => {
      btn.textContent = 'Sporočilo poslano ✓';
      btn.style.background = '#009739'; // Rotary Grass
      contactForm.reset();
    }, 1200);
  });
}
