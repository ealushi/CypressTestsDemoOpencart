/// <reference types="cypress" />

import RegisterPage from '../PageObjects/RegisterPage.js'

describe('Test Account Registration', function() {

    it('Successful Account Registration', function () {
        const rp=new RegisterPage()
        rp.visit()

        rp.fillFirstName('TestFirstName')
        rp.fillLastName('TestLastName')
        rp.fillEmail('testMail28@ymail.com')
        rp.fillTelephone('+35569')
        rp.fillPassword('Test123!')
        rp.fillPasswordConfirm('Test123!')
        rp.agreeToPolicy()

        rp.continue()

        cy.get('[id=content]').should('contain', 'Your Account Has Been Created!')

        rp.continueToSite()
    })

})
  