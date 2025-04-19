const translations = {
  ru: {
    logo: {
      name: 'Дубовицкий Алексей',
      subtitle: 'ВШЭ ФКН/ФЭН 2027'
    },
    nav: {
      about: 'Обо мне',
      experience: 'Опыт',
      projects: 'Проекты',
      skills: 'Навыки',
      languages: 'Языки',
      writeMe: 'Связаться'
    },
    greeting: {
      hello: 'Привет! Добро пожаловать на мою страницу',
      description: 'Я — студент 2 курса программы "Экономика и анализ данных" Высшей Школы Экономики,\nИзучаю прикладную математику, информатику и экономику.',
      button: 'Связаться со мной'
    },
    about: {
      title: 'Обо мне',
      content: 'Студент-второкурсник программы "Экономика и анализ данных" НИУ ВШЭ. Изучаю прикладную математику, информатику и экономику. Участник хакатона Alfa Campus Junior ML, где разработал модель кредитного скоринга. Имею опыт работы с Python, C++, JavaScript и различными фреймворками для веб- и мобильной разработки.'
    },
    experience: {
      title: 'Образование',
      hse: {
        name: 'НИУ «ВШЭ»',
        current: 'Настоящее время',
        positions: {
          student: {
            title: 'Экономика и анализ данных',
            period: 'Сентябрь 2023 – настоящее время',
            description: 'Программа двух дипломов: Прикладная математика и информатика, Экономика. 2 курс бакалавриата.'
          },
          pupil1: {
            title: 'Московская школа программистов',
            period: 'Сентябрь 2020 – Июнь 2023',
            description: 'Программа дополнительного образования'
          }
        }
      }
    },
    projects: {
      title: 'Проекты',
      items: [
        {
          name: 'Рекомендательная система для подбора фильмов',
          period: '2025',
          location: 'Москва',
          subtitle: 'Content-based и Collaborative Filtering системы рекомендаций',
          description: 'Разработка алгоритма для подбора фильмов группе пользователей. Использованные технологии: Python.'
        },
        {
          name: 'Image Processor',
          period: '2024',
          location: 'Москва',
          subtitle: 'Приложение для обработки изображений',
          description: 'Создание программы для редактирования и обработки фотографий. Использованные технологии: C++.'
        },
        {
          name: 'Разработка модели кредитного скоринга',
          period: '2023',
          location: 'Москва',
          subtitle: 'Alfa Campus Junior ML трек',
          description: 'Разработка и обучение модели для предсказания вероятности возврата кредита. Использованные технологии: Python, Pandas, NumPy, Scikit-learn, CatBoost.'
        },
        {
          name: 'Мобильное приложение-агрегатор кофеен',
          period: '2023',
          location: 'Москва',
          subtitle: 'Мобильная разработка',
          description: 'Разработка приложения для поиска и выбора кофеен. Фронтенд: JavaScript, React Native; Бэкенд: Python, Django.'
        }
      ]
    },
    skills: {
      title: 'Технические навыки',
      content: {
        programmingLanguages: 'Языки программирования: Python, C++, JavaScript',
        libraries: 'Библиотеки & Фреймворки: Pandas, NumPy, Scikit-learn, CatBoost, React, Django',
        tools: 'Инструменты: Linux, Git'
      }
    },
    languages: {
      title: 'Языки',
      content: {
        english: 'Английский: C1 (Продвинутый)',
        russian: 'Русский: Родной'
      }
    },
    contact: {
      title: 'Контакты',
      intro: 'Если у вас есть предложения по сотрудничеству, свяжитесь со мной:',
      telegram: 'Написать в Telegram',
      email: 'Написать на почту',
      phone: '+7 (916) 443-42-25',
      github: 'github.com/daaamnIT'
    },
    footer: {
      copyright: 'Сделано в 2024 году.'
    }
  },
  en: {
    logo: {
      name: 'Alexey Dubovitskiy',
      subtitle: 'HSE FCS/FES 2027'
    },
    nav: {
      about: 'About Me',
      experience: 'Education',
      projects: 'Projects',
      skills: 'Skills',
      languages: 'Languages',
      writeMe: 'Contact'
    },
    greeting: {
      hello: 'Hi! Welcome to my page',
      description: "I'm a 2nd year student of the 'Economics and Data Analysis' program at Higher School of Economics,\nStudying applied mathematics, computer science, and economics.",
      button: 'Contact Me'
    },
    about: {
      title: 'About Me',
      content: 'Second-year student of the "Economics and Data Analysis" program at HSE University. Studying applied mathematics, computer science, and economics. Participant of Alfa Campus Junior ML hackathon, where I developed a credit scoring model. Experienced with Python, C++, JavaScript, and various frameworks for web and mobile development.'
    },
    experience: {
      title: 'Education',
      hse: {
        name: 'HSE University',
        current: 'Present',
        positions: {
          student: {
            title: 'Economics and Data Analysis',
            period: 'September 2023 – Present',
            description: 'Double degree program: Applied Mathematics and Computer Science, Economics. 2nd year undergraduate student.'
          },
          pupil1: {
            title: 'Moscow School of Programmers',
            period: 'September 2020 – June 2023',
            description: 'Additional Education Program'
          }
        }
      }
    },
    projects: {
      title: 'Projects',
      items: [
        {
          name: 'Movie Recommendation System',
          period: '2025',
          location: 'Moscow, Russia',
          subtitle: 'Content-based and Collaborative Filtering recommendation systems',
          description: 'Developed an algorithm for recommending movies to groups of users. Technologies used: Python.'
        },
        {
          name: 'Image Processor',
          period: '2024',
          location: 'Moscow, Russia',
          subtitle: 'Image processing application',
          description: 'Created a program for editing and processing photos. Technologies used: C++.'
        },
        {
          name: 'Credit Scoring Model Development',
          period: '2023',
          location: 'Moscow, Russia',
          subtitle: 'Alfa Campus Junior ML track',
          description: 'Developed and trained a model to predict the probability of loan repayment. Technologies used: Python, Pandas, NumPy, Scikit-learn, CatBoost.'
        },
        {
          name: 'Coffee Shop Aggregator Mobile App',
          period: '2023',
          location: 'Moscow, Russia',
          subtitle: 'Mobile Development',
          description: 'Developed an application for searching and selecting coffee shops. Frontend: JavaScript, React Native; Backend: Python, Django.'
        }
      ]
    },
    skills: {
      title: 'Technical Skills',
      content: {
        programmingLanguages: 'Programming Languages: Python, C++, JavaScript',
        libraries: 'Libraries & Frameworks: Pandas, NumPy, Scikit-learn, CatBoost, React, Django',
        tools: 'Tools: Linux, Git'
      }
    },
    languages: {
      title: 'Languages',
      content: {
        english: 'English: C1 (Advanced)',
        russian: 'Russian: Native'
      }
    },
    contact: {
      title: 'Contact',
      intro: 'If you have any collaboration opportunities, feel free to reach out:',
      telegram: 'Message on Telegram',
      email: 'Send Email',
      phone: '+7 (916) 443-42-25',
      github: 'github.com/daaamnIT'
    },
    footer: {
      copyright: 'Made in 2024.'
    }
  }
};

export default translations;