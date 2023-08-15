import { cardapio } from "./cardapio.js";

class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {
        try {
            //primeira verificacao; se existe algum item no carrinho
            if (itens === undefined || itens.length === 0) {
                throw new Error('Não há itens no carrinho de compra!');
            }

            let valorTotal = 0;
            let seExtra = true; //só há itens extras até que seja encontrado um
            
                 //caça dos itens do carrinho no array cardapio
            itens.forEach(itemInfo => {
                const [itemNome, novaQuantidade] = itemInfo.split(',');
                const itemEscolhido = cardapio.cardapio.find(cardapio => cardapio[itemNome] !== undefined);
                //se algum item do carrinho nao existir no cardapio
                 //se 80% da digitação do item estiver correta, a função caça o item digitado pelo item mais parecido no array - em manuntencao
            if (itemEscolhido === undefined) {
                //throw new error guarda a msg e é so exibida na chamada do catch
                //alternativa do console.log visto que ele da um break no sistema
                throw new Error(`Item inválido!`);
                }
                //Se a quantidade for igual a 0, ou
                //se o usuario nao digiitar a quantidade, ou
                //e se o usuario digitar a quantidade em extenso (Ex:três(3))
                if (novaQuantidade == 0 || novaQuantidade === undefined || isNaN(novaQuantidade)|| !Number.isInteger(Number(novaQuantidade))) {
                    throw new Error(`Quantidade inválida!`);
                }
                //se um dos itens for do tipo extra, verifica se algum dos itens escolhidos sao seus respectivos principais
                if (itemEscolhido.tipo === 'extra') {
                    const nomeDoItemPrincipal = itemEscolhido.principal;
                //se algum dos itens extras nao tiverem seus respectivos itens principais, é retornado uma msg
                    if (!itens.some(cardapio => cardapio.split(',')[0] === nomeDoItemPrincipal)) {
                        console.log(`Item extra não pode ser pedido sem o principal`);
                        seExtra = false;
                //calculo feito caso itens extras com seus principais
                    } else {
                        const precoDoItem = itemEscolhido.preco * novaQuantidade;
                        valorTotal += precoDoItem;
                    }
                //caso nenhuma das verificações acima sejam verdadeiras, os itens vem direto para essa função
                } else {
                    const precoDoItem = itemEscolhido.preco * novaQuantidade;
                    valorTotal += precoDoItem;
                }
            });

            if (!seExtra) {
                return; // Encerra a função se nao houver um item principal
            }
            //metodos de pagamentos e acrescimo de credito e desconto de dinheiro. debito segue preco normal
            if (metodoDePagamento === 'credito') {
                valorTotal *= 1.03;
            } else if (metodoDePagamento === 'dinheiro') {
                valorTotal *= 0.95;
            } else if (metodoDePagamento !== 'debito') {
                throw new Error('Forma de pagamento inválida!');
            }

            //formatacao do dinheiro em reais
            const valorFormatado = valorTotal.toFixed(2).replace('.', ',');
            console.log(`R$ ${valorFormatado}`)

        //chamada das mensagens de erro
        } catch (error) {
            console.error(error.message);
        }
    }
}

const caixa = new CaixaDaLanchonete()
.calcularValorDaCompra('credito', ['cafe,2','chantily,1']);

export { CaixaDaLanchonete };
