// Main JavaScript file for jbarr-v5 site

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleIcon = document.getElementById('theme-toggle-icon');
  
  if (!themeToggle || !themeToggleIcon) {
    console.error('Theme toggle elements not found');
    return;
  }
  
  // Function to set the theme
  const setTheme = (isDark) => {
    if (isDark) {
      document.documentElement.classList.add('dark-theme');
      themeToggleIcon.textContent = '\u2600\uFE0F';
    } else {
      document.documentElement.classList.remove('dark-theme');
      themeToggleIcon.textContent = '\u{1F319}';
    }
  };
  
  // Initialize theme based on saved preference or OS preference
  const init = () => {
    // Check if user has a saved preference
    let savedTheme;
    try {
      savedTheme = localStorage.getItem('theme');
    } catch (e) {
      console.error('localStorage access failed:', e);
    }
    
    if (savedTheme === 'dark') {
      setTheme(true);
    } else if (savedTheme === 'light') {
      setTheme(false);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme(true);
    }
    
    // Add event listener for theme toggle button
    themeToggle.addEventListener('click', () => {
      const isDarkMode = document.documentElement.classList.contains('dark-theme');
      const newTheme = !isDarkMode;
      
      setTheme(newTheme);
      
      try {
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      } catch (e) {
        console.error('localStorage write failed:', e);
      }
    });
  };
  
  init();
});
