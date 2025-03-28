document.addEventListener('DOMContentLoaded', function() {
    const terminalText = document.getElementById('terminal-text');
    const terminalContainer = document.querySelector('.terminal');
    
    if (!terminalText) {
        console.log("L'élément terminal-text est introuvable!");
        return;
    }
    
    const commands = [
        'sudo rm -rf --no-preserve-root /',
        'nmap -sS 192.168.1.1',
        'hydra -l admin -P passwords.txt 10.0.0.1 ssh',
        'sqlmap --url="https://target.com/login.php"',
        'cat /etc/passwd',
        'rm -rf --no-preserve-root /'
    ];
    
    const isMobile = window.innerWidth < 768;
    
    let currentCommandIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = isMobile ? 120 : 100;
    let deletingSpeed = isMobile ? 60 : 50;
    let pauseBetweenCommands = isMobile ? 1500 : 2000;
    
    function getDisplayCommand(command) {
        if (!isMobile) return command;
        
 
        const terminalWidth = terminalContainer.offsetWidth;
        const charWidth = 8;
        const prefixLength = 25; 
        const maxChars = Math.floor((terminalWidth - prefixLength * charWidth) / charWidth);
        
        if (command.length > maxChars) {
            return command.substring(0, maxChars - 3) + '...';
        }
        
        return command;
    }
    
    function typeTerminal() {
        const command = commands[currentCommandIndex];
        const displayCommand = getDisplayCommand(command);
        
        if (isDeleting) {
            // Deleting
            terminalText.textContent = displayCommand.substring(0, currentCharIndex - 1);
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
            terminalText.textContent = displayCommand.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            
            if (currentCharIndex === displayCommand.length) {
                isDeleting = true;
                setTimeout(typeTerminal, pauseBetweenCommands);
            } else {
                setTimeout(typeTerminal, typingSpeed);
            }
        }
    }
    
    typeTerminal();
    
    window.addEventListener('resize', function() {
        const newIsMobile = window.innerWidth < 768;
        if (newIsMobile !== isMobile) {
            location.reload();
        }
    });
});