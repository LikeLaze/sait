class ThemeSwitcher {
  constructor() {
    this.STORAGE_KEY = 'preferred-theme';
    this.DARK_THEME_CLASS = 'dark-theme';
    this.initializeThemeToggle();
    this.setupEventListeners();
  }

  initializeThemeToggle() {
    // Remove any existing buttons to avoid duplicates
    const existingToggle = document.querySelector('.theme-toggle');
    if (existingToggle) {
      existingToggle.remove();
    }
    
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'theme-toggle position-fixed text-white';
    toggleBtn.style.cssText = `
      top: 20px;
      right: 20px;
      z-index: 1000;
      background-color: rgba(16, 45, 105, 0.7);
      border: 1px solid #DCFF05;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
      transition: all 0.3s ease;
    `;
    toggleBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
    
    // Добавляем эффект при наведении
    toggleBtn.onmouseover = function() {
      this.style.transform = 'scale(1.1)';
      this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
    };
    
    toggleBtn.onmouseout = function() {
      this.style.transform = 'scale(1)';
      this.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    };
    
    document.body.appendChild(toggleBtn);
    
    // Immediately update the icon to match the current theme state
    const currentTheme = document.body.classList.contains(this.DARK_THEME_CLASS) ? 'dark' : 'light';
    this.updateToggleButton(currentTheme);
  }

  setupEventListeners() {
    const toggleBtn = document.querySelector('.theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => this.toggleTheme());
    }

    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (this.shouldFollowSystemTheme()) {
          this.setTheme(e.matches ? 'dark' : 'light');
        }
      });
    }

    this.initializeTheme();
  }

  initializeTheme() {
    const savedTheme = localStorage.getItem(this.STORAGE_KEY);
    
    if (savedTheme) {
      this.setTheme(savedTheme);
    } else {
      // Explicitly set light theme as default
      this.setTheme('light');
    }
  }

  shouldFollowSystemTheme() {
    return false; // Disabled system theme following to maintain light theme default
  }

  setThemeByTime() {
    const hour = new Date().getHours();
    const isDayTime = hour >= 6 && hour < 20;
    this.setTheme(isDayTime ? 'light' : 'dark');
  }

  toggleTheme() {
    const isDark = document.body.classList.contains(this.DARK_THEME_CLASS);
    console.log("Toggle theme. Current isDark:", isDark);
    this.setTheme(isDark ? 'light' : 'dark');
  }

  setTheme(theme) {
    console.log("Setting theme to:", theme);
    if (theme === 'dark') {
      document.body.classList.add(this.DARK_THEME_CLASS);
    } else {
      document.body.classList.remove(this.DARK_THEME_CLASS);
    }
    localStorage.setItem(this.STORAGE_KEY, theme);
    this.updateToggleButton(theme);
  }

  updateToggleButton(theme) {
    const toggleBtn = document.querySelector('.theme-toggle');
    if (!toggleBtn) return;
    
    const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    
    toggleBtn.innerHTML = theme === 'dark' ? sunIcon : moonIcon;
  }
}

// Execute the theme switcher initialization when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  window.themeSwitcher = new ThemeSwitcher();
});

// Backup initialization in case DOMContentLoaded has already fired
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  if (!window.themeSwitcher) {
    window.themeSwitcher = new ThemeSwitcher();
  }
}
