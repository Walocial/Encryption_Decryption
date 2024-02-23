const ENCRYPT_SECTION = document.getElementById("encrypt");
const DECRYPT_SECTION = document.getElementById("decrypt");
const CAESAR_KEY = document.getElementById("caesarEncryptKey");
const PLAINTEXT = document.getElementById("caesarPlainTextArea");
const CIPHERED = document.getElementById("caesarCipheredTextArea");
const ENCRYPT_BUTTON = document.getElementById("encryptBtn");
const DECRYPT_BUTTON = document.getElementById("decryptBtn");
const ALPHABET = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function caesar_encrypt(input, key) {
    let cipheredText = "";

    for (let i = 0; i < input.length; i++) {
        let char = input[i];

        if (char.match(/[a-zA-Z]/)) {
            let isLowerCase = char === char.toLowerCase();
            let newIndex = (ALPHABET.indexOf(char.toLowerCase()) + key) % ALPHABET.length;
            if (newIndex < 0) {
                newIndex += ALPHABET.length;
            }
            cipheredText += isLowerCase ? ALPHABET[newIndex] : ALPHABET[newIndex].toUpperCase();
        } else {
            cipheredText += char;
        }
    }

    return cipheredText;
}
ENCRYPT_BUTTON.addEventListener("click", function() {
    const encryptedText = caesar_encrypt(PLAINTEXT.value, parseInt(CAESAR_KEY.value));
    CIPHERED.value = encryptedText;
});
function caesar_decrypt(input, key) {
    let decryptedText = "";

    for (let i = 0; i < input.length; i++) {
        let char = input[i];

        if (char.match(/[a-zA-Z]/)) {
            let isLowerCase = char === char.toLowerCase();
            let index = ALPHABET.indexOf(char.toLowerCase());
            let newIndex = (index - key) % ALPHABET.length;
            if (newIndex < 0) {
                newIndex += ALPHABET.length;
            }
            decryptedText += isLowerCase ? ALPHABET[newIndex] : ALPHABET[newIndex].toUpperCase();
        } else {
            decryptedText += char;
        }
    }

    return decryptedText;
}
DECRYPT_BUTTON.addEventListener("click", function() {
    const decryptedText = caesar_decrypt(CIPHERED.value, parseInt(CAESAR_KEY.value));
    PLAINTEXT.value = decryptedText;
});

