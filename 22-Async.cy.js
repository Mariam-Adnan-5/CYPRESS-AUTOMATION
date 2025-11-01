it.only('async command',()=>{
    let message='Hello'
    //cy.visit('https://example.cypress.io/commands/assertions')
     cy.visit('https://example.cypress.io/commands/actions')
     cy.get('h1').invoke('text').then(x=>{
        message=x
     }).then(() =>{
        cy.log(message)
     })
})