document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery img');
    let currentImage = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextImage() {
        currentImage = (currentImage + 1) % images.length;
        showImage(currentImage);
    }

    setInterval(nextImage, 3000);
    showImage(currentImage);
});
