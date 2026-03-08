// Main Application Entry Point

import { components } from './components.js';
import { Router } from './router.js';
import { Navigation } from './navigation.js';
import { AnimationController } from './animations.js';

class App {
    constructor() {
        this.appContent = document.getElementById('app-content');
        this.router = new Router(components, this.appContent);
        this.navigation = new Navigation();
        this.animationController = new AnimationController();
        
        this.init();
    }

    init() {
        this.setupRouting();
        this.setupFooter();
        this.router.navigate('home');
    }

    setupRouting() {
        const navLinks = document.querySelectorAll('[data-link]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const view = link.getAttribute('data-link');
                this.handleNavigation(view);
            });
        });
    }

    handleNavigation(view) {
        const currentView = this.router.navigate(view);
        
        if (currentView) {
            this.animationController.cleanup();
            
            setTimeout(() => {
                this.animationController.setupScrollReveal(this.appContent);
                
                if (view === 'help') {
                    this.animationController.setupFAQ(this.appContent);
                    this.animationController.setupContactForm(this.appContent);
                }
            }, 100);
        }
        
        this.navigation.closeMobileMenu();
    }

    setupFooter() {
        const yearElement = document.getElementById('year');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    }
}

// Initialize App when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
});
