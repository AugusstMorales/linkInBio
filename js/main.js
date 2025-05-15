// linkInBio/js/main.js
// Initialize page functionality on DOM load
document.addEventListener('DOMContentLoaded', function() {
    // Configure Vanta Birds background effect
    VANTA.BIRDS({
        el: "#vanta-container",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color1: 0xff82,
        color2: 0xffee00,
        colorMode: "lerp",
        birdSize: 0.60,
        separation: 61.00,
        quantity: 2.10,
        backgroundAlpha: 0.0
    });

    // Enhance profile image rendering
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        // Apply image quality filters
        profileImg.style.filter = 'contrast(1.05) brightness(0.95)';
        
        // Center image based on aspect ratio
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

    // Update viewport height for responsive design
    function updateSizes() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    // Bind resize event and initialize sizes
    window.addEventListener('resize', updateSizes);
    updateSizes();
});