// Theme handling
(function() {
  console.log('Theme script loaded');
  
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  if (!themeToggle) {
    console.error('Theme toggle button not found!');
    return;
  }
  
  // Get theme from localStorage or system preference
  function getInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    return prefersDarkScheme.matches ? 'dark' : 'light';
  }

  // Set theme
  function setTheme(theme) {
    console.log('Setting theme to:', theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  // Initialize theme
  setTheme(getInitialTheme());

  // Toggle theme on button click
  themeToggle.addEventListener('click', () => {
    console.log('Theme toggle clicked');
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });

  // Listen for system theme changes
  prefersDarkScheme.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
})(); 