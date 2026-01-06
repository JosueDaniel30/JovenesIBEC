import { get, set } from '../core/storage.js';

export function getCurrentUser() {
  return get('currentUser', {});
}

export function saveCurrentUser(user) {
  set('currentUser', user);

  const users = get('users', []);
  const i = users.findIndex(u => u.username === user.username);
  if (i !== -1) {
    users[i] = user;
    set('users', users);
  }
}
