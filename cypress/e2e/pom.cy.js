import loginpage from '../page_obj/loginpage'
 describe('Login test using POM', () => {
        const loginpage = new Loginpage()

    })
    it('TC-LOGIN-01:Test for valid username and valid password', () => {
        cy.get('#user-name').type('standard_user').should('have.value', 'standard_user')
        cy.get('#password').type('secret_sauce').should('have.value', 'secret_sauce')
        cy.get('#login-button').click()

    })
    it('TC-LOGIN-02:Test login with valid username and invalid password', () => {
        cy.get('#user-name').type('standard_user').should('have.value', 'standard_user')
        cy.get('#password').type('secret_sauce').should('have.value', 'secret')
        cy.get('#login-button').click()

    })

