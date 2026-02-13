document.addEventListener('DOMContentLoaded', () => {
    const heartsContainer = document.getElementById('hearts-container');
    const envelopeWrapper = document.getElementById('envelope-wrapper');
    const seal = document.getElementById('seal');

    // --- Rainbow Hearts Animation ---
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('falling-heart');
        heart.innerHTML = '❤';

        // Randomize position, size, and animation duration
        const left = Math.random() * 100; // 0 to 100vw
        const size = Math.random() * 15 + 10; // 10px to 25px
        const duration = Math.random() * 3 + 3; // 3s to 6s
        const animDelay = Math.random() * 2; // Start delays

        heart.style.left = `${left}vw`;
        heart.style.fontSize = `${size}px`;
        heart.style.animationDuration = `${duration}s`;
        heart.style.animationDelay = `${animDelay}s`;

        // Rainbow Color Generation using HSL
        // Hue: 0-360, Saturation: 80-100%, Lightness: 50-70% for vibrant colors
        const hue = Math.floor(Math.random() * 360);
        const sat = Math.floor(Math.random() * 20) + 80;
        const light = Math.floor(Math.random() * 20) + 50;

        heart.style.color = `hsl(${hue}, ${sat}%, ${light}%)`;

        // Random rotation for natural feel
        const rotation = Math.random() * 360;
        heart.style.transform = `rotate(${rotation}deg)`;

        heartsContainer.appendChild(heart);

        // Remove heart after animation finishes to keep DOM clean
        setTimeout(() => {
            heart.remove();
        }, (duration + animDelay) * 1000);
    }

    // Create a heart every 100ms for a dense "rain" effect
    setInterval(createHeart, 100);

    // --- Envelope Interaction ---
    function openEnvelope() {
        envelopeWrapper.classList.add('open');
    }

    envelopeWrapper.addEventListener('click', openEnvelope);
    seal.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent double triggering if bubbling
        openEnvelope();
    });
});
