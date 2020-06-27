/* eslint-disable no-undef */
describe('Index', () => {
  before(() => {
    cy.visit('http://localhost:3000')
  })
  it('should render header with welcome message', () => {
    cy.contains('h1', 'Welcome to Next.js!')
  })
})
