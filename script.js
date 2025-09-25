let numeroSecreto; // O número que o jogador precisa adivinhar
let ContadorDeChances = 1; // começa na primeira chance
const MAX_CHANCES = 10; //Número máximo de chances

const campoPalpite = document.querySelector('#campoPalpite');
const botaoEnviarPalpite = document.querySeletor('#botaoEnviarPalpite');
const botaoReiniciar = document.querySelector('#botaoReiniciar');

const mensagemElemente = document.querySeletor('mensagem');
const palpitesAnterioresElement = document.querySeletor('.palpites-anteriores');
const dicaElement = document.querySelector('dica')
const chancesRestantesElement = document.querySeletor('#chancesRestantes')

let listaDePalpites = []; //Array para guardar os palpites que o jogador já deu

function iniciarJogo() {
numeroSecreto = Math.floor(Math.random() * 100) + 1;
console.log('Número Secreto (apenas para teste):', numeroSecreto);
}