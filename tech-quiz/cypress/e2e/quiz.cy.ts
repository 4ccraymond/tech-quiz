// MOCK QUIZ LOGIC:

// describe('Tech Quiz - E2E', () => {
//     beforeEach(() => {
        
//       cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions');
  
//       cy.visit('/');
  
//       cy.contains('Start Quiz').should('exist').and('be.visible');
//     });
  
//     it('lets the user complete the quiz and see the score', () => {
//       cy.contains('Start Quiz').click();
//       cy.wait('@getQuestions');
  
//       // Click correct answers
//       cy.contains('8').should('be.visible').click();
//       cy.contains('Mars').should('be.visible').click();
  
//       // Check score and reset
//       cy.contains('Quiz Completed').should('be.visible');
//       cy.contains('Your score: 2/2').should('be.visible');
//       cy.contains('Take New Quiz').should('be.visible');
  
//       // Restart flow
//       cy.contains('Take New Quiz').click();
//       cy.contains('What is the output of print(2 ** 3)?').should('be.visible');
//     });
//   });
  

describe('Tech Quiz - E2E (Real Questions, Strategy Paths)', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/questions/random').as('getQuestions');
  });

  function simulateQuizWithStrategy(strategy: (index: number) => number) {
    cy.visit('/');
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');

    for (let i = 0; i < 10; i++) {
      cy.get('h2').should('exist');
      cy.get('button').eq(strategy(i)).click();
    }

    cy.contains('Quiz Completed').should('be.visible');
    cy.contains(/Your score: \d+\/10/).should('be.visible');
    cy.contains('Take New Quiz').click();
  }

  it('Path A: Always first answer', () => {
    simulateQuizWithStrategy(() => 0);
  });

  it('Path B: Alternate answers', () => {
    simulateQuizWithStrategy((i) => i % 2);
  });

  it('Path C: Random answer each time', () => {
    simulateQuizWithStrategy(() => Math.floor(Math.random() * 4));
  });
});
