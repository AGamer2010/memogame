let order = []
let clickedOrder = []
let score = 0

/*
0 gre
1 red
2 yel
3 blu
*/

const gre = document.querySelector('.gre')
const red = document.querySelector('.red')
const yel = document.querySelector('.yel')
const blu = document.querySelector('.blu')

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
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            lose()
            break
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível`)
        nextLvl()
    }
}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color
    createColorElement(color).classList.add('selected')

    setTimeout(() => {
        createColorElement(color).classList.remove('selected')    
        checkOrder()
    }, 250);
}

let createColorElement = (color) => {
    if(color == 0){
        return gre
    } else if(color == 1){
        return red
    } else if(color == 2){
        return yel
    } else if(color == 3){
        return blu
    }
}

let nextLvl = () => {
    score++
    shuffleOrder()
}

let lose = () => {
    alert(`Pontuação: ${score}!\n Você perdeu. Clique em OK para iniciar outro jogo`)
    order = []
    clickedOrder = []

    init()
}    

let init = () => {
    alert('Bem-vindo ao Michaelsoft Intelligent!')
    score = 0

    nextLvl()
}

gre.onclick = () => click(0)
red.onclick = () => click(1)
yel.onclick = () => click(2)
blu.onclick = () => click(3)

init()