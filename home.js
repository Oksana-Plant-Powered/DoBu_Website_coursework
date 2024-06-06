document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Highlight the active navigation link based on the current URL
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('.nav-link');
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].classList.add('active');
        }
    }

    // Classes section functionality
    const cards = document.querySelectorAll('.class-card');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const isExpanded = card.classList.contains('expanded');

            // Collapse all cards before expanding the clicked one
            document.querySelectorAll('.class-card.expanded').forEach(expandedCard => {
                expandedCard.classList.remove('expanded');
                expandedCard.querySelector('.card-body').classList.remove('expanded');
                const detailId = expandedCard.dataset.detail;
                const detail = document.getElementById(detailId);
                if (detail) {
                    detail.classList.remove('active');
                }
            });

            if (!isExpanded) {
                card.classList.add('expanded');
                card.querySelector('.card-body').classList.add('expanded');
                const detailId = card.dataset.detail;
                const detail = document.getElementById(detailId);
                if (detail) {
                    detail.classList.add('active');
                }
                overlay.classList.add('active');
            }
        });
    });

    overlay.addEventListener('click', () => {
        // Collapse all expanded cards
        document.querySelectorAll('.class-card.expanded').forEach(card => {
            card.classList.remove('expanded');
            card.querySelector('.card-body').classList.remove('expanded');
            const detailId = card.dataset.detail;
            const detail = document.getElementById(detailId);
            if (detail) {
                detail.classList.remove('active');
            }
        });
        overlay.classList.remove('active');
    });

});

// Animate hero section background image
window.onload = function () {
    const hero = document.getElementById('hero');
    if (hero) {
        hero.style.backgroundPosition = 'center';
        hero.style.transition = 'background 1s ease-in-out';
    }

    // Makes the Welcome text twinkle
    const welcomeText = document.getElementById('welcome-text');
    if (welcomeText) {
        welcomeText.classList.add('wave');
    }
};

// Function to show the booking form modal
function showBookingForm() {
    document.getElementById("booking-modal").style.display = "block";
}

// Function to hide the booking form modal
function hideBookingForm() {
    document.getElementById("booking-modal").style.display = "none";
}


//Page Blog - expanding articles cards
// Function to expand an article
function expandArticle(card) {
    card.classList.toggle('expanded');
}

// Function to close an expanded article
function closeArticle() {
    var expandedCard = document.querySelector('.article-card.expanded');
    if (expandedCard) {
        expandedCard.classList.remove('expanded');
    }
}