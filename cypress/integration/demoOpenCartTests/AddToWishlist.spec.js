/// <reference types="cypress" />

import HomePage from '../PageObjects/HomePage.js'
import ProductPage from '../PageObjects/ProductPage.js'

describe('Test Place Order', function() {

    it('Successful Place Order', function () {
        const hp=new HomePage()
        const pp=new ProductPage()
        
        const myFavItem = 'MacBook'

        hp.visit()
        hp.selectProduct(myFavItem)
        pp.addToWishlist()
        
        cy.get('[id=product-product]')
        .find('div')
        .should('have.class','alert-success') 
        .should('contain', myFavItem)
    })

})
  