document.addEventListener('DOMContentLoaded', () => {
    const heartsContainer = document.getElementById('hearts-container');
    const envelope = document.getElementById('envelope');
    
    // --- Falling Hearts Animation ---
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('falling-heart');
        heart.innerHTML = '❤';
        
        // Randomize position, size, and animation duration
        const left = Math.random() * 100; // 0 to 100vw
        const size = Math.random() * 20 + 10; // 10px to 30px
        const duration = Math.random() * 3 + 2; // 2s to 5s
        const animDelay = Math.random() * 2; // Start delays

        heart.style.left = `${left}vw`;
        heart.style.fontSize = `${size}px`;
        heart.style.animationDuration = `${duration}s`;
        heart.style.animationDelay = `${animDelay}s`;
        
        // Random color variation (red/pink/white)
        const colors = ['#ff4d4d', '#ff9999', '#ffcccc', '#ff0066', '#ffffff'];
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];

        heartsContainer.appendChild(heart);

        // Remove heart after animation finishes to keep DOM clean
        setTimeout(() => {
            heart.remove();
        }, (duration + animDelay) * 1000);
    }

    // Create a heart every 300ms
    setInterval(createHeart, 300);

    // --- Envelope Interaction ---
    envelope.addEventListener('click', () => {
        envelope.classList.toggle('open');
    });
});
