/// <reference types="cypress" />

class ProductPage {

    addToCart()
    {
        const button=cy.get('[id=button-cart]')
        button.click()
    }

    addToWishlist()
    {
        const button=cy.get('[data-original-title="Add to Wish List"]')
        button.click()
    }
}

export default ProductPage