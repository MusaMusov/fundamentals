function passwordValidator(password) {

    let isLongEnough = false;
    let isLetterAndDigits = true;
    let isDigits2 = false;

    let charsCounter = 0;
    let digitsCounter = 0;

    for(let i = 0; i < password.length; i++) {
        let currChar = password[i];

        if(currChar.charCodeAt() >= 48 && currChar.charCodeAt() <= 57) {
            digitsCounter++;
        } else if(currChar.charCodeAt() >= 65 && currChar.charCodeAt() <= 90) {
            charsCounter++;
        } else if(currChar.charCodeAt() >= 97 && currChar.charCodeAt() <= 122) {
            charsCounter++;
        } else {
            charsCounter++;
            isLetterAndDigits = false;
        }
    }
    if(charsCounter >= 5 && charsCounter <= 10) {
        isLongEnough = true;
    }
    if(digitsCounter >= 2) {
        isDigits2 = true;
    }

    if(isLetterAndDigits && isLongEnough && isDigits2) {
        console.log("Password is valid");
    }
    if(isLongEnough === false) {
        console.log("Password must be between 6 and 10 characters");
    }
    if(isLetterAndDigits === false)  {
        console.log("Password must consist only of letters and digits");
    }
    if(isDigits2 === false) {
        console.log("Password must have at least 2 digits");
    }
}

passwordValidator('logIn')