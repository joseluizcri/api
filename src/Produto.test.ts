import Produto from "./Produto";

test("Deve criar um produto", () => {
    const produto = new Produto("Alicate", 100, 25);
    expect(produto.getValorVenda()).toBe(125);
});