//aprendendo a seta gorda

//Função normal
/*function count(bgn,end,jmp){
    for(i = bgn; i < end; i = i + jmp){
        console.log(i)
    }
}*/

//Função atribuída como valor de uma variável
/*let cnt = function count(bgn,end,jmp){
    for(i = bgn; i < end; i = i + jmp){
        console.log(i)
    }
}*/

//com seta gorda
let cnt = (bgn,end,jmp) => {
    for(i = bgn; i < end; i = i + jmp){
        console.log(i) 
    }
}

cnt(0,5,1)