// Función de notificación transparente
function showNotification(message, icon = 'ℹ️') {
    // Si ya hay una notificación, quitarla
    const existing = document.querySelector('.custom-notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = 'custom-notification';
    notification.innerHTML = `<span class="notification-icon">${icon}</span> ${message}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: transparent;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slide-in-right 0.3s ease;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        display: flex;
        align-items: center;
        gap: 8px;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Agregar estilos CSS para notificaciones
if (!document.querySelector('#custom-notification-styles')) {
    const style = document.createElement('style');
    style.id = 'custom-notification-styles';
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        .notification-icon {
            font-size: 1.2em;
        }
    `;
    document.head.appendChild(style);
}

// Login/Register functionality
document.addEventListener('DOMContentLoaded', function() {
  // Inicializar usuario Admin por defecto
  initializeDefaultAdmin();
  
  // Tab switching
  const loginTab = document.getElementById('login-tab');
  const registerTab = document.getElementById('register-tab');
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');

  loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
  });

  registerTab.addEventListener('click', () => {
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
  });

  // Login form
  document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      sessionStorage.setItem('justLoggedIn', 'true');
      const userName = user.name || user.username;
      
      // Emoji dinámico según la hora del día
      const hour = new Date().getHours();
      let emoji = '👋';
      if (hour >= 5 && hour < 12) emoji = '☀️'; // Mañana
      else if (hour >= 12 && hour < 18) emoji = '🌤️'; // Tarde
      else if (hour >= 18 && hour < 22) emoji = '🌙'; // Noche
      else emoji = '⭐'; // Madrugada
      
      showNotification(`¡Bienvenido, ${userName}!`, emoji);
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1000);
    } else {
      showNotification('Usuario o contraseña incorrectos', '❌');
    }
  });

  // Register form
  document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('register-name').value;
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const birthdate = document.getElementById('register-birthdate').value;
    const church = document.getElementById('register-church').value;

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Check if username already exists
    if (users.find(u => u.username === username)) {
      showNotification('El nombre de usuario ya existe', '⚠️');
      return;
    }

    const newUser = { name, username, password, birthdate, church };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    sessionStorage.setItem('justLoggedIn', 'true');

    // Emoji dinámico según la hora del día
    const hour = new Date().getHours();
    let emoji = '🎉';
    if (hour >= 5 && hour < 12) emoji = '☀️'; // Mañana
    else if (hour >= 12 && hour < 18) emoji = '🌤️'; // Tarde
    else if (hour >= 18 && hour < 22) emoji = '🌙'; // Noche
    else emoji = '⭐'; // Madrugada

    showNotification(`¡Registro exitoso! Bienvenido, ${name}.`, emoji);
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1000);
  });

  // Check if already logged in
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (currentUser) {
    window.location.href = 'index.html';
  }
});

// Función para inicializar el usuario Admin por defecto
function initializeDefaultAdmin() {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  
  // Verificar si el usuario Admin ya existe
  const adminExists = users.find(u => u.username.toLowerCase() === 'admin');
  
  if (!adminExists) {
    // Crear usuario Admin por defecto
    const adminUser = {
      name: 'Admin',
      username: 'Admin',
      password: 'Dios12345',
      birthdate: '',
      church: 'Jóvenes en Cristo'
    };

    users.push(adminUser);
    localStorage.setItem('users', JSON.stringify(users));
    console.log('Usuario Admin inicializado con contraseña: Dios12345');
  }
}