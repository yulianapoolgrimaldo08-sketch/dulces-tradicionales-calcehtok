const menuToggle = document.getElementById('menuToggle');
const navLateral = document.getElementById('navLateral');
const navClose = document.getElementById('navClose');
const overlay = document.getElementById('overlay');

function openMenu() {
    navLateral.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    navLateral.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

menuToggle.addEventListener('click', openMenu);
navClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

document.querySelectorAll('.nav-lateral a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
        
        closeMenu();
    });
});

// Año actual en footer
const añoActual = new Date().getFullYear();
const footerDerechos = document.querySelector('.footer-derechos p');
if (footerDerechos) {
    footerDerechos.innerHTML = `&copy; ${añoActual} - Todos los derechos reservados`;
}

// ========== MODALES DE DERECHOS Y ARTESANOS ==========
const derechosCards = document.querySelectorAll('.derechos-grid .derecho-card');
const modalsData = ['modalPagoJusto', 'modalConservar', 'modalNoDiscriminacion', 'modalCondicionesSeguras'];

derechosCards.forEach((card, index) => {
    if (index < modalsData.length) {
        card.setAttribute('data-modal', modalsData[index]);
    }
});

const artesanosCards = document.querySelectorAll('.artesanos-grid .artesano-card');
const artesanosModals = ['modalMariaGuadalupe', 'modalMariaLeticia', 'modalEneyda', 'modalMiriam'];

artesanosCards.forEach((card, index) => {
    if (index < artesanosModals.length) {
        card.setAttribute('data-modal', artesanosModals[index]);
    }
});

document.querySelectorAll('[data-modal]').forEach(element => {
    element.addEventListener('click', () => {
        const modalId = element.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// ========== MODALES DE FOTOS ==========
document.querySelectorAll('[data-modal-foto]').forEach(element => {
    element.addEventListener('click', (e) => {
        e.stopPropagation();
        const modalId = element.getAttribute('data-modal-foto');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// ========== MODALES DE RECETAS (SOLO BOTÓN) ==========
document.querySelectorAll('.btn-receta').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const modalId = btn.getAttribute('data-modal-receta');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// ========== CERRAR MODALES ==========
// Cerrar modales normales con X
document.querySelectorAll('.modal-close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        const modal = closeBtn.closest('.modal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// Cerrar modales de foto con X
document.querySelectorAll('.modal-close-foto').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        const modal = closeBtn.closest('.modal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// Cerrar modal al hacer clic fuera
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// Cerrar con tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.active').forEach(modal => {
            modal.classList.remove('active');
        });
        document.body.style.overflow = '';
    }
});