describe("User should be able to log in with the correct credentials", () => {
  beforeEach(() => {
    cy.visitHome();
  });

  it("shows the register form and allows the user to open the login form", () => {
    cy.get("#registerForm").should("be.visible");

    cy.showLoginForm();
  });

  it("allows the user to log in with valid credentials", () => {
    cy.showLoginForm();

    cy.loginWithTestUser();

    cy.isLoggedIn();

    cy.log("logged in");
  });
});
