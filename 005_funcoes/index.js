////////////////////////////////
//Declaração
function movie(){
    console.log("Estou em movie");
}
movie();

////////////////////////////////
//function expression
const car = function(){
    console.log("carro")
}
car();

////////////////////////////////
//argumentos
function soma(){
    let total = 0;
    for(let value of arguments)
        total += value

    return total;
}
console.log(soma(2,3,4,5,6));
console.log(soma(2));

////////////////////////////////
//default
function carLoan(loan,rate = 2.9, years = 5){
    return (loan * rate / 100 * years) + loan;
}
console.log(carLoan(20000));
console.log(carLoan(20000,2.5));
