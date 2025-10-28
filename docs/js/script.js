// Main JavaScript file for jbarr-v5 site

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleIcon = document.getElementById('theme-toggle-icon');
  
  // Early return if elements not found
  if (!themeToggle || !themeToggleIcon) {
    console.error('Theme toggle elements not found');
    return;
  }
  
  // Function to set the theme
  const setTheme = (isDark) => {
    if (isDark) {
      document.documentElement.classList.add('dark-theme');
      themeToggleIcon.textContent = '\u2600\uFE0F'; // Sun icon
    } else {
      document.documentElement.classList.remove('dark-theme');
      themeToggleIcon.textContent = '\u{1F319}'; // Moon icon
    }
  };
  
  // Initialize theme based on saved preference or OS preference
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'dark') {
    setTheme(true);
  } else if (savedTheme === 'light') {
    setTheme(false);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Use OS preference if no saved preference
    setTheme(true);
  }
  
  // Theme toggle button event listener
  themeToggle.addEventListener('click', () => {
    const isDarkMode = document.documentElement.classList.contains('dark-theme');
    const newTheme = !isDarkMode;
    
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  });
});
