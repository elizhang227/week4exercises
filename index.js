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