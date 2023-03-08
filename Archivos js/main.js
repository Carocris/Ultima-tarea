const form = document.querySelector('form');
const input = document.querySelector('#buscar');
const gridSection = document.querySelector('.grid-section');
const grids = gridSection.querySelectorAll('.grid');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchTerm = input.value.toLowerCase();
  grids.forEach((grid) => {
    const title = grid.querySelector('.overly h3').textContent.toLowerCase();
    const button = grid.querySelector('.btn').textContent.toLowerCase();
    if (title.includes(searchTerm) || button.includes(searchTerm)) {
      grid.style.display = 'block';
    } else {
      grid.style.display = 'none';
    }
  });
});
