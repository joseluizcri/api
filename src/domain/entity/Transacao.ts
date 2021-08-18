export default class Transacao {
    contaId: number;
    valor: number;
    realizado: boolean;

    constructor({contaId, valor, realizado}: { contaId: number, valor: number, realizado: true }) {
        this.contaId = contaId;
        this.valor = valor;
        this.realizado = realizado;
    }
}