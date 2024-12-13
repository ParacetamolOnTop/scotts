// Select the toggle button, close button, and sidebar
const toggleFiltersButton = document.querySelector('.toggle-filters-button');
const closeSidebarButton = document.querySelector('.close-sidebar-button');
const sidebar = document.querySelector('.sidebar');
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');


toggleFiltersButton.addEventListener('click', () => {
    sidebar.classList.add('open');
    sidebar.classList.remove('hidden');
});

closeSidebarButton.addEventListener('click', () => {
    sidebar.classList.remove('open');
    sidebar.classList.add('hidden');
});


document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle'); // Bouton toggle
    const menu = document.querySelector('.menu'); // Menu à afficher/masquer
  
    // Ajouter un écouteur d'événement au bouton toggle
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('open'); // Ajoute/Retire la classe "open" pour montrer/cacher le menu
    });
  });
  
  
