// import the necessary page objects
import LoginPage from "../PageObjects/LoginPage";
import HomePage from "../PageObjects/HomePage";

describe("Home page tets", () => {
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
  it("Verify if the products are visible", function () {
    loginPage.logInToSwagLabs(this.data.username, this.data.password);
    homePage.elements.productsText().should("have.text", "Products");
  });

  afterEach(() => {
    homePage.logout();
  });
});
