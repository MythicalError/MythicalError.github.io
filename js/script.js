// Ce fichier contient toutes les fonctionnalités sauf l'animation du terminal
document.addEventListener('DOMContentLoaded', () => {
    // Simple hover effect for title
    const title = document.querySelector('.title');
    if (title) {
        title.addEventListener('mouseover', () => {
            title.style.color = '#7faae0';
            title.style.transition = 'color 0.3s ease';
        });
        
        title.addEventListener('mouseout', () => {
            title.style.color = '#6a98d0';
        });
    }
    
    // Add hover effects to link cards
    const linkCards = document.querySelectorAll('.link-card');
    linkCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.2)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });
    
    // Add subtle background parallax effect
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        document.body.style.backgroundPosition = `${50 + mouseX * 10}% ${50 + mouseY * 10}%`;
    });
    
    // Add "hacker" effect when clicking on profile picture
    const profileImage = document.querySelector('.profile-image-container');
    if (profileImage) {
        let isHackerMode = false;
        
        profileImage.addEventListener('click', () => {
            isHackerMode = !isHackerMode;
            
            if (isHackerMode) {
                // Add matrix-like effect to background
                document.body.style.backgroundImage = `
                    radial-gradient(circle at 25% 25%, rgba(0, 255, 120, 0.03) 0%, transparent 50%),
                    radial-gradient(circle at 75% 75%, rgba(0, 255, 195, 0.03) 0%, transparent 50%)
                `;
                
                // Change terminal color
                document.documentElement.style.setProperty('--terminal-text', '#00ff66');
                
                // Add subtle green tint to cards
                document.querySelectorAll('.link-card, .contact-info').forEach(card => {
                    card.style.boxShadow = '0 0 10px rgba(0, 255, 120, 0.15)';
                });
            } else {
                // Restore original styles
                document.body.style.backgroundImage = `
                    radial-gradient(circle at 25% 25%, rgba(0, 120, 255, 0.03) 0%, transparent 50%),
                    radial-gradient(circle at 75% 75%, rgba(0, 195, 255, 0.03) 0%, transparent 50%)
                `;
                
                document.documentElement.style.setProperty('--terminal-text', '#00ff00');
                
                document.querySelectorAll('.link-card, .contact-info').forEach(card => {
                    card.style.boxShadow = '';
                });
            }
        });
    }
});