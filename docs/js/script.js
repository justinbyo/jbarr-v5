// Main JavaScript file for jbarr-v5 site

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleIcon = document.getElementById('theme-toggle-icon');
  
  // Early return if theme toggle elements are missing
  if (!themeToggle || !themeToggleIcon) {
    return;
  }
  
  const htmlElement = document.documentElement;
  
  // Function to set the theme
  const setTheme = (isDark) => {
    htmlElement.classList.toggle('dark-theme', isDark);
    themeToggleIcon.textContent = isDark ? '\u2600\uFE0F' : '\u{1F319}';
  };
  
  // Check if user has a saved preference
  const savedTheme = localStorage.getItem('theme');
  
  // Initialize theme based on saved preference or OS preference
  if (savedTheme === 'dark') {
    setTheme(true);
  } else if (savedTheme === 'light') {
    setTheme(false);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme(true);
  }
  
  // Add event listener for theme toggle button
  themeToggle.addEventListener('click', () => {
    const isDarkMode = htmlElement.classList.contains('dark-theme');
    const newTheme = !isDarkMode;
    
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  });
});
