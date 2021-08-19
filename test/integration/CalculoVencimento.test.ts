import CalculoVencimentoAnual from "../../src/domain/service/CalculoVencimentoAnual";
import CalculoVencimentoMensal from "../../src/domain/service/CalculoVencimentoMensal";

test('Deve calcular vencimento mensal', () => {
    const calculoVencimento = new CalculoVencimentoMensal();
    const vencimento = new Date('1993-06-03');
    const primeiroVencimento = calculoVencimento.getVencimentoParcela(vencimento, 1);
    const quintoVencimento = calculoVencimento.getVencimentoParcela(vencimento, 5);
    expect(primeiroVencimento.getMilliseconds()).toBe((new Date('1993-06-03')).getMilliseconds());
    expect(quintoVencimento.getMilliseconds()).toBe((new Date('1993-10-03')).getMilliseconds());
});

test('Deve calcular vencimento anual', () => {
    const calculoVencimento = new CalculoVencimentoAnual();
    const vencimento = new Date('1993-06-03');
    const primeiroVencimento = calculoVencimento.getVencimentoParcela(vencimento, 1);
    const quintoVencimento = calculoVencimento.getVencimentoParcela(vencimento, 5);
    expect(primeiroVencimento.getMilliseconds()).toBe((new Date('1993-06-03')).getMilliseconds());
    expect(quintoVencimento.getMilliseconds()).toBe((new Date('1997-06-03')).getMilliseconds());
});