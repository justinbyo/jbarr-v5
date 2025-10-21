// Main JavaScript file for jbarr-v5 site

document.addEventListener('DOMContentLoaded', () => {
  // Cache DOM elements
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleIcon = document.getElementById('theme-toggle-icon');
  
  // Early return if elements not found
  if (!themeToggle || !themeToggleIcon) {
    return;
  }
  
  // Cache documentElement for better performance
  const htmlElement = document.documentElement;
  
  // Function to set the theme
  const setTheme = (isDark) => {
    if (isDark) {
      htmlElement.classList.add('dark-theme');
      themeToggleIcon.textContent = '\u2600\uFE0F'; // Sun icon
    } else {
      htmlElement.classList.remove('dark-theme');
      themeToggleIcon.textContent = '\u{1F319}'; // Moon icon
    }
  };
  
  // Initialize theme based on saved preference or OS preference
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'dark') {
    setTheme(true);
  } else if (savedTheme === 'light') {
    setTheme(false);
  } else {
    // Use OS preference if no saved preference exists
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
