const input = process.argv.slice(2);
let number = parseInt(input[0]); 
let category;

if (number < 10) {
    category = "unit";
} else if (number < 100) {
    category = "ten";
} else if (number < 1000) {
    category = "hundred";
} else {
    category = "undefined";
}

switch (category) {
    case "unit":
        console.log("Unit");
        break;
    case "ten":
        console.log("Ten");
        break;
    case "hundred":
        console.log("Hundred");
        break;
    default:
        console.log("Unfortunately, cases are not defined");
}
