
describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('/')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('user can navigate to different page', function() {
    cy.get('a[href*="pokemon/ivysaur"]').click()
    cy.contains('chlorophyll')
  })
})

