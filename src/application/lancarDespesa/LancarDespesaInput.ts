export default interface LancarDespesaInput {
    descricao: string,
    valor: number,
    vencimento: Date,
    realizado: boolean,
    repetir: number,
}