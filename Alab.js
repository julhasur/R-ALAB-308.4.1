//part 1:Fizz Buzz
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizz Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i + " not divisible by 5 or 3");
  }
}
//part 2 Prime time
// instead of declating an numbner am just making a function so it cn be tested with any number in param;
// creating the function to check if input numberis prime to begin with

function isPrime(num){
 for (let i=num;i<=num/2;i++){
   if(num % i===0){
    return false;//if divisble then its not prime
   }
   return true;
 }
 return num ;
}
 //creating function to find nextprime
 function findnextprime(n){
    
 }