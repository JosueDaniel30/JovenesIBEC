import { hashPassword } from './crypto.js';
import { get, set } from './storage.js';

export async function loginUser(username, password) {
  const users = get('users', []);
  const passwordHash = await hashPassword(password);

  const user = users.find(
    u => u.username === username && u.passwordHash === passwordHash
  );

  if (!user) {
    throw new Error('Credenciales incorrectas');
  }

  // Crear sesión
  set('session', {
    username: user.username,
    role: user.role || 'user',
    loginAt: Date.now()
  });

  return user;
}
