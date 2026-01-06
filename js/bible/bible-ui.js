import { BIBLE_1960 } from './bible-data.js';
import { registerVerseRead } from './bible-core.js';

document.addEventListener('click', e => {
  if (e.target.matches('.read-verse-btn')) {
    registerVerseRead();
  }
});
