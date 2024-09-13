//const numbers = [];
//for (let i = 0; i < 10; i++) {
  //  numbers.push(Math.floor(Math.random() * 100));
//}
//
//for (let i = 0; i < numbers.length; i++) {
  //  console.log(numbers[i]);
//}

const numbers = [];
let operationsWithoutBreak = 0; // Compteur des opérations sans le break
let operationsWithBreak = 0; // Compteur des opérations avec le break
let numbersGreater50Found = false;

for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100));
}

// Boucle normale sans break pour compter les opérations (on effectue toutes les itérations)
for (let i = 0; i < numbers.length; i++) {
    operationsWithoutBreak++; // Incrémenter à chaque opération
    if (numbers[i] > 50) {
        numbersGreater50Found = true;
    }
}

// Réinitialisation
numbersGreater50Found = false;

// Boucle avec break
for (let i = 0; i < numbers.length; i++) {
    operationsWithBreak++; // Incrémenter à chaque opération
    if (numbers[i] > 50) {
        numbersGreater50Found = true;
        break; // Arrête la boucle dès que la condition est remplie
    }
}

// Résultats
console.log("Numbers:", numbers);
console.log("Operations without break:", operationsWithoutBreak);
console.log("Operations with break:", operationsWithBreak);
console.log("Operations saved by break:", operationsWithoutBreak - operationsWithBreak);


