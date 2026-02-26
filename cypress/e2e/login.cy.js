
beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
})

describe('Test for Login  ', () => {
    it('TC-LOGIN-01:Test for valid username and valid password', () => {
        cy.get('#user-name').type('standard_user').should('have.value', 'standard_user')
        cy.get('#password').type('secret_sauce').should('have.value', 'secret_sauce')
        cy.get('#login-button').should('be.visible').and('be.enabled').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        
    })
    it('TC-LOGIN-02: Test for valid username and invalid password', () => {
        cy.get('#user-name').type('standard_user').should('have.value', 'standard_user')
        cy.get('#password').type('')
        cy.get('login-button').should('be.visible').click()
        cy.get('#login-button').should('be.visible').and('be.enabled').click()
        
    })




})