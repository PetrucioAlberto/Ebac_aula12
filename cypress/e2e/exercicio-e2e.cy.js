/// <reference types="cypress" />

import produtoPage from "../../cypress/support/page_objects/produto.Page";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
    produtoPage.realizarLogin()
  });

  it.only('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {

    // produto 1
    produtoPage.escolherProduto1_1( )
    produtoPage.validarPagina('.product_title','Ajax Full-Zip')
    produtoPage.escolhertamanho('.button-variable-item-', 'M')
    produtoPage.escolherCor('.variable-item.button-variable-item.button-variable-item-', 'Blue')
    produtoPage.botaoComprar('.single_add_to_cart_button')

     // produto 2
    produtoPage.escolherProdutoBarraPesquisa_2('Eos V-Neck Hoodie')
    produtoPage.validarPagina('.product_title','Eos V-Neck Hoodie')
    produtoPage.escolhertamanho('.button-variable-item-','M')
    produtoPage.escolherCor('.button-variable-item-','Green')
    produtoPage.botaoComprar('.single_add_to_cart_button')

     // produto 3
    produtoPage.escolherProduto3_3()

    // produto 4
    produtoPage.escolherProduto4_4()

    // adicionando ao carrinho
    produtoPage.verificarProdutosCarrinhos()

    // confirmando produto
    produtoPage.confirmarPedido()

    //pagando
    produtoPage.verificarPagamento()
    cy.screenshot() 
  });


})