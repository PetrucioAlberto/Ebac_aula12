class produtoPage{

    
    realizarLogin(){
        cy.fixture('perfil').then(perfil => {
          cy.visit('/minha-conta/')
          cy.login(perfil.usuario, perfil.senha)
          cy.get('.page-title').should('contain', 'Minha conta') 
        })
    }

    escolherProduto1_1(){
        cy.get('#primary-menu > .menu-item-629 > a').click();
        cy.get('.product').eq(3).click();
    }
    escolhertamanho(campo,texto){
        cy.get( campo + texto).click()
    }
     escolherCor(campo, cor){
        cy.get(campo + cor).click();
    }

    botaoComprar(campo){
        cy.get(campo).click() 
    }

    escolherProdutoBarraPesquisa_2(Produto){
        cy.get('.search').type(Produto)
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
    }

    escolherProduto3_3(){
        cy.get('#primary-menu > .menu-item-629 > a').click();
        cy.get('.product').eq(5).click();
        cy.get('.product_title').should('contain','Argus All-Weather Tank')
        cy.get('.button-variable-item-M').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item')
        cy.get('.single_add_to_cart_button').click() 
    }

    escolherProduto4_4(){
        cy.get('.search').type('Atlas Fitness Tank')
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
        cy.get('.button-variable-item-L').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear().type('3')
        cy.get('.single_add_to_cart_button').click()
    }


    verificarProdutosCarrinhos(){
        cy.get('.woocommerce-message > .button').click()
        cy.get(':nth-child(1) > .product-name > a').should('contain', 'Apollo Running Short - 33, Black')
        cy.get(':nth-child(2) > .product-name > a').should('contain', 'Eos V-Neck Hoodie - M, Green')
        cy.get(':nth-child(3) > .product-name > a').should('contain', 'Atlas Fitness Tank - L, Blue')
        cy.get('.checkout-button').click()
    }

    confirmarPedido(){
        cy.get('.breadcrumb > .active').should('contain', 'Checkout')
        cy.get('#terms').click()
        cy.get('#place_order').click()
    }

    verificarPagamento(){
        cy.get('.woocommerce-notice').should('contain','Obrigado. Seu pedido foi recebido.')
    }

    validarPagina(campo, texto){
        cy.get(campo).should('contain',texto)


    }




}
export default new produtoPage();