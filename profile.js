/* ============================
   👤 FUNCIONALIDAD DEL PERFIL
============================ */

function saveProfile() {
    const name = document.getElementById('user-name').value;
    const birthdate = document.getElementById('user-birthdate').value;
    const church = document.getElementById('user-church').value;

    // Validación básica
    if (!name) {
        showNotification('Por favor ingresa tu nombre', '⚠️');
        return;
    }

    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Actualizar el usuario actual
    const updatedUser = { ...currentUser, name, birthdate, church };

    // Actualizar en el array de usuarios
    const userIndex = users.findIndex(u => u.username === currentUser.username);
    if (userIndex !== -1) {
        users[userIndex] = updatedUser;
        localStorage.setItem('users', JSON.stringify(users));
    }

    // Actualizar currentUser
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));

    showNotification('Perfil guardado exitosamente', '✅');
    displayProfile();
}

function loginUser() {
    const loginUsername = document.getElementById('login-username').value;
    const loginPassword = document.getElementById('login-password').value;

    const profile = JSON.parse(localStorage.getItem('userProfile') || '{}');

    if (profile.username === loginUsername && profile.password === loginPassword) {
        localStorage.setItem('isLoggedIn', 'true');
        showNotification('¡Bienvenido de vuelta!', '👋');
        // Aquí podrías redirigir o mostrar el perfil
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('profile-section').style.display = 'block';
        loadProfile();
    } else {
        showNotification('Usuario o contraseña incorrectos', '❌');
    }
}

function logoutUser() {
    localStorage.setItem('isLoggedIn', 'false');
    showNotification('Sesión cerrada', '👋');
    // Aquí podrías mostrar el login de nuevo
    document.getElementById('profile-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
}

function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const hasProfile = localStorage.getItem('userProfile');

    if (isLoggedIn && hasProfile) {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('profile-section').style.display = 'block';
    } else {
        document.getElementById('profile-section').style.display = 'none';
        document.getElementById('login-section').style.display = 'block';
    }
}

function loadProfile() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

    document.getElementById('user-name').value = currentUser.name || 'Usuario';
    document.getElementById('user-birthdate').value = currentUser.birthdate || '';
    document.getElementById('user-church').value = currentUser.church || 'Jóvenes en Cristo';
}

function loadStats() {
    // Cargar estadísticas desde localStorage
    const currentStreak = parseInt(localStorage.getItem('streak') || '0');
    const versesRead = parseInt(localStorage.getItem('versesRead') || '0');
    const goalsCompleted = parseInt(localStorage.getItem('goalsCompleted') || '0');
    const prayerTime = parseInt(localStorage.getItem('prayerTime') || '0');

    document.getElementById('current-streak').textContent = currentStreak;
    document.getElementById('verses-read').textContent = versesRead;
    document.getElementById('goals-completed').textContent = goalsCompleted;
    document.getElementById('prayer-time').textContent = prayerTime;
}

function loadAchievements() {
    const achievements = [
        { id: 'first-goal', name: 'Principiante Espiritual', desc: 'Completa tu primera meta', icon: '🥉', condition: () => parseInt(localStorage.getItem('goalsCompleted') || '0') > 0 },
        { id: 'bible-reader', name: 'Lector Bíblico', desc: 'Lee 30 versículos en una semana', icon: '📖', condition: () => parseInt(localStorage.getItem('versesRead') || '0') >= 30 },
        { id: 'prayer-warrior', name: 'Orante Constante', desc: 'Ora por 7 días seguidos', icon: '🙏', condition: () => parseInt(localStorage.getItem('streak') || '0') >= 7 },
        { id: 'fire-streak', name: 'Racha de Fuego', desc: 'Mantén una racha de 30 días', icon: '🔥', condition: () => parseInt(localStorage.getItem('streak') || '0') >= 30 },
        { id: 'silver-level', name: 'Avanzado', desc: 'Completa el nivel Plata', icon: '🥈', condition: () => localStorage.getItem('congrats-silver') },
        { id: 'gold-level', name: 'Maestro Espiritual', desc: 'Completa el nivel Oro', icon: '🥇', condition: () => localStorage.getItem('congrats-gold') }
    ];

    const achievementsGrid = document.getElementById('achievements-grid');

    const achievementsHTML = achievements.map(achievement => {
        const unlocked = achievement.condition();
        return `
            <div class="achievement-card ${unlocked ? 'unlocked' : 'locked'}">
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-content">
                    <h4>${achievement.name}</h4>
                    <p>${achievement.desc}</p>
                    ${unlocked ? '<span class="achievement-badge">🏆</span>' : ''}
                </div>
            </div>
        `;
    }).join('');

    achievementsGrid.innerHTML = achievementsHTML;
}

function loadSettings() {
    // Cargar configuraciones guardadas
    const settings = JSON.parse(localStorage.getItem('userSettings') || '{}');

    document.getElementById('notifications-toggle').checked = settings.notifications !== false;
    document.getElementById('daily-verse-toggle').checked = settings.dailyVerse !== false;
    document.getElementById('auto-dark-toggle').checked = settings.autoDark || false;
    document.getElementById('share-progress-toggle').checked = settings.shareProgress !== false;

    // Aplicar configuraciones
    applySettings();
}

function saveSettings() {
    const settings = {
        notifications: document.getElementById('notifications-toggle').checked,
        dailyVerse: document.getElementById('daily-verse-toggle').checked,
        autoDark: document.getElementById('auto-dark-toggle').checked,
        shareProgress: document.getElementById('share-progress-toggle').checked
    };

    localStorage.setItem('userSettings', JSON.stringify(settings));
    applySettings();
}

function applySettings() {
    const settings = JSON.parse(localStorage.getItem('userSettings') || '{}');

    // Aplicar modo oscuro automático
    if (settings.autoDark) {
        const hour = new Date().getHours();
        const shouldBeDark = hour < 6 || hour > 18;
        if (shouldBeDark && !document.body.classList.contains('dark-theme')) {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
            document.querySelector('.theme-icon').textContent = '☀️';
        } else if (!shouldBeDark && document.body.classList.contains('dark-theme')) {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
            document.querySelector('.theme-icon').textContent = '🌙';
        }
    }
}

function loadFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favoriteVerses') || '[]');
    const favoritesList = document.getElementById('favorites-list');

    if (favorites.length === 0) {
        favoritesList.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">📖</div>
                <h3>No tienes versículos favoritos aún</h3>
                <p>¡Agrega algunos desde la página de la Biblia para tenerlos siempre a mano!</p>
                <a href="biblia.html" class="btn-plus">Ir a la Biblia</a>
            </div>
        `;
        return;
    }

    const favoritesHTML = favorites.map((fav, index) => {
        const dateAdded = new Date(fav.dateAdded).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });

        return `
            <div class="favorite-card" data-index="${index}">
                <div class="favorite-header">
                    <div class="favorite-theme">${fav.theme.toUpperCase()}</div>
                    <div class="favorite-actions">
                        <button onclick="shareFavorite(${index})" class="btn-icon" title="Compartir">📤</button>
                        <button onclick="removeFavorite(${index})" class="btn-icon btn-danger" title="Eliminar">🗑️</button>
                    </div>
                </div>
                <div class="favorite-content">
                    <blockquote class="favorite-text">"${fav.text}"</blockquote>
                    <cite class="favorite-ref">${fav.ref}</cite>
                </div>
                <div class="favorite-footer">
                    <small class="favorite-date">Agregado: ${dateAdded}</small>
                </div>
            </div>
        `;
    }).join('');

    favoritesList.innerHTML = favoritesHTML;
}

function removeFavorite(index) {
    let favorites = JSON.parse(localStorage.getItem('favoriteVerses') || '[]');
    if (index >= 0 && index < favorites.length) {
        const removed = favorites.splice(index, 1)[0];
        localStorage.setItem('favoriteVerses', JSON.stringify(favorites));
        showNotification(`Versículo "${removed.ref}" eliminado de favoritos`, '🗑️');
        loadFavorites();
    }
}

function shareFavorite(index) {
    const favorites = JSON.parse(localStorage.getItem('favoriteVerses') || '[]');
    if (index >= 0 && index < favorites.length) {
        const fav = favorites[index];
        const message = `"${fav.text}" - ${fav.ref}`;

        if (navigator.share) {
            navigator.share({
                title: 'Versículo Favorito - Jóvenes en Cristo',
                text: message,
                url: window.location.href
            }).then(() => {
                showNotification('Versículo compartido con éxito 🚀', '✅');
            }).catch(err => {
                console.error('Error al compartir:', err);
                copyToClipboard(message);
            });
        } else {
            copyToClipboard(message);
        }
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Versículo copiado al portapapeles 📋', '✅');
    }).catch(err => {
        console.error('Error al copiar:', err);
        showNotification('Error al copiar el versículo', '❌');
    });
}

// Exponer funciones globales
window.saveProfile = saveProfile;
window.loginUser = loginUser;
window.logoutUser = logoutUser;
window.loadProfile = loadProfile;
window.loadStats = loadStats;
window.loadAchievements = loadAchievements;
window.loadSettings = loadSettings;
window.loadFavorites = loadFavorites;
window.removeFavorite = removeFavorite;

// Funciones específicas para perfil.html
function displayProfile() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const name = currentUser.name || 'Usuario Joven';
    const birthdate = currentUser.birthdate ? new Date(currentUser.birthdate) : null;
    const age = birthdate ? new Date().getFullYear() - birthdate.getFullYear() : 20;
    const church = currentUser.church || 'Jóvenes en Cristo';

    document.getElementById('user-name-display').textContent = `👤 ${name}`;
    document.getElementById('user-details').textContent = `Edad: ${age} años | Iglesia: ${church}`;
}

function toggleEditSection() {
    const editSection = document.getElementById('edit-section');
    const isVisible = editSection.style.display !== 'none';
    editSection.style.display = isVisible ? 'none' : 'block';
    if (!isVisible) {
        loadProfile(); // Cargar datos en el formulario
    }
}

function cancelEdit() {
    document.getElementById('edit-section').style.display = 'none';
}

function updateStats() {
    const streak = JSON.parse(localStorage.getItem('streakData') || '{}').streak || 0;
    const versesRead = parseInt(localStorage.getItem('versesRead') || '12');
    const goalsActive = parseInt(localStorage.getItem('goalsActive') || '5');
    const achievements = parseInt(localStorage.getItem('achievements') || '3');

    document.getElementById('streak-count').textContent = `${streak} días seguidos`;
    document.getElementById('lecturas-count').textContent = `${versesRead} completadas`;
    document.getElementById('metas-count').textContent = `${goalsActive} activas`;
    document.getElementById('logros-count').textContent = `${achievements} obtenidos`;
}

function changeProfilePic() {
    document.getElementById('profile-pic-input').click();
}

function handleProfilePicChange(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgSrc = e.target.result;
            document.getElementById('profile-pic').src = imgSrc;
            localStorage.setItem('profilePic', imgSrc);
        };
        reader.readAsDataURL(file);
    }
}

function loadProfilePic() {
    const savedPic = localStorage.getItem('profilePic');
    if (savedPic) {
        document.getElementById('profile-pic').src = savedPic;
    }
}

function updateBadges() {
    const badges = [
        { id: 'badge-bronze', condition: () => localStorage.getItem('congrats-bronze') === 'true' },
        { id: 'badge-silver', condition: () => localStorage.getItem('congrats-silver') === 'true' },
        { id: 'badge-gold', condition: () => localStorage.getItem('congrats-gold') === 'true' },
        { id: 'badge-streak', condition: () => parseInt(localStorage.getItem('streak') || '0') >= 30 },
        { id: 'badge-reader', condition: () => parseInt(localStorage.getItem('versesRead') || '0') >= 100 },
        { id: 'badge-disciple', condition: () => {
            const progress = JSON.parse(localStorage.getItem('progress_gold1') || '{}');
            return progress.completed === true;
        }}
    ];

    badges.forEach(badge => {
        const el = document.getElementById(badge.id);
        if (el) {
            const statusSpan = el.querySelector('.badge-status');
            if (badge.condition()) {
                el.classList.add('unlocked');
                if (statusSpan) {
                    statusSpan.textContent = 'Desbloqueado';
                    statusSpan.classList.remove('locked');
                    statusSpan.classList.add('unlocked');
                }
            } else {
                el.classList.remove('unlocked');
                if (statusSpan) {
                    statusSpan.textContent = 'Bloqueado';
                    statusSpan.classList.add('locked');
                    statusSpan.classList.remove('unlocked');
                }
            }
        }
    });
}

// Inicializar página de perfil
document.addEventListener('DOMContentLoaded', function() {
    displayProfile();
    updateStats();
    updateBadges(); // Actualizar estado de insignias
    loadProfilePic();
    loadFavorites();
    document.getElementById('edit-profile-btn').addEventListener('click', toggleEditSection);
    document.getElementById('cancel-edit-btn').addEventListener('click', cancelEdit);
    document.getElementById('edit-pic-btn').addEventListener('click', changeProfilePic);
    document.getElementById('profile-pic-input').addEventListener('change', handleProfilePicChange);
});
