let nome = "Astro Boy"
let xp = 10001
let nivel = ""
let contador = 1
do{
    if (xp < 1000){
        nivel = "Ferro"
        console.log(`O herói de nome ${nome} está no nível de ${nivel}.`)
    }else if(xp > 1000 && xp < 2000){
        nivel = "Bronze"
        console.log(`O herói de nome ${nome} está no nível de ${nivel}.`)
    }else if (xp > 2000 && xp < 5000){
        nivel = "Prata"
        console.log(`O herói de nome ${nome} está no nível de ${nivel}.`)
    }else if (xp > 5000 && xp < 7000){
        nivel = "Ouro"
        console.log(`O herói de nome ${nome} está no nível de ${nivel}.`)
    }else if (xp > 7000 && xp < 8000){
        nivel = "Platina"
        console.log(`O herói de nome ${nome} está no nível de ${nivel}.`)
    }else if (xp > 8000 && xp < 9000){
        nivel = "Ascedente"
        console.log(`O herói de nome ${nome} está no nível de ${nivel}.`)
    }else if (xp > 9000 && xp < 10000){
        nivel = "Imortal"
        console.log(`O herói de nome ${nome} está no nível de ${nivel}.`)
    }else{
        nivel = "Radiante"
        console.log(`O herói de nome ${nome} está no nível de ${nivel}.`)
    }
    contador ++
}while (contador <= 2)