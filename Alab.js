//part 1:Fizz Buzz

for(let i=1;i<=100;i++){
  if(i % 3 ==0){
    console.log(i)
    console.log("Fizz");
  }
  else if(i % 5==0){
    console.log(i)
    console.log("Buzz");
  }
  if(i % 3==0 && i % 5==0){
    console.log("fizz Buzz");
  }
  else if (i % 3 !==0 || i % 5 !==0){
    console.log((i)+" not divisible buy 5 or 3 ")
  }
}
