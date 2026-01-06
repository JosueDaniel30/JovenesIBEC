import { getCurrentUser } from './profile-core.js';

export function displayProfile() {
  const u = getCurrentUser();
  document.getElementById('user-name-display').textContent =
    `👤 ${u.name || 'Usuario'}`;
}
