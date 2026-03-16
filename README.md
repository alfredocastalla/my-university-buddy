# Assignment 1: Implement Two Small Features in MyUniversityBuddy

## Features Implemented

1. **Student Profile Card**
2. **Course List View**

## Mini Specs

### Feature 1: Student Profile Card

**Feature Name:** Student Profile Card

**Purpose:** To provide a visual card displaying essential student information for easy access and reference.

**Expected User:** University students who need to view their personal academic details.

**Main Functionality:**
- Display student name, course, year level, and email in a card format.
- Retrieve data from the backend API.
- Present information in a user-friendly HTML interface.

**Acceptance Criteria:**
1. The profile card must display the student's full name.
2. The card must show the student's course and year level.
3. The card must include the student's email address.
4. The information must be fetched from the `/profile` API endpoint.
5. The card must be styled appropriately for readability.

### Feature 2: Course List View

**Feature Name:** Course List View

**Purpose:** To display a comprehensive list of available courses with key details for students to browse and plan their studies.

**Expected User:** University students looking to view course offerings and instructor information.

**Main Functionality:**
- Display a list of courses including course code, name, and instructor.
- Retrieve course data from the backend API.
- Present the list in a clear, organized HTML format.

**Acceptance Criteria:**
1. The course list must display at least three courses.
2. Each course entry must include course code, name, and instructor.
3. The list must be fetched from the `/courses` API endpoint.
4. The courses must be displayed in a readable list format.
5. The page must be accessible via a dedicated URL.

## What I Implemented

I implemented a full-stack web application using NestJS for the backend and static HTML/CSS for the frontend. The backend provides RESTful API endpoints for retrieving student profile and course data. The frontend consists of HTML pages that consume these APIs and display the information in user-friendly interfaces.

**Backend Implementation:**
- Created NestJS controllers for profile and courses endpoints.
- Set up API routes: `GET /profile` and `GET /courses`.
- Configured static file serving for HTML pages.

**Frontend Implementation:**
- Created HTML pages: `index.html`, `profile.html`, and `courses.html`.
- Added CSS styling for better presentation.
- Implemented JavaScript to fetch data from APIs and display it dynamically.

**Key Technologies:**
- NestJS framework for backend
- TypeScript for type safety
- Express for HTTP server
- HTML/CSS/JavaScript for frontend

## Problems or Challenges Encountered

- **Learning NestJS Controllers:** As a beginner with NestJS, understanding how to structure controllers, services, and modules took some time. I had to refer to documentation to properly implement the routing and data handling.
- **Setting up Git Workflow:** Managing feature branches, committing changes with meaningful messages, and maintaining a clean commit history was challenging initially. I learned to use Git commands effectively for version control.
- **Frontend-Backend Integration:** Ensuring the HTML pages correctly fetch and display data from the API endpoints required debugging CORS issues and understanding asynchronous JavaScript.
- **Styling and Responsiveness:** Creating a visually appealing and responsive design with basic HTML/CSS was more involved than expected, especially for the card layout.

## Screenshots

Screenshots demonstrating the features are included in the submission as separate image files:
- Screenshot 1: Student Profile Card display
- Screenshot 2: Course List View
- Screenshot 3: API response for profile endpoint
- Screenshot 4: API response for courses endpoint
- Screenshot 5: Main application page
- Screenshot 6: Navigation between features

## How to Run the Application

1. Ensure Node.js and npm are installed.
2. Clone or extract the project files.
3. Run `npm install` to install dependencies.
4. Run `npm run start:dev` to start the development server.
5. Access the application at `http://localhost:3000`.
6. Navigate to `/profile.html` for the Student Profile Card and `/courses.html` for the Course List View.

## Git Workflow

- Created a feature branch `feature/assignment-1` for development.
- Made regular commits with descriptive messages such as:
  - "Add NestJS controllers for profile and courses"
  - "Implement HTML pages for profile and courses views"
  - "Add CSS styling for card and list layouts"
  - "Fix API integration and data display"
- Merged the feature branch back to main upon completion.