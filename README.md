# 22 State Homework: Redux Store

## Description

This homework/app is an ecommerce site that is using Redux for managing the global state verses React's own context.

## Deployed

This app is released and available publically via a deployment to Heroku. Heroku has been setup to automatically get a new build whenever code is pushed up to this github repo's main branch, and deploy updates automatically too.

[>>> You may find the deployed ecommerce app on Heroku here <<<](https://ccs-redux-store.herokuapp.com/)

## Technologies Used

i) React-Redux's Global State for handling the app's state management

ii) Front-end & Back-end MERN Full Stack
(MongoDB | ExpressJS | React | NodeJS)
(Mongoose too)

iii) Additionally supported by Apollo Server w/ GraphQL API

iv) JWT (JSON Web Token)

v) Stripe Payment Gateway Integration

## Table of Contents

- [Description](#description)
- [Deployed](#deployed)
- [Technologies Used](#technologies-used)
- [Your Task](#your-task)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Mock Up](#mock-up)
- [Getting Started](#getting-started)
- [Grading Requirements](#grading-requirements)
- [Review](#review)

## Your Task

In this unit, you learned how to manage global state using React’s Context API. The Context API is quickly gaining traction as a worthy alternative or perhaps even successor to other libraries that manage global state in tandem with React, such as Flux or MobX. Nonetheless, the open source JavaScript library Redux remains the industry standard for managing complex state in a large-scale React application, and you’ll likely encounter it on the job.

Your challenge this week is to refactor the e-commerce platform from [Activity 26](../01-Activities/26-Stu_Actions-Reducers/Unsolved) so that it uses [Redux](https://redux.js.org/). You won’t need to make sweeping changes to the code, but you will need to read through the Redux documentation on your own to find the information you need. Some guidelines have been provided in the Getting Started section to point you in the right direction. If you haven't yet, download the [e-commerce platform code from Activity 26](http://static.fullstack-bootcamp.com/fullstack-ground/unit-22/26-Stu_Actions-Reducers.zip).

**On the Job**: Web developers frequently have to immerse themselves in a new technology to solve a problem, with only that tool’s documentation for help. They must sift through it to find the information that matches the specific problem they’re trying to solve. This assignment will allow you to practice a skill that you’ll use many times over the course of your career.

## User Story

```md
AS a senior engineer working on an e-commerce platform
I WANT my platform to use Redux to manage global state instead of the Context API
SO THAT my website's state management is taken out of the React ecosystem
```

## Acceptance Criteria

```md
GIVEN an e-commerce platform that uses Redux to manage global state
WHEN I review the app’s store
THEN I find that the app uses a Redux store instead of the Context API
WHEN I review the way the React front end accesses the store
THEN I find that the app uses a Redux provider
WHEN I review the way the app determines changes to its global state
THEN I find that the app passes reducers to a Redux store instead of using the Context API
WHEN I review the way the app extracts state data from the store
THEN I find that the app uses Redux instead of the Context API
WHEN I review the way the app dispatches actions
THEN I find that the app uses Redux instead of the Context API
```

## Mock Up

This section reviews the web application's general appearance and functionality.

The following animation shows how a user can register using the Signup page and then navigate to the Products page:

![A user registers on the Signup page and then navigates to the Products page, which displays images and descriptions of products.](./Assets/22-state-homework-demo-01.gif)

The following animation shows how the user can select a category, choose a product, view details about it on the product page, and add and remove it from their shopping cart:

![The user selects a category, chooses a product, views details about it on the product page, and adds it to and removes it from their shopping cart.](./Assets/22-state-homework-demo-02.gif)

Finally, the user can check out by going to their shopping cart, as shown in the following animation:

![The user checks out by going to their shopping cart.](./Assets/22-state-homework-demo-03.gif)

## Getting Started

For instructions to add Redux to your application, refer to the [Redux Fundamentals basic tutorial](https://redux.js.org/basics/basic-tutorial). Note that the documentation will refer to additional packages that you'll need to complete this implementation.

**Important**: Be sure to review ALL of the documentation, because there are newer methods that can make these tools much easier to implement. React has gone through several iterations; as such, some React-and-Redux tutorials will assume that you aren't using Hooks.

## Grading Requirements

This homework is graded based on the following criteria:

### Technical Acceptance Criteria: 40%

- Satisfies all of the preceding acceptance criteria plus the following:

  - Retains all the functionality of the original application.

  - Application must be deployed to Heroku.

### Deployment: 32%

- Application deployed at live URL.

- Application loads with no errors.

- Application GitHub URL submitted.

- GitHub repository contains application code.

### Application Quality: 15%

- User experience is intuitive and easy to navigate.

- User interface style is clean and polished.

- Application resembles the mock-up functionality provided in the Challenge instructions.

### Repository Quality: 13%

- Repository has a unique name.

- Repository follows best practices for file structure and naming conventions.

- Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

- Repository contains multiple descriptive commit messages.

- Repository contains high-quality README file with description, screenshot, and link to the deployed application.

## Review

You are required to submit BOTH of the following for review:

- The URL of the functional, deployed application.

- The URL of the GitHub repository, with a unique name and a README describing the project.

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
