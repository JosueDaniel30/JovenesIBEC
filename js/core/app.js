import { get, remove } from './core/storage.js';

export function protectPage() {
  const session = JSON.parse(localStorage.getItem('session'));

  // ❌ Sesión inexistente o corrupta
  if (
    !session ||
    !session.username ||
    !session.loginAt
  ) {
    localStorage.removeItem('session');
    location.replace('login.html');
    return;
  }

  // ⏳ Sesión expira en 24 horas
  const MAX_SESSION_TIME = 1000 * 60 * 60 * 24;
  if (Date.now() - session.loginAt > MAX_SESSION_TIME) {
    localStorage.removeItem('session');
    location.replace('login.html');
    return;
  }

  // ✅ Sesión válida
  console.log('🔐 Página protegida:', session.username);
}



export function logout() {
  remove('session');
  location.replace('login.html');
}
