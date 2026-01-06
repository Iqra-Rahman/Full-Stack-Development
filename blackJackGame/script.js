let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false

let messageEl = document.getElementById("message")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

let player ={
    name: "Per",
    chips: 145
}

let playerEl = document.getElementById("player-el");
playerEl.textContent  = player.name + " | $" + player.chips 
// console.log(player.chips)

function getRandomCard() {
    return Math.floor(Math.random() * 10) + 1
}

function startGame() {
    isAlive = true
    hasBlackJack = false

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum

    if (sum < 21) {
        messageEl.textContent = "Do you want to draw a new card?"
    } else if (sum === 21) {
        messageEl.textContent = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        messageEl.textContent = "You're out of the game!"
        isAlive = false
    }
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }
}
