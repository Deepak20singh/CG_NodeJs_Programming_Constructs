const input=process.argv.slice(2);

const day=parseInt(input[0]);
const month=parseInt(input[1]);

if(month==3){
    if(day>20)
        console.log("true");
}
else if(month==6){
    if(day<20){
        console.log("true");
    }
}
else if(month>3&&month<6){
    console.log("true");
}
else{
    console.log("false");
}