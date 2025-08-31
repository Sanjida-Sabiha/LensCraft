
//Menu Toggle

function toggleMenu(event, menuId, headerId) {
    event.preventDefault();
    
    const menu = document.getElementById(menuId);
    const header = document.getElementById(headerId);

    if (!menu || !header) {
        console.error("Menu or header element not found");
        return;
    }

    if (menu.classList.contains('-translate-y-full')) {
        // Open menu
        menu.classList.remove('-translate-y-full');
        menu.classList.add('translate-y-0');
        // Hide header
        header.classList.add('translate-y-full');
    } else {
        // Close menu
        menu.classList.remove('translate-y-0');
        menu.classList.add('-translate-y-full');
        // Show header
        header.classList.remove('translate-y-full');
    }
}




document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function () {
        // Remove 'active' from all items
        document.querySelectorAll('.menu-item').forEach(link => {
            link.classList.remove('active');
        });

        // Add 'active' to the clicked item
        this.classList.add('active');
    });
});

// Handle hover effects
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseover', function () {
        document.querySelectorAll('.menu-item').forEach(link => {
            if (!link.classList.contains('active')) {
                link.classList.add('inactive');
            }
        });
        this.classList.remove('inactive'); // Remove inactive for hovered item
    });

    item.addEventListener('mouseout', function () {
        document.querySelectorAll('.menu-item').forEach(link => {
            if (!link.classList.contains('active')) {
                link.classList.remove('inactive');
            }
        });
    });
});
