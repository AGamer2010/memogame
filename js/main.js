let order = []
let clickedOrder = []
let score = 0

/*
0 red
1 gre
2 blu
3 yel
*/

const red = $(".red")
const gre = $(".gre")
const blu = $(".blu")
const yel = $(".yel")

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random()*4)
    order[order.length] = colorOrder
    clickedOrder = []

    for(let i in order){
        let elementColor = createColorElement(order[i])
        lightColor(elementColor, Number(i) + 1)
    }
}

let lightColor = (element, number) => {
    number *= 500
    setTimeout(() => {
        element.classList.add('selected')
    }, number-250)
    setTimeout(() => {
        element.classList.remove('selected')
    });
}

let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            lose()  
            break
        }
        if(clickedOrder.length == order.length){
            alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível`)
        }
    }
}

//parou em 5:42 de parte 4.