/* Background Canvas */

(function () {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function draw() {
    const W = canvas.width;
    const H = canvas.height;
    const step = 28;

    ctx.clearRect(0, 0, W, H);

    // grid
    ctx.strokeStyle = 'rgba(44,74,140,0.05)';
    for (let x = 0; x <= W; x += step) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, H);
      ctx.stroke();
    }

    for (let y = 0; y <= H; y += step) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(W, y);
      ctx.stroke();
    }
  }

  resize();
  draw();

  window.addEventListener('resize', () => {
    resize();
    draw();
  });

})();