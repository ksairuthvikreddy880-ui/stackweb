// Component Templates for the SPA

const components = {
    home: `
        <div class="view-container">
            <!-- Hero Section -->
            <section class="section hero-section" style="min-height: 80vh; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;">
                
                <!-- Background Image Element -->
                <div class="hero-background" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; overflow: hidden; background: #000;">
                    <img src="assets/hero_bg.png" alt="Team working on technology" style="position: absolute; top: 50%; left: 50%; width: 100%; height: 100%; object-fit: cover; transform: translate(-50%, -50%); opacity: 0.5;">
                    <!-- Overlay gradient to ensure text remains readable and blend perfectly -->
                    <div style="position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(5,5,5,0.7) 0%, rgba(5,5,5,0.5) 50%, rgba(5,5,5,0.8) 100%);"></div>
                </div>

                <!-- Floating geometric shapes for background flair -->
                <div class="shape shape-1" style="position: absolute; top: 10%; left: 10%; width: 100px; height: 100px; border: 1px solid var(--glass-border); border-radius: 50%; animation: float 6s ease-in-out infinite; z-index: 2;"></div>
                <div class="shape shape-2" style="position: absolute; bottom: 20%; right: 15%; width: 150px; height: 150px; border: 1px solid var(--accent-violet); border-radius: 20px; transform: rotate(45deg); animation: float 8s ease-in-out infinite alternate; z-index: 2;"></div>
                
                <div class="container" style="text-align: center; position: relative; z-index: 10;">
                    <h1 class="reveal" style="font-size: clamp(3rem, 8vw, 6rem); margin-bottom: 1.5rem; line-height: 1.1;">
                        We Build <br> 
                        <span data-rotating-text data-words="Design,Dev,Host" data-interval="2000" style="display: inline-block;">Great Websites</span>
                    </h1>
                    <p class="reveal delay-1" style="font-size: clamp(1.1rem, 2vw, 1.4rem); color: var(--text-muted); max-width: 600px; margin: 0 auto 3rem;">
                        Stackweb is a premium freelancing agency delivering high-contrast, deeply animated, and unforgettable digital experiences for visionary customers.
                    </p>
                    <div class="reveal delay-2" style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                        <a href="project-form.html" class="btn-primary" style="font-size: 1.1rem; padding: 1rem 2.5rem;">Start Your Project</a>
                        <a href="portfolio.html" class="btn-secondary" style="font-size: 1.1rem; padding: 1rem 2.5rem;">View Our Work</a>
                    </div>
                </div>
            </section>

            <!-- Services Section -->
            <section class="section container">
                <h2 class="section-title reveal">What We Do</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                    <div class="glass-card reveal">
                        <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--accent-cyan);">UI/UX Design</h3>
                        <p style="color: var(--text-muted);">High-contrast interfaces engineered to impress. We prioritize stunning visuals that convert.</p>
                    </div>
                    <div class="glass-card reveal delay-1">
                        <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--accent-violet);">Web Development</h3>
                        <p style="color: var(--text-muted);">Blazing fast, animated Single Page Applications built with modern web technologies.</p>
                    </div>
                    <div class="glass-card reveal delay-2">
                        <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: #fff;">Brand Identity</h3>
                        <p style="color: var(--text-muted);">Creating cohesive digital brand presences that stand out in a crowded market.</p>
                    </div>
                </div>
            </section>
        </div>
        
        <style>
            @keyframes float {
                0% { transform: translateY(0) rotate(0deg); }
                50% { transform: translateY(-20px) rotate(10deg); }
                100% { transform: translateY(0) rotate(0deg); }
            }
            @keyframes floatDiagonal {
                0% { transform: translate(0, 0) rotate(45deg); }
                50% { transform: translate(-10px, -20px) rotate(50deg); }
                100% { transform: translate(0, 0) rotate(45deg); }
            }
            @keyframes pulseGlow {
                0% { text-shadow: 0 0 10px rgba(0, 240, 255, 0.2); }
                100% { text-shadow: 0 0 30px rgba(0, 240, 255, 0.8), 0 0 60px rgba(0, 240, 255, 0.4); }
            }
        </style>
    `,
    designs: `
        <div class="view-container">
            <div class="container section">
                <div class="reveal" style="text-align: center; margin-bottom: 4rem;">
                    <h1 class="section-title" style="margin-bottom: 1rem; display: flex; align-items: center; justify-content: center; gap: 1rem; flex-wrap: wrap;">
                        Our <span class="text-accent">Designs</span>
                        <span style="display: inline-block; padding: 0.5rem 1.5rem; background: linear-gradient(135deg, var(--accent-cyan), var(--accent-violet)); color: var(--bg-dark); font-size: 0.9rem; font-weight: 700; border-radius: 30px; text-shadow: none; animation: pulse 2s infinite;">COMING SOON</span>
                    </h1>
                    <p style="color: var(--text-muted); max-width: 600px; margin: 0 auto; font-size: 1.2rem;">
                        A curated selection of our high-contrast web development projects. We let the work speak for itself.
                    </p>
                </div>
                
                <div class="portfolio-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 3rem;">
                    <!-- Project 1 (Fintech - Updated) -->
                    <div class="portfolio-item reveal glass-card" style="padding: 1rem;">
                        <div class="img-wrapper" style="border-radius: 12px; overflow: hidden; aspect-ratio: 16/9; background: #111; position: relative;">
                            <img src="assets/fintech_v2.png" alt="Stackweb Fintech Dashboard Design" loading="lazy">
                        </div>
                        <div style="padding: 1.5rem 0.5rem 0.5rem;">
                            <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem; color: var(--text-main);">Stackweb Analytics</h3>
                            <p style="color: var(--text-muted); font-size: 0.9rem;">Web Application & Dashboard UI</p>
                        </div>
                    </div>
                    
                    <!-- Project 2 (E-commerce) -->
                    <div class="portfolio-item reveal delay-1 glass-card" style="padding: 1rem;">
                        <div class="img-wrapper" style="border-radius: 12px; overflow: hidden; aspect-ratio: 16/9; background: #111; position: relative;">
                            <img src="assets/ecommerce.png" alt="Luxury E-commerce Design" loading="lazy">
                        </div>
                        <div style="padding: 1.5rem 0.5rem 0.5rem;">
                            <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem; color: var(--text-main);">Aura Store</h3>
                            <p style="color: var(--text-muted); font-size: 0.9rem;">Luxury E-Commerce Experience</p>
                        </div>
                    </div>
                    
                    <!-- Project 3 (SaaS) -->
                    <div class="portfolio-item reveal delay-2 glass-card" style="padding: 1rem;">
                        <div class="img-wrapper" style="border-radius: 12px; overflow: hidden; aspect-ratio: 16/9; background: #111; position: relative;">
                            <img src="assets/saas.png" alt="SaaS Landing Page Design" loading="lazy">
                        </div>
                        <div style="padding: 1.5rem 0.5rem 0.5rem;">
                            <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem; color: var(--text-main);">Nexus Platform</h3>
                            <p style="color: var(--text-muted); font-size: 0.9rem;">SaaS Landing Page & Animation</p>
                        </div>
                    </div>

                    <!-- Project 4 (Startup) -->
                    <div class="portfolio-item reveal glass-card" style="padding: 1rem;">
                        <div class="img-wrapper" style="border-radius: 12px; overflow: hidden; aspect-ratio: 16/9; background: #111; position: relative;">
                            <img src="assets/startup.png" alt="Startup Landing Page Design" loading="lazy">
                        </div>
                        <div style="padding: 1.5rem 0.5rem 0.5rem;">
                            <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem; color: var(--text-main);">Nova Tech</h3>
                            <p style="color: var(--text-muted); font-size: 0.9rem;">Tech Startup Landing Page</p>
                        </div>
                    </div>

                    <!-- Project 5 (Professional) -->
                    <div class="portfolio-item reveal delay-1 glass-card" style="padding: 1rem;">
                        <div class="img-wrapper" style="border-radius: 12px; overflow: hidden; aspect-ratio: 16/9; background: #111; position: relative;">
                            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" alt="Corporate Website Design Default" loading="lazy">
                        </div>
                        <div style="padding: 1.5rem 0.5rem 0.5rem;">
                            <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem; color: var(--text-main);">Apex Consulting</h3>
                            <p style="color: var(--text-muted); font-size: 0.9rem;">Professional Corporate Website</p>
                        </div>
                    </div>

                    <!-- Project 6 (Gaming) -->
                    <div class="portfolio-item reveal delay-2 glass-card" style="padding: 1rem;">
                        <div class="img-wrapper" style="border-radius: 12px; overflow: hidden; aspect-ratio: 16/9; background: #111; position: relative;">
                            <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop" alt="Gaming Platform Design Default" loading="lazy">
                        </div>
                        <div style="padding: 1.5rem 0.5rem 0.5rem;">
                            <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem; color: var(--text-main);">Team Genesis</h3>
                            <p style="color: var(--text-muted); font-size: 0.9rem;">High Energy Gaming Platform</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <style>
            .portfolio-item .img-wrapper img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform var(--transition-slow);
            }
            .portfolio-item:hover .img-wrapper img {
                transform: scale(1.05);
            }
        </style>
    `,
    about: `
        <div class="view-container">
            <div class="container section">
               <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;">
                    <div class="reveal">
                        <h1 style="font-size: 3.5rem; margin-bottom: 1.5rem;">About <span class="text-accent">Stackweb</span></h1>
                        <p style="font-size: 1.2rem; color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.8;">
                            Stackweb is an elite freelancing collective specializing in crafting bespoke web experiences. We don't just write code; we architect digital art.
                        </p>
                        <p style="font-size: 1.1rem; color: var(--text-muted); margin-bottom: 2rem; line-height: 1.8;">
                            Our philosophy is simple: <strong style="color: #fff;">Make great websites with high contrast.</strong> We believe that an interface should command attention. By fusing dramatic dark modes, vibrant neon accents, and fluid micro-animations, we create platforms that leave a lasting impression on your customers.
                        </p>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 3rem;">
                            <div>
                                <h4 style="font-size: 2.5rem; color: var(--accent-cyan);">50+</h4>
                                <p style="color: var(--text-muted);">Projects Delivered</p>
                            </div>
                            <div>
                                <h4 style="font-size: 2.5rem; color: var(--accent-violet);">100%</h4>
                                <p style="color: var(--text-muted);">Client Satisfaction</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="reveal delay-1 glass-card" style="aspect-ratio: 1; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;">
                        <!-- Animated conceptual art block with logo -->
                        <div style="width: 200px; height: 200px; border-radius: 30px; background: linear-gradient(45deg, var(--bg-dark), #1a1a1a); border: 2px solid var(--accent-cyan); position: relative; animation: float 6s ease-in-out infinite; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                            <img src="assets/stackweb-logo.jpg" alt="Stackweb Logo" style="width: 80%; height: 80%; object-fit: contain; border-radius: 20px; z-index: 2; position: relative;">
                            <div style="position: absolute; inset: -20px; border: 1px solid rgba(255,255,255,0.1); border-radius: 40px; animation: spin 20s linear infinite;"></div>
                            <div style="position: absolute; inset: -40px; border: 1px dashed rgba(138,43,226,0.3); border-radius: 50px; animation: spin 30s linear infinite reverse;"></div>
                        </div>
                    </div>
               </div>
            </div>
        </div>
        <style>
            @keyframes spin { 100% { transform: rotate(360deg); } }
            @media (max-width: 900px) {
                .view-container .container.section > div {
                    grid-template-columns: 1fr !important;
                }
            }
        </style>
    `,
    help: `
        <div class="view-container">
            <div class="container section">
                <h1 class="section-title reveal">How Can We <span class="text-accent">Help?</span></h1>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; margin-top: 3rem;">
                    
                    <!-- FAQ Column -->
                    <div class="reveal">
                        <h3 style="font-size: 1.8rem; margin-bottom: 2rem;">Frequently Asked Questions</h3>
                        <div class="faq-container">
                            <div class="faq-item">
                                <button class="faq-btn">What forms of payment do you accept for freelancing?</button>
                                <div class="faq-content">
                                    <p>We accept bank transfers, major credit cards, and select cryptocurrencies. We typically structure payments in milestones (e.g., 50% upfront, 50% upon completion).</p>
                                </div>
                            </div>
                            <div class="faq-item">
                                <button class="faq-btn">How long does a website take to build?</button>
                                <div class="faq-content">
                                    <p>A standard high-contrast, animated site usually takes 3 to 6 weeks, depending on the complexity of the animations and the number of pages.</p>
                                </div>
                            </div>
                            <div class="faq-item">
                                <button class="faq-btn">Do you provide ongoing support?</button>
                                <div class="faq-content">
                                    <p>Yes. We offer maintenance retainers post-launch to ensure your website remains fast, secure, and visually flawless as browsers update.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Contact Form Column -->
                    <div class="reveal delay-1">
                        <form class="glass-card contact-form" id="helpContactForm">
                            <h3 style="font-size: 1.8rem; margin-bottom: 2rem;">Start a Discussion</h3>
                            
                            <div class="input-group">
                                <input type="text" id="helpName" required>
                                <label for="helpName">Your Name</label>
                            </div>
                            
                            <div class="input-group">
                                <input type="email" id="helpEmail" required>
                                <label for="helpEmail">Email Address</label>
                            </div>
                            
                            <div class="input-group">
                                <textarea id="helpMessage" rows="4" required></textarea>
                                <label for="helpMessage">Project Details</label>
                            </div>
                            
                            <button type="submit" class="btn-primary" style="width: 100%;">Send Message</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
        <style>
            /* FAQ Accordion Styles */
            .faq-item {
                border-bottom: 1px solid var(--glass-border);
                margin-bottom: 1rem;
            }
            .faq-btn {
                width: 100%;
                text-align: left;
                background: none;
                border: none;
                color: var(--text-main);
                font-size: 1.1rem;
                font-family: var(--font-main);
                padding: 1rem 0;
                cursor: pointer;
                display: flex;
                justify-content: space-between;
                align-items: center;
                transition: color 0.3s ease;
            }
            .faq-btn:hover { color: var(--accent-cyan); }
            .faq-btn::after {
                content: '+';
                font-size: 1.5rem;
                transition: transform 0.3s ease;
            }
            .faq-item.active .faq-btn::after {
                content: '−';
                transform: rotate(180deg);
                color: var(--accent-cyan);
            }
            .faq-content {
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.4s ease-out, opacity 0.4s ease-out;
                opacity: 0;
            }
            .faq-item.active .faq-content {
                max-height: 200px;
                opacity: 1;
                margin-bottom: 1.5rem;
            }
            .faq-content p { color: var(--text-muted); line-height: 1.6; }

            /* Floating Label Form */
            .input-group {
                position: relative;
                margin-bottom: 2rem;
            }
            .input-group input, .input-group textarea {
                width: 100%;
                background: transparent;
                border: none;
                border-bottom: 2px solid var(--glass-border);
                color: var(--text-main);
                font-family: var(--font-main);
                font-size: 1rem;
                padding: 0.5rem 0;
                outline: none;
                transition: border-color var(--transition-fast);
            }
            .input-group label {
                position: absolute;
                top: 0.5rem;
                left: 0;
                color: var(--text-muted);
                transition: all 0.3s ease;
                pointer-events: none;
            }
            .input-group input:focus, .input-group textarea:focus {
                border-bottom-color: var(--accent-cyan);
            }
            .input-group input:focus ~ label,
            .input-group input:valid ~ label,
            .input-group textarea:focus ~ label,
            .input-group textarea:valid ~ label {
                top: -20px;
                font-size: 0.8rem;
                color: var(--accent-cyan);
            }
            @media (max-width: 900px) {
                .view-container .container.section > div {
                    grid-template-columns: 1fr !important;
                }
            }
        </style>
    `
};

// --- Core Application Logic ---

class App {
    constructor() {
        this.appContent = document.getElementById('app-content');
        this.navLinks = document.querySelectorAll('.nav-link, .logo, .btn-primary, .btn-secondary');
        this.currentView = '';
        
        // Mobile menu elements
        this.mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        this.navLinksContainer = document.querySelector('.nav-links');
        
        this.init();
    }

    init() {
        // Setup routing listeners
        this.navLinks.forEach(link => {
            if(link.hasAttribute('data-link')) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const view = link.getAttribute('data-link');
                    this.navigate(view);
                    this.closeMobileMenu();
                });
            }
        });

        // Setup mobile menu toggle
        if(this.mobileMenuBtn) {
            this.mobileMenuBtn.addEventListener('click', () => {
                this.navLinksContainer.classList.toggle('nav-active');
            });
        }

        // Setup Navbar Scroll Effect
        let lastScrollY = window.scrollY;
        const navbar = document.querySelector('.navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                if (window.scrollY > lastScrollY) {
                    navbar.classList.add('scrolled-down'); // scroll down -> hide
                } else {
                    navbar.classList.remove('scrolled-down'); // scroll up -> show
                }
            }
            lastScrollY = window.scrollY;
        }, { passive: true });

        // Set the year in footer
        document.getElementById('year').textContent = new Date().getFullYear();

        // Load initial view
        this.navigate('home');
    }

    navigate(viewName) {
        if (this.currentView === viewName || !components[viewName]) return;
        
        // Update active state in nav
        document.querySelectorAll('.nav-link').forEach(link => {
            if(link.getAttribute('data-link') === viewName) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        const currentContainer = this.appContent.querySelector('.view-container');
        
        if (currentContainer) {
            // Animate out
            currentContainer.classList.add('exit');
            setTimeout(() => {
                this.renderView(viewName);
            }, 200); // Matches CSS transition time
        } else {
            // First load
            this.renderView(viewName);
        }
    }

    renderView(viewName) {
        this.appContent.innerHTML = components[viewName];
        this.currentView = viewName;
        window.scrollTo(0, 0);
        
        // Setup page specific JS (Interactions, Observers)
        this.setupObservers();
        
        if (viewName === 'help') {
            this.setupFAQ();
        }
        
        // Initialize rotating text
        if (viewName === 'home') {
            this.initRotatingText();
        }
    }

    setupObservers() {
        const revealElements = this.appContent.querySelectorAll('.reveal');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Optional: unobserve after reveal
                    // observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => observer.observe(el));
    }

    setupFAQ() {
        const faqItems = this.appContent.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const btn = item.querySelector('.faq-btn');
            btn.addEventListener('click', () => {
                // Close others
                faqItems.forEach(other => {
                    if(other !== item) other.classList.remove('active');
                });
                item.classList.toggle('active');
            });
        });

        // Setup WhatsApp form submission
        const helpForm = document.getElementById('helpContactForm');
        if (helpForm) {
            helpForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const name = document.getElementById('helpName').value;
                const email = document.getElementById('helpEmail').value;
                const message = document.getElementById('helpMessage').value;
                
                // Show success popup
                this.showSuccessPopup();
                
                // Create WhatsApp message
                const whatsappMessage = `Hello! I'm interested in starting a project.%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A*Project Details:*%0A${encodeURIComponent(message)}`;
                
                // WhatsApp number
                const phoneNumber = '919100605066';
                
                // Open WhatsApp after delay
                setTimeout(() => {
                    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
                }, 2000);
            });
        }
    }

    showSuccessPopup() {
        // Create popup if it doesn't exist
        let popup = document.getElementById('successPopup');
        if (!popup) {
            popup = document.createElement('div');
            popup.id = 'successPopup';
            popup.className = 'success-popup';
            popup.innerHTML = `
                <div class="success-popup-content">
                    <div class="success-checkmark">
                        <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                            <circle class="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                            <path class="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                        </svg>
                    </div>
                    <h3>Message Sent Successfully!</h3>
                    <p>Redirecting to WhatsApp...</p>
                </div>
            `;
            document.body.appendChild(popup);
        }
        
        // Show popup
        popup.classList.add('active');
        
        // Hide after 2 seconds
        setTimeout(() => {
            popup.classList.remove('active');
        }, 2500);
    }

    initRotatingText() {
        const rotatingElements = document.querySelectorAll('[data-rotating-text]');
        rotatingElements.forEach(element => {
            const words = element.dataset.words ? element.dataset.words.split(',') : ['Design', 'Dev', 'Host'];
            const interval = element.dataset.interval ? parseInt(element.dataset.interval) : 2000;
            
            let currentIndex = 0;
            let isAnimating = false;
            
            // Create structure
            element.innerHTML = '';
            const container = document.createElement('span');
            container.className = 'rotating-text-container';
            
            const staticPart = document.createElement('span');
            staticPart.className = 'rotating-text-static';
            staticPart.textContent = 'Web ';
            
            const rotatingWrapper = document.createElement('span');
            rotatingWrapper.className = 'rotating-text-wrapper';
            
            const rotatingPart = document.createElement('span');
            rotatingPart.className = 'rotating-text-dynamic';
            rotatingPart.textContent = words[0];
            
            rotatingWrapper.appendChild(rotatingPart);
            container.appendChild(staticPart);
            container.appendChild(rotatingWrapper);
            element.appendChild(container);
            
            // Animation function
            const animateWord = (word) => {
                if (isAnimating) return;
                isAnimating = true;
                
                rotatingPart.style.animation = 'slideUp 0.5s ease-in-out forwards';
                
                setTimeout(() => {
                    rotatingPart.textContent = word;
                    rotatingPart.style.animation = 'slideDown 0.5s ease-in-out forwards';
                    
                    setTimeout(() => {
                        rotatingPart.style.animation = '';
                        isAnimating = false;
                    }, 500);
                }, 500);
            };
            
            // Start rotation
            setInterval(() => {
                currentIndex = (currentIndex + 1) % words.length;
                animateWord(words[currentIndex]);
            }, interval);
        });
    }

    closeMobileMenu() {
        if(this.navLinksContainer.classList.contains('nav-active')) {
            this.navLinksContainer.classList.remove('nav-active');
        }
    }
}

// Initialize App when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
    
    // Service Worker disabled - causing issues
    // if ('serviceWorker' in navigator) {
    //     window.addEventListener('load', () => {
    //         navigator.serviceWorker.register('/service-worker.js')
    //             .then(registration => {
    //                 console.log('ServiceWorker registered:', registration.scope);
    //             })
    //             .catch(error => {
    //                 console.log('ServiceWorker registration failed:', error);
    //             });
    //     });
    // }
});
