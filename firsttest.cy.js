context('login functionality', () => {

after( function()  {
  cy.log('l am inside the after hook');
});

 it('should login with valid email and password correctly', () => {
    cy.log('should login with valid email and password correctly');
  });
});

