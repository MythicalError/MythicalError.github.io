document.addEventListener('DOMContentLoaded', () => {
    // Navigation between pages
    const homeLink = document.getElementById('home-link');
    const contactLink = document.getElementById('contact-link');
    const homeContent = document.getElementById('home-content');
    const contactContent = document.getElementById('contact-content');
    
    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        setActiveContent(homeLink, homeContent);
    });
    
    contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        setActiveContent(contactLink, contactContent);
    });
    
    function setActiveContent(activeLink, activeContent) {
        // Update navigation
        document.querySelectorAll('.navigation a').forEach(link => {
            link.classList.remove('active');
        });
        activeLink.classList.add('active');
        
        // Update content
        document.querySelectorAll('.content').forEach(content => {
            content.classList.remove('active');
        });
        activeContent.classList.add('active');
    }
    
    // Terminal typing effect
    const terminalText = document.getElementById('terminal-text');
    const commands = [
        'sudo rm -rf --no-preserve-root /',
        'nmap -sS 192.168.1.1',
        'hydra -l admin -P passwords.txt 10.0.0.1 ssh',
        'sqlmap --url="https://target.com/login.php"',
        'cat /etc/passwd',
        'rm -rf --no-preserve-root /'
    ];
    
    let currentCommandIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let deletingSpeed = 50;
    let pauseBetweenCommands = 2000;
    
    function typeTerminal() {
        const command = commands[currentCommandIndex];
        
        if (isDeleting) {
            // Deleting
            terminalText.textContent = command.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            
            if (currentCharIndex === 0) {
                isDeleting = false;
                currentCommandIndex = (currentCommandIndex + 1) % commands.length;
                setTimeout(typeTerminal, pauseBetweenCommands / 2);
            } else {
                setTimeout(typeTerminal, deletingSpeed);
            }
        } else {
            // Typing
            terminalText.textContent = command.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            
            if (currentCharIndex === command.length) {
                isDeleting = true;
                setTimeout(typeTerminal, pauseBetweenCommands);
            } else {
                setTimeout(typeTerminal, typingSpeed);
            }
        }
    }
    
    // Start the typing animation
    typeTerminal();
    
    // Simple hover effect for title
    const title = document.querySelector('.title');
    title.addEventListener('mouseover', () => {
        title.style.color = '#7faae0';
        title.style.transition = 'color 0.3s ease';
    });
    
    title.addEventListener('mouseout', () => {
        title.style.color = '#6a98d0';
    });
    
    // Add hover effects to link cards
    const linkCards = document.querySelectorAll('.link-card');
    linkCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('i');
            icon.style.transform = 'scale(1.2)';
            icon.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('i');
            icon.style.transform = 'scale(1)';
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
});