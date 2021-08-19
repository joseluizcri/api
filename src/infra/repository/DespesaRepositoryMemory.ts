import Despesa from "../../domain/entity/Despesa";
import DespesaRepository from "../../domain/repository/DespesaRepository";

export default class DespesaRepositoryMemory implements DespesaRepository {

    despesas: Despesa[];
    static instance: DespesaRepositoryMemory;

    constructor() {
        this.despesas = [];
    }

    static getInstance() {
        if (!DespesaRepositoryMemory.instance) {
            DespesaRepositoryMemory.instance = new DespesaRepositoryMemory();
        }
        return DespesaRepositoryMemory.instance;
    }

    async save(despesa: Despesa): Promise<number> {
        this.despesas.push(despesa)
        return Promise.resolve(despesa.id);
    }
    async getById(id: number): Promise<Despesa> {
        const despesa = this.despesas.find((item) => item.id === id);
        if (!despesa) throw new Error("Despesa não encontrada");
        return Promise.resolve(despesa);
    }
    async getAll(): Promise<Despesa[]> {
        return Promise.resolve(this.despesas);
    }
}