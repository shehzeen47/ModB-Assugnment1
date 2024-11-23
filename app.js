var name = `John Doe`;
var age = `30`;
var occupation = `Software Developer`;
var email = `john.doe@gmail.com`;
var cellno = `123-456-7890`;
var institute = `Jawan Pakistan`;
var education = `abc`;
document.write(`Name: ${name} <br> <br>
                Age: ${age} <br> <br>
                Occupation: ${occupation} <br> <br>
                Email: ${email} <br> <br>
                Cell No: ${cellno} <br> <br>
                Institute: ${institute} <br> <br>
                Education: ${education}`);

var fulName = 'Shehzeen Ali';
{
    var fulName = 'Ali Shehzeen';
    console.log(fulName);
}
console.log(fulName);

xyz();
function xyz() {
    const x = 67;
    {
        const x = 100;
        console.log(x);
    }
    console.log(x);
}

let vr = 'shehzeen';
let vr;

const variable = 38;
console.log(variable);
variable = 38;
console.log(variable);

let test = true;
console.log(test);
let test;

console.log(ray);
var ray = 'future';

func();
function func() {
    console.log('testing hoisting');
}