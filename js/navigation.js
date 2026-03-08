// Navigation Module - Handles navbar and mobile menu

export class Navigation {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        this.navLinksContainer = document.querySelector('.nav-links');
        this.lastScrollY = window.scrollY;
        
        this.init();
    }

    init() {
        this.setupScrollBehavior();
        this.setupMobileMenu();
    }

    setupScrollBehavior() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                if (window.scrollY > this.lastScrollY) {
                    this.navbar.classList.add('scrolled-down');
                } else {
                    this.navbar.classList.remove('scrolled-down');
                }
            }
            this.lastScrollY = window.scrollY;
        }, { passive: true });
    }

    setupMobileMenu() {
        if (this.mobileMenuBtn) {
            this.mobileMenuBtn.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
        }
    }

    toggleMobileMenu() {
        this.navLinksContainer.classList.toggle('nav-active');
        this.mobileMenuBtn.classList.toggle('active');
    }

    closeMobileMenu() {
        if (this.navLinksContainer.classList.contains('nav-active')) {
            this.navLinksContainer.classList.remove('nav-active');
            this.mobileMenuBtn.classList.remove('active');
        }
    }
}
