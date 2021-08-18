import Despesa from "../../src/domain/entity/Despesa";

test('Deve criar uma despesa', () => {
    const despesa = new Despesa({
        descricao: 'Água',
        valor: 100.00
    });
    expect(despesa.valor).toBe(-100);
});