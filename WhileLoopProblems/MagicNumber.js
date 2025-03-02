const n = parseInt(process.argv[2]);

if (n < 1 || n > 100) {
    console.log("Please provide a valid number between 1 and 100.");
    process.exit(1);
}

let low = 1, high = 100;

while (low < high) {
    let mid = Math.floor((low + high) / 2);
    console.log(`Is your number greater than ${mid}? (yes/no)`);
    
    if (n > mid) {
        low = mid + 1;
    } else {
        high = mid;
    }
}

console.log(`Your magic number is: ${low}`);
