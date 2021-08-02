/// <reference types="cypress" />

class SearchPage {

    search(value)
    {
        const field=cy.get('[name=search]')
        field.clear
        field.type(value)
        field.type('{enter}')
        return this
    }

    selectSortBy(value)
    {
        cy.get('[id=input-sort]').select(value)
    }

    selectDisplayNr(value)
    {
        cy.get('[id=input-limit]').select(value)
    }

}

export default SearchPage