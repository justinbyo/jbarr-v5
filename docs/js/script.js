// Main JavaScript file for jbarr-v5 site

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded successfully!');
  console.log('DEBUG: Current HTML classes:', document.documentElement.className);
  
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleIcon = document.getElementById('theme-toggle-icon');
  
  if (!themeToggle || !themeToggleIcon) {
    console.error('Theme toggle elements not found', {
      themeToggle: themeToggle ? 'found' : 'not found',
      themeToggleIcon: themeToggleIcon ? 'found' : 'not found'
    });
    return;
  }
  
  console.log('DEBUG: Theme toggle elements found successfully');
  console.log('DEBUG: Initial icon content:', themeToggleIcon.textContent);
  
  // Function to set the theme
  const setTheme = (isDark) => {
    console.log('DEBUG: setTheme called with isDark =', isDark);
    
    if (isDark) {
      document.documentElement.classList.add('dark-theme');
      themeToggleIcon.textContent = '☀️';
      console.log('DEBUG: Dark theme applied, icon set to sun');
    } else {
      document.documentElement.classList.remove('dark-theme');
      themeToggleIcon.textContent = '🌙';
      console.log('DEBUG: Light theme applied, icon set to moon');
    }
    
    console.log('DEBUG: Current HTML classes after change:', document.documentElement.className);
  };
  
  // Check if user has a saved preference
  const savedTheme = localStorage.getItem('theme');
  console.log('DEBUG: Saved theme from localStorage:', savedTheme);
  
  // Initialize theme based on saved preference or OS preference
  const init = () => {
    console.log('Site initialized');
    
    if (savedTheme === 'dark') {
      console.log('DEBUG: Using saved dark theme preference');
      setTheme(true);
    } else if (savedTheme === 'light') {
      console.log('DEBUG: Using saved light theme preference');
      setTheme(false);
    } else {
      // Use OS preference if no saved preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      console.log('DEBUG: No saved preference, system prefers dark?', prefersDark);
      
      if (prefersDark) {
        setTheme(true);
      } else {
        console.log('DEBUG: System prefers light theme, using default');
      }
    }
    
    // Add event listener for theme toggle button
    themeToggle.addEventListener('click', () => {
      console.log('DEBUG: Theme toggle button clicked');
      const isDarkMode = document.documentElement.classList.contains('dark-theme');
      console.log('DEBUG: Current dark mode state before toggle:', isDarkMode);
      
      setTheme(!isDarkMode);
      localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
      console.log('DEBUG: Theme saved to localStorage:', !isDarkMode ? 'dark' : 'light');
    });
    
    console.log('DEBUG: Event listener added to theme toggle button');
  };
  
  init();
  
  // Double-check button exists and has click handler
  console.log('DEBUG: Final button element:', themeToggle);
  console.log('DEBUG: Make sure the theme toggle is visible and clickable in the DOM');
});
