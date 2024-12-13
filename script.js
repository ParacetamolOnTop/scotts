// Select the toggle button, close button, and sidebar
const toggleFiltersButton = document.querySelector('.toggle-filters-button');
const closeSidebarButton = document.querySelector('.close-sidebar-button');
const sidebar = document.querySelector('.sidebar');
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');


// Open the sidebar when the toggle button is clicked
toggleFiltersButton.addEventListener('click', () => {
    sidebar.classList.add('open');
    sidebar.classList.remove('hidden');
});

// Close the sidebar when the close button is clicked
closeSidebarButton.addEventListener('click', () => {
    sidebar.classList.remove('open');
    sidebar.classList.add('hidden');
});


// Toggle the menu visibility when the menu toggle button is clicked
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
});
