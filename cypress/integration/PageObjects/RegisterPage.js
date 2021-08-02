/// <reference types="cypress" />

class RegisterPage {

    visit()
    {
        cy.visit("https://demo.opencart.com/index.php?route=account/register")
    }

    fillFirstName(value)
    {
        const field=cy.get('[id=input-firstname]')
        field.clear
        field.type(value)
        return this
    }

    fillLastName(value)
    {
        const field=cy.get('[id=input-lastname]')
        field.clear
        field.type(value)
        return this
    }

    fillEmail(value)
    {
        const field=cy.get('[id=input-email]')
        field.clear
        field.type(value)
        return this
    }

    fillTelephone(value)
    {
        const field=cy.get('[id=input-telephone]')
        field.clear
        field.type(value)
        return this
    }

    fillPassword(value)
    {
        const field=cy.get('[id=input-password]')
        field.clear
        field.type(value)
        return this
    }

    fillPasswordConfirm(value)
    {
        const field=cy.get('[id=input-confirm]')
        field.clear
        field.type(value)
        return this
    }

    agreeToPolicy()
    {
        const checkbox = cy.get('[name=agree]')
        checkbox.click()
    }

    continue()
    {
        const button=cy.get('[type=submit]')
        button.click()
    }

    continueToSite()
    {
        const button=cy.get('.btn-primary').contains("Continue")
        button.click()
    }

}

export default RegisterPage