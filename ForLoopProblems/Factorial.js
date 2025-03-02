const input=process.argv.slice(2);
let number=parseInt(input[0]);
let sum=1;
for (let i=0;i<number;i++){
    sum=sum*(i+1);
}
console.log("Factorial :- "+sum)