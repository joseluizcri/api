export default class Produto {

    constructor(
        private nome: string,
        private custo: number,
        private margem: number
    ) {};

    getValorVenda() {
        return this.custo + (this.custo * this.margem / 100);
    }
}