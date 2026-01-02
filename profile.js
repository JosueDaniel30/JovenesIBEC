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
        favoritesList.innerHTML = '<p class="empty-state">No tienes versículos favoritos aún. ¡Agrega algunos desde la página de la Biblia!</p>';
        return;
    }

    const favoritesHTML = favorites.map((fav, index) => `
        <div class="favorite-item">
            <blockquote class="favorite-verse">"${fav.text}"</blockquote>
            <cite class="favorite-ref">${fav.ref}</cite>
            <div class="favorite-date">${new Date(fav.date).toLocaleDateString()}</div>
            <button onclick="removeFavorite(${index})" class="btn-secondary">🗑️</button>
        </div>
    `).join('');

    favoritesList.innerHTML = favoritesHTML;
}

function removeFavorite(index) {
    let favorites = JSON.parse(localStorage.getItem('favoriteVerses') || '[]');
    favorites.splice(index, 1);
    localStorage.setItem('favoriteVerses', JSON.stringify(favorites));
    loadFavorites();
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

// Inicializar página de perfil
document.addEventListener('DOMContentLoaded', function() {
    displayProfile();
    updateStats();
    loadProfilePic();
    document.getElementById('edit-profile-btn').addEventListener('click', toggleEditSection);
    document.getElementById('cancel-edit-btn').addEventListener('click', cancelEdit);
    document.getElementById('edit-pic-btn').addEventListener('click', changeProfilePic);
    document.getElementById('profile-pic-input').addEventListener('change', handleProfilePicChange);
});