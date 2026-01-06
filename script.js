/* ============================ */
/* 📖 SISTEMA DE VERSÍCULOS MEJORADO */
/* ============================ */

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
    
    const verseTextEl = document.getElementById('verse-text');
    const verseRefEl = document.getElementById('verse-ref');
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

function copyVerse() {
    const text = document.getElementById('verse-text')?.textContent || '';
    const ref = document.getElementById('verse-ref')?.textContent || '';
    const message = `${text} ${ref}`;
    
    navigator.clipboard.writeText(message).then(() => {
        showNotification('Versículo copiado al portapapeles 📋', '✅');
    }).catch(err => {
        console.error('Error al copiar:', err);
        showNotification('Error al copiar el versículo', '❌');
    });
}

function shareVerse() {
    const text = document.getElementById('verse-text')?.textContent || '';
    const ref = document.getElementById('verse-ref')?.textContent || '';
    const message = `${text} ${ref}`;

    if (navigator.share) {
        navigator.share({
            title: 'Versículo del día - Jóvenes en Cristo',
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

function addToFavorites() {
    const verseText = document.getElementById('verse-text')?.textContent || '';
    const verseRef = document.getElementById('verse-ref')?.textContent || '';
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

/* ============================ */
/* 🔥 SISTEMA DE RACHAS MEJORADO */
/* ============================ */

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
    const streakEl = document.getElementById('streak');
    const streakDisplay = document.getElementById('streak-display');
    
    if (streakEl) {
        const countSpan = streakEl.querySelector('.streak-count');
        if (countSpan) {
            countSpan.textContent = streak;
        } else {
            streakEl.innerHTML = `<span class="fire-icon">🔥</span><span class="streak-count">${streak}</span>`;
        }
        
        // Efectos visuales basados en la racha
        if (streak >= 7) {
            streakEl.style.background = 'linear-gradient(135deg, #f59e0b, #dc2626)';
            streakEl.style.animation = 'gentlePulse 2s infinite';
        }
        if (streak >= 30) {
            streakEl.style.background = 'linear-gradient(135deg, #fbbf24, #f59e0b, #dc2626)';
            streakEl.style.animation = 'pulse 1s infinite, rainbow 3s infinite';
        }
    }
    
    if (streakDisplay) {
        streakDisplay.textContent = `${streak} día${streak !== 1 ? 's' : ''} consecutivo${streak !== 1 ? 's' : ''}`;
    }
    
    // Actualizar días de la semana
    updateWeekDays(streak);
}

function updateWeekDays(streak) {
    const streakDays = document.querySelector('.streak-days');
    if (!streakDays) return;
    
    const days = streakDays.querySelectorAll('.day');
    const today = new Date().getDay();
    const adjustedToday = today === 0 ? 6 : today - 1; // Ajustar para L=0, D=6
    
    days.forEach((day, index) => {
        // Los días pasados (hasta hoy) están activos si hay racha
        if (index <= adjustedToday) {
            day.classList.add('active');
            // Para días anteriores a hoy, verificar si estaban activos
            if (index < adjustedToday) {
                // Esto se podría mejorar con historial
            }
        } else {
            day.classList.remove('active');
        }
    });
}

function updateTodayStatus(completed) {
    const completeBtn = document.getElementById('complete-devotional');
    if (!completeBtn) return;
    
    if (completed) {
        completeBtn.innerHTML = '<span class="btn-icon">✅</span>Devocional Completado';
        completeBtn.classList.add('completed');
        completeBtn.disabled = true;
        completeBtn.style.opacity = '0.7';
    } else {
        completeBtn.innerHTML = '<span class="btn-icon">🙏</span>Completar Devocional Hoy';
        completeBtn.classList.remove('completed');
        completeBtn.disabled = false;
        completeBtn.style.opacity = '1';
    }
}

function completeDay() {
    const today = new Date().toDateString();
    let streakData = JSON.parse(localStorage.getItem('streakData') || '{}');
    
    // Verificar si ya completó hoy
    if (streakData.todayCompleted === today) {
        showNotification('Ya completaste tu devocional hoy 🙌', '✅');
        return;
    }
    
    // Actualizar racha
    const lastDay = streakData.lastDay;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    
    let streak = streakData.streak || 0;
    streak = (lastDay === yesterday) ? streak + 1 : 1;
    
    // Guardar datos
    streakData = {
        streak: streak,
        lastDay: today,
        todayCompleted: today,
        history: streakData.history || []
    };
    
    streakData.history.push({
        date: today,
        streak: streak
    });
    
    localStorage.setItem('streakData', JSON.stringify(streakData));
    
    // Actualizar estadísticas
    updateStatsOnComplete();
    
    // Actualizar display
    updateStreakDisplay(streak);
    updateTodayStatus(true);
    
    // Mostrar mensaje motivacional
    const messages = [
        `¡Día ${streak} completado! 💪`,
        `¡Excelente trabajo! Tu fe crece día a día 🌱`,
        `¡Bendiciones! Dios te recompensa por tu fidelidad 🙏`,
        `¡Sigue así! Cada día te acerca más a Dios ✨`,
        `¡Increíble! Tu consistencia es inspiradora 🚀`
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    showNotification(randomMessage, streak >= 7 ? '🔥' : '🎯');
    
    // Efecto visual
    const badge = document.getElementById('streak');
    if (badge) {
        badge.style.transform = 'scale(1.3)';
        setTimeout(() => badge.style.transform = 'scale(1)', 300);
    }
    
    // Verificar logros
    checkAchievements(streak);
}

function updateStatsOnComplete() {
    // Actualizar versículos leídos
    let versesRead = parseInt(localStorage.getItem('versesRead') || '0');
    versesRead++;
    localStorage.setItem('versesRead', versesRead);
    
    // Actualizar tiempo de oración (simulado)
    let prayerTime = parseInt(localStorage.getItem('prayerTime') || '0');
    prayerTime += 10; // 10 minutos por devocional
    localStorage.setItem('prayerTime', prayerTime);
    
    // Actualizar display en página de inicio
    updateHomeStats();
}

function updateHomeStats() {
    const streakData = JSON.parse(localStorage.getItem('streakData') || '{}');
    const streak = streakData.streak || 0;
    const versesRead = parseInt(localStorage.getItem('versesRead') || '0');
    
    // Actualizar en página de inicio si existe
    const currentStreakEl = document.getElementById('current-streak');
    const versesReadEl = document.getElementById('verses-read');
    const completedGoalsEl = document.getElementById('completed-goals');
    
    if (currentStreakEl) currentStreakEl.textContent = streak;
    if (versesReadEl) versesReadEl.textContent = versesRead;
    
    // Calcular metas completadas
    if (completedGoalsEl) {
        let goalsCompleted = 0;
        ['bronze', 'silver', 'gold'].forEach(level => {
            for (let i = 1; i <= 5; i++) {
                if (localStorage.getItem(`${level}${i}`) === 'true') {
                    goalsCompleted++;
                }
            }
        });
        completedGoalsEl.textContent = goalsCompleted;
        localStorage.setItem('goalsCompleted', goalsCompleted);
    }
}

function checkAchievements(streak) {
    const achievements = {
        7: { title: 'Racha Semanal', message: '¡7 días consecutivos! 🏆' },
        30: { title: 'Racha Mensual', message: '¡30 días consecutivos! 🌟' },
        100: { title: 'Racha Centenaria', message: '¡100 días consecutivos! 🎊' }
    };
    
    if (achievements[streak]) {
        const achievement = achievements[streak];
        showNotification(`${achievement.message} ¡Felicidades!`, '🏅');
        
        // Guardar logro
        let userAchievements = JSON.parse(localStorage.getItem('achievements') || '[]');
        if (!userAchievements.includes(achievement.title)) {
            userAchievements.push(achievement.title);
            localStorage.setItem('achievements', JSON.stringify(userAchievements));
        }
    }
}

/* ============================ */
/* ⏱️ TEMPORIZADOR DE ORACIÓN */
/* ============================ */

function startTimer() {
    if (prayerTimer) {
        showNotification('El temporizador ya está en marcha ⏱️', '⚠️');
        return;
    }
    
    // Pedir duración
    const duration = prompt('¿Cuántos minutos quieres orar?', '10');
    if (!duration || isNaN(duration) || duration <= 0) return;
    
    prayerSeconds = duration * 60;
    
    // Iniciar temporizador
    prayerTimer = setInterval(() => {
        prayerSeconds--;
        
        // Actualizar display
        const minutes = Math.floor(prayerSeconds / 60);
        const seconds = prayerSeconds % 60;
        
        // Buscar elementos de display (podrían no existir en todas las páginas)
        const timeSpentEl = document.querySelector('.time-spent');
        const timeFillEl = document.querySelector('.time-fill');
        
        if (timeSpentEl) {
            timeSpentEl.textContent = `${duration - minutes - 1}/${duration} min`;
        }
        
        if (timeFillEl) {
            const percentage = 100 - (prayerSeconds / (duration * 60)) * 100;
            timeFillEl.style.width = `${percentage}%`;
        }
        
        // Cuando termine
        if (prayerSeconds <= 0) {
            clearInterval(prayerTimer);
            prayerTimer = null;
            
            // Guardar tiempo de oración
            let prayerTime = parseInt(localStorage.getItem('prayerTime') || '0');
            prayerTime += parseInt(duration);
            localStorage.setItem('prayerTime', prayerTime);
            
            showNotification(`¡Tiempo de oración completado! ${duration} minutos dedicados a Dios 🙏`, '🎉');
            
            // Resetear display
            if (timeSpentEl) timeSpentEl.textContent = `0/${duration} min`;
            if (timeFillEl) timeFillEl.style.width = '0%';
        }
    }, 1000);
    
    showNotification(`⏱️ Temporizador iniciado: ${duration} minutos`, '▶️');
}

function stopTimer() {
    if (prayerTimer) {
        clearInterval(prayerTimer);
        prayerTimer = null;
        showNotification('Temporizador detenido ⏹️', '⏹️');
    }
}

/* ============================ */
/* 🎉 NOTIFICACIONES MEJORADAS */
/* ============================ */

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

/* ============================ */
/* 🏠 FUNCIONALIDADES DE INDEX.HTML */
/* ============================ */

function initializeHomePage() {
    // Mostrar fecha actual
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').textContent = today.toLocaleDateString('es-ES', options);

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
    document.getElementById('motivational-quote').textContent = randomQuote;
}

function loadQuickStats() {
    // Cargar estadísticas desde localStorage
    const versesRead = parseInt(localStorage.getItem('versesRead') || '0');
    const goalsCompleted = parseInt(localStorage.getItem('goalsCompleted') || '0');
    const prayerStreak = parseInt(localStorage.getItem('prayerStreak') || '0');
    const level = Math.floor((versesRead + goalsCompleted) / 10) + 1;

    document.getElementById('verses-read').textContent = versesRead;
    document.getElementById('goals-completed').textContent = goalsCompleted;
    document.getElementById('prayer-streak').textContent = prayerStreak;
    document.getElementById('level').textContent = level;
}

function updateQuickStats() {
    loadQuickStats();
}

/* ============================ */
/* 📖 MARCAR VERSÍCULO COMO LEÍDO */
/* ============================ */

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
    updateQuickStats();
    updateVerseStatus(true);

    // Mostrar notificación
    showNotification('¡Versículo leído! +1 versículo leído 📖', '✅');

    // Efecto visual
    const markBtn = document.getElementById('mark-read-btn');
    if (markBtn) {
        markBtn.style.transform = 'scale(1.2)';
        setTimeout(() => markBtn.style.transform = 'scale(1)', 300);
    }
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

/* ============================ */
/* 🙏 SISTEMA DE ORACIÓN DIARIA */
/* ============================ */

let prayerTimer = null;
let prayerSeconds = 0;

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

function startPrayerSession() {
    const duration = prompt('¿Cuántos minutos quieres orar?', '10');
    if (!duration || isNaN(duration) || duration <= 0) return;

    prayerSeconds = duration * 60;

    // Mostrar timer
    const timerEl = document.getElementById('prayer-timer');
    const startBtn = document.getElementById('start-prayer-btn');
    const stopBtn = document.getElementById('stop-prayer-btn');

    if (timerEl) timerEl.style.display = 'block';
    if (startBtn) {
        startBtn.style.display = 'none';
    }
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
    updateQuickStats();

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

/* ============================ */
/* 🎯 ACTUALIZACIÓN DINÁMICA DE METAS */
/* ============================ */

function updateGoalsCompleted() {
    let goalsCompleted = 0;
    ['bronze', 'silver', 'gold'].forEach(level => {
        for (let i = 1; i <= 5; i++) {
            if (localStorage.getItem(`${level}${i}`) === 'true') {
                goalsCompleted++;
            }
        }
    });

    localStorage.setItem('goalsCompleted', goalsCompleted);

    // Actualizar nivel espiritual
    const versesRead = parseInt(localStorage.getItem('versesRead') || '0');
    const level = Math.floor((versesRead + goalsCompleted) / 10) + 1;
    localStorage.setItem('spiritualLevel', level);

    // Actualizar UI
    updateQuickStats();

    return goalsCompleted;
}

function checkDailyCheckin() {
    const today = new Date().toDateString();
    const lastCheckin = localStorage.getItem('lastCheckin');

    const checkinBtn = document.getElementById('checkin-btn');
    const checkinStatus = document.getElementById('checkin-status');

    if (lastCheckin === today) {
        // Ya hizo check-in hoy
        checkinBtn.classList.add('completed');
        checkinBtn.innerHTML = '<span class="checkin-icon">✅</span><span class="checkin-text">¡Completado hoy!</span>';
        checkinStatus.innerHTML = '<span class="status-icon">✅</span><span class="status-text">¡Excelente trabajo!</span>';
        checkinBtn.disabled = true;
    } else {
        // No ha hecho check-in hoy
        checkinBtn.addEventListener('click', performDailyCheckin);
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

    checkinBtn.classList.add('completed');
    checkinBtn.innerHTML = '<span class="checkin-icon">✅</span><span class="checkin-text">¡Completado hoy!</span>';
    checkinStatus.innerHTML = '<span class="status-icon">🎉</span><span class="status-text">¡Felicidades!</span>';
    checkinBtn.disabled = true;

    // Mostrar notificación de felicitación
    showNotification('¡Check-in diario completado! +10 EXP 🎉', '✅');

    // Actualizar estadísticas en pantalla
    loadQuickStats();
    updateStreakDisplay(parseInt(localStorage.getItem('streak') || '0'));
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

// Actualizar funciones existentes para trabajar con index.html
function updateStreakDisplay(streak) {
    const streakElement = document.getElementById('streak-count');
    if (streakElement) {
        streakElement.textContent = streak;
    }
}

function updateTodayStatus(completed) {
    // Esta función se puede usar para actualizar otros elementos si es necesario
}

// Inicializar cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Solo inicializar si estamos en index.html
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
        initializeHomePage();
    }

    // Escuchar cambios en localStorage para actualizar metas en tiempo real
    window.addEventListener('storage', function(e) {
        if (e.key === 'goalsCompleted' || e.key.startsWith('bronze') || e.key.startsWith('silver') || e.key.startsWith('gold')) {
            updateQuickStats();
        }
    });

    // Mostrar notificación de demo después de 2 segundos (solo para testing)
    setTimeout(() => {
        if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
            showNotification('¡Sistema de notificaciones funcionando! 🎉', '🚀');
        }
    }, 2000);

    // Funcionalidad del menú móvil
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

    if (mobileMenuBtn && mobileMenu) {
        // Toggle menú móvil
        mobileMenuBtn.addEventListener('click', function() {
            const isActive = mobileMenu.classList.contains('active');
            mobileMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
            if (mobileMenuOverlay) {
                mobileMenuOverlay.classList.toggle('active');
            }
            document.body.style.overflow = isActive ? '' : 'hidden';
        });

        // Cerrar menú móvil
        if (mobileMenuClose) {
            mobileMenuClose.addEventListener('click', function() {
                closeMobileMenu();
            });
        }

        // Cerrar menú al hacer clic en el overlay
        if (mobileMenuOverlay) {
            mobileMenuOverlay.addEventListener('click', function() {
                closeMobileMenu();
            });
        }

        // Cerrar menú al hacer clic en un enlace
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                closeMobileMenu();
            });
        });
    }

    // Función para cerrar el menú móvil
    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        if (mobileMenuOverlay) {
            mobileMenuOverlay.classList.remove('active');
        }
        document.body.style.overflow = '';
    }

    // Cerrar menú móvil al presionar Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // Saludo personalizado en todas las páginas
    setTimeout(() => {
        showPersonalizedGreeting();
    }, 2000);
});

/* ============================ */
/* 📱 FUNCIONALIDAD DEL MENÚ MÓVIL */
/* ============================ */

// Agregar animaciones CSS para las notificaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

/* ============================ */
/* 📱 FUNCIONALIDADES ADICIONALES */
/* ============================ */

function startDevotional() {
    // Simular un devocional
    showNotification('Iniciando devocional diario... 📖', '🙏');
    
    // Después de 2 segundos, marcar como completado
    setTimeout(() => {
        completeDay();
        
        // Cargar nuevo versículo
        loadVerse();
        
        // Mostrar contenido devocional
        showNotification('Devocional completado. ¡Dios te bendiga! ✨', '✅');
    }, 2000);
}

function setReminder() {
    if (!("Notification" in window)) {
        showNotification("Tu navegador no soporta notificaciones", "⚠️");
        return;
    }
    
    if (Notification.permission === "granted") {
        scheduleReminder();
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                scheduleReminder();
            }
        });
    }
}

function scheduleReminder() {
    const now = new Date();
    const reminderTime = new Date(now);
    reminderTime.setHours(20, 0, 0, 0); // 8:00 PM
    
    if (now > reminderTime) {
        reminderTime.setDate(reminderTime.getDate() + 1);
    }
    
    const timeUntilReminder = reminderTime - now;
    
    setTimeout(() => {
        if (Notification.permission === "granted") {
            new Notification("⏰ Recordatorio de Jóvenes en Cristo", {
                body: "¿Ya pasaste tiempo con Dios hoy? 🙏",
                icon: "/icon.png",
                requireInteraction: true
            });
        }
    }, timeUntilReminder);
    
    showNotification(`Recordatorio programado para las 8:00 PM ⏰`, '✅');
}

function showPersonalizedGreeting() {
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) greeting = "¡Buenos días! ☀️";
    else if (hour < 18) greeting = "¡Buenas tardes! 🌤️";
    else greeting = "¡Buenas noches! 🌙";

    // Función para intentar mostrar la notificación
    const tryShowNotification = () => {
        if (typeof showNotification === 'function') {
            showNotification(`${greeting} Que Dios te bendiga hoy 🙏`, '⛪');
        } else {
            console.log(`${greeting} Que Dios te bendiga hoy 🙏`);
            // Reintentar en 500ms si no está disponible
            setTimeout(tryShowNotification, 500);
        }
    };

    tryShowNotification();
}

document.addEventListener('DOMContentLoaded', () => {
    // Cargar versículo
    loadVerse();

    // Inicializar sistemas
    initializeStreakSystem();

    // Actualizar estadísticas
    updateHomeStats();

    // Configurar eventos
    const refreshVerseBtn = document.getElementById('refresh-verse');
    if (refreshVerseBtn) {
        refreshVerseBtn.addEventListener('click', loadVerse);
    }

    const completeDevotionalBtn = document.getElementById('complete-devotional');
    if (completeDevotionalBtn) {
        completeDevotionalBtn.addEventListener('click', startDevotional);
    }

    // Efecto de entrada suave
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

/* ============================ */
/* 📱 DETECCIÓN DE DISPOSITIVO */
/* ============================ */

function checkDevice() {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isTouch) {
        document.body.classList.add('touch-device');
    }
    if (isMobile) {
        document.body.classList.add('mobile-device');
    }
}

checkDevice();

/* ============================ */
/* 🔧 REGISTRO DEL SERVICE WORKER (PWA) */
/* ============================ */

function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            const swPath = window.location.href.includes('/JovenesIBEC/') 
                ? '/JovenesIBEC/sw.js' 
                : '/sw.js';
            navigator.serviceWorker.register(swPath)
                .then(function(registration) {
                    console.log('Service Worker registrado exitosamente:', registration.scope);

                    // Verificar si hay una nueva versión disponible
                    registration.addEventListener('updatefound', function() {
                        const newWorker = registration.installing;
                        newWorker.addEventListener('statechange', function() {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                // Nueva versión disponible
                                showUpdateNotification();
                            }
                        });
                    });

                    // Manejar mensajes del service worker
                    navigator.serviceWorker.addEventListener('message', function(event) {
                        if (event.data && event.data.type === 'UPDATE_AVAILABLE') {
                            showUpdateNotification();
                        }
                    });
                })
                .catch(function(error) {
                    console.log('Error al registrar el Service Worker:', error);
                });
        });
    } else {
        console.log('Service Workers no soportados en este navegador');
    }
}

function showUpdateNotification() {
    showNotification(
        '¡Nueva versión disponible! Haz clic aquí para actualizar 🔄',
        '⬆️'
    );

    // Agregar funcionalidad al hacer clic en la notificación
    const notification = document.querySelector('.notification');
    if (notification) {
        notification.style.cursor = 'pointer';
        notification.addEventListener('click', function() {
            window.location.reload();
        });
    }
}

// Registrar service worker al cargar la página
registerServiceWorker();

/* ============================ */
/* 🌐 EXPORTAR FUNCIONES GLOBALES */
/* ============================ */

window.loadVerse = loadVerse;
window.copyVerse = copyVerse;
window.shareVerse = shareVerse;
window.addToFavorites = addToFavorites;
window.completeDay = completeDay;
window.startTimer = startTimer;
window.stopTimer = stopTimer;
window.startDevotional = startDevotional;
window.setReminder = setReminder;
window.showNotification = showNotification;
window.showPersonalizedGreeting = showPersonalizedGreeting;