import LoginPage from "../PageObjects/LoginPage";
import HomePage from "../PageObjects/HomePage";

describe("Login Page Tests", () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  beforeEach(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
    cy.visit(Cypress.env("baseUrl"));
  });

  it("Verify login scenario", function () {
    loginPage.fillUserName(this.data.username);
    loginPage.fillPassword(this.data.password);
    loginPage.clickOnLoginBtn();
    loginPage.verifyIfLoggedIn();
  });

  afterEach(function () {
    homePage.logout();
  });
});
