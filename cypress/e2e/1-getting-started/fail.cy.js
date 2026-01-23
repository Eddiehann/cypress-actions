describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo')
    })

    it('displays two todo items by default', () => {
        // Should fail
        cy.get('.todo-list li').should('have.length', 10)
    })
})