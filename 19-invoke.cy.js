it.only('warp command',()=>{
    const x={
        name:'Mariam',
        last:'Thabet',
        isQC: true,
        iswatching: function(){
           return 'Hello ' + this.name
        }
    }
    //cy.visit('https://example.cypress.io/commands/assertions')
    cy.visit('https://example.cypress.io/commands/actions')
    cy.wrap(x).invoke('iswatching').should('contain','Mariam')
})