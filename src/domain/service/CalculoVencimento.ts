export default interface CalculoVencimento {
    getVencimentoParcela(vencimentoOriginal: Date, numeroParcela: number): Date;
}