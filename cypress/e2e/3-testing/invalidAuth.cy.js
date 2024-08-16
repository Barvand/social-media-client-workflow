describe("User is not able to log in due to incorrect credentials", () => {
  beforeEach(() => {
    cy.visitHome();
  });

  it("Opens the register form", () => {
    cy.get("#registerForm").should("be.visible");
  });

  it("Opens the login form and enters incorrect details", () => {
    cy.showLoginForm();
    cy.loginWithInvalidUser();
    cy.log("Entered incorrect login credentials");
  });
});
