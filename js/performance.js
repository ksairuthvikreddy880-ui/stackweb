// Performance Monitoring and Optimization

class PerformanceMonitor {
    constructor() {
        this.metrics = {};
        this.init();
    }

    init() {
        if ('performance' in window) {
            this.measurePageLoad();
            this.setupResourceTiming();
            this.setupLongTaskObserver();
        }
    }

    measurePageLoad() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                const connectTime = perfData.responseEnd - perfData.requestStart;
                const renderTime = perfData.domComplete - perfData.domLoading;
                
                this.metrics.pageLoad = {
                    total: pageLoadTime,
                    connect: connectTime,
                    render: renderTime,
                    domReady: perfData.domContentLoadedEventEnd - perfData.navigationStart
                };

                // Log to console in development
                if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                    console.log('📊 Performance Metrics:', this.metrics.pageLoad);
                }

                // Send to analytics (if available)
                this.sendToAnalytics();
            }, 0);
        });
    }

    setupResourceTiming() {
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    // Track slow resources
                    if (entry.duration > 1000) {
                        console.warn(`⚠️ Slow resource: ${entry.name} (${Math.round(entry.duration)}ms)`);
                    }
                }
            });
            
            observer.observe({ entryTypes: ['resource'] });
        }
    }

    setupLongTaskObserver() {
        if ('PerformanceObserver' in window) {
            try {
                const observer = new PerformanceObserver((list) => {
                    for (const entry of list.getEntries()) {
                        console.warn(`⚠️ Long task detected: ${Math.round(entry.duration)}ms`);
                    }
                });
                
                observer.observe({ entryTypes: ['longtask'] });
            } catch (e) {
                // Long task API not supported
            }
        }
    }

    sendToAnalytics() {
        // Placeholder for analytics integration
        // Example: Google Analytics, custom analytics endpoint
        if (window.gtag) {
            window.gtag('event', 'timing_complete', {
                name: 'page_load',
                value: this.metrics.pageLoad.total,
                event_category: 'Performance'
            });
        }
    }

    // Measure custom timing
    mark(name) {
        if ('performance' in window && performance.mark) {
            performance.mark(name);
        }
    }

    measure(name, startMark, endMark) {
        if ('performance' in window && performance.measure) {
            try {
                performance.measure(name, startMark, endMark);
                const measure = performance.getEntriesByName(name)[0];
                console.log(`⏱️ ${name}: ${Math.round(measure.duration)}ms`);
                return measure.duration;
            } catch (e) {
                console.error('Performance measure error:', e);
            }
        }
    }

    // Get Core Web Vitals
    getCoreWebVitals() {
        if ('PerformanceObserver' in window) {
            // Largest Contentful Paint (LCP)
            new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const lastEntry = entries[entries.length - 1];
                console.log('📈 LCP:', Math.round(lastEntry.renderTime || lastEntry.loadTime), 'ms');
            }).observe({ entryTypes: ['largest-contentful-paint'] });

            // First Input Delay (FID)
            new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach(entry => {
                    console.log('📈 FID:', Math.round(entry.processingStart - entry.startTime), 'ms');
                });
            }).observe({ entryTypes: ['first-input'] });

            // Cumulative Layout Shift (CLS)
            let clsScore = 0;
            new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (!entry.hadRecentInput) {
                        clsScore += entry.value;
                    }
                }
                console.log('📈 CLS:', clsScore.toFixed(3));
            }).observe({ entryTypes: ['layout-shift'] });
        }
    }
}

// Auto-initialize in development
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.perfMonitor = new PerformanceMonitor();
    window.perfMonitor.getCoreWebVitals();
}

export default PerformanceMonitor;
