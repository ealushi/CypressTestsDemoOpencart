/// <reference types="cypress" />

import CheckoutPage from '../PageObjects/CheckoutPage.js'
import HomePage from '../PageObjects/HomePage.js'
import ProductPage from '../PageObjects/ProductPage.js'

describe('Test Place Order', function() {

    it('Successful Place Order', function () {
        const hp=new HomePage()
        const cp=new CheckoutPage()
        const pp=new ProductPage()
        
        hp.visit()
        hp.selectProduct('MacBook')
        pp.addToCart()

        hp.visit()
        hp.selectProduct('iPhone')
        pp.addToCart()
        
        cp.visit()
        cp.checkout()

        cy.get('[id=checkout-cart]')
        .find('div')
        .should('not.have.class','alert-danger') 
    })

})
  