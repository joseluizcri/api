import Despesa from "../../domain/entity/Despesa";
import RepositoryFactory from "../../domain/factory/RepositoryFactory";
import DespesaRepository from "../../domain/repository/DespesaRepository";
import DespesaOutput from "./DespesaOutput";

export default class BuscarDespesa {
    despesaRepository: DespesaRepository;
    constructor(repositoryFactory: RepositoryFactory) {
        this.despesaRepository = repositoryFactory.createDespesaRepository();
    }

    async porId(id: number) {
        const despesa = await this.despesaRepository.getById(id);
        return this.mapDepesaToDespesaOutput(despesa);
    }

    async todos() {
        const despesas =  await this.despesaRepository.getAll();
        return despesas.map(despesa => this.mapDepesaToDespesaOutput(despesa));
    }

    private mapDepesaToDespesaOutput(despesa: Despesa): DespesaOutput {
        return {
            descricao: despesa.descricao,
            valor: despesa.valor,
            parcelas: despesa.parcelas
        }
    }
}