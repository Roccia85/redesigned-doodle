// Welcome to my random index.js file!

// This is a simple JavaScript program that generates a random number between 1 and 10.
// Feel free to modify it as per your requirements.

function generateRandomNumber() {
    const min = 1;
    const max = 10;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

const randomNum = generateRandomNumber();
console.log(`Random number: ${randomNum}`);