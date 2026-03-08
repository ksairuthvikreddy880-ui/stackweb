// Router Module - Handles SPA navigation

export class Router {
    constructor(components, appContent) {
        this.components = components;
        this.appContent = appContent;
        this.currentView = '';
    }

    navigate(viewName) {
        if (this.currentView === viewName || !this.components[viewName]) return;
        
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
            currentContainer.classList.add('exit');
            setTimeout(() => {
                this.renderView(viewName);
            }, 200);
        } else {
            this.renderView(viewName);
        }
    }

    renderView(viewName) {
        this.appContent.innerHTML = this.components[viewName];
        this.currentView = viewName;
        window.scrollTo(0, 0);
        
        return viewName;
    }
}
