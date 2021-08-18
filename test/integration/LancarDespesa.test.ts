import LancarDespesa from "../../src/application/lancarDespesa/LancarDespesa";
import LancarDespesaInput from "../../src/application/lancarDespesa/LancarDespesaInput";
import CalculoVencimentoAnual from "../../src/domain/service/CalculoVencimentoAnual";
import CalculoVencimentoMensal from "../../src/domain/service/CalculoVencimentoMensal";
import MemoryRepositoryFactory from "../../src/infra/factory/MemoryRepositoryFactory";

test('Deve lancar uma despesa parcelada em 3 vezes mensais', async () => {
    let input: LancarDespesaInput = {
        descricao: 'Tênis',
        valor: 250,
        vencimento: new Date('2021-12-31'),
        realizado: false,
        repetir: 1
    }
    const lancarDespesa = new LancarDespesa(new MemoryRepositoryFactory());
    const result = await lancarDespesa.execute(input, new CalculoVencimentoMensal());
    expect(result.parcelas).toHaveLength(1);
});

test('Deve lancar uma despesa parcelada em 2 vezes anuais', async () => {
    let input: LancarDespesaInput = {
        descricao: 'Tênis 2',
        valor: 250,
        vencimento: new Date('2021-12-31'),
        realizado: false,
        repetir: 10
    }
    const lancarDespesa = new LancarDespesa(new MemoryRepositoryFactory())
    const result = await lancarDespesa.execute(input, new CalculoVencimentoAnual());
    expect(result.parcelas).toHaveLength(10);
});