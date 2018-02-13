var i, j, n, max, space, item, str;

i = 0;
j = 0;
n = 1; 
space = "";
str = "";
item = "";

for (j = 0; j < n; j++) {
    max = +prompt('Enter the number from 1 to 20', "");

    if (parseInt(max) !== max || (max <= 0) || (max > 20)) {
        alert('please enter the natural number from 1 to 20');
        n++;
    } else {

        n--;

    }
}

while (i < max) {
    item = "";
    space = "";
    for (j = 0; j < max - i; j++) space += "   ";

    for (j = 0; j < 2 * i + 1; j++) item += "[~]";
    str = str + space + item + "\n";

    i++;
    
}
console.log(str);
