/* ============================
   👤 PERFIL DEL USUARIO - MEJORADO
   ✅ Muestra versículos favoritos
   ✅ Estadísticas de lectura
============================ */

// Inicializar perfil
document.addEventListener('DOMContentLoaded', function() {
    console.log('Inicializando perfil...');
    
    // Cargar datos del usuario
    loadUserProfile();
    
    // Inicializar funciones de la biblia si están disponibles
    if (typeof initBibliaFunctions === 'function') {
        initBibliaFunctions();
    }
    
    // Configurar botones de edición
    setupEditButtons();
    
    // Cargar versículo aleatorio si está disponible
    loadRandomVerseForProfile();
});

// Cargar datos del usuario desde localStorage
function loadUserProfile() {
    const user = JSON.parse(localStorage.getItem('userProfile') || '{}');
    
    // Si no hay perfil, redirigir a login
    if (!user.name) {
        window.location.href = 'login.html';
        return;
    }
    
    // Mostrar datos en el perfil
    document.getElementById('user-name').textContent = user.name || 'Joven Cristiano';
    document.getElementById('user-email').textContent = user.email || 'joven@cristiano.com';
    document.getElementById('user-church').textContent = user.church || 'Iglesia Bautista';
    document.getElementById('user-level').textContent = user.level || 'Principiante';
    document.getElementById('user-joined').textContent = user.joined || new Date().toLocaleDateString();
    
    // Actualizar avatar
    const avatar = document.getElementById('user-avatar');
    if (avatar) {
        if (user.avatar) {
            avatar.src = user.avatar;
        } else {
            // Generar avatar basado en el nombre
            const colors = ['#4f46e5', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];
            const color = colors[user.name.length % colors.length];
            avatar.style.backgroundColor = color;
            avatar.textContent = user.name.charAt(0).toUpperCase();
        }
    }
    
    // Mostrar meta actual
    const currentGoal = JSON.parse(localStorage.getItem('currentGoal') || '{}');
    if (currentGoal && currentGoal.title) {
        document.getElementById('current-goal').textContent = currentGoal.title;
        document.getElementById('goal-progress').textContent = `${currentGoal.progress || 0}%`;
        
        // Actualizar barra de progreso
        const progressBar = document.querySelector('.goal-progress-bar');
        if (progressBar) {
            progressBar.style.width = `${currentGoal.progress || 0}%`;
        }
    }
}

// Configurar botones de edición
function setupEditButtons() {
    const editBtn = document.getElementById('edit-profile-btn');
    const logoutBtn = document.getElementById('logout-btn');
    
    if (editBtn) {
        editBtn.addEventListener('click', function() {
            showEditProfileModal();
        });
    }
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            if (confirm('¿Estás seguro de que quieres cerrar sesión?')) {
                localStorage.removeItem('userSession');
                window.location.href = 'login.html';
            }
        });
    }
}

// Mostrar modal de edición de perfil
function showEditProfileModal() {
    const user = JSON.parse(localStorage.getItem('userProfile') || '{}');
    
    const modalHTML = `
        <div class="modal-overlay" id="profile-modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>✏️ Editar Perfil</h3>
                    <button onclick="closeModal()" class="btn-icon">✕</button>
                </div>
                
                <div class="modal-body">
                    <div class="form-group">
                        <label>Nombre:</label>
                        <input type="text" id="edit-name" value="${user.name || ''}" placeholder="Tu nombre">
                    </div>
                    
                    <div class="form-group">
                        <label>Email:</label>
                        <input type="email" id="edit-email" value="${user.email || ''}" placeholder="tu@email.com">
                    </div>
                    
                    <div class="form-group">
                        <label>Iglesia:</label>
                        <input type="text" id="edit-church" value="${user.church || ''}" placeholder="Nombre de tu iglesia">
                    </div>
                    
                    <div class="form-group">
                        <label>Nivel Espiritual:</label>
                        <select id="edit-level">
                            <option value="Principiante" ${user.level === 'Principiante' ? 'selected' : ''}>Principiante</option>
                            <option value="Intermedio" ${user.level === 'Intermedio' ? 'selected' : ''}>Intermedio</option>
                            <option value="Avanzado" ${user.level === 'Avanzado' ? 'selected' : ''}>Avanzado</option>
                            <option value="Líder" ${user.level === 'Líder' ? 'selected' : ''}>Líder</option>
                        </select>
                    </div>
                </div>
                
                <div class="modal-footer">
                    <button onclick="saveProfileChanges()" class="btn-plus">💾 Guardar Cambios</button>
                    <button onclick="closeModal()" class="btn-secondary">Cancelar</button>
                </div>
            </div>
        </div>
    `;
    
    // Agregar modal al body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// Cerrar modal
function closeModal() {
    const modal = document.getElementById('profile-modal');
    if (modal) {
        modal.remove();
    }
}

// Guardar cambios del perfil
function saveProfileChanges() {
    const updatedUser = {
        name: document.getElementById('edit-name').value,
        email: document.getElementById('edit-email').value,
        church: document.getElementById('edit-church').value,
        level: document.getElementById('edit-level').value,
        joined: JSON.parse(localStorage.getItem('userProfile') || '{}').joined || new Date().toISOString()
    };
    
    localStorage.setItem('userProfile', JSON.stringify(updatedUser));
    closeModal();
    loadUserProfile();
    showNotification('Perfil actualizado correctamente', '✅');
}

// Cargar versículo aleatorio para el perfil
function loadRandomVerseForProfile() {
    const dailyVerses = [
        { text: "Todo lo puedo en Cristo que me fortalece.", ref: "Filipenses 4:13" },
        { text: "Jehová es mi pastor; nada me faltará.", ref: "Salmos 23:1" },
        { text: "Porque de tal manera amó Dios al mundo...", ref: "Juan 3:16" },
        { text: "Confía en Jehová de todo tu corazón...", ref: "Proverbios 3:5-6" },
        { text: "El gozo de Jehová es vuestra fortaleza.", ref: "Nehemías 8:10" }
    ];
    
    const randomVerse = dailyVerses[Math.floor(Math.random() * dailyVerses.length)];
    
    const verseContainer = document.getElementById('profile-verse');
    if (verseContainer) {
        verseContainer.innerHTML = `
            <blockquote>"${randomVerse.text}"</blockquote>
            <cite>${randomVerse.ref}</cite>
        `;
    }
}

// Exportar funciones globales
window.showEditProfileModal = showEditProfileModal;
window.closeModal = closeModal;
window.saveProfileChanges = saveProfileChanges;