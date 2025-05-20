// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Get all filter buttons
    const filterButtons = document.querySelectorAll('.filter-button');
    // Get all attraction cards
    const attractionCards = document.querySelectorAll('.attraction-card');

    // Add click event listener to each filter button
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            this.classList.add('active');
            
            // Get the filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter the attraction cards
            attractionCards.forEach(card => {
                const cardType = card.getAttribute('data-type');
                
                if (filterValue === 'all' || filterValue === cardType) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
});