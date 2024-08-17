describe("User should be able to log in with the correct credentials", () => {
  beforeEach(() => {
    cy.visitHome();
  });

  it("shows a register form", () => {
    cy.get("#registerForm").should("be.visible");
  });

  it("display login from when login button is pressed", () => {
    cy.showLoginForm();
  });

  it("able to log in with test user and able to log back out", () => {
    cy.showLoginForm();

    cy.loginWithTestUser();

    cy.isLoggedIn();

    cy.logout();

    cy.isLoggedOut();

    cy.log("logged out");
  });
});
