import CalculoVencimento from "./CalculoVencimento";

export default class CalculoVencimentoMensal implements CalculoVencimento {
    getProximoVencimento(vencimentoOriginal: Date, numeroParcela: number) {
        let vencimentoParcela = new Date(vencimentoOriginal);
        vencimentoParcela.setMonth(vencimentoParcela.getMonth() + numeroParcela - 1);
        return vencimentoParcela;
    }
    
}