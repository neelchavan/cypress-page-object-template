// import the necessary page objects
import LoginPage from "../PageObjects/LoginPage";
import HomePage from "../PageObjects/HomePage";

describe("Login Page Tests", () => {
  // Create instances of LoginPage and HomePage classes.
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  beforeEach(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
    cy.visit(Cypress.env("baseUrl"));
  });

  // using actions defined in the page objects in the test
  it("Verify login scenario", function () {
    loginPage.logInToSwagLabs(this.data.username, this.data.password);
    homePage.verifyIfLoggedIn();
  });

  afterEach(function () {
    homePage.logout();
  });
});
