import translations from './translations.js';

document.addEventListener('DOMContentLoaded', function() {
  // Константы
  const STORAGE_KEY = 'preferred-language';
  const DEFAULT_LANG = 'ru';
  
  // Находим кнопку переключения языка
  const languageToggle = document.querySelector('.lang-toggle');
  
  // Получаем текущий язык из localStorage или используем дефолтный
  function getCurrentLanguage() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }
  
  // Устанавливаем начальное состояние кнопки
  if (languageToggle) {
    const currentLang = getCurrentLanguage();
    languageToggle.textContent = currentLang === 'ru' ? 'EN' : 'RU';
    
    // Применяем текущий язык при загрузке страницы
    applyLanguage(currentLang);
    
    // Добавляем обработчик события для кнопки
    languageToggle.addEventListener('click', function() {
      const currentLang = getCurrentLanguage();
      const newLang = currentLang === 'ru' ? 'en' : 'ru';
      
      // Сохраняем выбранный язык
      localStorage.setItem(STORAGE_KEY, newLang);
      
      // Обновляем текст кнопки
      languageToggle.textContent = newLang === 'ru' ? 'EN' : 'RU';
      
      // Применяем новый язык
      applyLanguage(newLang);
    });
  } else {
    console.error('Кнопка переключения языка не найдена');
  }
  
  // Функция для применения языка к странице
  function applyLanguage(lang) {
    console.log('Применяем язык:', lang);
    const content = translations[lang];
    
    if (!content) {
      console.error('Переводы для языка', lang, 'не найдены');
      return;
    }
    
    // Установка языка документа
    document.documentElement.lang = lang;
    
    // Логотип и подзаголовок
    updateTextContent('.logo-title', content.logo.name);
    updateTextContent('.logo-subtitle', content.logo.subtitle);
    
    // Навигационное меню
    updateTextContent('[href="#story"]', content.nav.story);
    updateTextContent('[href="#education"]', content.nav.education);
    updateTextContent('[href="#cases"]', content.nav.projects);
    updateTextContent('[href="#skills"]', content.nav.skills);
    
    // Обновляем все ссылки "Написать мне"/"Contact"
    document.querySelectorAll('[href="#contact"]').forEach(el => {
      if (el.classList.contains('btn')) {
        el.textContent = content.greeting.button;
      } else {
        el.textContent = content.nav.writeMe;
      }
    });
    
    // Приветствие
    updateTextContent('.greeting-text', content.greeting.hello);
    
    // Описание в приветствии (с поддержкой переноса строки)
    const promoText = document.querySelector('.promo-text');
    if (promoText) {
      promoText.innerHTML = content.greeting.description.replace('\n', '<br>');
    }
    
    // Кнопка в приветствии
    updateTextContent('.promo .btn', content.greeting.button);
    
    // Раздел "Обо мне"
    updateTextContent('#story h2', content.about.title);
    updateTextContent('#story p', content.about.content);
    
    // Раздел "Образование"
    updateTextContent('#education h2', content.experience.title);
    updateTextContent('.education h3', content.experience.hse.name);
    
    // Позиции в разделе "Образование"
    const educationPositions = document.querySelectorAll('.education .position');
    if (educationPositions.length >= 1) {
      const studentPosition = educationPositions[0];
      updateTextContent(studentPosition.querySelector('h4'), content.experience.hse.positions.student.title);
      updateTextContent(studentPosition.querySelector('p[style*="opacity"]'), content.experience.hse.positions.student.period);
      updateTextContent(studentPosition.querySelector('p:last-child'), content.experience.hse.positions.student.description);
    }
    
    if (educationPositions.length >= 2) {
      const pupilPosition = educationPositions[1];
      updateTextContent(pupilPosition.querySelector('h4'), content.experience.hse.positions.pupil1.title);
      updateTextContent(pupilPosition.querySelector('p[style*="opacity"]'), content.experience.hse.positions.pupil1.period);
      updateTextContent(pupilPosition.querySelector('p:last-child'), content.experience.hse.positions.pupil1.description);
    }
    
    // Раздел "Проекты"
    updateTextContent('#cases h2', content.projects.title);
    
    // Карточки проектов
    const projectCards = document.querySelectorAll('#cases .card');
    for (let i = 0; i < projectCards.length && i < content.projects.items.length; i++) {
      const card = projectCards[i];
      const project = content.projects.items[i];
      
      card.querySelector('h3').textContent = project.title;
      card.querySelector('p.text-muted').textContent = project.date;
      card.querySelector('h5').textContent = project.role;
      card.querySelectorAll('p')[1].textContent = project.description;
    }
    
    // Раздел "Навыки"
    updateTextContent('#skills h2', content.skills.title);
    
    // Находим все подразделы навыков
    const skillSections = document.querySelectorAll('#skills .mb-4');
    if (skillSections.length >= 1) {
      updateTextContent(skillSections[0].querySelector('p'), content.skills.content.programmingLanguages);
    }
    if (skillSections.length >= 2) {
      updateTextContent(skillSections[1].querySelector('p'), content.skills.content.libraries);
    }
    if (skillSections.length >= 3) {
      updateTextContent(skillSections[2].querySelector('p'), content.skills.content.tools);
    }
    if (skillSections.length >= 4) {
      updateTextContent(skillSections[3].querySelector('h4'), content.languages.title);
      const langContent = skillSections[3].querySelector('p');
      if (langContent) {
        langContent.innerHTML = `${content.languages.content.english}<br>${content.languages.content.russian}`;
      }
    }
    
    // Раздел "Контакты"
    updateTextContent('#contact h2', content.contact.title);
    updateTextContent('#contact p.pb-1', content.contact.intro);
    updateTextContent('a[href*="t.me"]', content.contact.telegram);
    updateTextContent('a[href*="mailto"]', content.contact.email);
    
    // Футер
    updateTextContent('.footer .nav-item', content.footer.copyright);
    
    console.log('Язык успешно применен:', lang);
  }
  
  // Вспомогательная функция для обновления текстового содержимого элемента
  function updateTextContent(selector, text) {
    const element = typeof selector === 'string' ? document.querySelector(selector) : selector;
    if (element && text) {
      element.textContent = text;
    }
  }
});