describe('Tech Quiz - E2E', () => {
    beforeEach(() => {
      // Intercept the real API call and mock it with fixture data
      cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions');
      
      // Visit the running app
      cy.visit('/');
  
      // Ensure the app is hydrated before clicking
      cy.contains('Start Quiz').should('exist').and('be.visible');
      cy.wait(100); // Helps avoid race conditions with event binding
    });
  
    it('lets the user complete the quiz and see the score', () => {
      // Start the quiz
      cy.contains('Start Quiz').click();
      cy.wait('@getQuestions');
  
      // First question: correct answer is "8"
      cy.contains('8').should('be.visible').click();
  
      // Wait for the next question to appear
      cy.contains('Which planet is known as the Red Planet?').should('be.visible');
      cy.contains('Mars').click();
  
      // Final result
      cy.contains('Quiz Completed').should('be.visible');
        cy.contains('Your score: 2/2').should('be.visible');
        cy.contains('Take New Quiz').should('be.visible');
    });
});
  