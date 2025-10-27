// Main JavaScript file for jbarr-v5 site

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleIcon = document.getElementById('theme-toggle-icon');
  
  if (!themeToggle || !themeToggleIcon) {
    console.error('Theme toggle elements not found');
    return;
  }
  
  // Cache DOM element for performance
  const htmlElement = document.documentElement;
  
  // Function to set the theme
  const setTheme = (isDark) => {
    if (isDark) {
      htmlElement.classList.add('dark-theme');
      htmlElement.classList.remove('light-theme');
      themeToggleIcon.textContent = '☀️';
    } else {
      htmlElement.classList.remove('dark-theme');
      htmlElement.classList.add('light-theme');
      themeToggleIcon.textContent = '🌙';
    }
  };
  
  // Initialize theme based on saved preference or OS preference
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'dark') {
    setTheme(true);
  } else if (savedTheme === 'light') {
    setTheme(false);
  } else {
    // Use OS preference if no saved preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      setTheme(true);
    }
  }
  
  // Add event listener for theme toggle button
  themeToggle.addEventListener('click', () => {
    const isDarkMode = htmlElement.classList.contains('dark-theme');
    const newTheme = !isDarkMode;
    
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  });
});
