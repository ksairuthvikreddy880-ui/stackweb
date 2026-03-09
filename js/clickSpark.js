// ClickSpark - Vanilla JavaScript Implementation
// Creates spark animations on click

class ClickSpark {
    constructor(options = {}) {
        this.sparkColor = options.sparkColor || '#00f0ff';
        this.sparkSize = options.sparkSize || 10;
        this.sparkRadius = options.sparkRadius || 15;
        this.sparkCount = options.sparkCount || 8;
        this.duration = options.duration || 400;
        this.easing = options.easing || 'ease-out';
        this.extraScale = options.extraScale || 1.0;
        
        this.canvas = null;
        this.ctx = null;
        this.sparks = [];
        this.animationId = null;
        
        this.init();
    }
    
    init() {
        // Create canvas element
        this.canvas = document.createElement('canvas');
        this.canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 9999;
        `;
        document.body.appendChild(this.canvas);
        
        this.ctx = this.canvas.getContext('2d');
        
        // Set canvas size
        this.resizeCanvas();
        
        // Handle window resize
        window.addEventListener('resize', () => this.resizeCanvas());
        
        // Handle clicks
        document.addEventListener('click', (e) => this.handleClick(e));
        
        // Start animation loop
        this.animate();
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    easeFunc(t) {
        switch (this.easing) {
            case 'linear':
                return t;
            case 'ease-in':
                return t * t;
            case 'ease-in-out':
                return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            default: // ease-out
                return t * (2 - t);
        }
    }
    
    handleClick(e) {
        const x = e.clientX;
        const y = e.clientY;
        const now = performance.now();
        
        // Create sparks
        for (let i = 0; i < this.sparkCount; i++) {
            this.sparks.push({
                x,
                y,
                angle: (2 * Math.PI * i) / this.sparkCount,
                startTime: now
            });
        }
    }
    
    animate(timestamp) {
        if (!timestamp) timestamp = performance.now();
        
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw sparks
        this.sparks = this.sparks.filter(spark => {
            const elapsed = timestamp - spark.startTime;
            
            if (elapsed >= this.duration) {
                return false;
            }
            
            const progress = elapsed / this.duration;
            const eased = this.easeFunc(progress);
            const distance = eased * this.sparkRadius * this.extraScale;
            const lineLength = this.sparkSize * (1 - eased);
            
            const x1 = spark.x + distance * Math.cos(spark.angle);
            const y1 = spark.y + distance * Math.sin(spark.angle);
            const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
            const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);
            
            this.ctx.strokeStyle = this.sparkColor;
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(x1, y1);
            this.ctx.lineTo(x2, y2);
            this.ctx.stroke();
            
            return true;
        });
        
        this.animationId = requestAnimationFrame((ts) => this.animate(ts));
    }
    
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        if (this.canvas && this.canvas.parentElement) {
            this.canvas.parentElement.removeChild(this.canvas);
        }
        document.removeEventListener('click', this.handleClick);
        window.removeEventListener('resize', this.resizeCanvas);
    }
}

// Initialize ClickSpark when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.clickSpark = new ClickSpark({
            sparkColor: '#00f0ff',
            sparkSize: 10,
            sparkRadius: 20,
            sparkCount: 8,
            duration: 500,
            easing: 'ease-out',
            extraScale: 1.2
        });
    });
} else {
    window.clickSpark = new ClickSpark({
        sparkColor: '#00f0ff',
        sparkSize: 10,
        sparkRadius: 20,
        sparkCount: 8,
        duration: 500,
        easing: 'ease-out',
        extraScale: 1.2
    });
}
