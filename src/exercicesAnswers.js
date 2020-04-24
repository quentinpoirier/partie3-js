//Exercice 1 : Donner la taille de la chaîne de caractères.
let stringLength = function (sentence) {
  console.log(sentence.length);
  return sentence.length;
}

//Exercice 2 : Remplacer le premier "e" de la chaîne par un espace.
let replaceFirstEBySpace = function (sentence) {
  console.log(sentence.replace ("e"," "));
  return sentence.replace ("e"," ");
}

//Exercice 3 : Concaténer les deux chaînes de caractères.
let concatenateSentences = function (firstSentence, secondSentence) {
  console.log(firstSentence.concat(secondSentence));
  return firstSentence.concat(secondSentence);
}

//Exercice 4 : Afficher le cinquième caractère de la chaîne.
let displayFifthCharacter = function (sentence) {
  console.log(sentence);
  console.log("Le cinquième caractère est '" + sentence.charAt(4) + "'");
  // return `${sentence.charAt(4)}`;
  // return sentence.substring(4,5);
  return sentence[4];
}

//Exercice 5 : Afficher les 9 premiers caractère.
let displayFirstNineCharacters = function (sentence) {
  console.log(sentence);
  console.log(sentence.substring(0,9));
  return `${sentence.substring(0,9)}`;
}

//Exercice 6 : Mettre en majuscule la chaîne.
let upperTheSentence = function (sentence) {
  console.log(sentence);
  console.log(sentence.toUpperCase());
  return `${sentence.toUpperCase()}`;
}

//Exercice 7 : Mettre en minuscule la chaîne.
let lowerTheSentence = function (sentence) {
  console.log(sentence);
  console.log(sentence.toLowerCase());
  return `${sentence.toLowerCase()}`;
}

//Exercice 8 : Supprimer les espaces avant et après la chaîne.
let removeSpaces = function (sentence) {
  console.log(sentence);
  console.log(sentence.trim());
  return `${sentence.trim()}`;
}

//Exercice 9 : Afficher true si le paramètre d'entrée de la fonction est de type *string*.
let isString = function (sentence) {
  console.log(sentence);
  console.log(typeof true === "boolean");
  return typeof(sentence) === "string";
}

//Exercice 10 : Afficher l'extension du fichier.
let displayExtension = function (fileName) {
  console.log(fileName);
  console.log(fileName.slice(-3) );
  // return (fileName.slice(-3) );
  return fileName.substring(fileName.lastIndexOf(".")+1);
}

//Exercice 11 : Compter le nombre d'espace dans la chaîne.
let countSpaces = function (sentence) {
  console.log(sentence);
  console.log(sentence.split(' ').length - 1);
  // return (sentence.split(' ').length - 1);
  return sentence.match(/ /g).length;
}

//Exercice 12 : Inverser une chaîne de caractères.
let invertSentence = function (sentence) {
  console.log(sentence);
  console.log(sentence.split('').reverse().join(''));
  return (sentence.split('').reverse().join(''));
}

//Exercice 13 : Chercher si dans la chaîne de caractère se trouve "La Manu".
let searchInSentence = function (sentence) {
  const searchTerm = 'La Manu';
  const indexOfFirst = sentence.indexOf(searchTerm);
  console.log(sentence);
  console.log('The index of "' + searchTerm + '" from the beginning is ' + indexOfFirst);
  // return sentence.indexOf("La Manu") != -1;
  return sentence.includes("La Manu");
}
// type of 

//Exercice 14 : Afficher la valeur absolue d'un nombre.
let displayAbsoluteValue = function (number) {
  console.log(number);
  console.log (Math.abs(number));
  return Math.abs(number);
}

//Exercice 15 : Afficher les valeurs absolues de plusieurs nombres.
let displayAbsoluteValues = function (numbersArray) {
  console.log(numbersArray);
  console.log(Math.abs(numbersArray));
  return numbersArray.map(Math.abs);
}

//Exercice 16 : Calculer la surface d'un cercle en fonction de son rayon. L'arondir à l'entier le plus proche.
let calculateArea = function (radius) {
  return Math.round(Math.PI * Math.pow(radius,2));
}

//Exercice 17 : Calculer l'hypothènuse d\'un triangle rectangle. Arrondir à l'entier inférieur.
let calculateHypotenuse = function (a, b) {
  // return Math.floor(Math.sqrt(Math.pow(a,2) + Math.pow(b,2)));
  return Math.floor(Math.hypot(a, b));
}
