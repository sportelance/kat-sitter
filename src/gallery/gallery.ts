// Back button functionality
class BackButtonManager {
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

// Photo modal functionality
class PhotoModalManager {
    private modal: HTMLElement | null;
    private closeBtn: HTMLElement | null;
    private expandedPhoto: HTMLImageElement | null;

    constructor() {
        this.modal = document.getElementById('photo-modal');
        this.closeBtn = this.modal?.querySelector('.photo-close') || null;
        this.expandedPhoto = document.getElementById('expanded-photo') as HTMLImageElement;
        this.init();
    }

    private init(): void {
        // Add click listeners to all gallery photos
        const galleryPhotos = document.querySelectorAll('.gallery-photo');
        galleryPhotos.forEach(photo => {
            photo.addEventListener('click', (e) => {
                const target = e.target as HTMLImageElement;
                this.openModal(target.src, target.alt);
            });
        });

        // Close modal when clicking close button
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
            
            // Also close when clicking on the modal content area (but not the image)
            const modalContent = this.modal.querySelector('.photo-modal-content');
            if (modalContent) {
                modalContent.addEventListener('click', (e) => {
                    if (e.target === modalContent) {
                        this.closeModal();
                    }
                });
            }
        }

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal?.style.display === 'block') {
                this.closeModal();
            }
        });
    }

    private openModal(photoSrc: string, photoAlt: string): void {
        if (this.modal && this.expandedPhoto) {
            this.expandedPhoto.src = photoSrc;
            this.expandedPhoto.alt = photoAlt;
            this.modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }

    private closeModal(): void {
        if (this.modal) {
            this.modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new BackButtonManager();
    new PhotoModalManager();
}); 