let head=0;
let tail=0;
while(head<=11&&tail<=11){
    let coin=Math.floor(Math.random()*2);
   if(coin==0){
    tail++;
   }else{
    head++;
   }
}
console.log("The winner is "+((head>tail)?"head":"tail"));