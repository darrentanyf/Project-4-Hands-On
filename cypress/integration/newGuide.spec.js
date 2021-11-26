//!Logged in -> Input New Guide
describe('Website Test', () => {
    it('LoggedIn: Input New Guide', () => {
      cy.visit('/')
      cy.wait(2000)
      cy.logIn('test', 'test')
      cy.wait(3000)
      cy.userToken("exist")
      cy.get('#newGuide').click()
      cy.get('#guideTitle').type('How does cypress work?')
      cy.get('#guideDescription').type('Cypress is lets you run from end to end by writing some code and it magically works')
      cy.get('#guideDifficulty').select(5)
      cy.get('#guideTimeTaken').select(10)
      cy.get('#guideToolsRequired').type('A Computer')
      cy.get('#guidePartsRequired').type('Your Brain')
      cy.get('#title1').type('Install Cypress')
      cy.get('#description1').type('Run code: npm i cypress')
      cy.get('#title2').type('Read up Cypress Documentation')
      cy.get('#description2').type('Here is the link to the introduction (https://docs.cypress.io/guides/core-concepts/introduction-to-cypress)')
      cy.get('#add').click()
      cy.get('#title3').type('Type in Code')
      cy.get('#description3').type('Type in console.log("cypress") and everything magically works')

    })
  })