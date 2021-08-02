/// <reference types="cypress" />

class HomePage {

    visit()
    {
        cy.visit("https://demo.opencart.com/")
    }

    selectProduct(value)
    {
        const product=cy.get('[class=caption]').contains(value)
        product.click()
    }

}

export default HomePage