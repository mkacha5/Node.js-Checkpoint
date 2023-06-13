const generatePassword = require('generate-password');

function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 10, // Longueur du mot de passe
    numbers: true, // Autoriser les chiffres
    symbols: true, // Autoriser les symboles
    uppercase: true, // Autoriser les lettres majuscules
    excludeSimilarCharacters: true, // Exclure les caractères similaires (comme i, l, 1, L, o, 0, etc.)
  });

  return password;
}

const generatedPassword = generateRandomPassword();
console.log('Mot de passe généré :', generatedPassword);
