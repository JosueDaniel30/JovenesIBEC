// index.js - Funcionalidades completas para index.html

document.addEventListener('DOMContentLoaded', function() {
  // Actualizar fecha
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const currentDateEl = document.getElementById('current-date');
  if (currentDateEl) {
    currentDateEl.textContent = now.toLocaleDateString('es-ES', options);
  }

  // Menú móvil
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');

  function openMobileMenu() {
    if (mobileMenu) {
      mobileMenu.classList.remove('hidden');
      setTimeout(() => {
        const menuContent = mobileMenu.querySelector('.absolute.right-0');
        if (menuContent) {
          menuContent.classList.remove('translate-x-full');
        }
      }, 50);
    }
  }

  function closeMobileMenu() {
    if (mobileMenu) {
      const menuContent = mobileMenu.querySelector('.absolute.right-0');
      if (menuContent) {
        menuContent.classList.add('translate-x-full');
      }
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 300);
    }
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openMobileMenu);
  }
  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
  }
  if (mobileMenuBackdrop) {
    mobileMenuBackdrop.addEventListener('click', closeMobileMenu);
  }

  // Tema oscuro/claro
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    if (localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }

    themeToggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    });
  }

  // Actualizar nombre de usuario
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const welcomeTitle = document.getElementById('welcome-title');
  if (currentUser && currentUser.name && welcomeTitle) {
    welcomeTitle.textContent = `¡Hola, ${currentUser.name}! 👋`;
  }

  // Cargar estadísticas
  const stats = JSON.parse(localStorage.getItem('userStats') || '{}');
  const versesReadEl = document.getElementById('verses-read');
  const goalsCompletedEl = document.getElementById('goals-completed');
  const prayerStreakEl = document.getElementById('prayer-streak');
  const levelEl = document.getElementById('level');
  const streakCountEl = document.getElementById('streak-count');

  if (versesReadEl) versesReadEl.textContent = stats.versesRead || 0;
  if (goalsCompletedEl) goalsCompletedEl.textContent = stats.goalsCompleted || 0;
  if (prayerStreakEl) prayerStreakEl.textContent = stats.prayerStreak || 0;
  if (levelEl) levelEl.textContent = stats.level || 1;
  if (streakCountEl) streakCountEl.textContent = stats.streak || 0;

  // Funcionalidades adicionales de js/main.js
  initializeHomePage();
});

// Funciones de js/main.js adaptadas para index.html
const verses = [
  { text: 'Todo lo puedo en Cristo que me fortalece.', ref: 'Filipenses 4:13', theme: 'fortaleza' },
  { text: 'Jehová es mi pastor; nada me faltará.', ref: 'Salmos 23:1', theme: 'provisión' },
  { text: 'Mas buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas.', ref: 'Mateo 6:33', theme: 'prioridades' },
  { text: 'Esforzaos y cobrad ánimo; no temáis, ni tengáis miedo, porque Jehová tu Dios estará contigo dondequiera que vayas.', ref: 'Josué 1:9', theme: 'valor' },
  { text: 'Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas que tú no conoces.', ref: 'Jeremías 33:3', theme: 'oración' },
  { text: 'Encomienda a Jehová tu camino, y confía en él; y él hará.', ref: 'Salmos 37:5', theme: 'confianza' },
  { text: 'El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente.', ref: 'Salmos 91:1', theme: 'protección' },
  { text: 'Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.', ref: 'Juan 3:16', theme: 'amor' },
  { text: 'Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien, esto es, a los que conforme a su propósito son llamados.', ref: 'Romanos 8:28', theme: 'propósito' },
  { text: 'Pero los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán.', ref: 'Isaías 40:31', theme: 'esperanza' },
  { text: 'En el principio creó Dios los cielos y la tierra.', ref: 'Génesis 1:1', theme: 'creación' },
  { text: 'No tendrás dioses ajenos delante de mí.', ref: 'Éxodo 20:3', theme: 'adoración' },
  { text: 'Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia.', ref: 'Proverbios 3:5', theme: 'sabiduría' },
  { text: 'Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo.', ref: 'Mateo 28:19', theme: 'misión' },
  { text: 'Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios.', ref: 'Efesios 2:8', theme: 'gracia' },
  { text: 'Bienaventurado el varón que no anduvo en consejo de malos, ni estuvo en camino de pecadores, ni en silla de escarnecedores se ha sentado.', ref: 'Salmos 1:1', theme: 'bendición' },
  { text: 'El temor de Jehová es el principio de la sabiduría; y el conocimiento del Santísimo es la inteligencia.', ref: 'Proverbios 9:10', theme: 'temor' },
  { text: 'Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.', ref: 'Mateo 11:28', theme: 'descanso' },
  { text: 'De manera que si alguno está en Cristo, nueva criatura es; las cosas viejas pasaron; he aquí todas son hechas nuevas.', ref: '2 Corintios 5:17', theme: 'renovación' }
];

function loadVerse() {
  const randomIndex = Math.floor(Math.random() * verses.length);
  const verse = verses[randomIndex];

  const verseTextEl = document.getElementById('daily-verse-text');
  const verseRefEl = document.getElementById('daily-verse-ref');
  const verseThemeEl = document.getElementById('verse-theme');

  if (verseTextEl) verseTextEl.textContent = `"${verse.text}"`;
  if (verseRefEl) verseRefEl.textContent = verse.ref;
  if (verseThemeEl) verseThemeEl.textContent = verse.theme.toUpperCase();

  // Guardar versículo del día
  const today = new Date().toDateString();
  localStorage.setItem('dailyVerse', JSON.stringify({
    date: today,
    verse: verse
  }));
}

function shareVerse() {
  const text = document.getElementById('daily-verse-text')?.textContent || '';
  const ref = document.getElementById('daily-verse-ref')?.textContent || '';
  const message = `${text} ${ref}`;

  if (navigator.share) {
    navigator.share({
      title: 'Versículo del día - Jóvenes con Cristo',
      text: message,
      url: window.location.href
    }).then(() => {
      showNotification('Versículo compartido con éxito 🚀', '✅');
    }).catch(err => {
      console.error('Error al compartir:', err);
      copyVerse();
    });
  } else {
    copyVerse();
  }
}

function copyVerse() {
  const text = document.getElementById('daily-verse-text')?.textContent || '';
  const ref = document.getElementById('daily-verse-ref')?.textContent || '';
  const message = `${text} ${ref}`;

  navigator.clipboard.writeText(message).then(() => {
    showNotification('Versículo copiado al portapapeles 📋', '✅');
  }).catch(err => {
    console.error('Error al copiar:', err);
    showNotification('Error al copiar el versículo', '❌');
  });
}

function addToFavorites() {
  const verseText = document.getElementById('daily-verse-text')?.textContent || '';
  const verseRef = document.getElementById('daily-verse-ref')?.textContent || '';
  const verseTheme = document.getElementById('verse-theme')?.textContent || '';

  if (!verseText || !verseRef) {
    showNotification('No hay versículo para agregar a favoritos', '⚠️');
    return;
  }

  // Obtener favoritos existentes
  let favorites = JSON.parse(localStorage.getItem('favoriteVerses') || '[]');

  // Crear objeto del versículo
  const verse = {
    text: verseText,
    ref: verseRef,
    theme: verseTheme,
    dateAdded: new Date().toISOString()
  };

  // Verificar si ya está en favoritos
  const isAlreadyFavorite = favorites.some(fav => fav.text === verse.text && fav.ref === verse.ref);

  if (isAlreadyFavorite) {
    showNotification('Este versículo ya está en tus favoritos ❤️', 'ℹ️');
    return;
  }

  // Agregar a favoritos
  favorites.push(verse);
  localStorage.setItem('favoriteVerses', JSON.stringify(favorites));

  showNotification('Versículo agregado a favoritos ❤️', '✅');
}

function markVerseAsRead() {
  const today = new Date().toDateString();
  const verseReadToday = localStorage.getItem('verseReadToday');

  if (verseReadToday === today) {
    showNotification('Ya marcaste este versículo como leído hoy 🙌', '✅');
    return;
  }

  // Marcar como leído
  localStorage.setItem('verseReadToday', today);

  // Actualizar estadísticas
  let versesRead = parseInt(localStorage.getItem('versesRead') || '0');
  versesRead++;
  localStorage.setItem('versesRead', versesRead);

  // Actualizar nivel
  const goalsCompleted = parseInt(localStorage.getItem('goalsCompleted') || '0');
  const level = Math.floor((versesRead + goalsCompleted) / 10) + 1;
  localStorage.setItem('spiritualLevel', level);

  // Actualizar UI
  const versesReadEl = document.getElementById('verses-read');
  if (versesReadEl) versesReadEl.textContent = versesRead;

  const levelEl = document.getElementById('level');
  if (levelEl) levelEl.textContent = level;

  updateVerseStatus(true);

  // Mostrar notificación
  showNotification('¡Versículo leído! +1 versículo leído 📖', '✅');
}

function updateVerseStatus(read) {
  const verseStatus = document.getElementById('verse-status');
  if (!verseStatus) return;

  if (read) {
    verseStatus.innerHTML = '<span class="status-icon">✅</span><span class="status-text">¡Leído hoy!</span>';
    verseStatus.style.color = 'var(--accent)';
  } else {
    verseStatus.innerHTML = '<span class="status-icon">⏳</span><span class="status-text">Pendiente por leer</span>';
    verseStatus.style.color = 'var(--text-muted)';
  }
}

function showNotification(message, icon = 'ℹ️') {
  // Remover notificaciones existentes
  const existing = document.querySelectorAll('.notification');
  existing.forEach(notif => notif.remove());

  // Crear nueva notificación
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.setAttribute('role', 'alert');
  notification.setAttribute('aria-live', 'assertive');

  notification.innerHTML = `
    <span class="notification-icon">${icon}</span>
    <span class="notification-text">${message}</span>
    <button class="notification-close" onclick="this.parentElement.remove()">×</button>
  `;

  // Estilos
  Object.assign(notification.style, {
    position: 'fixed',
    top: '20px',
    right: '20px',
    background: 'transparent',
    color: 'white',
    padding: '1rem 1.5rem',
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-xl)',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    zIndex: '9999',
    animation: 'slideIn 0.3s ease',
    maxWidth: '400px',
    border: '2px solid var(--nav-border)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)'
  });

  // Estilos para el botón de cerrar
  const closeBtn = notification.querySelector('.notification-close');
  Object.assign(closeBtn.style, {
    background: 'none',
    border: 'none',
    color: 'var(--text-secondary)',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '0',
    marginLeft: '0.5rem',
    lineHeight: '1'
  });

  document.body.appendChild(notification);

  // Auto-remover después de 5 segundos
  setTimeout(() => {
    if (notification.parentElement) {
      notification.style.animation = 'slideOut 0.3s ease';
      setTimeout(() => notification.remove(), 300);
    }
  }, 5000);
}

function initializeHomePage() {
  // Mostrar fecha actual
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const currentDateEl = document.getElementById('current-date');
  if (currentDateEl) {
    currentDateEl.textContent = today.toLocaleDateString('es-ES', options);
  }

  // Cargar cita motivacional
  loadMotivationalQuote();

  // Inicializar sistema de rachas
  initializeStreakSystem();

  // Cargar estadísticas
  loadQuickStats();

  // Verificar check-in diario
  checkDailyCheckin();

  // Cargar versículo del día
  loadVerse();

  // Inicializar sistema de versículos
  const todayStr = new Date().toDateString();
  const verseReadToday = localStorage.getItem('verseReadToday');
  updateVerseStatus(verseReadToday === todayStr);

  // Inicializar sistema de oración
  initializePrayerSystem();

  // Mostrar notificación de bienvenida si es primera vez del día
  showWelcomeNotification();
}

function loadMotivationalQuote() {
  const quotes = [
    "¡Hoy es el día perfecto para ser la mejor versión de ti mismo!",
    "Cada día es una nueva oportunidad para glorificar a Dios",
    "Tu fe puede mover montañas, ¡comienza hoy!",
    "Dios tiene grandes planes para ti, ¡confía en Él!",
    "Un día a la vez, un paso hacia la victoria espiritual"
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const motivationalQuoteEl = document.getElementById('motivational-quote');
  if (motivationalQuoteEl) {
    motivationalQuoteEl.textContent = randomQuote;
  }
}

function loadQuickStats() {
  // Cargar estadísticas desde localStorage
  const versesRead = parseInt(localStorage.getItem('versesRead') || '0');
  const goalsCompleted = parseInt(localStorage.getItem('goalsCompleted') || '0');
  const prayerStreak = parseInt(localStorage.getItem('prayerStreak') || '0');
  const level = Math.floor((versesRead + goalsCompleted) / 10) + 1;

  const versesReadEl = document.getElementById('verses-read');
  const goalsCompletedEl = document.getElementById('goals-completed');
  const prayerStreakEl = document.getElementById('prayer-streak');
  const levelEl = document.getElementById('level');

  if (versesReadEl) versesReadEl.textContent = versesRead;
  if (goalsCompletedEl) goalsCompletedEl.textContent = goalsCompleted;
  if (prayerStreakEl) prayerStreakEl.textContent = prayerStreak;
  if (levelEl) levelEl.textContent = level;
}

function initializeStreakSystem() {
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();

  let streakData = JSON.parse(localStorage.getItem('streakData') || '{}');
  let streak = streakData.streak || 0;
  const lastDay = streakData.lastDay;

  // Verificar si ya completó hoy
  const todayCompleted = streakData.todayCompleted === today;

  // Resetear racha si pasó más de un día
  if (lastDay) {
    const lastDate = new Date(lastDay);
    const diffTime = Math.abs(new Date(today) - lastDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 2) {
      streak = 0;
    }
  }

  // Actualizar display
  updateStreakDisplay(streak);
  updateTodayStatus(todayCompleted);
}

function updateStreakDisplay(streak) {
  const streakCountEl = document.getElementById('streak-count');
  if (streakCountEl) {
    streakCountEl.textContent = streak;
  }
}

function updateTodayStatus(completed) {
  // Esta función se puede usar para actualizar otros elementos si es necesario
}

function checkDailyCheckin() {
  const today = new Date().toDateString();
  const lastCheckin = localStorage.getItem('lastCheckin');

  const checkinBtn = document.getElementById('checkin-btn');
  const checkinStatus = document.getElementById('checkin-status');

  if (lastCheckin === today) {
    // Ya hizo check-in hoy
    if (checkinBtn) {
      checkinBtn.classList.add('completed');
      checkinBtn.innerHTML = '<span class="checkin-icon">✅</span><span class="checkin-text">¡Completado hoy!</span>';
      checkinBtn.disabled = true;
    }
    if (checkinStatus) {
      checkinStatus.innerHTML = '<span class="status-icon">✅</span><span class="status-text">¡Excelente trabajo!</span>';
    }
  } else {
    // No ha hecho check-in hoy
    if (checkinBtn) {
      checkinBtn.addEventListener('click', performDailyCheckin);
    }
  }
}

function performDailyCheckin() {
  const today = new Date().toDateString();
  localStorage.setItem('lastCheckin', today);

  // Actualizar rachas
  updateStreakAfterCheckin();

  // Actualizar estadísticas
  const currentExp = parseInt(localStorage.getItem('experience') || '0');
  localStorage.setItem('experience', currentExp + 10);

  // Actualizar UI
  const checkinBtn = document.getElementById('checkin-btn');
  const checkinStatus = document.getElementById('checkin-status');

  if (checkinBtn) {
    checkinBtn.classList.add('completed');
    checkinBtn.innerHTML = '<span class="checkin-icon">✅</span><span class="checkin-text">¡Completado hoy!</span>';
    checkinBtn.disabled = true;
  }
  if (checkinStatus) {
    checkinStatus.innerHTML = '<span class="status-icon">🎉</span><span class="status-text">¡Felicidades!</span>';
  }

  // Mostrar notificación de felicitación
  showNotification('¡Check-in diario completado! +10 EXP 🎉', '✅');

  // Actualizar estadísticas en pantalla
  loadQuickStats();
  const streakData = JSON.parse(localStorage.getItem('streakData') || '{}');
  updateStreakDisplay(streakData.streak || 0);
}

function updateStreakAfterCheckin() {
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();

  let streakData = JSON.parse(localStorage.getItem('streakData') || '{}');
  let streak = streakData.streak || 0;
  const lastDay = streakData.lastDay;

  // Si ya hizo check-in hoy, no hacer nada
  if (streakData.todayCompleted === today) return;

  // Verificar si es día consecutivo
  if (lastDay === yesterday || !lastDay) {
    streak++;
  } else if (lastDay !== today) {
    // Resetear racha si no es consecutivo
    streak = 1;
  }

  streakData = {
    streak: streak,
    lastDay: today,
    todayCompleted: today
  };

  localStorage.setItem('streakData', JSON.stringify(streakData));
}

function initializePrayerSystem() {
  const today = new Date().toDateString();
  const prayerDoneToday = localStorage.getItem('prayerDoneToday');

  const startBtn = document.getElementById('start-prayer-btn');
  const statusEl = document.getElementById('prayer-status');

  if (prayerDoneToday === today) {
    // Ya oró hoy
    if (startBtn) {
      startBtn.innerHTML = '<span class="prayer-icon">✅</span><span class="prayer-text">¡Oración completada!</span>';
      startBtn.classList.add('completed');
      startBtn.disabled = true;
    }
    if (statusEl) {
      statusEl.innerHTML = '<span class="status-icon">✅</span><span class="status-text">¡Completado hoy!</span>';
    }
  } else {
    // No ha orado hoy
    if (startBtn) {
      startBtn.addEventListener('click', startPrayerSession);
    }
  }
}

let prayerTimer = null;
let prayerSeconds = 0;

function startPrayerSession() {
  const duration = prompt('¿Cuántos minutos quieres orar?', '10');
  if (!duration || isNaN(duration) || duration <= 0) return;

  prayerSeconds = duration * 60;

  // Mostrar timer
  const timerEl = document.getElementById('prayer-timer');
  const startBtn = document.getElementById('start-prayer-btn');
  const stopBtn = document.getElementById('stop-prayer-btn');

  if (timerEl) timerEl.style.display = 'block';
  if (startBtn) startBtn.style.display = 'none';
  if (stopBtn) {
    stopBtn.addEventListener('click', stopPrayerSession);
  }

  // Iniciar temporizador
  prayerTimer = setInterval(() => {
    prayerSeconds--;

    // Actualizar display
    const minutes = Math.floor(prayerSeconds / 60);
    const seconds = prayerSeconds % 60;

    const minutesEl = document.getElementById('timer-minutes');
    const secondsEl = document.getElementById('timer-seconds');

    if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
    if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');

    // Cuando termine
    if (prayerSeconds <= 0) {
      completePrayerSession(duration);
    }
  }, 1000);

  showNotification(`⏱️ Sesión de oración iniciada: ${duration} minutos`, '🙏');
}

function stopPrayerSession() {
  if (prayerTimer) {
    clearInterval(prayerTimer);
    prayerTimer = null;

    // Ocultar timer y mostrar botón de inicio
    const timerEl = document.getElementById('prayer-timer');
    const startBtn = document.getElementById('start-prayer-btn');

    if (timerEl) timerEl.style.display = 'none';
    if (startBtn) startBtn.style.display = 'block';

    showNotification('Sesión de oración detenida ⏹️', '⏹️');
  }
}

function completePrayerSession(duration) {
  clearInterval(prayerTimer);
  prayerTimer = null;

  const today = new Date().toDateString();

  // Marcar como completado hoy
  localStorage.setItem('prayerDoneToday', today);

  // Actualizar racha de oración
  updatePrayerStreak();

  // Actualizar estadísticas
  let prayerTime = parseInt(localStorage.getItem('prayerTime') || '0');
  prayerTime += parseInt(duration);
  localStorage.setItem('prayerTime', prayerTime);

  // Actualizar experiencia
  const currentExp = parseInt(localStorage.getItem('experience') || '0');
  localStorage.setItem('experience', currentExp + 5);

  // Actualizar UI
  const timerEl = document.getElementById('prayer-timer');
  const startBtn = document.getElementById('start-prayer-btn');
  const statusEl = document.getElementById('prayer-status');

  if (timerEl) timerEl.style.display = 'none';
  if (startBtn) {
    startBtn.innerHTML = '<span class="prayer-icon">✅</span><span class="prayer-text">¡Oración completada!</span>';
    startBtn.classList.add('completed');
    startBtn.disabled = true;
    startBtn.style.display = 'block';
  }
  if (statusEl) {
    statusEl.innerHTML = '<span class="status-icon">✅</span><span class="status-text">¡Completado hoy!</span>';
  }

  // Actualizar estadísticas rápidas
  loadQuickStats();

  // Mostrar notificación
  showNotification(`¡Sesión de oración completada! ${duration} minutos dedicados a Dios 🙏`, '🎉');
}

function updatePrayerStreak() {
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();

  let prayerStreakData = JSON.parse(localStorage.getItem('prayerStreakData') || '{}');
  let streak = prayerStreakData.streak || 0;
  const lastDay = prayerStreakData.lastDay;

  // Verificar si es día consecutivo
  if (lastDay === yesterday || !lastDay) {
    streak++;
  } else if (lastDay !== today) {
    // Resetear racha si no es consecutivo
    streak = 1;
  }

  prayerStreakData = {
    streak: streak,
    lastDay: today
  };

  localStorage.setItem('prayerStreakData', JSON.stringify(prayerStreakData));
  localStorage.setItem('prayerStreak', streak);
}

function showWelcomeNotification() {
  const today = new Date().toDateString();
  const lastVisit = localStorage.getItem('lastVisit');

  if (lastVisit !== today) {
    // Primera visita del día
    setTimeout(() => {
      showNotification('¡Bienvenido de vuelta! ¿Listo para crecer espiritualmente hoy? 🌟', '👋');
    }, 1000);

    localStorage.setItem('lastVisit', today);
  }
}

// Funciones globales para acceso desde HTML
window.cargarVersiculoDelDia = loadVerse;
window.markVerseAsRead = markVerseAsRead;
window.addToFavorites = addToFavorites;
window.shareVerse = shareVerse;
