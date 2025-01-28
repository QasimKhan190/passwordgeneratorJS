function pass() {
    let a = prompt("Password type:\n1. Numbers\n2. Alphabet");
    let p2 = parseInt(prompt("Enter password length"));

    if (isNaN(p2) || p2 <= 0) { 
        document.write("Invalid length. Please enter a valid number.");
    }

    if (a == "1" || a.toLowerCase() == "numbers") {  
        let numbers = "0123456789";
        let randomNumbers = Array.from({ length: p2 }, () => 
            numbers.charAt(Math.floor(Math.random() * numbers.length))
        ).join('');
        document.write(randomNumbers);
    } 
    else if (a == "2" || a.toLowerCase() == "alphabet") {
        let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let randomLetters = Array.from({ length: p2 }, () => 
            letters.charAt(Math.floor(Math.random() * letters.length))
        ).join('');
        document.write(randomLetters);
    } 
    else {  
        document.write("Invalid input. Please enter 1 or 2.");  
    }  
}
