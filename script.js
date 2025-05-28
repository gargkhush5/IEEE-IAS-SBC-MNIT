// Creative JavaScript for IEEE IAS SBC MNIT Jaipur

document.addEventListener('DOMContentLoaded', () => {
    // Contact form submission
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            formMessage.textContent = 'Thank you for reaching out! We will get back to you soon.';
            form.reset();
        });
    }

    // Fun: Animate hero text
    const hero = document.querySelector('.hero h2');
    if (hero) {
        let colors = ['#ffd700', '#005baa', '#ff6f61', '#00b894'];
        let i = 0;
        setInterval(() => {
            hero.style.color = colors[i % colors.length];
            i++;
        }, 1200);
    }
});
