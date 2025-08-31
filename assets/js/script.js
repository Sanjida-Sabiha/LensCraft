
window.onscroll = function() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) { // Adjust the scroll value as needed
        navbar.classList.add("bg-mainBg", "shadow-white");
    } else {
        navbar.classList.remove("bg-mainBg", "shadow-white");
    }
};


document.addEventListener("scroll", function() {
    const navbar = document.getElementById("navigation");
    if (window.scrollY > 250) {
        navbar.classList.remove("-translate-y-full");
    } else {
        navbar.classList.add("-translate-y-full", "shadow-md");
    }
});

// Initially hide the navbar until scrolling occurs
window.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navigation");
    navbar.classList.add("-translate-y-full");
});



document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-item');
    const contentSections = document.querySelectorAll('.content-section');

    menuItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            // Hide all content sections
            contentSections.forEach(section => section.classList.add('hidden'));

            // Remove existing buttons
            const existingButton = document.querySelector('.dynamic-btn');
            if (existingButton) existingButton.remove();

            // Show the relevant content section
            const contentId = `${item.id}-content`;
            document.getElementById(contentId).classList.remove('hidden');

            // Create a button dynamically
            const newButton = document.createElement('button');
            newButton.className = 'dynamic-btn bg-primaryColor text-white px-4 py-2 mt-4';
            newButton.textContent = 'New Button';

            // Append the button to the content section
            document.getElementById(contentId).appendChild(newButton);
        });
    });
});




function scrollToSection() {
    document.querySelector('#scroll').scrollIntoView({ behavior: 'smooth' });
}





