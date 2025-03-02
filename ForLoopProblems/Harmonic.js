const input=process.argv.slice(2);
let number=parseInt(input[0]);
if(number>1){
for(let i=1;i<number;i++){
    console.log("1/"+i+" + ");
}
console.log("1/"+number);
}
else{
    console.log("1/1");
}