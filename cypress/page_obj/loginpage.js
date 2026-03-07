 class Login {
     usernameInput()
     { return cy.get('#username')}
     passwordInput()
     { return cy.get('#password')}
      loginbutton()
      { return cy.get('#login-button')}

      login(username,password){
      this.usernameInput().type(username)
      this.passwordInput().type(password)
      this.loginbutton().click()
      }

 }