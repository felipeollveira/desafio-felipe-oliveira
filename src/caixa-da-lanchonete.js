import { cardapio } from "./cardapio.js";

class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {
        try {
            // Primeira verificação: se existe algum item no carrinho
            if (itens === undefined || itens.length === 0) {
                throw new Error('Não há itens no carrinho de compra!');
            }

            let valorTotal = 0;
            let seExtra = true; // Só há itens extras até que seja encontrado um
            
            // Caça dos itens do carrinho no array cardapio
            itens.forEach(itemInfo => {
                const [itemNome, novaQuantidade] = itemInfo.split(',');
                const itemEscolhido = cardapio.cardapio.find(cardapioItem => cardapioItem[itemNome] !== undefined);
<<<<<<< HEAD
                
                // Se algum item do carrinho não existir no cardapio
                if (itemEscolhido === undefined) {
=======
                // Se algum item do carrinho não existir no cardapio
                // Se 80% da digitação do item estiver correta, a função caça o item digitado pelo item mais parecido no array - em manuntencao
                if (itemEscolhido === undefined) {
                    // throw new error: o fluxo do programa é interrompido imediatamente e o erro é lançado
>>>>>>> 3903ec6f1aef18f1f6cb7d7a55d4b520e2ee42d9
                    throw new Error(`Item inválido!`);
                }
                // Se a quantidade for igual a 0, ou
                // Se o usuário não digitar a quantidade, ou
                // Se o usuário digitar a quantidade em extenso (Ex: "três(3)")
                // ou se o numero nao for inteiro (ex: 1.5)
                if (novaQuantidade == 0 || novaQuantidade === undefined || isNaN(novaQuantidade) || !Number.isInteger(Number(novaQuantidade))) {
                    throw new Error(`Quantidade inválida!`);
                }
<<<<<<< HEAD
                // Se um dos itens for do tipo extra
                if (itemEscolhido.tipo === 'extra') {
                    const nomeDoItemPrincipal = itemEscolhido.principal;
                    
                    //verifica se o item extra tem um array de principais / se ele possui outros itens como principais
                    if (Array.isArray(nomeDoItemPrincipal)) {
                        //verifica se pelo menos um dos itens principais do array esta no pedido
                        if (!nomeDoItemPrincipal.some(principal => itens.some(cardapioItem => cardapioItem.split(',')[0] === principal))) {
                            throw new Error('Item extra não pode ser pedido sem o principal');
                        }
                        //se nao tiver um array de principais
                    } else {
                        //el verifica se o item principal foi pedido
                        if (!itens.some(cardapioItem => cardapioItem.split(',')[0] === nomeDoItemPrincipal)) {
                            throw new Error('Item extra não pode ser pedido sem o principal');
                        }
                    }
                    //se o item principal tiver sido pedido
                    const precoDoItem = itemEscolhido.preco * novaQuantidade;
                    valorTotal += precoDoItem;
                    //se nenhum item escolhido for extra
                } else {
                    const precoDoItem = itemEscolhido.preco * novaQuantidade;
                    valorTotal += precoDoItem;
                }
            });
            
=======
                // Se um dos itens for do tipo extra, verifica se algum dos itens escolhidos são seus respectivos principais
                if (itemEscolhido.tipo === 'extra') {
                    const nomeDoItemPrincipal = itemEscolhido.principal;
                    // Se algum dos itens extras não tiverem seus respectivos itens principais, é retornada uma mensagem
                    if (!itens.some(cardapioItem => cardapioItem.split(',')[0] === nomeDoItemPrincipal)) {
                        seExtra = false;
                    // Cálculo feito caso itens extras com seus principais
                    } else {
                        const precoDoItem = itemEscolhido.preco * novaQuantidade;
                        valorTotal += precoDoItem;
                    }
                // Caso nenhuma das verificações acima seja verdadeira, os itens vão direto para essa função
                } else {
                    const precoDoItem = itemEscolhido.preco * novaQuantidade;
                    valorTotal += precoDoItem;}
            });
            //itens extras sem o item principal 
            if (!seExtra) {
                 throw new Error ('Item extra não pode ser pedido sem o principal');
            }
>>>>>>> 3903ec6f1aef18f1f6cb7d7a55d4b520e2ee42d9
            // Métodos de pagamentos e acréscimo de crédito, e desconto de dinheiro. Débito segue preço normal
            if (metodoDePagamento === 'credito') {
                valorTotal *= 1.03;
            } else if (metodoDePagamento === 'dinheiro') {
                valorTotal *= 0.95;
            } else if (metodoDePagamento !== 'debito') {
                throw new Error('Forma de pagamento inválida!');
            }

            // Formatação do dinheiro em reais
<<<<<<< HEAD
            const valorFormatado = valorTotal.toFixed(2).replace('.', ',');
            return (`R$ ${valorFormatado}`);

        // Chamada das mensagens de erro
        } catch (error) {
            return (error.message);
=======
           const valorFormatado = valorTotal.toFixed(2).replace('.', ',');
            //const valorFormatado = (valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })).replace('.',',');
            return `R$ ${valorFormatado}`;

        // Chamada das mensagens de erro
        } catch (error) {
            return error.message;
>>>>>>> 3903ec6f1aef18f1f6cb7d7a55d4b520e2ee42d9
        }
    }
}

<<<<<<< HEAD
const caixa = new CaixaDaLanchonete().calcularValorDaCompra('debito', ['ketchup,1','combo1,1','sanduiche,1'])
//ex: 'debito' , ['cafe,1],['chantily,2'] ou 'dinheiro' , ['combo,4']
//desafio é com RETURN


=======
>>>>>>> 3903ec6f1aef18f1f6cb7d7a55d4b520e2ee42d9
export { CaixaDaLanchonete };
