let money = 100;
const goal = 200;
let bets = 0;
let wins = 0;

while (money > 0 && money < goal) {
    bets++;
    if (Math.random() < 0.5) {
        money++; // Win Rs 1
        wins++;
    } else {
        money--; // Lose Rs 1
    }
}

console.log(`Final money: Rs ${money}`);
console.log(`Total bets made: ${bets}`);
console.log(`Total wins: ${wins}`);
