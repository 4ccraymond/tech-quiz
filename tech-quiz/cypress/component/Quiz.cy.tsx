import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions');
  });

  it('starts quiz and shows first question', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').click();

    cy.wait('@getQuestions'); // wait for mocked API
    cy.contains('What is the output of print(2 ** 3)?').should('be.visible');
  });

  it('completes the quiz and shows the final score', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');
  
    cy.contains('8').click();

    cy.get('h2').should('not.contain.text', 'What is the output of print(2 ** 3)?');
    cy.get('h2').should('contain.text', 'Which planet is known as the Red Planet?');
    
    cy.contains('Mars').click();
  
    cy.contains('Quiz Completed').should('be.visible');
    cy.contains('Your score: 2/2').should('be.visible');
    cy.contains('Take New Quiz').should('be.visible');
  
    cy.contains('Take New Quiz').click();
    cy.contains('What is the output of print(2 ** 3)?').should('be.visible');
  });  
});



