// Animation du terminal sans redimensionnement
document.addEventListener('DOMContentLoaded', function() {
    // Animation du terminal uniquement
    const terminalText = document.getElementById('terminal-text');
    
    if (!terminalText) {
        console.log("L'élément terminal-text est introuvable!");
        return; // Sortir si l'élément n'existe pas
    }
    
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
    
    // Commencer l'animation
    typeTerminal();
});