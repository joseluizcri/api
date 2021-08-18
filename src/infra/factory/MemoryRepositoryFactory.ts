import RepositoryFactory from "../../domain/factory/RepositoryFactory";
import DespesaRepository from "../../domain/repository/DespesaRepository";
import DespesaRepositoryMemory from "../repository/DespesaRepositoryMemory";

export default class MemoryRepositoryFactory implements RepositoryFactory {
    createDespesaRepository(): DespesaRepository {
        return DespesaRepositoryMemory.getInstance();
    }
}