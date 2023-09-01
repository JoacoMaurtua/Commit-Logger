# Commit Logger

Commit Logger is a full-stack web application designed to visualize the Git commit history of this very repository in a beautiful and intuitive way. The application uses the GitHub API to fetch the commit history and presents it along with a custom animation created using Spline.

## Main Features

- Fetch and display commit history from GitHub.
- Visualize each commit with its respective message, date, and author.
- Custom animation created using Spline to enhance the UI.

## Technologies Used

- Frontend: React.js, Vite, Tailwind CSS, Spline
- Backend: Nest.js, Node.js
- Other Libraries: axios, file-saver, react-feather, @splinetool/runtime

## Setting up Development Environment

1. Install Node.js and npm.
2. Clone the repository.
3. Navigate to the `client` and `server` folders and install the necessary packages by running `npm install`.

## Run Instructions

1. Navigate to the `server` folder and run `npm start` to start the server.
2. Navigate to the `client` folder and run `npm run dev` to start the client application.
3. Check the console output to see on which port the application is running. The output will be something like http://127.0.0.1:XXXX or http://localhost:XXXX, where XXXX is the port number.
4. Open a web browser and navigate to http://127.0.0.1:XXXX or http://localhost:XXXX, replacing XXXX with the port number provided in the console.

Note: The custom animation was created by me using the Spline design tool to showcase design skills.