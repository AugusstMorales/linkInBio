document.addEventListener('DOMContentLoaded', function() {
  // Elementos del preloader
  const preloader = document.querySelector(".preloader");
  const vantaContainer = document.getElementById("vanta-container");
  const container = document.querySelector(".container");
  
  // Mostrar preloader inmediatamente
  document.body.style.overflow = 'hidden';
  
  // Esperar a que todos los recursos estén listos
  window.addEventListener('load', function() {
    initializeVanta();
  });

  function initializeVanta() {
    // Verificar que Three.js y VANTA están disponibles
    if (typeof THREE !== 'undefined' && typeof VANTA !== 'undefined') {
      try {
        VANTA.WAVES({
          el: "#vanta-container",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x41f,
          shininess: 22.00,
          waveHeight: 40.00,
          waveSpeed: 0.75,
          zoom: 0.65
        });
        
        // Ocultar preloader después de 1.5s (incluso si Vanta falla)
        setTimeout(hidePreloader, 1500);
      } catch (error) {
        console.error("Error initializing Vanta:", error);
        hidePreloader();
      }
    } else {
      console.error("Three.js or VANTA not available");
      hidePreloader();
    }
  }

  function hidePreloader() {
    vantaContainer.classList.add("loaded");
    preloader.classList.add("fade-out");
    document.body.style.overflow = '';
    
    // Mostrar contenido principal
    container.style.opacity = '1';
    container.style.transform = 'translateY(0)';
    
    // Eliminar preloader después de la animación
    setTimeout(() => {
      preloader.remove();
    }, 600);
  }

  // Mejora de imagen de perfil
  const profileImg = document.querySelector('.profile-img');
  if (profileImg) {
    profileImg.style.filter = 'contrast(1.05) brightness(0.95)';
    profileImg.addEventListener('load', function() {
      const container = this.parentElement;
      const imgWidth = this.naturalWidth;
      const imgHeight = this.naturalHeight;
      
      if (imgWidth > imgHeight) {
        this.style.width = 'auto';
        this.style.height = '100%';
        this.style.transform = 'translateX(-50%)';
        this.style.left = '50%';
        this.style.position = 'relative';
      }
    });
  }

  // Manejo del viewport
  function updateSizes() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  window.addEventListener('resize', updateSizes);
  updateSizes();
});