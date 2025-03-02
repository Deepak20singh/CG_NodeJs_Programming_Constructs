const input=process.argv.slice(2);
let input1=parseInt(input[0]);
switch(input[1]){
   
    case "FToM":
        console.log("Feet to meter :- "+(input1*0.3048));
        break;
    case "MToF":
        console.log("Meter to feet :- "+(input1*3.28084));
        break;
    case "FToI":
        console.log("Feet to inch :- "+(input1*12));
        break;
    case "IToF":
        console.log("Inch to feet :- "+(input1/12));
        break;
   
    default:
        console.log("Please enter valid conversion.");
        break;
                                                                                                                                                    

}