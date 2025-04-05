# Tech Quiz Application

This is a full-stack tech quiz app built with the MERN stack. Users can test their knowledge by answering a series of multiple-choice questions and viewing their final score. The app features Cypress tests for both component and end-to-end functionality to ensure reliability and a smooth user experience.

---

## Features

- Start a quiz with 10 random tech questions
- Answer questions one at a time
- View final score at the end
- Option to retake the quiz
- Component and E2E testing using Cypress

---

## Testing with Cypress

This project uses Cypress for both **component testing** and **end-to-end (E2E) testing**.

### Component Test

Tests the `<Quiz />` component in isolation to verify:
- It loads with a Start button
- Clicking "Start Quiz" shows the first question
- Answering all questions displays the score and allows a restart

Located at:
```
cypress/component/Quiz.cy.tsx
```

---

### End-to-End Test

Simulates a full user experience by:
- Visiting the app
- Starting a quiz
- Answering questions from fixture data
- Verifying score and reset flow

Located at:
```
cypress/e2e/quiz.cy.ts
```

---

## Folder Structure

```
tech-quiz/
├── client/                 # React frontend
├── server/                 # Express backend
├── cypress/
│   ├── component/          # Component tests
│   │   └── Quiz.cy.tsx
│   ├── e2e/                # End-to-end tests
│   │   └── quiz.cy.ts
│   └── fixtures/
│       └── questions.json  # Mock quiz data
├── cypress.config.ts       # Cypress config
├── package.json
└── README.md
```

---

## Installation

1. Clone the repository  
2. Install dependencies in the root, `client`, and `server`:
   ```bash
   npm install
   cd client && npm install
   cd ../server && npm install
   ```

3. Rename `.env.example` to `.env` and add your environment variables

---

## Run the App and Tests

### Start the full application:
```bash
npm run start:dev
```

### Open Cypress interactive test runner:
```bash
npx cypress open
```

Then choose:
- **Component Testing** → run `Quiz.cy.tsx`
- **End-to-End Testing** → run `quiz.cy.ts`

### Or run all tests headlessly:
```bash
npm run test
```

---

## Walkthrough Video



---

## Technologies

- React (Vite)
- TypeScript
- Express
- MongoDB
- Cypress
- Bootstrap

---

## Acknowledgements

Special thanks to:

- The instructional team for guidance and support throughout the project
- Cypress documentation and community examples
- Classmates and project reviewers for feedback and collaboration
- ChatGPT and CoPilot for assistance in bug fixes and clarification on concepts

