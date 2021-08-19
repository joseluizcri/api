import Despesa from "../../domain/entity/Despesa";
import RepositoryFactory from "../../domain/factory/RepositoryFactory";
import DespesaRepository from "../../domain/repository/DespesaRepository";
import CalculoVencimento from "../../domain/service/CalculoVencimento";
import DespesaInput from "./DespesaInput";

export default class LancarDespesa {
    despesaRepository: DespesaRepository;
    constructor(repositoryFactory: RepositoryFactory) {
        this.despesaRepository = repositoryFactory.createDespesaRepository();
    }

    async execute(input: DespesaInput, calculoVencimento: CalculoVencimento) {
        let despesa = new Despesa({ descricao: input.descricao, valor: input.valor });
        for(let parcela = 1; parcela <= input.repetir; parcela++) {
            const vencimentoParcela = calculoVencimento.getVencimentoParcela(input.vencimento, parcela);
            despesa.adicionarParcela({ numero: parcela, vencimento: vencimentoParcela, realizado: false });
        }
        const id = await this.despesaRepository.save(despesa);
        return id;
    }
}