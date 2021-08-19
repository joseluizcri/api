import LancarDespesa from "../../src/application/despesa/LancarDespesa";
import BuscarDespesa from "../../src/application/despesa/BuscarDespesa";
import DespesaInput from "../../src/application/despesa/DespesaInput";
import CalculoVencimentoMensal from "../../src/domain/service/CalculoVencimentoMensal";
import MemoryRepositoryFactory from "../../src/infra/factory/MemoryRepositoryFactory";

const repositoryFactory = new MemoryRepositoryFactory();
const buscarDespesa = new BuscarDespesa(repositoryFactory);
const lancarDespesa = new LancarDespesa(repositoryFactory);

test('Deve buscar uma despesa por id', async () => {
    let input: DespesaInput = {
        descricao: 'Tênis',
        valor: 250,
        vencimento: new Date('2021-12-31'),
        realizado: false,
        repetir: 3
    }
    const id = await lancarDespesa.execute(input, new CalculoVencimentoMensal());
    const despesa = await buscarDespesa.porId(id);
    expect(despesa.descricao).toBe('Tênis');
});

test('Deve buscar todas as despesas', async () => {
    const despesas = await buscarDespesa.todos();
    expect(despesas.length).toBeGreaterThan(0);
});