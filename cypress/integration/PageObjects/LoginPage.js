/// <reference types="Cypress" />

class LoginPage {
  // define elements to interact with
  elements = {
    usernameField: () => cy.get("#user-name"),
    passwordField: () => cy.get("#password"),
    loginBtn: () => cy.get("#login-button"),
  };

  // defining actions to be performed
  logInToSwagLabs(username, password) {
    this.elements.usernameField().type(username);
    this.elements.passwordField().type(password);
    this.elements.loginBtn().click();
  }
}

export default LoginPage;
