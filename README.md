# employee_data_tracker

## Overview

This app is a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.

Because this application won’t be deployed, a link has to a walkthrough video that demonstrates its functionality and all of the tests passing is provided below. 


## Technologies Used
1. Node.js
1. Inquirer
1. Javascript- Synchonous and Asynchronous and Object Constructors
1. Jest for Unit Testing - Each class and class extension was tested using a unit test


## Demo

Follow the links below to see how this application functions.

[Walkthrough Video](https://youtu.be/99uy5VWObG4)
  

## Functionality
The application uses node.js and runs in the command line. Inquirer was used to ask questions and store the responses. When the user opens the terminal and types in the command, "node index.js" they are asked to choose a type of employee they would like to create. They are then asked a series of questions which relate to each employee's role, i.e. a manager is given an office number whereas an intern has an associated school. When the user is done answering the questions for the selected employee they are then promted to make another employee or not. If the user chooses to make another employee, the process starts over again, but if they choose no, then the program ends and the html and CSS is generated with the stored information.

The application starts with a parent class of Employee, with each role being an extended class of that parent class (the manager, engineer and intern are extensions of employee). Tests were written for each class to ensure that the user inputs the correct information when prompted (an input of 89 for a name would throw an error, or an input of hello for office number would throw an error). Jest was used to run these tests to make sure that each class was created properly and that the errors are thrown when necessary.




## Github Repository
[Github Repository](https://mikeyp957.github.io/employee_data_tracker/)
