//!Sign Up Form Test 
describe('Website Test', () => {
    it('Sign up', () => {
      cy.visit('/signup')

    //Username Used
      cy.get('#username').type('test')
      cy.get('#email').type('test@gmail.com')
      cy.get('#password').type('test')
      cy.get('button').click()
      cy.wait(2500)

      //Email Wrong Format
      cy.get('#username').clear().type('hohohoho5')
      cy.get('#email').clear().type('testgmail.com')
      cy.get('button').click()
      cy.wait(2500)

      //Email Used 
      cy.get('#email').clear().type('test@gmail.com')
      cy.get('button').click()
      cy.wait(2500)

      //New Sign Up
      cy.get('#email').clear().type('hohohoho5@gmail.com')
      cy.get('button').click()
      cy.wait(2500)
    })
  })

