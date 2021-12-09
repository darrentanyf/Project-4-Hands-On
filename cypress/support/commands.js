import 'cypress-file-upload';
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//

////////////////////////////////////////////////////////////////////
//! Login Function
Cypress.Commands.add('logIn', (email, password) => {
    cy.visit('/login')
    cy.get('#username').type(email)
    cy.get('#password').type(password)
    cy.get('button').click()
  })

////////////////////////////////////////////////////////////////////
//! Sign Up Function
  Cypress.Commands.add('signUp', (username, email, password) => {
      cy.visit('/signup')
      cy.get('#username').type(username)
      cy.get('#email').type(email)
      cy.get('#password').type(password)
      cy.get('button').click()
      cy.wait(2500)

  })

  ////////////////////////////////////////////////////////////////////
//! Check Token Function
  Cypress.Commands.add('userToken', (status) => {
    cy.window().its("localStorage.token").should(status);
  })

  