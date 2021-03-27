//função normal
/*function multiply(a,b){
    return a * b
}
*/

//função atribuída como valor de variável
mult = function (a,b){
    return a * b
}


//função com seta gorda passada como valor de variável
/*mult = (a,b) => {
    return a * b
}
*/

//mais compacto (só pode ser feito com funções de comando único)
//mult = (a,b) => a * b

// ainda mais compacto (p/ funções de parâmetro único e comando único)
//mult = a => a * 10

//mega compacto (p/ funções sem parâmetros)
//mult = () => 10 * 10

let res = mult(10,5)

console.log(res)