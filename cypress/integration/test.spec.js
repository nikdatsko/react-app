describe("App", () => {
  it("Visits the app", () => {
    cy.visit("/");
  });

  it("Accepts input", () => {
    const search = "a";
    cy
      .get(".form-control")
      .type(search)
      .should("have.value", search);
  });

  it("Shows correct movies count", () => {
    cy.get('[type="submit"]').click();
    cy.get("#root").should("contain", "2 movies found");
  });
});
