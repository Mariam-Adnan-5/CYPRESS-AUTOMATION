['iphone-3','ipad-2','macbook-16'].forEach((viewport) => {
    it('should be able to open in different views',() =>{
    
    cy.viewport(viewport);
    cy.visit('https://google.com');
})
}
);


