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
                // Se algum item do carrinho não existir no cardapio
                // Se 80% da digitação do item estiver correta, a função caça o item digitado pelo item mais parecido no array - em manuntencao
                if (itemEscolhido === undefined) {
                    // Throw new error guarda a mensagem e é apenas exibida na chamada do catch
                    // Alternativa ao console.log, visto que ele interrompe o fluxo do sistema
                    throw new Error(`Item inválido!`);
                }
                // Se a quantidade for igual a 0, ou
                // Se o usuário não digitar a quantidade, ou
                // Se o usuário digitar a quantidade em extenso (Ex: "três(3)")
                if (novaQuantidade == 0 || novaQuantidade === undefined || isNaN(novaQuantidade) || !Number.isInteger(Number(novaQuantidade))) {
                    throw new Error(`Quantidade inválida!`);
                }
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
                    valorTotal += precoDoItem;
                }
            });

            if (!seExtra) {
                return 'Item extra não pode ser pedido sem o principal';
            }
            // Métodos de pagamentos e acréscimo de crédito, e desconto de dinheiro. Débito segue preço normal
            if (metodoDePagamento === 'credito') {
                valorTotal *= 1.03;
            } else if (metodoDePagamento === 'dinheiro') {
                valorTotal *= 0.95;
            } else if (metodoDePagamento !== 'debito') {
                throw new Error('Forma de pagamento inválida!');
            }

            // Formatação do dinheiro em reais
            const valorFormatado = valorTotal.toFixed(2).replace('.', ',');
            return `R$ ${valorFormatado}`;

        // Chamada das mensagens de erro
        } catch (error) {
            return error.message;
        }
    }
}

const caixa = new CaixaDaLanchonete();
const resultado = caixa.calcularValorDaCompra('credito', ['cafe,2','chantily,1']);
console.log(resultado);

export { CaixaDaLanchonete };
