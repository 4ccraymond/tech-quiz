import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz';
import * as api from '../../client/src/services/questionApi';

describe('Quiz Component', () => {
  beforeEach(() => {
    cy.fixture('questions.json').then((mockQuestions) => {
      cy.stub(api, 'getQuestions').resolves(mockQuestions);
    });
  });

  it('starts quiz and shows first question', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.contains('What is the output of print(2 ** 3)?').should('be.visible');
  });
});
