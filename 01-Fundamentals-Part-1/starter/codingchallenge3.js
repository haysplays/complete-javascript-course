let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);
if (scoreDolphins > scoreKoalas) {
    console.log(`The Dolphins win with a score of ${scoreDolphins}!`);
} else if (scoreKoalas > scoreDolphins) {
    console.log(`The Koalas win with a score of ${scoreKoalas}!`);
} else if (scoreKoalas === scoreDolphins) {
    console.log('The final score of ${scoreDolphins} for the Dolphins and ${scoreKoalas} for the Koalas is a tie!');
}

// Bonus 1
scoreDolphins = (97 + 112 + 101) / 3;
scoreKoalas = (109 + 95 + 123) / 3;
console.log(scoreDolphins, scoreKoalas);
if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log(`The Dolphins win with a score of ${scoreDolphins}!`);
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log(`The Koalas win with a score of ${scoreKoalas}!`);
} else if (scoreKoalas === scoreDolphins) {
    console.log('The final score of ${scoreDolphins} for the Dolphins and ${scoreKoalas} for the Koalas is a tie!');
}
// Bonus 2
scoreDolphins = (97 + 112 + 101) / 3;
scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphins, scoreKoalas);
if (scoreDolphins === scoreKoalas && scoreDolphins >= 100) {
    console.log(`${scoreDolphins} is a tie/draw!`);
} else if (scoreKoalas === scoreDolphins && scoreKoalas >= 100 && scoreDolphins > 100) {
    console.log(`${scoreKoalas} is a tie/draw!`);
} else if (scoreKoalas != scoreDolphins || scoreKoalas < 100 || scoreDolphins < 100) {
    console.log(`With a score of ${scoreDolphins} for the Dolphins and ${scoreKoalas} for the Koalas, neither team wins`);
}