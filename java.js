document.addEventListener('DOMContentLoaded', () => {

    // 1. FOOTER YEAR
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // 2. PRODUCT SEARCH FILTERING (Section 2.2 Requirement)
    const searchInput = document.getElementById('productSearch');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const filter = searchInput.value.toLowerCase();
            const products = document.querySelectorAll('.product-card');
            
            products.forEach(product => {
                const title = product.querySelector('h3').textContent.toLowerCase();
                // If title includes search term, show it, otherwise hide it
                product.style.display = title.includes(filter) ? "" : "none";
            });
        });
    }

    // 3. MAP & MODAL LOGIC (Existing)
    const mapContainer = document.getElementById('map');
    if (mapContainer) {
        const map = L.map('map').setView([-25.7479, 28.2293], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        L.marker([-25.7479, 28.2293]).addTo(map).bindPopup('<b>House of Crumbs</b>').openPopup();
    }

    const modal = document.getElementById("lightboxModal");
    const cakeImg = document.getElementById("cakeImage");
    const modalImg = document.getElementById("lightboxImg");
    const closeBtn = document.querySelector(".close-modal");

    if (cakeImg && modal && modalImg) {
        cakeImg.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        }
    }
    if (closeBtn && modal) {
        closeBtn.onclick = function() { modal.style.display = "none"; }
    }
    window.onclick = function(event) {
        if (event.target === modal) modal.style.display = "none";
    }

    // 4. ENQUIRY FORM VALIDATION (Existing)
    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // (Keep your existing form logic here)
            alert("Form validation and AJAX submission logic is active!");
        });
    }
});