# Quiz App

https://itmasterquizapp.netlify.app/

## Project Purpose

The primary objective of this project is to develop an interactive Quiz App that tests users' knowledge on HTML, CSS, JavaScript, and React. This project aims to enhance my skills in `React`, `React Router`, `useState`, and `conditional rendering` while providing an engaging user experience with progress tracking and result feedback.

## Project Structure

```
|--Quiz_App(folder)
|
├── public
│     └── index.html
├── src
│    
│    ├── assets
│    │       ├── [videos]
│    │       └── data.js 
│    │
│    ├── components
│    │       ├── Questions.jsx
│    │       ├── Questions.module.css
│    │       ├── Timer.jsx
│    │       └── Timer.module.css
│    ├── pages
│    │       ├── Home.jsx
│    │       ├── Home.module.css
│    │       ├── Quiz.jsx
│    │       ├── Quiz.module.css
│    │       ├── ResultPage.jsx
│    │       └── ResultPage.module.css
│    ├── router
│    │       └── AppRouter.jsx
│    │       
│    ├── App.js
│    ├── index.js
│    └── index.css
│
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```


## Project Features
- **Home Page**: A welcoming page with a start button that navigates to the quiz page using React Router.
- **Category Selection**: Users can select a quiz category (HTML, CSS, JavaScript, React).
- **Quiz Page**: Displays questions from the selected category, fetched from a JSON file (data.js).
- **Progress Tracking**: Uses a progress bar from React Bootstrap to visually indicate the user's progress.
- **Question Navigation**: Questions are displayed one by one. Users can navigate through questions using the Next button.
- **Conditional Rendering**: Feedback is given for correct and incorrect answers by highlighting them in green or red, respectively.
- **Result Page**: After completing the quiz, users are shown their score and corresponding emoji feedback.
- **Modular CSS**: Scoped component styles using module.css files.

## Outcome

![Quiz App](https://github.com/user-attachments/assets/4be37783-0e4d-4f8d-b73b-594763264649)





## Technologies Used
- **HTML**: Used for structuring the content and layout of the application.
- **CSS**: Employed for styling and enhancing the visual aspects of the app.
- **ReactJS**: Utilized for building the user interface. Key React features include:
  - State management using `useState`
  - Routing using React Router for navigation between different pages
  - Conditional rendering to provide feedback based on user answers
  - Props for passing data between components
- **React Bootstrap**: Used for responsive design, UI components, and progress bars.
- **Modular CSS**: Utilized `module.css` files for component-level styling.


 

### At the end of the project, will be able to;

This project has significantly enhanced my understanding and mastery of React `state management`, `routing with React Router`, `handling conditional rendering`, and `managing component-level styling with modular CSS`. By developing the "Quiz App" application, I have gained practical experience in:

- Managing state with React hooks in a scalable application.
- Navigating between different views using React Router.
- Performing conditional rendering to provide immediate user feedback.
- Implementing modular CSS for scoped component styles.
- Integrating third-party libraries like React Bootstrap for enhanced UI components.

These skills are essential for developing more complex and user-interactive applications in the future.

<p align="center"> 📝 Happy Coding! 🚀 </p>

