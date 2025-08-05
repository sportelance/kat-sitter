// Contact page functionality
class ContactPage {
    private backButton: HTMLElement | null;

    constructor() {
        this.backButton = document.getElementById('back-button');
        this.init();
    }

    private init(): void {
        if (this.backButton) {
            this.backButton.addEventListener('click', () => {
                window.location.href = '../index.html';
            });
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ContactPage();
}); 