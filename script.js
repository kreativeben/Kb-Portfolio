// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Set dark mode by default
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('dark-mode');
});

// Theme Toggle – applies only to non-home sections
function toggleTheme() {
  const isDark = document.body.classList.contains('dark-mode');
  document.body.classList.toggle('dark-mode', !isDark);
  document.body.classList.toggle('light-mode', isDark);

  // Exclude `.home` section and its children from theme
  const home = document.querySelector('.home');
  if (home) {
    home.classList.remove('light-mode', 'dark-mode');

    // Prevent text color from being overridden
    home.querySelectorAll('*').forEach(el => {
      el.style.color = 'white';
    });
  }
}
