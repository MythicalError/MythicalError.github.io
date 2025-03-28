mon index.html ressemble à ca:
```
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Mythical Error - 404</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/animations.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script src="js/script.js" defer></script>
</head>
<body>
    <div class="container">
        <div class="profile">
            <div class="profile-image-container">
                <img src="./assets/404.jpg" alt="404 Profile Picture" class="profile-image">
            </div>
            <h1 class="title">404</h1>
            <p class="subtitle">Cybersec student</p>
        </div>

        <nav class="navigation">
            <ul>
                <li><a href="#" id="home-link" class="active">Home</a></li>
                <li><a href="#" id="contact-link">Contact</a></li>
            </ul>
        </nav>

        <div id="home-content" class="content active">
            <div class="links">
                <a href="https://github.com/MythicalError" class="link-card" target="_blank">
                    <i class="fab fa-github"></i>
                    <span>GitHub</span>
                    <div class="link-hover-effect"></div>
                </a>
                <a href="https://www.youtube.com/watch?v=YlTqXLwncsc&t=840s" class="link-card" target="_blank">
                    <i class="fab fa-linkedin"></i>
                    <span>LinkedIn</span>
                    <div class="link-hover-effect"></div>
                </a>
                <a href="https://www.youtube.com/watch?v=YlTqXLwncsc&t=840s" class="link-card" target="_blank">
                    <i class="fas fa-flag"></i>
                    <span>Root Me</span>
                    <div class="link-hover-effect"></div>
                </a>
                <a href="https://www.youtube.com/watch?v=YlTqXLwncsc&t=840s" class="link-card" target="_blank">
                    <i class="fas fa-cube"></i>
                    <span>HackTheBox</span>
                    <div class="link-hover-effect"></div>
                </a>
                <a href="https://discord.com/users/mythical.error" class="link-card" target="_blank">
                    <i class="fab fa-discord"></i>
                    <span>Discord</span>
                    <div class="link-hover-effect"></div>
                </a>
                <a href="mailto:adam.benaissa@ynov.com" class="link-card">
                    <i class="fas fa-envelope"></i>
                    <span>Email</span>
                    <div class="link-hover-effect"></div>
                </a>
            </div>
        </div>

        <div id="contact-content" class="content">
            <div class="contact-info">
                <div class="contact-section">
                    <h2>About me</h2>
                    <p>Étudiant en cybersécurité, Bachelor 1 à Ynov Campus Bordeaux</p>
                </div>
                <div class="contact-section">
                    <h2>Contacts</h2>
                    <p>Vous pouvez me contacter par discord ou par mail.</p>
                    <div class="contact-links">
                        <a href="https://discord.com/users/mythical.error" class="contact-link" target="_blank">
                            <i class="fab fa-discord"></i> mythical.error
                        </a>
                        <a href="mailto:adam.benaissa@ynov.com" class="contact-link">
                            <i class="fas fa-envelope"></i> adam.benaissa@ynov.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        <footer>
            <div class="terminal">
                <div class="terminal-header">
                    <div class="terminal-button red"></div>
                    <div class="terminal-button yellow"></div>
                    <div class="terminal-button green"></div>
                </div>
                <div class="terminal-body">
                    <div class="terminal-text">
                        <span class="terminal-user">MythicalError@404</span>:<span class="terminal-location">~</span>$ <span class="terminal-command" id="terminal-text"></span><span class="terminal-cursor">|</span>
                    </div>
                </div>
            </div>
            <p>&copy; 2025 · 404 - The Mythical Error</p>
        </footer>
    </div>
</body>
</html>
```

mon css/style.css ressemble à ca:
```
/* Base styles and variables */
:root {
    --primary-color: #0078ff;
    --primary-color-dark: #0055cc;
    --secondary-color: #00c3ff;
    --background-color: #000000;
    --text-color: #f5f5f5;
    --card-bg-color: rgba(10, 10, 10, 0.7);
    --terminal-bg: #1d1d1d;
    --terminal-text: #00ff00;
    --glitch-color1: #0078ff;
    --glitch-color2: #00c3ff;
    --title-color: #6a98d0;
    --subtitle-color: #889db8;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Courier New', monospace;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.6;
    background-image: 
        radial-gradient(circle at 25% 25%, rgba(0, 120, 255, 0.03) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(0, 195, 255, 0.03) 0%, transparent 50%);
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

/* Header and Profile Section */
.title {
    font-size: 2.5rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #6a98d0;
    position: relative;
    margin: 0.8rem 0 0.2rem 0;
}

.profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
}

.profile-image-container {
    width: 150px;
    height: 150px;
    position: relative;
    margin-bottom: 0.5rem;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid #3d6ca3;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.profile-image-container:hover .profile-image {
    transform: scale(1.05);
}

.subtitle {
    font-size: 1.1rem;
    color: #889db8;
    text-transform: lowercase;
    letter-spacing: 0.1em;
}

/* Navigation */
.navigation {
    margin-bottom: 2rem;
}

.navigation ul {
    display: flex;
    justify-content: center;
    list-style: none;
    gap: 2rem;
}

.navigation a {
    color: var(--text-color);
    text-decoration: none;
    position: relative;
    padding: 0.5rem 1rem;
    font-size: 1.1rem;
    transition: color 0.3s ease;
}

.navigation a:hover, .navigation a.active {
    color: var(--primary-color);
}

.navigation a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.3s ease;
}

.navigation a:hover::after, .navigation a.active::after {
    width: 80%;
}

/* Content Sections */
.content {
    display: none;
    opacity: 0;
    transition: opacity 0.5s ease;
    flex: 1;
}

.content.active {
    display: block;
    opacity: 1;
}

/* Link Cards */
.links {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

.link-card {
    background-color: var(--card-bg-color);
    border: 1px solid rgba(0, 120, 255, 0.3);
    padding: 1rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--text-color);
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.link-card i {
    font-size: 1.5rem;
    margin-right: 1rem;
    color: var(--primary-color);
    width: 30px;
    text-align: center;
}

.link-card span {
    font-size: 1.1rem;
    position: relative;
    z-index: 1;
}

.link-hover-effect {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, var(--primary-color-dark) 0%, var(--primary-color) 100%);
    opacity: 0;
    transform: translateX(-100%);
    transition: transform 0.5s ease, opacity 0.5s ease;
    z-index: 0;
}

.link-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 120, 255, 0.3);
}

.link-card:hover .link-hover-effect {
    transform: translateX(0);
    opacity: 0.1;
}

/* Contact Page */
.contact-info {
    background-color: var(--card-bg-color);
    border: 1px solid rgba(0, 120, 255, 0.3);
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 0 20px rgba(0, 120, 255, 0.1);
}

.contact-section {
    margin-bottom: 1.5rem;
}

.contact-section h2 {
    color: var(--primary-color);
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid rgba(0, 120, 255, 0.3);
    padding-bottom: 0.5rem;
}

.contact-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
}

.contact-link {
    display: flex;
    align-items: center;
    color: var(--text-color);
    text-decoration: none;
    transition: color 0.3s ease;
}

.contact-link:hover {
    color: var(--primary-color);
}

.contact-link i {
    margin-right: 0.5rem;
    color: var(--primary-color);
}

/* Terminal Footer */
footer {
    margin-top: 2rem;
    text-align: center;
}

.terminal {
    background-color: var(--terminal-bg);
    border-radius: 8px;
    width: 100%;
    max-width: 600px;
    margin: 0 auto 1rem auto;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.terminal-header {
    background-color: #333;
    padding: 0.3rem;
    display: flex;
    gap: 0.3rem;
}

.terminal-button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.terminal-button.red {
    background-color: #ff5f56;
}

.terminal-button.yellow {
    background-color: #ffbd2e;
}

.terminal-button.green {
    background-color: #27c93f;
}

.terminal-body {
    padding: 0.8rem;
}

.terminal-text {
    font-family: 'Courier New', monospace;
    font-size: 0.9rem;
}

.terminal-user {
    color: var(--primary-color);
}

.terminal-location {
    color: var(--secondary-color);
}

.terminal-command {
    color: var(--terminal-text);
}

.terminal-cursor {
    animation: blink 1s infinite;
}

footer p {
    color: #666;
    font-size: 0.8rem;
    margin-top: 1rem;
}

/* Responsive Design */
@media (min-width: 768px) {
    .links {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 600px) {
    .container {
        padding: 1rem;
    }
    
    .title {
        font-size: 2rem;
    }
    
    .profile-image-container {
        width: 120px;
        height: 120px;
    }
    
    .navigation ul {
        gap: 1rem;
    }
    
    .navigation a {
        padding: 0.3rem 0.5rem;
        font-size: 1rem;
    }
    
    .contact-links {
        flex-direction: column;
    }
}
```

mon css/animations.css ressemble à ca:
```
/* Animations and effects */

/* Terminal cursor blinking animation */
@keyframes blink {
    0%, 49% {
        opacity: 1;
    }
    50%, 100% {
        opacity: 0;
    }
}

/* Page transition animations */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.content.active {
    animation: fadeIn 0.5s ease-out forwards;
}

/* Background ambient glow animation */
@keyframes ambientGlow {
    0% {
        background-position: 0% 0%;
    }
    50% {
        background-position: 100% 100%;
    }
    100% {
        background-position: 0% 0%;
    }
}

body::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background: 
        radial-gradient(circle at 25% 25%, rgba(0, 120, 255, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(0, 195, 255, 0.05) 0%, transparent 50%);
    background-size: 200% 200%;
    animation: ambientGlow 15s ease infinite;
    z-index: -1;
}

/* Link card hover animation */
@keyframes linkPulse {
    0% {
        box-shadow: 0 0 0 0 rgba(0, 120, 255, 0.4);
    }
    70% {
        box-shadow: 0 0 0 10px rgba(0, 120, 255, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(0, 120, 255, 0);
    }
}

.link-card:active {
    animation: linkPulse 0.5s ease;
}

/* Matrix-style typing animation for terminal */
@keyframes typing {
    from { width: 0 }
    to { width: 100% }
}

/* Subtle floating animation for profile picture */
@keyframes float {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-3px);
    }
    100% {
        transform: translateY(0);
    }
}

.profile-image-container {
    animation: float 4s ease-in-out infinite;
}

/* Custom scrollbar */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: var(--background-color);
}

::-webkit-scrollbar-thumb {
    background: var(--primary-color-dark);
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--primary-color);
}

/* Link hover effect */
.link-card i {
    transition: transform 0.3s ease;
}

.link-card:hover i {
    transform: scale(1.2);
}
```

mon js/script.js ressemble à ca:
```
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
```

Je souhaite que mon home et mon contact soient deux pages distinctes, il faudra évidemment garder tout ce qui était sur les deux pages