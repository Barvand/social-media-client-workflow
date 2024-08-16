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

    // Assert that the error message is displayed
    cy.get("#errorMessage")
      .should("be.visible")
      .and("contain.text", "Email or password is incorrect");

    // Assert that the user is not logged in
    cy.isLoggedIn(false);
  });
});
