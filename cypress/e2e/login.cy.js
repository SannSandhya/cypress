
beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
})

describe('Test for Login  ', () => {
    it.skip('TC-LOGIN-01:Test for valid username and valid password', () => {
        cy.get('#user-name').type('standard_user').should('have.value', 'standard_user')
        cy.get('#password').type('secret_sauce').should('have.value', 'secret_sauce')
        cy.get('#login-button').should('be.visible').and('be.enabled').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        
    })
    it.skip('TC-LOGIN-02: Test for valid username and invalid password', () => {
        cy.get('#user-name').type('standard_user').should('have.value', 'standard_user')
        cy.get('#password').type('sandhya')
        cy.get('login-button').should('be.visible').click()
        cy.get('#login-button').should('be.visible').and('be.enabled').click()

    })

    it('TC-LOGIN-03:Test for login with  username only',()=>{
        cy.get('#user-name').type('standard_user').should('have.value','standard_user')
        cy.get('#password').should('have.value', '')
        cy.get('#login-button').should('be.visible').click()
        cy.get('[data-test="error"]').should('have.text','Epic sadface: Password is required')

    })
    it('TC-LOGIN-04: Test for Login with password only',() =>{
        cy.get('#user-name').should('have.value', '')
        cy.get('#password').type('secret_sauce').should('have.value', 'secret_sauce')
        cy.get('#login-button').should('be.visible').click()
        cy.get('[data-test="error"]').should('have.text','Epic sadface: Username is required')
        
       






    })

})