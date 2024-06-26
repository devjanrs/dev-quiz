// Variáveis
var pergunta = document.querySelector('#pergunta')
var resposta = document.querySelector('#resposta')
var leftcheckbox = document.querySelector('#left')
var rightcheckbox = document.querySelector('#right')
var left = document.querySelector('#esquerda')
var right = document.querySelector('#direita')
leftcheckbox.checked = false
rightcheckbox.checked = false
var botao = document.querySelector('#next')

// Perguntas
const initial = "Qual área você pretende seguir?"
const frontend = "Qual framework você quer aprender?"
const backend = "Qual das duas linguagens você quer aprender?"
const tech = "Quais tecnologias você gostaria de se especializar?"

const newquestion = "Você deseja se especializar em:"

// Respostas
const Front = "Front-end"
const Back = "Back-end"

const React = "React"
const Vue = "Vue.js"

const C = "C#"
const Java = "Java"

const Frontb = "Em Front-end"
const Backb =  "Em Back-end"
const areafull = "Fullstack"

// Inner
pergunta.innerText = `${initial}`
left.innerText = `${Front}`
right.innerText = `${Back}`



// Funções
function avançar() {

    // Caso nenhuma opção for escolhida, retornará uma mensagem de erro.
    if (leftcheckbox.checked === false && rightcheckbox.checked === false) {
            alert("Erro! Escolha uma das alternativas")

    } else if (left.innerText == Front && leftcheckbox.checked === true) {
            alert(`Você escolheu ${Front}`)
                pergunta.innerText = `${frontend}`
                left.innerText = `${React}`
                right.innerText = `${Vue}`
                leftcheckbox.checked = false
                rightcheckbox.checked = false

    } else if(right.innerText == Back && rightcheckbox.checked === true) {
            alert(`Você escolheu ${Back}`)
                pergunta.innerText = `${backend}`
                left.innerText = `${C}`
                right.innerText = `${Java}`
                leftcheckbox.checked = false
                rightcheckbox.checked = false
    }

    if ((left.innerText == React && leftcheckbox.checked === true) || 
        (right.innerText == Vue && rightcheckbox.checked === true)) {
            alert("Parabéns! É uma ótima escolha")
                pergunta.innerText = `${newquestion}`
                left.innerText = `${Frontb}`
                right.innerText = `${areafull}`
                leftcheckbox.checked = false
                rightcheckbox.checked = false

    }

    if ((left.innerText == C && leftcheckbox.checked === true) || 
        (right.innerText == Java && rightcheckbox.checked === true)) {
            alert("Parabéns! É uma ótima escolha")
                pergunta.innerText = `${newquestion}`
                left.innerText = `${Backb}`
                right.innerText = `${areafull}`
                leftcheckbox.checked = false
                rightcheckbox.checked = false
    }

    if ((left.innerText == Frontb && leftcheckbox.checked === true) || 
        (left.innerText == Backb && leftcheckbox.checked === true) || 
        (right.innerText == areafull && rightcheckbox.checked === true)) {
            alert("Excelente escolha!")
            pergunta.innerText = `${tech}`
            resposta.innerHTML = '<input></input>'
        }
}  
