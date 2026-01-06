document.getElementById('loginForm').addEventListener('submit', e => {
  e.preventDefault();

  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value.trim();

  const users = JSON.parse(localStorage.getItem('users')) || [];

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    alert('Usuario o contraseña incorrectos');
    return;
  }

  // 🔐 CREAR SESIÓN CORRECTA
  const session = {
    username: user.username,
    name: user.name || user.username,
    role: user.username.toLowerCase() === 'admin' ? 'admin' : 'user',
    loginAt: Date.now()
  };

  localStorage.setItem('session', JSON.stringify(session));

  // 🚀 Redirección
  window.location.replace('index.html');
});
