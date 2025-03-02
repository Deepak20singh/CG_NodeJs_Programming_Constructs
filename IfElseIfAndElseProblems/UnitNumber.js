const input=process.argv.slice(2);
if(input[0]<10){
    console.log("Unit");
}
else if(input[0]<100){
    console.log("Ten");
}
else if(input[0]<1000){
    console.log("Hundred");
}
else if(input[0]<1000){
    console.log("Thousand");
}