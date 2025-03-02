const input=process.argv.slice(2);
if(input[0]==1){
    console.log("Sunday");
}
else if(input[0]==2){
    console.log("Monday");
}
else if(input[0]==3){
    console.log("Tuesday");
}
else if(input[0]==4){
    console.log("Wednesday");
}
else if(input[0]==5){
    console.log("Thrusday");
}
else if(input[0]==6){
    console.log("Friday");
}
else if(input[0]==7){
    console.log("Saturday");
}
else{
    console.log("Please enter number between 1 to 7");
}


