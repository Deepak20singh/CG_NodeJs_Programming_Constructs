const input=process.argv.slice(2);
let number=parseInt(input[0]);
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) return false;
    }
    return true;
}

for(let i=2;i<number;i++){
    if(isPrime(i)){
        console.log("The prime number :- "+i);
    }
}
