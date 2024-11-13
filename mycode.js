const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');

let x = 0
let y = 0

function flyRectangle() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'blue'
      ctx.fillRect(x, y, 50, 50);

      x += 2;
      y += 2;

      requestAnimationFrame(flyRectangle);
}

flyRectangle();