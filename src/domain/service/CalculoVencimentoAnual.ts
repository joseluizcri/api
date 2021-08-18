import CalculoVencimento from "./CalculoVencimento";

export default class CalculoVencimentoAnual implements CalculoVencimento {
    getProximoVencimento(vencimentoOriginal: Date, numeroParcela: number): Date {
        let vencimentoParcela = new Date(vencimentoOriginal);
        vencimentoParcela.setFullYear(vencimentoParcela.getFullYear() + numeroParcela - 1);
        return new Date(vencimentoParcela);
    }
    
}