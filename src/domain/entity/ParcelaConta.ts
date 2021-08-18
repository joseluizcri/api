export default class ParcelaConta {
    numero: number;
    vencimento: Date;
    realizado: boolean;
    constructor({ numero, vencimento, realizado = false }: { numero: number, vencimento: Date, realizado: boolean }) {
        this.numero = numero;
        this.vencimento = vencimento;
        this.realizado = realizado;
    }
}