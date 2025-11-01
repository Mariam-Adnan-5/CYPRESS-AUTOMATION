context('login functionality', () => {

before(() => {
cy.log('l am inside the before hook');
});
beforeEach(() => {
  cy.log('l am inside the before eachhook');
});
after( function()  {
  cy.log('l am inside the after hook');
});
afterEach( function() {
  cy.log('l am inside the after eachhook');
});

 it('should login with valid email and password correctly', () => {
    cy.log('should login with valid email and password correctly');
  });
  it('should not login if the user name is wrong',()=>{
  cy.log('l am inside test case');
});
 it('should be able to reset the password',()=>{
  cy.log('l am inside test case');
});
});
describe('order functionality', () => {
 it('should be able to order a new food',()=>{
  cy.log('l am inside test case');
});
});
