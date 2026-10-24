const body = document.body;
const themeToggleButton = document.querySelector('.theme-toggle');
const navToggleButton = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const faqItems = document.querySelectorAll('.faq-item');

const applyTheme = (isDark) => {
  body.classList.toggle('dark', isDark);
  if (themeToggleButton) {
    const icon = themeToggleButton.querySelector('.theme-icon');
    if (icon) {
      icon.textContent = isDark ? '🌙' : '☀️';
    }
  }
  localStorage.setItem('hh7-theme', isDark ? 'dark' : 'light');
};

const savedTheme = localStorage.getItem('hh7-theme');
if (savedTheme === 'dark') {
  applyTheme(true);
} else {
  applyTheme(false);
}

if (themeToggleButton) {
  themeToggleButton.addEventListener('click', () => {
    const isDark = !body.classList.contains('dark');
    applyTheme(isDark);
  });
}

if (navToggleButton && mainNav) {
  navToggleButton.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggleButton.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggleButton.setAttribute('aria-expanded', 'false');
    });
  });
}

faqItems.forEach((item) => {
  const question = item.querySelector('.faq-question');

  if (question) {
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      faqItems.forEach((faq) => {
        faq.classList.remove('open');
      });

      if (!isOpen) {
        item.classList.add('open');
      }
    });
  }
});
