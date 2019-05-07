function hello(name) {
    console.log(`Hello, ${name}!`);
}
//hello('Eli');

function hello(name) {
    name = name || 'world';
    console.log(`Hello, ${name}!`);
}
  //hello('Eli');

function hello(name) {
    if (name == null) {
    console.log(`Hello, world!`);
    }
    else {
    console.log(`Hello, ${name}!`);
    }
}
hello('Eli');

function madlib(name, subject) {
    return `${name}'s favorite subject in school is ${subject}.`;
}
  //const message = madlib('Anushka', 'art');
  //console.log(message);
  //console.log(madlib('Anushka', 'art'));

function tipAmount(bill, service) {
    if (service === 'good') {
        console.log(bill * .20);
    }
    else if (service === 'fair') {
        console.log(bill * .15);
    }
    else if (service === 'bad') {
        console.log(bill * .10);
    }
}
  //tipAmount(40, 'fair');

function totalAmount(bill, service) {
    if (service === 'good') {
        console.log(bill + (bill * .20));
    }
    else if (service === 'fair') {
        console.log(bill + (bill * .15));
    }
    else if (service === 'bad') {
        console.log(bill + (bill * .10));
    }
}
  //totalAmount(100, 'good');

function splitAmount(bill, service, people) {
    if (service === 'good') {
        console.log((bill + (bill * .20)) / people);
    }
    else if (service === 'fair') {
        console.log((bill + (bill * .15)) / people);
    }
    else if (service === 'bad') {
        console.log((bill + (bill * .10)) / people);
    }
}
  //splitAmount(100, 'good', 5);


// DAY 2 EXERCISES //

function printNumbers(start, end) {
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
}
  //printNumbers(1, 10);

function printNumbers(start, end) {
    let count = start;
    while (count <= end) {
        console.log(count);
        count++;
    }
}
  //printNumbers(1,10);

function printSquare(size) {
    let row = '';
    for (let i = 0; i < size; i++) {
        row = '';
        for (let j = 0; j < size; j++) {
        row = row + '*';
        }
        console.log(row);
    }
}
  //printSquare(5);

function printBox(width, height) {
    let row = '';
    var star = '*';
    var space = ' ';
    for (let i = 0; i < height; i++) {
        if (i === 0 || i === (height-1)) {
        row = star.repeat(width);
        }
        else {
        row = star + space.repeat(width-2) + star;
        }
        console.log(row);
    }
}
  //printBox(5,5);

function printBanner(sentence) {
    let row = '';
    var star = '*';
    var space = ' ';
    for (let i = 0; i < 3; i++) {
        if (i ===0 || i === 2) {
        row = star.repeat(sentence.length + 4);
        }
        else {
        row = star + space + sentence + space + star;
        }
        console.log(row);
    }
}
  //printBanner('Clarence');

function factors(number) {
    let factor = [];
    for (let x = 0; x <= number; x++) {
        if (number % x === 0) {
        factor.push(x);
        }
    }
    console.log(factor);
}
//factors(10);

function cipher(string, offset) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    var corrected = string.toLowerCase();
    let decoded_message = '';
    for (let i = 0; i < corrected.length; i++) {
        let letter = corrected[i]
        if (alphabet.includes(letter) === false) {
        decoded_message += letter;
        }
        else if (alphabet.includes(letter)) {
            let index_in_alphabet = alphabet.indexOf(letter);
            let new_index = index_in_alphabet + offset;
            if (new_index >= alphabet.length) {
                new_index -= alphabet.length;
            }
            decoded_message += alphabet[new_index];
        }
    }
    console.log(decoded_message);
}
//cipher('Genius without education is like silver in the mine', 13);

function leetspeak(string) {
    var corrected = string.toLowerCase();
    let leet_speak = '';
    for (let i = 0; i < corrected.length; i++) {
        let letter = corrected[i];
        let new_letter = '';
        if (letter === 'a') {
        new_letter = '4';
        }
        else if (letter === 'e') {
        new_letter = '3';
        }
        else if (letter === 'g') {
        new_letter = '6';
        }
        else if (letter === 'l') {
        new_letter = '1';
        }
        else if (letter === 'o') {
        new_letter = '0';
        }
        else if (letter === 's') {
        new_letter = '5';
        }
        else if (letter === 't') {
        new_letter = '7';
        }
        leet_speak += new_letter;
    }
    console.log(leet_speak);
}
//leetspeak('Leet');