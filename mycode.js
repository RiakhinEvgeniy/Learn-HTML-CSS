const canvas = document.getElementById('myCanvas');
      const ctx = canvas.getContext('2d');

      ctx.beginPath();
      ctx.moveTo(50, 150);
      ctx.lineTo(250, 150);
      ctx.lineTo(150, 300);
      ctx.closePath();
      ctx.stroke();