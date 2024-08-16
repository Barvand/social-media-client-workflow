describe("Authentication", () => {
  beforeEach(() => {
    cy.visitHome();
  });

  it("shows a register form", () => {
    cy.get("#registerForm").should("be.visible");
  });

  it("display login from when login button is pressed", () => {
    cy.showLoginForm();
  });

  it("able to log in with test user", () => {
    cy.showLoginForm();

    cy.loginWithTestUser();

    cy.isLoggedIn();
  });
});
