describe('Bucket2Project', function() {
  it('runs these tests', function() {
    expect(true).to.equal(true)
    cy.visit("http://toomanywords.surge.sh/#/");
    cy.get('h1').should('contain', 'Welcome')
    cy.get('a').contains('Go!').click()
    cy.url().should('contain', '/home')
    cy.get('select').select('Japanese').contains('Czech')
    cy.get('input', function(){
      cy.contains('translateInput').end()
      cy.contains('translateButton').end()
      cy.contains('defineTextArea').end()
      cy.contains('button').end()
    })
    cy.get('button').should('contain', 'About').click()
  })
})
