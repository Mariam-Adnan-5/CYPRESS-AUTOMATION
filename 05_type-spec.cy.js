it('type command',()=>{
    cy.visit('http://uitestingplayground.com/textinput')
    // Find element by id 
    cy.get('#newButtonName').type('test input filed',{dely:5000})
    //cy.get('#updatingButton').should('have.text')
   // we can type on an element using the type command
   //we can type on a hidden element using force option
   //we can delay the type command per secounds
   //we can use some keyboard actions using type {enter}
})