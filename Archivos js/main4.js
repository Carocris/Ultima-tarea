// Obtener elementos del DOM
const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');
const categoriesDropdown = document.querySelector('.categories-dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

// Mostrar/ocultar menú desplegable de categorías
categoriesDropdown.addEventListener('click', () => {
  dropdownContent.classList.toggle('show');
});

// Filtrar publicaciones según la categoría seleccionada
dropdownContent.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    const selectedCategory = event.target.textContent;
    const posts = document.querySelectorAll('.post');
    
    posts.forEach(post => {
      if (post.dataset.category !== selectedCategory && selectedCategory !== 'Todas las categorías') {
        post.classList.add('hidden');
      } else {
        post.classList.remove('hidden');
      }
    });
  }
});

// Filtrar publicaciones según el término de búsqueda ingresado
searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const posts = document.querySelectorAll('.post');
  
  posts.forEach(post => {
    const postTitle = post.querySelector('h3').textContent.toLowerCase();
    const postContent = post.querySelector('p').textContent.toLowerCase();
    
    if (postTitle.includes(searchTerm) || postContent.includes(searchTerm)) {
      post.classList.remove('hidden');
    } else {
      post.classList.add('hidden');
    }
  });
});
