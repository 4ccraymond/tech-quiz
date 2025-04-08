// MOCK QUIZ LOGIC:

// import React from 'react';
// import { mount } from 'cypress/react';
// import Quiz from '../../client/src/components/Quiz';

// describe('Quiz Component', () => {
//   beforeEach(() => {
//     // Intercept to run mock quiz before mounting:
//     cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions');
//   });

//   it('completes the quiz and shows the final score', () => {
//     // NOW mount the component after intercept is in place
//     mount(<Quiz />);
    
//     cy.contains('Start Quiz').click();
//     cy.wait('@getQuestions');

//     cy.contains('8').click();
//     cy.contains('Which planet is known as the Red Planet?').should('be.visible');
//     cy.contains('Mars').click();

//     cy.contains('Quiz Completed').should('be.visible');
//     cy.contains('Your score: 2/2').should('be.visible');
//     cy.contains('Take New Quiz').should('be.visible');

//     cy.contains('Take New Quiz').click();
//     cy.contains('What is the output of print(2 ** 3)?').should('be.visible');
//   });
// });


import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/questions/random').as('getQuestions');
  });

  it('completes the quiz and shows the final score', () => {
    mount(<Quiz />);

    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');

    for (let i = 0; i < 10; i++) {
      cy.get('h2').should('exist');
      cy.get('button').eq(i % 4).click(); // cycle through answers
    }

    cy.contains('Quiz Completed').should('be.visible');
    cy.contains(/Your score: \d+\/10/).should('be.visible');
    cy.contains('Take New Quiz').should('be.visible');
  });
});
