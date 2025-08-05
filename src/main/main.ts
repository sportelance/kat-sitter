// Modal functionality
class ModalManager {
    private modal: HTMLElement | null;
    private closeBtn: HTMLElement | null;

    constructor() {
        this.modal = document.getElementById('services-modal');
        this.closeBtn = this.modal?.querySelector('.close') || null;
        this.init();
    }

    private init(): void {
        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => this.closeModal());
        }

        // Close modal when clicking outside
        if (this.modal) {
            this.modal.addEventListener('click', (e) => {
                if (e.target === this.modal) {
                    this.closeModal();
                }
            });
        }

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal?.style.display === 'block') {
                this.closeModal();
            }
        });
    }

    public openModal(): void {
        if (this.modal) {
            this.modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }

    public closeModal(): void {
        if (this.modal) {
            this.modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
}

// Navigation functionality
class NavigationManager {
    private servicesCard: HTMLElement | null;
    private contactCard: HTMLElement | null;
    private galleryCard: HTMLElement | null;
    private modalManager: ModalManager;

    constructor() {
        this.servicesCard = document.getElementById('services-card');
        this.contactCard = document.getElementById('contact-card');
        this.galleryCard = document.getElementById('gallery-card');
        this.modalManager = new ModalManager();
        this.init();
    }

    private init(): void {
        if (this.servicesCard) {
            this.servicesCard.addEventListener('click', () => {
                this.modalManager.openModal();
            });
        }

        if (this.contactCard) {
            this.contactCard.addEventListener('click', () => {
                window.location.href = './contact/index.html';
            });
        }

        if (this.galleryCard) {
            this.galleryCard.addEventListener('click', () => {
                window.location.href = './gallery/index.html';
            });
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new NavigationManager();
});

// Add some interactive effects
document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        const cardElement = card as HTMLElement;
        cardElement.addEventListener('mouseenter', () => {
            cardElement.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        cardElement.addEventListener('mouseleave', () => {
            cardElement.style.transform = 'translateY(0) scale(1)';
        });
    });
}); 