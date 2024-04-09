/// <reference types="Cypress" />

class LoginPage {
  fillUserName(username) {
    cy.get("#user-name").type(username);
  }

  fillPassword(password) {
    cy.get("#password").type(password);
  }

  clickOnLoginBtn() {
    cy.get("#login-button").click();
  }

  verifyIfLoggedIn() {
    cy.get(".product_label").should("have.text", "Products");
  }
}

export default LoginPage;
