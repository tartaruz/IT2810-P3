describe('Find a movie [Alien] (Only text search)', function() {
    it('Visit site', function() {
      cy.visit('http://localhost:8080')
    }),
    it('No movie found before search', function() {
        cy.visit('http://localhost:8080')
        cy.get(":nth-child(2) > .MuiPaper-root > #panel1a-header > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root")
        .should("not.exist")
      }),
    it('Search for a movie and find it', function() {
        //Type and search
        cy.get('#searchInput').type("alien")

        //Title of the Alien movie should not exist
        cy.get(":nth-child(2) > .MuiPaper-root > #panel1a-header > .MuiExpansionPanelSummary-content > .MuiTypography-root")
        .should("not.exist")

        //Press the search button
        cy.get("#searchBtn").click()

        // Now the title of Alien should exist
        cy.get(":nth-child(2) > .MuiPaper-root > #panel1a-header > .MuiExpansionPanelSummary-content > .MuiTypography-root")
        .should("exist")

      })
      it('Find no more information of Alien', function() {
        // No information found 
        cy.get(":nth-child(2) > .MuiPaper-root > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiExpansionPanelDetails-root > .MuiTypography-root > :nth-child(4)")
        .should('not.contain',"Ellen Ripley is rescued by a deep salvage team after being in hypersleep for 57 years. The moon that the Nostromo visited has been colonized, but contact is lost. This time, colonial marines have impressive firepower, but will that be enough?")
      })
       it('Find more information about Alien', function() {
         // Click the expand button on the movie for more information
         cy.get(":nth-child(2) > .MuiPaper-root > #panel1a-header > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root")
         .click()
        
         cy.get(":nth-child(2) > .MuiPaper-root > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiExpansionPanelDetails-root > .MuiTypography-root")
        .should('exist')
      })
    
    
  })
  

  describe('Find a movie of the genre "Film-Noir" (Only genre)', function() {
    it('Visit site', function() {
      cy.visit('http://localhost:8080')
    }),
    
    it('Find all genres', function() {
        //Find the genres
        cy.get('#searchInput').should("empty")

      }),

    it('Find a FIlm-noir movie', function() {
    
      //Dropdown the menu
      cy.get("#expanson-btn")
      .click()

      cy.get(":nth-child(24) > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-74")
      .click()  

      //Press the search button
      cy.get("#searchBtn").click()


    }),

    it('Find if first movie is of the genre "Film-noir"', function() {
        // Click the expand button on the movie for more information
        cy.get(":nth-child(2) > .MuiPaper-root > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiExpansionPanelDetails-root > .MuiTypography-root > :nth-child(2)")
        .should("contain", "Film-Noir")
    })
    
    
  })
  


  describe('Find a movie of the genre "Adventure Family Fantasy" with the title "Harry Potter" (Text search and genre)', function() {
    it('Visit site', function() {
      cy.visit('http://localhost:8080')
    }),
    
    it('Type "harry potter" into the search', function() {
        //Find the genres
        cy.get('#searchInput').type("harry potter")

      }),

    it('Select the genres "Adventure Family Fantasy"', function() {
    
      //Dropdown the menu
      cy.get("#expanson-btn")
      .click()

      cy.get(":nth-child(2) > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-74").click()
      cy.get(":nth-child(8) > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-74").click()
      cy.get(":nth-child(3) > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-74").click()


    }),

    it('Search', function() {
        //Press the search button
        cy.get("#searchBtn").click()
        
    }),

    it('Check if title is Harry potter', function() {
      //Press the search button
      cy.get("#searchBtn").click()


      cy.get(":nth-child(2) > .MuiPaper-root > #panel1a-header > .MuiExpansionPanelSummary-content > .MuiTypography-root")
      .should('contain',"Harry Potter")

  }),
      it('If contain Adventure', function() {
      //Press the search button
      cy.get(":nth-child(2) > .MuiPaper-root > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiExpansionPanelDetails-root > .MuiTypography-root > :nth-child(2)")
      .should('contain', "Adventure")
  }),
        it('If contain Fantasy', function() {
      //Press the search button
      cy.get(":nth-child(2) > .MuiPaper-root > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiExpansionPanelDetails-root > .MuiTypography-root > :nth-child(2)")
        .should('contain', "Fantasy")
    }),
      it('If contain Family', function() {
      //Press the search button
      cy.get(":nth-child(2) > .MuiPaper-root > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiExpansionPanelDetails-root > .MuiTypography-root > :nth-child(2)")
      .should('contain', "Family")
    })  


    
  })


  describe('Want to find see all movies', function() {
    it('Visit site', function() {
      cy.visit('http://localhost:8080')
    }),
    it('No input not genre spesificationes search',function(){
      cy.get("#searchInput").should('empty')
      cy.get("#expanson-btn").click()
      
      cy.get(':nth-child(1) > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-74')
      .should("empty")
      cy.get(':nth-child(8) > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-74')
      .should("empty")
      cy.get(':nth-child(8) > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-74')
      .should("empty")
      cy.get(':nth-child(22) > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-74')
      .should("empty")
      cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-74')
      .should("empty")
      cy.get(':nth-child(9) > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-74')
      .should("empty")
      cy.get(':nth-child(16) > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-74')
      .should("empty")
      cy.get(':nth-child(23) > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-74')
      .should("empty")
      cy.get(':nth-child(23) > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-74')
      .should("empty")
      cy.get(':nth-child(10) > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-74')
      .should("empty")
      cy.get(':nth-child(17) > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-74')
      .should("empty")
      cy.get(':nth-child(24) > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-74')
      .should("empty")
      cy.get(':nth-child(4) > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-74')
      .should("empty")
      cy.get(':nth-child(11) > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-74')
      .should("empty")
      cy.get(':nth-child(18) > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-74')
      .should("empty")
      cy.get(':nth-child(25) > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-74')
      .should("empty")
      cy.get(':nth-child(5) > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-74')
      .should("empty")
      cy.get(':nth-child(12) > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-74')
      .should("empty")
      cy.get(':nth-child(19) > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-74')
      .should("empty")
      cy.get(':nth-child(6) > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-74')
      .should("empty")
      cy.get(':nth-child(13) > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-74')
      .should("empty")
      cy.get(':nth-child(20) > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-74')
      .should("empty")
      cy.get(':nth-child(7) > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-74')
      .should("empty")
      cy.get(':nth-child(14) > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-74')
      .should("empty")
      cy.get(':nth-child(21) > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-74')
      

      cy.get('#searchBtn').click()


    })})