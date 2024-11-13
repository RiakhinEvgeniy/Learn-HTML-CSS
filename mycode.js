const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        
        // Рисование синего прямоугольника
        ctx.fillStyle = 'blue'
        ctx.fillRect(10, 10, 150, 100);

        // Рисование зеленого круга
        ctx.beginPath();
        ctx.arc(300, 75, 50, 0, Math.PI * 2);
        ctx.fillStyle = 'red'
        ctx.fill();