import { CaixaDaLanchonete } from "./caixa-da-lanchonete.js";


describe('CaixaDaLanchonete', () => {

    const validaTeste = (formaDePagamento, resultadoEsperado, itens) => {
        const resultado = new CaixaDaLanchonete()
            .calcularValorDaCompra(formaDePagamento, itens);

        expect(resultado.replace("\xa0", " ")).toEqual(resultadoEsperado);
    };

    test.each([
        ['com carrinho vazio', 'dinheiro', 'Não há itens no carrinho de compra!', []],
        ['com carrinho vazio', 'credito', 'Não há itens no carrinho de compra!', []],
        ['com carrinho vazio', 'debito', 'Não há itens no carrinho de compra!', []],
    ])('compra %p em %p deve resultar em %p', (_, formaDePagamento, resultadoEsperado, itens) =>
        validaTeste(formaDePagamento, resultadoEsperado, itens));

    test.each([
        ['dinheiro', 'R$ 2,85', ['cafe,1']],
        ['credito', 'R$ 3,09', ['cafe,1']],
        ['debito', 'R$ 3,00', ['cafe,1']],
    ])('compra simples em %p deve resultar em %p', validaTeste);

    test.each([
        ['credito', 'R$ 11,85', ['cafe,1', 'sanduiche,1', 'queijo,1']],
        ['debito', 'R$ 11,50', ['cafe,1', 'sanduiche,1', 'queijo,1']],
    ])('compra de 3 itens em %p deve resultar em %p', validaTeste);
    
    //Quantidade invalida!
    test.each([
        ['dinheiro', 'Quantidade inválida!', ['cafe,t']],
        ['debito', 'Quantidade inválida!', ['cafe,1.5']],
        ['debito', 'Quantidade inválida!', ['cafe,']],
        ['debito', 'Quantidade inválida!', ['cafe,0']],
    ])('Digitacao de quantidade deve ser unicamente de *numeros inteiros > 0*. Quantidade errada deve retornar: "Quantidade invalida!"', validaTeste);
    //Forma de pagamento inválida!
    test.each([
        ['pix', 'Forma de pagamento inválida!', ['combo2,1']],
        ['cartao de credito', 'Forma de pagamento inválida!', ['cafe,3']],
      ])('Se forma de pagamento inexistente: "Forma de pagamento inválida!"', validaTeste);
    //Combos nao sao considerados itens principais
      test.each([
        ['debito', 'Item extra não pode ser pedido sem o principal', ['combo2,1','queijo,1']],
        ['dinheiro', 'Item extra não pode ser pedido sem o principal', ['chantily,3','combo2,1']],
      ])('Combos nao sao considerados itens principais', validaTeste);
    //Não há itens no carrinho de compra!
      test.each([
        ['debito', 'Não há itens no carrinho de compra!',[] ],
        ])('Não há itens no carrinho de compra!', validaTeste);

<<<<<<< HEAD
    //Item extra possui mais de um principal
    test.each([
        ['debito', 'R$ 16,50', ['combo1,1','ketchup,1','sanduiche,1']],
        ['dinheiro', 'Item extra não pode ser pedido sem o principal', ['cafe,3','ketchup,1']],
      ])('um item extra pode ter mais de um item principal', validaTeste);

=======
>>>>>>> 3903ec6f1aef18f1f6cb7d7a55d4b520e2ee42d9
    test.each([
        ['dinheiro', 'R$ 33,73', ['cafe,4', 'sanduiche,3', 'queijo,2']],
        ['credito', 'R$ 36,56', ['cafe,4', 'sanduiche,3', 'queijo,2']],
        ['debito', 'R$ 35,50', ['cafe,4', 'sanduiche,3', 'queijo,2']],
    ])('compra de múltiplas quantidades em %p deve resultar em %p', validaTeste);

<<<<<<< HEAD
    


=======
>>>>>>> 3903ec6f1aef18f1f6cb7d7a55d4b520e2ee42d9
    test.each([
        ['com quantidade zero', 'dinheiro', 'Quantidade inválida!', ['cafe,0']],
        ['com um valor', 'credito', 'Item inválido!', ['1']],
        ['com código inexistente', 'debito', 'Item inválido!', ['pizza, 1']],
        ['com forma de pagamento inválida', 'especie', 'Forma de pagamento inválida!', ['cafe, 1']],
    ])('compra %p em %p deve resultar em %p', (_, formaDePagamento, resultadoEsperado, itens) =>
        validaTeste(formaDePagamento, resultadoEsperado, itens));

    test.each([
        ['chantily', 'dinheiro', 'Item extra não pode ser pedido sem o principal', ['chantily,1']],
        ['queijo', 'credito', 'Item extra não pode ser pedido sem o principal', ['queijo,1']],
        ['chantily com outro item', 'credito', 'Item extra não pode ser pedido sem o principal', ['chantily,1', 'sanduiche,1']],
        ['queijo com outro item', 'debito', 'Item extra não pode ser pedido sem o principal', ['cafe,1', 'queijo,1']],
    ])('compra %p em %p deve resultar em %p', (_, formaDePagamento, resultadoEsperado, itens) =>
        validaTeste(formaDePagamento, resultadoEsperado, itens));



<<<<<<< HEAD
});
=======
});
>>>>>>> 3903ec6f1aef18f1f6cb7d7a55d4b520e2ee42d9
