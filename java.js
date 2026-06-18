function filterProducts() {
    // 1. Get the value from the input
    let input = document.getElementById('searchInput').value.toLowerCase();
    
    // 2. Get all product cards
    let cards = document.getElementsByClassName('product-card');

    // 3. Loop through cards and show/hide
    for (let i = 0; i < cards.length; i++) {
        let name = cards[i].getAttribute('data-name');
        
        if (name.includes(input)) {
            cards[i].classList.remove('hidden');
        } else {
            cards[i].classList.add('hidden');
        }
    }
}