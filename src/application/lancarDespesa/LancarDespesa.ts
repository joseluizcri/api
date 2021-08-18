import Despesa from "../../domain/entity/Despesa";
import RepositoryFactory from "../../domain/factory/RepositoryFactory";
import DespesaRepository from "../../domain/repository/DespesaRepository";
import CalculoVencimento from "../../domain/service/CalculoVencimento";
import LancarDespesaInput from "./LancarDespesaInput";

export default class LancarDespesa {
    despesaRepository: DespesaRepository;
    constructor(repositoryFactory: RepositoryFactory) {
        this.despesaRepository = repositoryFactory.createDespesaRepository();
    }

    async execute(input: LancarDespesaInput, calculoVencimento: CalculoVencimento) {
        let despesa = new Despesa({ descricao: input.descricao, valor: input.valor });
        for(let parcela = 1; parcela <= input.repetir; parcela++) {
            const vencimentoParcela = calculoVencimento.getProximoVencimento(input.vencimento, parcela);
            despesa.adicionarParcela({ numero: parcela, vencimento: vencimentoParcela, realizado: false });
        }
        this.despesaRepository.save(despesa);
        const result = await this.despesaRepository.getById(despesa.id);
        console.log(result);
        
        return result;
    }
}