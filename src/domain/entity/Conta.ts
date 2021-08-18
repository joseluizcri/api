import ParcelaConta from "./ParcelaConta";

export default abstract class Conta {
    id: number;
    descricao: string;
    valor: number;
    parcelas: ParcelaConta[];

    constructor({ descricao, valor }: { descricao: string; valor: number; }) {
        this.id = this.gerarId();
        this.descricao = descricao;
        this.valor = valor;
        this.parcelas = [];
    }

    gerarId(): number {
        return (new Date()).getTime();
    }

    adicionarParcela(parcela: ParcelaConta) {
        this.parcelas.push(parcela);
    }
}