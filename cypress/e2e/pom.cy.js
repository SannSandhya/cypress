import Loginpage from '../page_obj/loginpage'
import ProductVisibility from '../page_obj/product'


describe('Login test using POM', () => {
    const loginpage = new Loginpage()

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        })
       
    it('TC-LOGIN-01:Test for valid username and valid password', () => {
        cy.get('#user-name').type('standard_user').should('have.value', 'standard_user')
        cy.get('#password').type('secret_sauce').should('have.value', 'secret_sauce')
        cy.get('#login-button').click()

    })
    it('TC-LOGIN-02:Test for login with valid username and invalid password', () => {
        cy.get('#user-name').type('standard_user').should('have.value', 'standard_user')
        cy.get('#password').type('secret').should('have.value', 'secret')
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })

    it('TC-LOGIN-03: Test for login with username only ', () => {
        cy.get('#user-name').type('standard_user').should('have.value', 'standard_user')
        cy.get('#password').should('have.value', '')
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Password is required')
    })

    it('TC-LOGIN-04: Test for Login with password only', () => {
        cy.get('#user-name').should('have.value', '')
        cy.get('#password').type('secret_sauce').should('have.value', 'secret_sauce')
        cy.get('#login-button').should('be.visible').click()
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required')
    })

    it('TC-LOGIN-05: Test for Login with empty username and password', () => {
        cy.get('#user-name').should('have.value', '')
        cy.get('#password').should('have.value', '')
        cy.get('#login-button').should('be.visible').click()
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required')
    })

    it('TC-LOGIN-06: Test for login with invalid username and invalid password', () => {
        cy.get('#user-name').type('sandhyaaa')
        cy.get('#password').type('sandhya')
        cy.get('#login-button').should('be.visible').click()
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })

    it('TC-LOGIN-07: Test for  invalid username and valid password', () => {
        cy.get('#user-name').type('sandhyaaa')
        cy.get('#password').type('secret_sauce').should('have.value', 'secret_sauce')
        cy.get('#login-button').should('be.visible').click()
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })

    it('TC-LOGIN-08: Test for login works  and redirect to next page', () => {
        cy.get('#user-name').type('standard_user').should('have.value', 'standard_user')
        cy.get('#password').type('secret_sauce').should('have.value', 'secret_sauce')
        cy.get('#login-button').should('be.visible').and('be.enabled').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })

    it('TC-LOGIN-09: Test for pop up message appears after clicking  login ', () => {
        cy.get('#user-name').type('standard_user').should('have.value', 'standard_user')
        cy.get('#password').type('secret_sauce').should('have.value', 'secret_sauce')
        cy.get('#login-button').should('be.visible').and('be.enabled').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })

    it('TC-LOGIN-10: Test for  error  message for invalid username', () => {
        cy.get('#user-name').type('standard_user').should('have.value', 'standard_user')
        cy.get('#password').type('secret_sauce').should('have.value', 'secret_sauce')
        cy.get('#login-button').should('be.visible').and('be.enabled').click()
    })
})
 
   
 


describe('Test for all product visibility using POM', () => {
    const productVisiblity = new ProductVisibility()
   

    beforeEach(() => {

        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user').should('have.value', 'standard_user')
        cy.get('#password').type('secret_sauce').should('have.value', 'secret_sauce')
        cy.get('#login-button').click()
         })

        it('TC-PRODUCT-01: Test for Visibility of products ', () => {
            cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
            cy.get('[data-test="inventory-container"]').should('be.visible')
        })

        it('TC-PRODUCT-02:Test for visibility of list of all products', () => {
            cy.get('.inventory_item').should('be.visible').should('have.length', 6)
        })

        it('TC-PRODUCT-03:Test for description of product is shown at the inventory item  ', () => {
            cy.get('[data-test="inventory-item-name"]').should('be.visible')
        })
        it('TC-PRODUCT-04: Test for change of color when it is hoover to product name',()=>{
            cy.get('[data-test="inventory-item-desc"]').should('be.visible')

        })
        it('TC-PRODUCT-05: Test for price of the product is visible in the description item',()=>{
            cy.get('[data-test="inventory-item-price"]').should('be.visible')

        })
    })

