// -----------------------------------
console.log("1/ Implémentez une fonction qui transforme un texte en camelCase.");

const sentence = "Qui veut voler la peau de Roger Rabbit ?"

/**
 * Transforms a text into camelCase
 * @param {string} text 
 * @returns {string} the text in camelCase
 */
function transformTextInCamelcase(text) {
    const newText = text.toLowerCase();
    const textArray = newText.split(" ");
    return textArray.reduce((s, c) =>
        s + (c.charAt(0).toUpperCase() + c.slice(1))
    )
}

console.log(transformTextInCamelcase(sentence));

// -----------------------------------
console.log("2/ Implémentez une fonction qui retroune le plus grand mot d'un texte.");

/**
 * Gets the longest word of a text
 * @param {string} text 
 * @returns {string} the longest word of the text
 */
function getLongestWord (text) {
    let longestWord;
    let maxLength;
    const textArray = text.split(" ");
    for (const word of textArray) {
        if (word.length > maxLength || maxLength === undefined){
            longestWord = word;
            maxLength = word.length;
        }
    }
    return longestWord;
}

console.log(getLongestWord("sentence"));

// -----------------------------------
console.log("3/ Implémentez une fonction qui converti un nombre de seconde en un tableau exprimant cette durée en secondes, minutes, heures, jours, semaines et années.");

console.log();

// -----------------------------------
console.log("4/ Implémentez une fonction qui prend en paramètre un tableau retourné par la fonction précédente et retourne la chaîne de caractère correspondante.");

console.log();

// -----------------------------------
console.log("5/ Implémentez une fonction qui compte dans le texte en premier paramètre, le nombre d'occurence de la lettre en second paramètre.");

console.log();

// -----------------------------------
console.log("6/ Implémentez une fonction qui retourne les X plus grandes valeurs d'un tableau.");

console.log();

// -----------------------------------
console.log("7/ Retournez la liste des prenoms des joueurs ci-dessous par ordre de score décroissant.");

const players  = {
    Camille: 88,
    Lola: 125,
    Isaac: 174,
    Aldrick: 426,
    Ismaël: 248,
    Lilian: 478,
    Charley: 225,
    Thierry: 255,
    Cameron: 205,
    Tanguy: 155,
    Jenny: 125
};

console.log();

// -----------------------------------
console.log("8/ Dans la liste des scores ci-dessus sélectionnez une partie des meilleurs joueurs jusqu'à obtenir un total de score des joueurs sélectionnés de 1000.");

console.log();