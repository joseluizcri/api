import Despesa from "../entity/Despesa";

export default interface DespesaRepository {
    save(despesa: Despesa): Promise<number>;
    getById(id: number): Promise<Despesa>;
    getAll(): Promise<Despesa[]>
}