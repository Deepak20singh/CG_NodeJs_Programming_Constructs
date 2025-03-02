const input=process.argv.slice(2);
let number=parseInt(input[0]);
let ans=true;
for(let i=2;i<Math.sqrt(number)+1;i++){
if(number%i==0){
    ans=false;
}
}
console.log(ans);