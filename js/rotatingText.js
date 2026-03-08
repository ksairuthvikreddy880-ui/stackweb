// Rotating Text Animation - Pure JavaScript
// No external dependencies needed

class RotatingText {
    constructor(element, options = {}) {
        this.element = element;
        this.words = options.words || ['Design', 'Dev', 'Host'];
        this.interval = options.interval || 2000;
        this.currentIndex = 0;
        this.isAnimating = false;
        
        this.init();
    }

    init() {
        this.createStructure();
        this.startRotation();
    }

    createStructure() {
        // Clear existing content
        this.element.innerHTML = '';
        
        // Create container
        const container = document.createElement('span');
        container.className = 'rotating-text-container';
        
        // Create static part
        const staticPart = document.createElement('span');
        staticPart.className = 'rotating-text-static';
        staticPart.textContent = 'Web ';
        
        // Create rotating part wrapper
        const rotatingWrapper = document.createElement('span');
        rotatingWrapper.className = 'rotating-text-wrapper';
        
        // Create rotating part
        this.rotatingPart = document.createElement('span');
        this.rotatingPart.className = 'rotating-text-dynamic';
        this.rotatingPart.textContent = this.words[0];
        
        rotatingWrapper.appendChild(this.rotatingPart);
        container.appendChild(staticPart);
        container.appendChild(rotatingWrapper);
        this.element.appendChild(container);
    }

    animateWord(word) {
        if (this.isAnimating) return;
        this.isAnimating = true;

        // Exit animation
        this.rotatingPart.style.animation = 'slideUp 0.5s ease-in-out forwards';
        
        setTimeout(() => {
            // Change word
            this.rotatingPart.textContent = word;
            
            // Enter animation
            this.rotatingPart.style.animation = 'slideDown 0.5s ease-in-out forwards';
            
            setTimeout(() => {
                this.rotatingPart.style.animation = '';
                this.isAnimating = false;
            }, 500);
        }, 500);
    }

    startRotation() {
        setInterval(() => {
            this.currentIndex = (this.currentIndex + 1) % this.words.length;
            this.animateWord(this.words[this.currentIndex]);
        }, this.interval);
    }

    destroy() {
        // Cleanup if needed
        this.element.innerHTML = '';
    }
}

// Auto-initialize on elements with data-rotating-text attribute
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('[data-rotating-text]');
    elements.forEach(element => {
        const words = element.dataset.words ? element.dataset.words.split(',') : undefined;
        const interval = element.dataset.interval ? parseInt(element.dataset.interval) : undefined;
        
        new RotatingText(element, { words, interval });
    });
});

export default RotatingText;
