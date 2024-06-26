var pergunta = document.querySelector('#pergunta')
var leftcheckbox = document.querySelector('#left')
var rightcheckbox = document.querySelector('#right')
var left = document.querySelector('#esquerda')
var right = document.querySelector('#direita')
leftcheckbox.checked = false
rightcheckbox.checked = false

// Perguntas
const initial = "Qual área você pretende seguir?"
const frontend = "Qual framework você quer aprender?"
const backend = "Qual das duas linguagens você quer aprender?"

// Respostas
const Front = "Front-end"
const Back = "Back-end"
const React = "React"
const Vue = "Vue.js"
const C = "C#"
const Java = "Java"


// Inner
pergunta.innerText = `${initial}`
left.innerText = `${Front}`
right.innerText = `${Back}`



// Funções
function avançar() {
    if (left.innerText == Front && leftcheckbox.checked === true) {
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
    } else {
        alert("Erro! Escolha uma das alternativas")
    }
}