const input=process.argv.slice(2);
let number=parseInt(input[0]);
function palindrome(num) {
    let actual=num;
    let reversed=0;
    while (num > 0) {  
        reversed = reversed * 10 + num % 10; 
        num = Math.floor(num / 10); 
    }
  
  if(actual===reversed){
   console.log("Number is palindrome");
  }
  else{
    console.log("Number is not a palindrome");
}
}function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) return false;
    }
    return true;
}

palindrome(number);
console.log(isPrime(number) ? "The given number is prime":"The given number is not prime");