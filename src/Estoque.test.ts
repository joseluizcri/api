import Estoque from "./Estoque";
import Produto from "./Produto";

test("Deve criar um estoque de produto", () => {
    let estoque = new Estoque(new Produto("Acetona", 5, 25), 10, 5);
    estoque.adicionaSaldo(10);
    estoque.subtraiSaldo(5);
    expect(estoque.getSaldo()).toBe(15);
});