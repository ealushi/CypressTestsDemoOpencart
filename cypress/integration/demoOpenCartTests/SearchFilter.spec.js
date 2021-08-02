/// <reference types="cypress" />

import SearchPage from '../PageObjects/SearchPage.js'
import HomePage from '../PageObjects/HomePage.js'

describe('Test Search and Filter', function() {

    it('Successful Search and Filter', function () {
        const hp=new HomePage()
        const sp=new SearchPage()
        hp.visit()

        sp.search('iphone')

        sp.selectSortBy('Price (Low > High)')
        sp.selectDisplayNr('50')

        cy.get('[id=content]').should('contain', 'Products meeting the search criteria')
    })

})
  