class itensOfCardapio { 
  constructor() {
    this.cardapio = [
      {
        cafe: 'cafe',
        preco: 3.0,
        tipo: 'principal'
      },
      { 
        chantily: 'Chantily(extra do Café)',
        preco: 1.50,
        tipo: 'extra',
        principal:'cafe'
      },
      { 
        suco: 'Suco Natural',
        preco: 6.20,
        tipo: 'principal'
      },
      {
        sanduiche: 'Sanduíche',
        preco: 6.50,
        tipo: 'principal'
      },
      {
        queijo: 'Queijo (extra do Sanduíche)',
        preco: 2.0,
        tipo: 'extra',
        principal:'sanduiche'
      },
      {
        salgado: 'Salgado',
        preco: 7.25,
        tipo: 'principal'
      },
      {
        combo1: ['suco,1','sanduíche,1'],
        preco: 9.50,
        tipo: 'combo'
      },
      { 
        combo2: ['cafe,1','sanduiche,1'],
        preco: 7.50,
        tipo: 'combo'
      }
    ];
  }


}
//ANOTACOES
//os itens possuem um tipo: principal, extra ou combo
//apenas itens extras precisam estar acompanhados de principais
//itens tipo extra possuem strings "principal" que apontam o codigo do item que eles acompanham
/* se combo nao eh considerado principal, entao os itens extras ainda assim precisam estar 
acompanhados dos seus respectivos principais */

const cardapio = new itensOfCardapio();
export { cardapio };
