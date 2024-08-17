describe("User should be able to log in with the correct credentials", () => {
  beforeEach(() => {
    cy.visitHome();
  });

  it("shows the register form and allows the user to open the login form", () => {
    // Check that the register form is visible
    cy.get("#registerForm").should("be.visible");

    // Show the login form
    cy.showLoginForm();
  });

  it("allows the user to log in with valid credentials", () => {
    // Show the login form
    cy.showLoginForm();

    // Log in with valid credentials
    cy.loginWithTestUser();

    // Check that the user is logged in
    cy.isLoggedIn();
  });
});
