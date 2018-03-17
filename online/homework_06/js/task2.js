var euroAmount, usdAmount, euroRate, usdRate, i, euro, usd, commonNote, note1;

euro = 1;
usd = 1;
euroRate = 33.2324;
usdRate = euroRate / 1.074;


for (i = 0; i < euro; i++) {

    euroAmount = prompt("Please enter the amount of EURO you want to convert", "");
    parseFloat(euroAmount) == euroAmount && euroAmount > 0 ? (
        euro--
    ) : (
        alert("enter the positive number of EURO amount"),
        euro++);
}

for (i = 0; i < usd; i++) {

    usdAmount = prompt("Please enter the amount of USD you want to convert", "");
    parseFloat(usdAmount) == usdAmount && usdAmount > 0 ? (
        usd--,
        convertor(euroAmount, euroRate, usdAmount, usdRate)
    ) : (
        alert("enter the positive number of USD amount"),
        usd++);
}

function convertor(a, b, a1, b1) {
    c = Math.round(a * b * 100) / 100;
    c1 = Math.round(a1 * b1 * 100) / 100;
    d = Math.round(a * 100) / 100;
    d1 = Math.round(a1 * 100) / 100;
    commonNote = "For data" + "\u0020" + d + ", " + d1 + ":" + '\n';
    note1 = d + " euros are equal " + c + " UAH " + d1 + " dollars are equal " + c1 + " UAH, one euro is equal 1.074 dollars.";

    console.log("%c " + commonNote + "%c " + note1, "font-weight: bold; font-size: 1rem", "font-style: italic");
}