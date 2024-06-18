document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('mapCanvas');
    const ctx = canvas.getContext('2d');

    // Rysowanie mapy (przykład prostego rysunku)
    ctx.fillStyle = 'green';
    ctx.fillRect(10, 10, 580, 380);

    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(300, 200, 50, 0, Math.PI * 2, true);
    ctx.fill();
});
