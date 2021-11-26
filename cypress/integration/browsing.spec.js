////////////////////////////////////////////////////////////////////
//! Logged In -> Browsing -> Can Review
describe('Website Test', () => {
    it('LoggedIn: Browsing, Can Review', () => {
      cy.visit('/')
      cy.wait(2000)
      cy.logIn('test', 'test')
      cy.wait(3000)
      cy.userToken("exist")
      cy.get('#cardButton0').click()
      cy.get('button').should('have.text','Click here if you want to make changes to your guide')
      cy.visit('/')
      cy.get('#cardButton4').click()
      cy.visit('/')
    })
  })

  ////////////////////////////////////////////////////////////////////
//! Input for userToken Function 
//? Checks if token exists
// "exist"
//? Checks if token is undefined
// "be.undefined"

////////////////////////////////////////////////////////////////////
//! Not Logged In -> Browsing -> Cannot Review
  // describe('Website Test', () => {
  //   it('Not LoggedIn: Browsing, Cannot Review', () => {
  //     cy.visit('/')
  //     cy.wait(2000)
  //     cy.userToken("be.undefined")
  //     cy.wait(3000)
  //     cy.get('#cardButton0').click()
  //     cy.get('#feedbackTitle').should('have.text','Need to be logged in to give feedback')
  //     cy.visit('/')
  //     cy.get('#cardButton4').click()
  //     cy.visit('/')
  //   })
  // })