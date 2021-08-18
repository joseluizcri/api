import DespesaRepository from "../repository/DespesaRepository";

export default interface RepositoryFactory {
    createDespesaRepository(): DespesaRepository;
}