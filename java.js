// SECTION 2.1: Global Execution Event Listener ensuring safe DOM structure manipulation
document.addEventListener('DOMContentLoaded', () => {

    // 1. ADVANCED DOM MANIPULATION: Dynamic Footer Year Calculation
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. INTERACTIVE LOCATION MAP LAYERING: Ready to active on your Contact Page later
    const mapContainer = document.getElementById('map');
    if (mapContainer) {
        // Initialize map camera targeting coordinates with zoom ratio 13
        const map = L.map('map').setView([-25.7479, 28.2293], 13);

        // Inject high-resolution OpenStreetMap interface tile imagery layout layers
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Drop a localized marker point detailing corporate bakery placement
        L.marker([-25.7479, 28.2293]).addTo(map)
            .bindPopup('<b>House of Crumbs</b><br>We bake the world a better place!')
            .openPopup();
    }

    // 3. INTERACTIVE GALLERIES: Image Lightbox Popup View Modal Controller Logic
    const modal = document.getElementById("lightboxModal");
    const cakeImg = document.getElementById("cakeImage");
    const modalImg = document.getElementById("lightboxImg");
    const closeBtn = document.querySelector(".close-modal");

    if (cakeImg && modal && modalImg) {
        // Triggers click event tracking on baseline image target
        cakeImg.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        }
    }

    // Modal Exit logic routines via the "X" dismiss element hook
    if (closeBtn && modal) {
        closeBtn.onclick = function() { 
            modal.style.display = "none";
        }
    }

    // Modal Fallback exit safety routine via outer background masking clicks
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});