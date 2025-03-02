const input=process.argv.slice(2);
let number=parseInt(input[0]);
let number2=Math.pow(2,number);
for(let i=0;i<10;i++){
    console.log(number+" * "+(i+1)+" = "+(number*(i+1)));
}
console.log("------------------------------");
for(let i=0;i<10;i++){
    console.log(number2+" * "+(i+1)+" = "+(number2*(i+1)));
}