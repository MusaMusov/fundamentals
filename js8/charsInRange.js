function charsInRange(firstChar, secondChar) {
    
    let startChar = Math.min(firstChar.charCodeAt(),secondChar.charCodeAt());
    let endChar = Math.max(firstChar.charCodeAt(),secondChar.charCodeAt());

    let charArray = [];

    for(let i = startChar + 1; i < endChar; i++) {
        charArray.push(String.fromCharCode(i));
    }

    return charArray.join(" ");
}