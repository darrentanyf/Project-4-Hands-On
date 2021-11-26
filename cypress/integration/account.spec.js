//! Logged In -> My Account -> Update Profile Picture
describe('Website Test', () => {
    it('LoggedIn: My Account, Update Profile Picture', () => {
      cy.visit('/')
      cy.wait(2000)
      cy.logIn('test', 'test')
      cy.wait(3000)
      cy.userToken("exist")
      cy.get('#account').click()

      const fileName = "Thinking.gif"
      cy.fixture(fileName).then(fileContent =>{
          cy.get('[type="file"').attachFile({ fileContent, fileName, mineType: 'image/gif'})
      })
      cy.get('#guideImage').trigger('onChange')
    })
  })

// Do note that .attachFile function is only available through cypress image upload. 
// You need to install that aside from cypress. (https://www.npmjs.com/package/cypress-file-upload)