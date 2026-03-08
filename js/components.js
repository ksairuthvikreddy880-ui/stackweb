// Component Templates for the SPA

export const components = {
    home: `
        <div class="view-container">
            <!-- Hero Section -->
            <section class="section hero-section">
                <!-- Background Image Element -->
                <div class="hero-background">
                    <img src="assets/hero_bg.png" alt="Team working on technology">
                    <div class="hero-overlay"></div>
                </div>

                <!-- Floating geometric shapes -->
                <div class="shape shape-1"></div>
                <div class="shape shape-2"></div>
                
                <div class="container hero-content">
                    <h1 class="reveal hero-title">
                        We Build <br> <span class="text-accent">Great Websites</span>
                    </h1>
                    <p class="reveal delay-1 hero-description">
                        Stackweb is a premium freelancing agency delivering high-contrast, deeply animated, and unforgettable digital experiences for visionary customers.
                    </p>
                    <div class="reveal delay-2 hero-buttons">
                        <a href="#" class="btn-primary" data-link="help">Start Your Project</a>
                        <a href="#" class="btn-secondary" data-link="designs">View Our Work</a>
                    </div>
                </div>
            </section>

            <!-- Services Section -->
            <section class="section container services-section">
                <h2 class="section-title reveal">What We Do</h2>
                <div class="services-grid">
                    <div class="glass-card reveal">
                        <div class="service-icon" style="color: var(--accent-cyan);">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="3" y="3" width="18" height="18" rx="2"/>
                                <path d="M9 3v18M3 9h18M3 15h18"/>
                            </svg>
                        </div>
                        <h3>UI/UX Design</h3>
                        <p>High-contrast interfaces engineered to impress. We prioritize stunning visuals that convert.</p>
                    </div>
                    <div class="glass-card reveal delay-1">
                        <div class="service-icon" style="color: var(--accent-violet);">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="16 18 22 12 16 6"/>
                                <polyline points="8 6 2 12 8 18"/>
                            </svg>
                        </div>
                        <h3>Web Development</h3>
                        <p>Blazing fast, animated Single Page Applications built with modern web technologies.</p>
                    </div>
                    <div class="glass-card reveal delay-2">
                        <div class="service-icon" style="color: #fff;">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                                <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                            </svg>
                        </div>
                        <h3>Brand Identity</h3>
                        <p>Creating cohesive digital brand presences that stand out in a crowded market.</p>
                    </div>
                </div>
            </section>
        </div>
    `,
    
    designs: `
        <div class="view-container">
            <div class="container section">
                <div class="reveal designs-header">
                    <h1 class="section-title">Our <span class="text-accent">Designs</span></h1>
                    <p class="section-subtitle">
                        A curated selection of our high-contrast web development projects. We let the work speak for itself.
                    </p>
                </div>
                
                <div class="portfolio-grid">
                    <div class="portfolio-item reveal glass-card">
                        <div class="img-wrapper">
                            <img src="assets/fintech_v2.png" alt="Stackweb Fintech Dashboard Design" loading="lazy">
                        </div>
                        <div class="portfolio-info">
                            <h3>Stackweb Analytics</h3>
                            <p>Web Application & Dashboard UI</p>
                        </div>
                    </div>
                    
                    <div class="portfolio-item reveal delay-1 glass-card">
                        <div class="img-wrapper">
                            <img src="assets/ecommerce.png" alt="Luxury E-commerce Design" loading="lazy">
                        </div>
                        <div class="portfolio-info">
                            <h3>Aura Store</h3>
                            <p>Luxury E-Commerce Experience</p>
                        </div>
                    </div>
                    
                    <div class="portfolio-item reveal delay-2 glass-card">
                        <div class="img-wrapper">
                            <img src="assets/saas.png" alt="SaaS Landing Page Design" loading="lazy">
                        </div>
                        <div class="portfolio-info">
                            <h3>Nexus Platform</h3>
                            <p>SaaS Landing Page & Animation</p>
                        </div>
                    </div>

                    <div class="portfolio-item reveal glass-card">
                        <div class="img-wrapper">
                            <img src="assets/startup.png" alt="Startup Landing Page Design" loading="lazy">
                        </div>
                        <div class="portfolio-info">
                            <h3>Nova Tech</h3>
                            <p>Tech Startup Landing Page</p>
                        </div>
                    </div>

                    <div class="portfolio-item reveal delay-1 glass-card">
                        <div class="img-wrapper">
                            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" alt="Corporate Website Design" loading="lazy">
                        </div>
                        <div class="portfolio-info">
                            <h3>Apex Consulting</h3>
                            <p>Professional Corporate Website</p>
                        </div>
                    </div>

                    <div class="portfolio-item reveal delay-2 glass-card">
                        <div class="img-wrapper">
                            <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop" alt="Gaming Platform Design" loading="lazy">
                        </div>
                        <div class="portfolio-info">
                            <h3>Team Genesis</h3>
                            <p>High Energy Gaming Platform</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    
    about: `
        <div class="view-container">
            <div class="container section">
               <div class="about-grid">
                    <div class="reveal about-content">
                        <h1 class="about-title">About <span class="text-accent">Stackweb</span></h1>
                        <p class="about-text">
                            Stackweb is an elite freelancing collective specializing in crafting bespoke web experiences. We don't just write code; we architect digital art.
                        </p>
                        <p class="about-text">
                            Our philosophy is simple: <strong>Make great websites with high contrast.</strong> We believe that an interface should command attention. By fusing dramatic dark modes, vibrant neon accents, and fluid micro-animations, we create platforms that leave a lasting impression on your customers.
                        </p>
                        
                        <div class="stats-grid">
                            <div class="stat-item">
                                <h4 class="stat-number">50+</h4>
                                <p>Projects Delivered</p>
                            </div>
                            <div class="stat-item">
                                <h4 class="stat-number stat-violet">100%</h4>
                                <p>Client Satisfaction</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="reveal delay-1 glass-card about-visual">
                        <div class="animated-shape">
                            <div class="shape-ring ring-1"></div>
                            <div class="shape-ring ring-2"></div>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    `,
    
    help: `
        <div class="view-container">
            <div class="container section">
                <h1 class="section-title reveal">How Can We <span class="text-accent">Help?</span></h1>
                
                <div class="help-grid">
                    <div class="reveal faq-section">
                        <h3 class="subsection-title">Frequently Asked Questions</h3>
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

                    <div class="reveal delay-1">
                        <form class="glass-card contact-form" id="contactForm">
                            <h3 class="subsection-title">Start a Discussion</h3>
                            
                            <div class="input-group">
                                <input type="text" id="name" required>
                                <label for="name">Your Name</label>
                            </div>
                            
                            <div class="input-group">
                                <input type="email" id="email" required>
                                <label for="email">Email Address</label>
                            </div>
                            
                            <div class="input-group">
                                <textarea id="message" rows="4" required></textarea>
                                <label for="message">Project Details</label>
                            </div>
                            
                            <button type="submit" class="btn-primary btn-full">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `
};
