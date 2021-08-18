export default interface CalculoVencimento {
    getProximoVencimento(vencimentoOriginal: Date, numeroParcela: number): Date;
}