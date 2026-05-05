/* Navigation */

const pages = ['recruiter', 'learner', 'research', 'blog'];

function showPage(pageId) {

  document.getElementById('bg-canvas').style.display = 'none';

  pages.forEach(p => {
    document.getElementById(p).classList.remove('active');
  });

  if (pageId === 'home') {
    document.getElementById('home').style.display = 'flex';
  } else {
    document.getElementById(pageId).classList.add('active');
  }

  window.scrollTo(0, 0);
  return false;
}