import Conta from "./Conta";

export default class Despesa extends Conta {
    
    constructor({ descricao, valor }: { descricao: string; valor: number; }) {
        super({ descricao, valor });
        this.valor = this.valor * -1;
    }
}