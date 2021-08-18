import Transacao from "../../src/domain/entity/Transacao";

test('Deve criar uma transacao realizada', () => {
    const transacao = new Transacao({
        contaId: 1,
        valor: 250,
        realizado: true
    });
    expect(transacao.realizado).toBeTruthy();
});