// --- MENÚ HAMBURGUESA RESPONSIVE ---
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Cierra el menú al hacer clic en cualquier enlace
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// --- VENTANA MODAL DE PROYECTOS ---
const modal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');
const modalButtons = document.querySelectorAll('.btn-modal');

// Elementos dentro de la modal
const modalTitle = document.getElementById('modal-title');
const modalCategory = document.getElementById('modal-category');
const modalDesc = document.getElementById('modal-desc');
const modalTechList = document.getElementById('modal-tech-list');

// Abrir modal con los datos del botón presionado
modalButtons.forEach(button => {
  button.addEventListener('click', () => {
    modalTitle.textContent = button.getAttribute('data-title');
    modalCategory.textContent = button.getAttribute('data-category');
    modalDesc.textContent = button.getAttribute('data-desc');
    modalTechList.textContent = button.getAttribute('data-tech');
    
    modal.classList.add('active');
  });
});

// Cerrar modal al dar clic en la X
modalClose.addEventListener('click', () => {
  modal.classList.remove('active');
});

// Cerrar modal si haces clic fuera del contenido
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});