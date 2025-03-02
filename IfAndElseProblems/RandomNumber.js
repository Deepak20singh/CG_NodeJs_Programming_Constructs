let minimum=Infinity;
let maximum=-Infinity;
for(let i=0;i<5;i++){
    let number=(Math.floor(Math.random()*900)+100);
if(minimum>number)
    minimum=number;
if(maximum<number)
    maximum=number;
}
console.log("The maximum number is "+maximum);
console.log("The minimum number is "+minimum);