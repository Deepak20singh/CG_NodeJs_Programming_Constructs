const n = parseInt(process.argv[2]);

if (isNaN(n) || n < 0) {
    console.log("Please provide a valid non-negative integer.");
    process.exit(1);
}

let power = 1;
let i = 0;

while (i <= n && power <= 256) {
    console.log(`2^${i} = ${power}`);
    power =power * 2;
    i++;
}