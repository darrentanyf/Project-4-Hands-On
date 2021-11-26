//! Loggin in and Out (Version 1)
// describe('Website Test', () => {
//     it('Login In and Log out V1', () => {
//       cy.visit('/login')
//       cy.get('#username').type('test')
//       cy.get('#password').type('test')
//       cy.get('button').click()
//       cy.wait(4000)
//       cy.get('#logout').click()
//     })
//   })

////////////////////////////////////////////////////////////////////
//! Loggin in and Out (Version 2)
//   describe('Website Test', () => {
//     it('Login In and Log out V2', () => {
//       cy.visit('/login')
//       cy.get('[placeholder="Enter Username"]').type('test')
//       cy.get('[placeholder="Enter Password"]').type('test')
//       cy.contains('button','Submit').click()
//       cy.wait(4000).contains('a','Logout').click()
//     })
//   })

////////////////////////////////////////////////////////////////////
//! Using external function to login and check that token exists
// describe("Website Test", () => {
//   it("Login In (Custom Commands) + jwtToken", () => {
//     cy.logIn("test", "test");
//     cy.wait(3000);
//     cy.window().its("localStorage.token").should("exist");
// });
// });

////////////////////////////////////////////////////////////////////
//! Code for logging out and checking that token doesnt exist
// cy.get("#logout").click();
// cy.window().its("localStorage.token").should("be.undefined");