const PEDRA = "Pedra";
const TESOURA = "Tesoura";
const PAPEL = "Papel";

function escolhaRandomica(){
    return[PEDRA,TESOURA,PAPEL] [Math.floor(Math.random() * 3)];
};

class Jogador{
    constructor(nome = "npc"){
        this.nome = nome;
        this.vitorias = 0;
        this._escolha = null;
    }
    get escolha() {return this._escolha};
    set escolha(valor) {this._escolha = [PEDRA,TESOURA,PAPEL].includes(valor) ? valor:escolhaRandomica()};
}const p1 = new Jogador("Lucas");
const npc = new Jogador();

npc.escolher = function(){
    this.escolha = escolhaRandomica();
};
((nome = "Chico") => console.log(`Sejam bem vindo ${nome}. A partida ira começar`))(p1.nome);

console.log("É a sua vez escolha entre essas 3 opções:");
console.log("P -> Papel");
console.log("T -> Tesoura");
console.log("L -> Pedra");

function verificaEscolhar(escolha){
    switch(escolha){
        case 'P':
            return PAPEL;
        case 'T':
            return TESOURA;
        case 'L':
            return PEDRA;
        default:
            return false;
    }
}
const deuEmpate = (escolhaJogador, escolhaNPC) => escolhaJogador == escolhaNPC;

const venceu = function(escolhaJogador, escolhaNPC){
    if(
        (escolhaJogador == PEDRA && escolhaNPC ==  TESOURA) ||
        (escolhaJogador == TESOURA && escolhaNPC == PAPEL) ||
        (escolhaJogador == PAPEL && escolhaNPC == PEDRA)
    ){
        return true;
    }
    return false;
}
const imprimeResultado = (vitoriasJogador, vitoriasNPC) => {
    if (vitoriasJogador> vitoriasNPC){
        console.log(`Parabén vc ganhou a melhor de 5, por ${vitoriasJogador} a ${vitoriasNPC}` );
    }
    else{
        console.log(`Vc perdeu a melhor de 5, por ${vitoriasJogador} a ${vitoriasNPC}`);
    }
}
do{
    p1.escolha = PEDRA;
    npc.escolher();
    if (deuEmpate(p1.escolha, npc.escolher)){
        console.log(`Empate. Vc e o npc escolharam ${p1.escolha}`);
    } else {
        const venci = venceu(p1.escolha, npc.escolher);
        const resultado = venci? "venceu" : "Perdeu";
        venci? p1.vitorias++ : npc.vitorias++;
        console.log(`Vc ${resultado}. Vc escolheu ${p1.escolha} e o computador escolheu ${npc.escolha}`);
    }
} while (Math.max(p1.vitorias, npc.vitorias)<3);

imprimeResultado(p1.vitorias,npc.vitorias);

