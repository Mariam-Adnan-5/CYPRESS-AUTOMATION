//we use get command to find an element/s
it('Find element by tag name',() => {
cy.visit('https://www.testiny.io/?rdt_cid=5300003507838026980&utm_campaign=reddit_automation&utm_medium=display&utm_source=reddit');
//we put the tag name inside the get command(html tag)
cy.get('button')
})

it('Find element by id',() => {
cy.visit('https://www.testiny.io/?rdt_cid=5300003507838026980&utm_campaign=reddit_automation&utm_medium=display&utm_source=reddit');
//we put the tag name inside the get command(html tag)
cy.get('#sidebar')
})
it('Find element by class name',() => {
cy.visit('https://www.testiny.io/?rdt_cid=5300003507838026980&utm_campaign=reddit_automation&utm_medium=display&utm_source=reddit');
//we put the tag name inside the get command(html tag)
cy.get('.p-0')
})
it('Find element by attribute',() => {
cy.visit('https://www.testiny.io/?rdt_cid=5300003507838026980&utm_campaign=reddit_automation&utm_medium=display&utm_source=reddit');
//we put the tag name inside the get command(html tag)
cy.get('[id="main-pane"]')
})
it('Find the first element from the list of elements ',() => {
cy.visit('https://www.testiny.io/?rdt_cid=5300003507838026980&utm_campaign=reddit_automation&utm_medium=display&utm_source=reddit');
//we put the tag name inside the get command(html tag)
cy.get('h2').first()
})
it('Find the last element from the list of elements ',() => {
cy.visit('https://www.testiny.io/?rdt_cid=5300003507838026980&utm_campaign=reddit_automation&utm_medium=display&utm_source=reddit');
//we put the tag name inside the get command(html tag)
cy.get('h2').last()
})
it('Find an element from a list of elements by index ',() => {
cy.visit('https://www.testiny.io/?rdt_cid=5300003507838026980&utm_campaign=reddit_automation&utm_medium=display&utm_source=reddit');
//we put the tag name inside the get command(html tag)
//elements are saved in an array (start with 0 index) and use eq(index) command
cy.get('h2').eq(1)
})
it('Find an element from a list of elements using filter ',() => {
cy.visit('https://www.testiny.io/?rdt_cid=5300003507838026980&utm_campaign=reddit_automation&utm_medium=display&utm_source=reddit');
//we put the tag name inside the get command(html tag)
//to filter some elements from a list of elements use filter()command
//use css selector . inside the filter command
cy.get('li').filter()
})
//no different between .children(css selector)command & .find(css selector)command to find element using parent
it('Find an element from a list of elements using filter ',() => {
cy.visit('https://www.testiny.io/?rdt_cid=5300003507838026980&utm_campaign=reddit_automation&utm_medium=display&utm_source=reddit');
cy.get('ul.mt-6.space-y-2').children()
})

it('Find an element from a list of elements using filter ',() => {
cy.visit('https://www.testiny.io/?rdt_cid=5300003507838026980&utm_campaign=reddit_automation&utm_medium=display&utm_source=reddit');
//.parent()command to find element using children 
cy.get('li').parent()
})
it('Find an element from a list of elements using siblings command ',() => {
cy.visit('https://www.testiny.io/?rdt_cid=5300003507838026980&utm_campaign=reddit_automation&utm_medium=display&utm_source=reddit');
//siblings command will return the all siblings(brother) command
cy.get('ul.mt-6.space-y-2').siblings()
})
it.only('Find an element by text  ',() => {
cy.visit('https://www.testiny.io/?rdt_cid=5300003507838026980&utm_campaign=reddit_automation&utm_medium=display&utm_source=reddit');
//to find any element using text we can use the contains command .contains(text)
cy.contains('Testiny')
})