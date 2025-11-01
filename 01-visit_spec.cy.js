describe('First test', () => {
  it('should visit the websit coorcthy', () => {
    cy.visit('/search',{
      qs:{
        "q":"cypress"
      }
    });
  })
})