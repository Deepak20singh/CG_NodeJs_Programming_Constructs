let sum=0;


for(let i=0;i<5;i++){
    let x=(Math.floor(Math.random()*90))+10;
    sum=sum+x;
    console.log(x);
}
console.log("Sum :- "+sum);
console.log("Average :- "+(sum/5));