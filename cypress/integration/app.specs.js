describe("Cypress", () => {
  it("is working", () => {
    expect(true).to.equal(true);
  });

  it("Usuário navega pela lista de episódios", () => {
    cy.visit("http://localhost:3000");

    cy.get("[data-cy=goToEpisodesList]").click();

    cy.get("[data-cy=page-2]").click();

    cy.get("[data-cy=page-3]").click();

    cy.get("[data-cy=page-1]").click();
  });

  it("Usuário favorita e marca episódios como visto", () => {
    cy.get("button[data-cy=seen-8]").click();
    cy.get("button[data-cy=liked-9]").click();
    cy.get("button[data-cy=seen-3]").click();
    cy.get("button[data-cy=liked-3]").click();
    cy.get("button[data-cy=seen-6]").click();
    cy.get("button[data-cy=liked-7]").click();
    cy.get("button[data-cy=seen-1]").click();
    cy.get("button[data-cy=liked-1]").click();
    cy.get("button[data-cy=seen-2]").click();
    cy.get("button[data-cy=liked-5]").click();
  });

  it("Usuário filtra por episódios favoritados", () => {
    cy.get("button[data-cy=filter-liked]").click();
  });

  it("Usuário filtra por episódios vistos", () => {
    cy.get("button[data-cy=filter-seen]").click();
  });

  it("Usuário retira marcação de visto e favoritado", () => {
    cy.get("button[data-cy=liked-3]").click();
    cy.get("button[data-cy=seen-3]").click();
  });

  it("Usuário pesquisa episódio por nome e acessa página detalhada do episódio", () => {
    cy.get("button[data-cy=filter-all]").click();
    cy.get("input[data-cy=search-episode]").type("Vindicators 3");

    cy.get("[data-cy=link-episode]").click();

    cy.url().should("include", "/episode/25");
  });

  it("Usuário retorna para a página inicial e a página scrolla para a lista de episódios", () => {
    cy.get("[data-cy=back-home]").click();

    cy.url().should("include", "/#episodes-list");
  });
});
