import Produto from "./Produto";

export default class Estoque {
    
    constructor(
        private produto: Produto,
        private saldo: number,
        private minimo: number
    ){}
        
    getSaldo(): number {
        return this.saldo;
    }
    adicionaSaldo(valor: number) {
        this.saldo += valor;
    }

    subtraiSaldo(valor: number) {
        this.saldo -= valor;
    }
        
}