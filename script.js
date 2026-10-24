const themeToggle = document.getElementById('theme-toggle');

const applyTheme = (isDark) => {
  document.body.classList.toggle('dark', isDark);
  if (themeToggle) {
    themeToggle.textContent = isDark ? 'Chế độ sáng' : 'Chế độ tối';
  }
};

const savedTheme = localStorage.getItem('hh7-theme');
if (savedTheme === 'dark') {
  applyTheme(true);
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextState = !document.body.classList.contains('dark');
    applyTheme(nextState);
    localStorage.setItem('hh7-theme', nextState ? 'dark' : 'light');
  });
}
