let friends = ["felipe","fabio", "marilza","tico","fabiana"];

console.log(friends);
console.log(friends[2])
friends[0] = "dale";
console.log(friends);


//Adicionando valores
const num = [7,8,9]
console.log(num);

num.push(10);//adiciona no final
console.log(num);

num.unshift(1,2,3)//adiciona no inicio
console.log(num);

num.splice(3,0,4,5,6,)//adiciona a partir no indice "3", removo "0" elementos e adiciono o restante
console.log(num);

//Localizando itens
const numeros = [6,7,8,9]
console.log(numeros.indexOf(8))//retorna o indice
console.log(numeros.indexOf(5))//retorna o indice

console.log(numeros.includes(8))//retorna o indice
console.log(numeros.includes(4))//retorna o indice

const movies = [
    {id:1, movieName:"Dejavu"},
    {id:2, movieName:"de volta para o futuro"},
    {id:3, movieName:"matrix"}
]
console.log(movies.find(function(movies){
    return movies.movieName === "matrix"
}))

console.log(movies.find(function(movies){
    return movies.movieName === "dale"
}))
console.log(movies.find( movie => movie.movieName == "matrix"))

//Removendo itens
const numbers = [5,6,7,8,9,10  ]
console.log(numbers)
const final = numbers.pop()//remove o ultimo
console.log(numbers)
console.log(final)

const inicio = numbers.shift()//remove o primeiro
console.log(numbers)
console.log(inicio)

const meio = numbers.splice(1,2)//remove a partir do indice"1" "2" itens
console.log(numbers)

//Limpando arary - 3 formas deiferentes
const numeross = [5,6,7,8]
//numeross = []
//numeross.length = 0
numbers.splice(0,numeross.length)

console.log(numbers)

//Concatenando array
const numerosss = [5,6,7,8,9,10]
console.log(numerosss)
console.log(numerosss.concat([11,12,13]))
console.log(numerosss)

//Divindo array
console.log(numerosss)
console.log(numerosss.slice(0,2))

//Join array - adiciono caracter entre posições
console.log(numerosss)
console.log(numerosss.join(" e "))
console.log(numerosss)

//Revertendo array
let clientes = ["andre","marcela","jose"]
console.log(clientes)
clientes.sort()
console.log(clientes)

clientes.reverse()
console.log(clientes)

//Verificando elementos 
const temLondon = [18,13,8,2,-6]
const tempPositive = temLondon.every(function (value){
    return value >= 0
})
console.log(tempPositive)

//Filtrando um array
console.log(temLondon)
const tempePositive = temLondon.filter(function (value){
    return value >= 0
})
console.log(tempePositive)