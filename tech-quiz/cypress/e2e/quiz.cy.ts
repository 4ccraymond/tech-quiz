describe('Tech Quiz - E2E', () => {
    beforeEach(() => {
        
      cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions');
  
      cy.visit('/');
  
      cy.contains('Start Quiz').should('exist').and('be.visible');
    });
  
    it('lets the user complete the quiz and see the score', () => {
      cy.contains('Start Quiz').click();
      cy.wait('@getQuestions');
  
      // Click correct answers
      cy.contains('8').should('be.visible').click();
      cy.contains('Mars').should('be.visible').click();
  
      // Check score and reset
      cy.contains('Quiz Completed').should('be.visible');
      cy.contains('Your score: 2/2').should('be.visible');
      cy.contains('Take New Quiz').should('be.visible');
  
      // Restart flow
      cy.contains('Take New Quiz').click();
      cy.contains('What is the output of print(2 ** 3)?').should('be.visible');
    });
  });
  