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
console.log("3/ Implémentez une fonction qui converti un nombre de secondes en un tableau exprimant cette durée en secondes, minutes, heures, jours, semaines et années.");

const nbSecond = 3205742285;

/**
 * Gets the total duration of a duration in seconds
 * @param {number} seconds - duration in seconds
 * @returns {Array} array of strings : duration in years, weeks, days, hours, minutes and secondes
 */
function getTotalDuration(seconds) {

    const duration = [];

    const years = Math.floor(seconds / (3600 * 24 * 7 * 52));
    const weeks = Math.floor((seconds % (3600 * 24 * 7 * 52)) / (3600 * 24 * 7));
    const days = Math.floor((seconds % (3600 * 24 * 7)) / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondes = Math.floor(seconds % 60);

    duration.push(years > 0 ? years + (years == 1 ? " year" : " years") : "0 year");
    duration.push(weeks > 0 ? weeks + (weeks == 1 ? " week" : " weeks") : "0 week");
    duration.push(days > 0 ? days + (days == 1 ? " day" : " days") : "0 day");
    duration.push(hours > 0 ? hours + (hours == 1 ? " hour" : " hours") : "0 hour");
    duration.push(minutes > 0 ? minutes + (minutes == 1 ? " minute" : " minutes") : "0 minute");
    duration.push(secondes > 0 ? secondes + (secondes == 1 ? " second" : " seconds") : "0 second");
    
    return duration;

  }

  console.log(getTotalDuration(nbSecond));

// -----------------------------------
console.log("4/ Implémentez une fonction qui prend en paramètre un tableau retourné par la fonction précédente et retourne la chaîne de caractère correspondante.");

/**
 * Gets the total duration in a string
 * @param {array} array - array of strings : duration in years, weeks, days, hours, minutes and secondes
 * @returns {string} string representing the total duration
 */
function getStringDuration (array) {
    return array.join(', ');
}

console.log(getStringDuration((getTotalDuration(nbSecond))));

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