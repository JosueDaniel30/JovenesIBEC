import { increment } from '../core/storage.js';

export function registerVerseRead() {
  increment('versesRead', 1);
}
