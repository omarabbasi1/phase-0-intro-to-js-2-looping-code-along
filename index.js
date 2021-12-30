// Code your solutions in this file
const cards = ["Happy Birthday", "Get well soon", "Happy Anniversary"];

function writeCards(cards) {
    for (let i = 0; i < cards.length; i++) {
        console.log(`Hey Jim, ${cards[i]} love, Omar!`);
        debugger;
    }

    return cards;
}

writeCards(cards);

for (let i = 0; i < 10; i++) {
    console.log(i);
}