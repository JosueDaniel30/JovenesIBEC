export function get(key, fallback = null) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

export function set(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function increment(key, amount = 1) {
  const current = parseInt(localStorage.getItem(key) || '0');
  localStorage.setItem(key, current + amount);
}
