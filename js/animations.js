// Animation Module - Handles scroll animations and interactions

export class AnimationController {
    constructor() {
        this.observers = [];
    }

    setupScrollReveal(container) {
        const revealElements = container.querySelectorAll('.reveal');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => observer.observe(el));
        this.observers.push(observer);
    }

    setupFAQ(container) {
        const faqItems = container.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const btn = item.querySelector('.faq-btn');
            btn.addEventListener('click', () => {
                faqItems.forEach(other => {
                    if(other !== item) other.classList.remove('active');
                });
                item.classList.toggle('active');
            });
        });
    }

    setupContactForm(container) {
        const form = container.querySelector('#contactForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const formData = {
                    name: form.querySelector('#name').value,
                    email: form.querySelector('#email').value,
                    message: form.querySelector('#message').value
                };
                
                console.log('Form submitted:', formData);
                alert('Message sent successfully! (Demo mode)');
                form.reset();
            });
        }
    }

    cleanup() {
        this.observers.forEach(observer => observer.disconnect());
        this.observers = [];
    }
}
