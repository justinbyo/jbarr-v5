// Main JavaScript file for jbarr-v5 site

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleIcon = document.getElementById('theme-toggle-icon');
  
  if (!themeToggle || !themeToggleIcon) {
    return;
  }
  
  // Cache DOM reference
  const htmlElement = document.documentElement;
  const htmlClassList = htmlElement.classList;
  
  // Function to set the theme
  const setTheme = (isDark) => {
    if (isDark) {
      htmlClassList.add('dark-theme');
      themeToggleIcon.textContent = '\u2600\uFE0F';
    } else {
      htmlClassList.remove('dark-theme');
      themeToggleIcon.textContent = '\u{1F319}';
    }
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
    const isDarkMode = htmlClassList.contains('dark-theme');
    const newTheme = !isDarkMode;
    
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  });
});
