import LancarDespesa from "../../src/application/despesa/LancarDespesa";
import DespesaInput from "../../src/application/despesa/DespesaInput";
import CalculoVencimentoAnual from "../../src/domain/service/CalculoVencimentoAnual";
import CalculoVencimentoMensal from "../../src/domain/service/CalculoVencimentoMensal";
import MemoryRepositoryFactory from "../../src/infra/factory/MemoryRepositoryFactory";

const lancarDespesa = new LancarDespesa(new MemoryRepositoryFactory());

test('Deve lancar uma despesa parcelada em 3 vezes mensais', async () => {
    let input: DespesaInput = {
        descricao: 'Tênis',
        valor: 250,
        vencimento: new Date('2021-12-31'),
        realizado: false,
        repetir: 3
    }
    const result = await lancarDespesa.execute(input, new CalculoVencimentoMensal());
    expect(result).toBeDefined();
});

test('Deve lancar uma despesa parcelada em 2 vezes anuais', async () => {
    let input: DespesaInput = {
        descricao: 'Tênis 2',
        valor: 250,
        vencimento: new Date('2021-12-31'),
        realizado: false,
        repetir: 2
    }
    const result = await lancarDespesa.execute(input, new CalculoVencimentoAnual());
    expect(result).toBeDefined();
});