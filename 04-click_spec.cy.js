
it('click command',()=>{
    cy.visit('http://uitestingplayground.com/dynamicid')
    // Find element by class name
    cy.get('.btn-primary').click({multiple:true})
   // we can click on an element using the click command
   // we can only click on noe element
   // we can click on multiple elements if we add {multiple:true}
   // we can click on hidden or coverd element if we add {force:true}
})