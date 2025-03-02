 const input=process.argv.slice(2);

 let number=input[0];
 
 if(number.length>=4){
 if(input[0]%4){
    if(!input[0]%100){
        console.log("true");
    }
else{
    console.log("false");
}
 }
 else if(input[0]%400){
    console.log("true");
 }
}
else{
    console.log("false");
}