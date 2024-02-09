const perguntas = [
    {
        pergunta: "Qual é o tipo de dado para representar números inteiros em JavaScript?",
        respostas: [
            "String",
            "Boolean",
            "Number"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o operador utilizado para atribuição de valor em JavaScript?",
        respostas: [
            "=",
            "=",
            "-"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o método utilizado para exibir mensagens no console em JavaScript?",
        respostas: [
            "log()",
            "alert()",
            "prompt()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o resultado da expressão '5 + '5' em JavaScript?",
        respostas: [
            "10",
            "'55'",
            "NaN"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função utilizada para obter o comprimento de uma string em JavaScript?",
        respostas: [
            "length()",
            "size()",
            "count()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o operador utilizado para concatenar strings em JavaScript?",
        respostas: [
            "+",
            "-",
            "*"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o resultado da expressão '10 > 5' em JavaScript?",
        respostas: [
            "True",
            "False",
            "Undefined"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o método utilizado para converter uma string em um número inteiro em JavaScript?",
        respostas: [
            "parseInt()",
            "parseFloat()",
            "toNumber()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a estrutura de controle utilizada para executar um bloco de código repetidamente em JavaScript?",
        respostas: [
            "if-else",
            "switch",
            "for"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o operador lógico utilizado para negação em JavaScript?",
        respostas: [
            "||",
            "&&",
            "!"
        ],
        correta: 2
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')


for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let reposta of item.repostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = respostas

        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem)
}