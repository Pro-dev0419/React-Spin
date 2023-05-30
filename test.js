function customRandom() {
 const values = [333, 370, 387]; // The values to favor
 const probabilities = [0.3, 0.4, 0.3]; // The corresponding probabilities
 
 const rand = Math.random();
 let acc = 0;
 for (let i = 0; i < values.length; i++) {
   acc += probabilities[i];
   if (rand < acc) {
     return values[i];
   }
 }
 
 // This should never happen, but just in case:
 return values[values.length - 1];
}

// Generate a random number using the custom probability distribution
const randomNumber = customRandom();

console.log(randomNumber);