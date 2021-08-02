/// <reference types="cypress" />

class CheckoutPage {

    visit()
    {
        cy.visit('https://demo.opencart.com/index.php?route=checkout/cart')
    }

    checkout()
    {
        const button = cy.get('[class=pull-right]').contains('Checkout')
        button.click()
    }
}

export default CheckoutPage