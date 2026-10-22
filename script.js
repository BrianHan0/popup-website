// ================================================
// Configuration & DOM Setup
// ================================================

document.addEventListener('DOMContentLoaded', () => {
    // Load configuration from hidden config div
    const config = {
        restaurantName: document.getElementById('restaurantName')?.textContent || 'THE UNLISTED',
        instagram: document.getElementById('instagram')?.textContent || 'https://instagram.com',
        contactEmail: document.getElementById('contactEmail')?.textContent || 'hello@theunlisted.local',
        nextDate: document.getElementById('nextDate')?.textContent || 'Soon',
    };

    // Update page elements with config
    updatePageWithConfig(config);

    // Initialize interactive features
    initializeFadeIns();
});

// ================================================
// Configuration Updates
// ================================================

function updatePageWithConfig(config) {
    // Update title
    const titleEl = document.getElementById('title');
    if (titleEl) {
        titleEl.textContent = config.restaurantName;
    }

    // Update page title
    document.title = config.restaurantName;

    // Update next date
    const dateEl = document.getElementById('nextDate');
    if (dateEl) {
        dateEl.textContent = config.nextDate;
    }

    // Update contact button
    const contactBtn = document.getElementById('contactBtn');
    if (contactBtn) {
        contactBtn.href = `mailto:${config.contactEmail}`;
        contactBtn.textContent = 'Request an Invitation';
    }

    // Update Instagram button
    const instagramBtn = document.getElementById('instagramBtn');
    if (instagramBtn) {
        instagramBtn.href = config.instagram;
        instagramBtn.textContent = 'Follow';
    }
}


// ================================================
// Fade-in on Scroll
// ================================================

function initializeFadeIns() {
    const sections = document.querySelectorAll('section');

    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px',
        });

        sections.forEach((section) => {
            observer.observe(section);
        });
    } else {
        // Fallback: make all sections visible if IntersectionObserver not supported
        sections.forEach((section) => {
            section.classList.add('fade-in');
        });
    }
}

// ================================================
// Utility Functions
// ================================================

function isTouchDevice() {
    return (
        (typeof window !== 'undefined' &&
            ('ontouchstart' in window ||
                (typeof window.DocumentTouch !== 'undefined' &&
                    document instanceof window.DocumentTouch)))
    );
}

