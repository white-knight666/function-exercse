//1- check age

const checkAge = (age) => age = (age>18)? true : confirm('Do you have your parents permission to access this page?');

//console.log(checkAge(24));


//2- pow

total=1;
function power(number1,number2){
    for (let index = 0; index < number2; index++) {
        total*=number1;
    }
    console.log('total :>> ', total);
}
power(5,2)


//3-arrow
const ask=(question, yes, no) => (confirm(question))? yes() :no();

ask(
    "Do you agree?",
    function() { alert("You agreed.") },
    function() { alert("You canceled the execution.") }
  )




  //4-calculater


  var x1 = x2 = null;
let calculator = {

  read() {
    this.x1 = prompt("Please enter first number", "");
    this.x2 = prompt("Please enter second number", "");
    return (x1, x2);
  },
  sum(x1, x2) {
    return (Number(this.x1) + Number(this.x2))
  },
  mul(x1, x2) {
    return [this.x1] * [this.x2];
  }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());