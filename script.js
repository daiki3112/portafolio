// --- MENÚ HAMBURGUESA RESPONSIVE ---
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Cierra el menú en celulares al seleccionar un enlace
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// --- VENTANA MODAL PARA PROYECTOS ---
const modal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');
const modalButtons = document.querySelectorAll('.btn-modal');

const modalTitle = document.getElementById('modal-title');
const modalCategory = document.getElementById('modal-category');
const modalDesc = document.getElementById('modal-desc');
const modalTechList = document.getElementById('modal-tech-list');

if (modal && modalClose) {
  modalButtons.forEach(button => {
    button.addEventListener('click', () => {
      modalTitle.textContent = button.getAttribute('data-title');
      modalCategory.textContent = button.getAttribute('data-category');
      modalDesc.textContent = button.getAttribute('data-desc');
      modalTechList.textContent = button.getAttribute('data-tech');
      
      modal.classList.add('active');
    });
  });

  modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
}