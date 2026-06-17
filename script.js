/* ============================================================
   script.js — Portfolio interactions
   ============================================================ */

// ── Nav: add scrolled class ───────────────────────────────────
const nav = document.getElementById('nav');

function handleNavScroll() {
  if (window.scrollY > 40) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleNavScroll, { passive: true });
handleNavScroll(); // run once on load


// ── Hamburger menu ────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  navLinks.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
});

// Close menu when a nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
  });
});


// ── Scroll reveal ─────────────────────────────────────────────
const revealTargets = [
  '.about__grid',
  '.stat-card',
  '.skill-group',
  '.project-card',
  '.contact__inner',
];

function addRevealClass() {
  revealTargets.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      el.classList.add('reveal');
    });
  });
}

function observeReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Stagger stat cards and project cards
function applyStagger() {
  document.querySelectorAll('.stat-card').forEach((el, i) => {
    el.style.transitionDelay = `${i * 80}ms`;
  });
  document.querySelectorAll('.project-card').forEach((el, i) => {
    el.style.transitionDelay = `${i * 100}ms`;
  });
  document.querySelectorAll('.skill-group').forEach((el, i) => {
    el.style.transitionDelay = `${i * 70}ms`;
  });
}

// Only animate if user hasn't asked for reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  addRevealClass();
  applyStagger();
  observeReveal();
}


// ── Active nav link on scroll ─────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav__links a');

function updateActiveNav() {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });

  navAnchors.forEach(a => {
    a.style.color = '';
    if (a.getAttribute('href') === `#${current}`) {
      a.style.color = 'var(--amber)';
    }
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
