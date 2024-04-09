class HomePage {
  logout() {
    cy.get(".bm-burger-button button").click();
    cy.get("#logout_sidebar_link").click();
    cy.get("#login_credentials h4").should("be.visible");
  }
}
export default HomePage;
