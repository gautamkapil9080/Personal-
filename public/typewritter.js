/* Typewriter */

const phrases = [
  'Learning AI',
  'Building projects',
  'Exploring systems',
  'Research mindset',
  'Document My learning'
];

const state = {
  phraseIndex: 0,
  charIndex: 0,
  deleting: false
};

const el = document.querySelector('.typewriter-text');

function typeWriter() {
  const current = phrases[state.phraseIndex];

  if (state.deleting) {
    state.charIndex--;
  } else {
    state.charIndex++;
  }

  el.textContent = current.slice(0, state.charIndex);

  if (!state.deleting && state.charIndex === current.length) {
    state.deleting = true;
    return setTimeout(typeWriter, 2000);
  }

  if (state.deleting && state.charIndex === 0) {
    state.deleting = false;
    state.phraseIndex = (state.phraseIndex + 1) % phrases.length;
    return setTimeout(typeWriter, 400);
  }

  setTimeout(typeWriter, state.deleting ? 40 : 70);
}

typeWriter();