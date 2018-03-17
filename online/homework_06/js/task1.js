var sideA, sideB, sideC, first, second, third, p, S, variant1, variant2, variant3, sideAsqr, sideBsqr, sideCsqr, i, commonNote, note, note1, note2, note3, note4, roundS, roundsideA, roundsideB, roundsideC;

first = 1;
second = 1;
third = 1;

for (i = 0; i < first; i++) {
    sideA = +prompt("Please enter the first side of triangle", "");

    if (parseFloat(sideA) !== sideA) {
        alert('enter the number for first side');
        first++;
    } else {

        first--;

    }
}

for (i = 0; i < second; i++) {
    sideB = +prompt("Please enter the second side of triangle", "");

    if (parseFloat(sideB) !== sideB) {
        alert('enter the number for second side');
        second++;
    } else {

        second--;

    }
}

for (i = 0; i < third; i++) {
    sideC = +prompt("Please enter the third side of triangle", "");

    if (parseFloat(sideC) !== sideC) {
        alert('enter the number for third side');
        third++;
    } else {

        third--;


        right(sideA, sideB, sideC);
    }

}

function right(a, b, c) {
    sideAsqr = Math.pow(a, 2);
    sideBsqr = Math.pow(b, 2);
    sideCsqr = Math.pow(c, 2);
    variant1 = sideAsqr + sideBsqr;
    variant2 = sideBsqr + sideCsqr;
    variant3 = sideCsqr + sideAsqr;
    p = (a + b + c) / 2;
    S = Math.sqrt(p * ((p - a) * (p - b) * (p - c)));
    roundS = Math.round(S * 100) / 100;
    roundsideA = Math.round(a * 100) / 100;
    roundsideB = Math.round(b * 100) / 100;
    roundsideC = Math.round(c * 100) / 100;
    commonNote = "For data" + "\u0020" + roundsideA + "," + roundsideB + "," + roundsideC + ":" + '\n';
    note = "Incorrect data";
    note1 = " Type of triangle is Right triangle and square is" + "\u0020" + roundS;
    note2 = " Type of triangle is Equilateral triangle and square is" + "\u0020" + roundS;
    note3 = " Type of triangle is Isosceles triangle and square is" + "\u0020" + roundS;
    note4 = " Type of triangle is Scalene triangle and square is" + "\u0020" + roundS;

    switch (true) {
        case ((a <= 0) || (b <= 0) || (c <= 0) || (p <= a) || (p <= b) || (p <= c)):
            console.log("%c " + commonNote + "%c " + note, "font-weight: bold; font-size: 1rem", "font-style: italic");
            break;

        case ((sideAsqr === variant2) || (sideBsqr === variant3) || (sideCsqr === variant1)):
            console.log("%c " + commonNote + "%c " + note1, "font-weight: bold; font-size: 1rem", "font-style: italic");
            break;

        case ((a === b) && (a === c)):
            console.log("%c " + commonNote + "%c " + note2, "font-weight: bold; font-size: 1rem", "font-style: italic");
            break;

        case ((a === b) || (c === a) || (a === c)):
            console.log("%c " + commonNote + "%c " + note3, "font-weight: bold; font-size: 1rem", "font-style: italic");
            break;

        default:
            console.log("%c " + commonNote + "%c " + note4, "font-weight: bold; font-size: 1rem", "font-style: italic");
            break;
    }
}