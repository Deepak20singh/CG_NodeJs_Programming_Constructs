const input=process.argv.slice(2);
let number=parseInt(input[0]);
function CToF(num) {
  let ans= ((num * 9/5) + 32);
  console.log("The Temperature in Fahrenheit :- "+ans);
}
function FToC(num) {
    let ans= ((num - 32) * 5/9);
    console.log("The Temperature in Celsius :- "+ans);
  }

switch(input[1]){
    case "FToC":
        FToC(number);
        break;
    case "CToF":
        CToF(number);
        break;
}
