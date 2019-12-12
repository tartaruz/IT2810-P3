describe('Testing tabs ==> Most popular', function() {
    it('Get to "Most Popular"', function() {
        cy.visit("http://localhost:8080/")
       
    })
    it('Test by checking if banner with "The most popular movies" exist hence it the only page having it', function(){
        cy.get('#showFavourite > .MuiButton-label').click()
        cy.get('#topMovies').should("contain", "The most popular movies")
    })
    it('Check for the best movie of all times, "Night at the Museum: Battle of the Smithsonian"', function(){
        cy.get(':nth-child(2) > .MuiPaper-root > #panel1a-header').should('contain',"Night at the Museum: Battle of the Smithsonian")

    });
})

describe('Testing tabs ==> Advance View', function() {
    it('Get to "Advance view"', function() {
        cy.visit("http://localhost:8080/")
        cy.get('#advancedView').click()
        cy.get('svg').should('contain',"Comedy")
    }),
    it('"Advance view" contains one of the genres, as "Comedy"', function() {
        cy.visit("http://localhost:8080/")
        cy.get('#advancedView').click()
        cy.get('svg').should('contain',"Comedy")
    })
})
