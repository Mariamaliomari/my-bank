 # Instructions

For this project, you’ll be building out a React application that displays a list of your recent bank transactions, among other features.

Part of what this code challenge is testing is your ability to follow given instructions. While you will definitely have a significant amount of freedom in how you implement the features, be sure to carefully read the directions for setting up the application.
Setup
 **********
 # After unbundling the project:

    Run npm install in your terminal.
    Run npm run server. This will run your backend on port 3001.
    In a new terminal, run npm start. This will run your React app on port 3000.

Make sure to open http://localhost:3001/transactions in the browser to verify that your backend is working before you proceed!

The app uses Semantic UI for styling. If you see any unfamiliar classNames on some components, don't sweat! That's coming from Semantic UI and you shouldn't need to touch it.

If you are unfamiliar with HTML tables, take a look at the docs with an example here
Endpoints

The base URL for your backend is: http://localhost:3001
Core Deliverables

 # As a user, You should be able to:

    See a table of the transactions.
    Fill out and submit the form to add a new transaction. This should add the new transaction to the table as well as post the new transaction to the backend API for persistence.
    Filter transactions by typing into the search bar. Only transactions with a description matching the search term should be shown in the transactions table.
