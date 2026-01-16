document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const questionCard = document.getElementById('question-card');
    const letterCard = document.getElementById('letter-card');

    const jokes = [
        "Nice try, Hajura! 😂",
        "Wrong button, Hajura! 🌹",
        "Are you clicking 'No' on purpose? 🧐",
        "Error 404: 'No' not found! ❌",
        "Taha is typing... 'Say yes!' ✍️",
        "The lilies will be sad if you say no! 🌸",
        "Try again, my love! ❤️",
        "You're too slow! 🏎️💨"
    ];

    // This makes the button run away when she moves the mouse over it
    noBtn.addEventListener('mouseover', () => {
        // Calculate random position within the window
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        
        // Add a funny shake or scale effect
        noBtn.style.position = 'fixed'; // Changes to fixed so it can go anywhere on screen
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;

        // Change the text to a random joke
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        noBtn.innerText = randomJoke;
    });

    // Just in case she's super fast and actually clicks it
    noBtn.addEventListener('click', () => {
        alert("Wait... how did you even click that? Taha didn't program a 'No' option! Try again! 😂");
    });

    // The Yes Button Logic
    yesBtn.addEventListener('click', () => {
        questionCard.classList.add('hidden');
        
        // Create a confetti effect (Optional visual)
        for(let i=0; i<50; i++) {
            createConfetti();
        }

        setTimeout(() => {
            letterCard.classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 500);
    });

    // Fun little extra: Confetti function
    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.innerText = '🌸'; // Mix of roses and lilies
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.fontSize = '24px';
        confetti.style.top = '-10px';
        confetti.style.zIndex = '1000';
        document.body.appendChild(confetti);
        
        confetti.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(100vh) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: 3000
        });

        setTimeout(() => confetti.remove(), 3000);
    }
});
