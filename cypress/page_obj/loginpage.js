 class Loginpage {
     usernameInput()
     { 
        return cy.get('#username')
    }
     passwordInput()
     { 
        return cy.get('#password')
    }
      loginbutton()
      { 
        return cy.get('#login-button')
    }
      login(username,password){
      login.usernameInput().type(username)
      login.passwordInput().type(password)
      login.loginbutton().click()
      }

 }
 export default Loginpage