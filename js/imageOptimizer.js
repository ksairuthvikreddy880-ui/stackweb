// Image Optimization Utility
// Handles lazy loading and WebP fallback

class ImageOptimizer {
    constructor() {
        this.observer = null;
        this.init();
    }

    init() {
        // Check if browser supports IntersectionObserver
        if ('IntersectionObserver' in window) {
            this.setupLazyLoading();
        } else {
            // Fallback for older browsers
            this.loadAllImages();
        }
    }

    setupLazyLoading() {
        const options = {
            root: null,
            rootMargin: '50px',
            threshold: 0.01
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.loadImage(entry.target);
                    this.observer.unobserve(entry.target);
                }
            });
        }, options);

        // Observe all images with data-src
        this.observeImages();
    }

    observeImages() {
        const lazyImages = document.querySelectorAll('img[data-src], img[loading="lazy"]');
        lazyImages.forEach(img => {
            if (img.dataset.src) {
                this.observer.observe(img);
            }
        });
    }

    loadImage(img) {
        const src = img.dataset.src || img.src;
        
        // Check WebP support
        if (this.supportsWebP()) {
            const webpSrc = src.replace(/\.(png|jpg|jpeg)$/i, '.webp');
            
            // Try loading WebP first
            const testImg = new Image();
            testImg.onload = () => {
                img.src = webpSrc;
                img.classList.add('loaded');
            };
            testImg.onerror = () => {
                // Fallback to original format
                img.src = src;
                img.classList.add('loaded');
            };
            testImg.src = webpSrc;
        } else {
            img.src = src;
            img.classList.add('loaded');
        }
    }

    supportsWebP() {
        if (this.webpSupport !== undefined) {
            return this.webpSupport;
        }

        const canvas = document.createElement('canvas');
        if (canvas.getContext && canvas.getContext('2d')) {
            this.webpSupport = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
            return this.webpSupport;
        }
        return false;
    }

    loadAllImages() {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => {
            img.src = img.dataset.src;
            img.classList.add('loaded');
        });
    }

    // Preload critical images
    preloadCriticalImages(urls) {
        urls.forEach(url => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = url;
            document.head.appendChild(link);
        });
    }
}

// Auto-initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.imageOptimizer = new ImageOptimizer();
    });
} else {
    window.imageOptimizer = new ImageOptimizer();
}

export default ImageOptimizer;
