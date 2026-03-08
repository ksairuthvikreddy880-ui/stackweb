// Portfolio Page JavaScript

// Demo URLs for different categories
const demoUrls = {
    professional: {
        1: 'https://preview.themeforest.net/item/consulting-business-finance-wordpress-theme/full_screen_preview/14740561',
        2: 'https://preview.themeforest.net/item/corporate-business-wordpress-theme/full_screen_preview/21148820'
    },
    gaming: {
        1: 'https://preview.themeforest.net/item/gaming-esports-wordpress-theme/full_screen_preview/23140943',
        2: 'https://preview.themeforest.net/item/game-studio-wordpress-theme/full_screen_preview/22960476'
    },
    startup: {
        1: 'https://preview.themeforest.net/item/saas-software-startup-wordpress-theme/full_screen_preview/22990462',
        2: 'https://preview.themeforest.net/item/startup-technology-wordpress-theme/full_screen_preview/21172913'
    },
    ecommerce: {
        1: 'https://preview.themeforest.net/item/fashion-woocommerce-wordpress-theme/full_screen_preview/22241155',
        2: 'https://preview.themeforest.net/item/electronics-store-woocommerce-theme/full_screen_preview/21739766'
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupFilters();
    setupMobileMenu();
    setYear();
});

// Filter functionality
function setupFilters() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.getAttribute('data-category');
            
            // Update active tab
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Filter cards
            portfolioCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (category === 'all' || cardCategory === category) {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeInUp 0.6s ease-out';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// Open demo modal
function openDemo(category, id) {
    const modal = document.getElementById('demoModal');
    const iframe = document.getElementById('demoFrame');
    const title = document.getElementById('demoTitle');
    
    // Get demo URL
    const demoUrl = demoUrls[category]?.[id] || 'about:blank';
    
    // Set title based on category
    const titles = {
        professional: 'Professional Website Demo',
        gaming: 'Gaming Platform Demo',
        startup: 'Startup Website Demo',
        ecommerce: 'E-commerce Store Demo'
    };
    
    title.textContent = titles[category] || 'Project Demo';
    iframe.src = demoUrl;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close demo modal
function closeDemo() {
    const modal = document.getElementById('demoModal');
    const iframe = document.getElementById('demoFrame');
    
    modal.classList.remove('active');
    iframe.src = '';
    document.body.style.overflow = '';
}

// Mobile menu
function setupMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            mobileMenuBtn.classList.toggle('active');
        });
    }
}

// Set current year
function setYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeDemo();
    }
});
