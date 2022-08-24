// PRIMEIROS PASSOS OBJETOS.
let amigo = {nome: 'José',
sexo: 'M',
peso: 86,
engordar(p=0){
    console.log('Engordou') 
    this.peso += p
}}

amigo.engordar(0)

console.log( `${amigo.nome} pesa ${amigo.peso}Kg.`)