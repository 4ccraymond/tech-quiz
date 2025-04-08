# Tech Quiz

A full-stack web application that delivers randomized technical questions to test user knowledge. Built using the MERN stack and tested using Cypress for both component and end-to-end functionality.

---

## Live Demo
This project is run locally. Use the instructions below to set up and run it.

---

## Walkthrough Video
**[Click here to watch the walkthrough](https://app.screencastify.com/v3/watch/uesbCoMkOLad2hGfazBM)** demonstrating component and E2E tests running in Cypress.

---

## Repository
**[View on GitHub](https://github.com/4ccraymond/tech-quiz)**

---

## Features
- 10 random tech questions per quiz
- Score displayed at the end
- "Take New Quiz" button to reset
- Cypress test coverage:
  - Component testing
  - End-to-end testing
  - Strategy-based branching paths (e.g. random or fixed answers)

---

## Installation
1. Clone the repo:
   ```bash
   git clone https://github.com/4ccraymond/tech-quiz
   ```
2. Navigate to the project:
   ```bash
   cd tech-quiz
   ```
3. Install dependencies:
   ```bash
   npm install
   cd client && npm install
   cd ../server && npm install
   ```
4. Seed the database:
   ```bash
   npm run seed
   ```
5. Run the app locally:
   ```bash
   npm run start:dev
   ```
6. Open Cypress:
   ```bash
   npx cypress open
   ```

---

## Testing Strategy
### Component Test
Tests whether the quiz component behaves correctly when interacted with directly:
- Starts quiz
- Displays question
- Advances on answer
- Shows final score

### End-to-End Tests
Simulates actual user behavior:
- Clicks different answer strategies (first, alternate, random)
- Verifies score rendering
- Resets the quiz

---

## Folder Structure
```
tech-quiz/
├── client/               # React frontend
├── server/               # Express backend
├── cypress/
│   ├── component/        # Component tests
│   ├── e2e/              # End-to-end tests
│   ├── fixtures/         # Static test data
│   └── support/          # Cypress config helpers
├── README.md             # Project overview
└── cypress.config.ts     # Cypress config
```

---

## Acknowledgements
- The instructional team for guidance and support throughout the project
- Cypress documentation and community examples
- Classmates and project reviewers for feedback and collaboration
- ChatGPT and CoPilot for assistance in bug fixes and clarification on concepts
- EdX for the base code for quiz

---

## Contact
Open issues or contribute at [github.com/4ccraymond/tech-quiz](https://github.com/4ccraymond/tech-quiz)

