//part A of 308.4.1 refactoring old code;



//part 1:Fizz Buzz
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("Fizz Buzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i + " not divisible by 5 or 3");
//   }
// }
//part 2 Prime time
// instead of declating an numbner am just making a function so it cn be tested with any number in param;
// creating the function to check if input numberis prime to begin with

function isPrime(num){
  if (num===1) return false;
 for (let i=2;i<=num/2;i++){
  
   if(num % i===0){
    return false;//if divisble then its not prime
   }
}
   return true;
 }

// console.log(isPrime(11))
//  //creating function to find nextprime
//  function findnextprime(n){
//  for(let i=n+1;; i++){
 
//   if(isPrime(i))
//     return (i);
//  }
//  }

// function findnextprime(n){
//   let number=n+1;
//   while (!isPrime(number)){
//  number++;
//   }
//   return number;
// }
// console.log(findnextprime(14));
//part 3
 function findrow(str){
  let rows=[];
  let currentrow="";
  for(let i=0;i<str.length;i++){
    if(str[i]==="\n"){
      rows.push(currentrow)
      currentrow=""
    }
    else(
      currentrow+=str[i]
    )
  }
  return rows
 }

let finalrows=findrow("Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232");

function findcell(rows){
  for(let i=0;i<rows.length;i++){
    let cells=[];
    let currentcell="";
    console.log("cell number "+i+": ");
    for(let j=0;j<rows[i].length;j++){
      if(rows[i][j]===","){
     
        console.log(currentcell);
        
        currentcell="";
      }
      else(
        currentcell+=rows[i][j]
      )
    }
    console.log(currentcell);
  }
}
findcell(finalrows);