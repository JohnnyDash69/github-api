# GitHub Explorer

GitHub Explorer is a full-stack web application built with React and Express that allows users to search for GitHub users, view detailed user profiles, repositories, and commit history — all in a clean and interactive UI.

---

FEATURES

- User Search — Search for any GitHub username.
- User Details — View profile picture, bio, location, and repositories.
- Repo Details — View repo creation date, last commit, and description.
- Commit List — View the latest 5 commit messages for each repo.
- External links to GitHub profiles are clearly marked.
- Helmet is used on the backend for security.

---

TECHNOLOGIES USED

Frontend:

- React
- React Router DOM
- Fetch API
- Jest & React Testing Library

Backend:

- Express.js
- Node.js
- Axios
- Helmet
- Jest & Supertest

---

GETTING STARTED

1. Clone the repository:

   git clone https://github.com/your-username/github-explorer.git
   cd github-explorer

2. Backend setup (Express):

   cd my-app-backend
   npm install
   npm run dev

   Backend runs at: http://localhost:5080

3. Frontend setup (React):

   Open a new terminal:

   cd my-app-frontend
   npm install
   npm start

   Frontend runs at: http://localhost:3000

---

TESTING

Frontend:

Uses Jest and React Testing Library.

To run:

cd my-app-frontend
npm test

Includes:

- Unit test for SearchBox
- Snapshot test for App

View coverage:

npm test -- --coverage

Backend:

Uses Jest and Supertest.

To run:

cd my-app-backend
npm test

Includes:

- Unit test for root route (/)

---

PROJECT STRUCTURE

github-explorer/
├── my-app-backend/
│ ├── app.js
│ ├── routes/
│ │ └── github.js
│ ├── test/
│ │ └── app.test.js
│ └── ...
│
├── my-app-frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── SearchBox.js
│ │ │ ├── UserCard.js
│ │ │ ├── RepoList.js
│ │ │ ├── CommitList.js
│ │ │ └── LoadingSpinner.js
│ │ ├── pages/
│ │ │ ├── Home.js
│ │ │ ├── UserDetails.js
│ │ │ └── RepoDetails.js
│ │ ├── App.js
│ │ ├── api.js
│ │ └── index.js
│ └── test/
│ ├── App.test.js
│ └── SearchBox.test.js
│
└── README.md

---

CODE STYLE

- Follows the Google JavaScript Style Guide
- Clean variable and function names
- Well-organized file structure
- Backend routes are separated into dedicated modules
- Comments are included throughout for clarity

---

SECURITY

- HTTP headers secured using Helmet
- Sanitized API requests

---

LICENSE

This project is open-source and licensed under the MIT License.

---

ACKNOWLEDGMENTS

- GitHub REST API — Used for fetching user, repo, and commit data.
- HyperionDev — Capstone Project Guidelines.
