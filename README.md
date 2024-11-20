# HR Application

This is an application for the HR department

## Features:
- Project made with React and Vite
- Arrangement and Making of files with components.

## Usuage Guide
- To use or play with this, run the following commands

```react
npm install
npm run dev
```

## What was practised today
- Making components, importing and exporting them into the right places

#### week 2
- Get an array with 10 employees with a number of object properties
- Create a log in page with a Button to handle log in / log out with the action onCLick
- Team lead toggle button (promote & demote) (with a star image when promoted to team lead). 
  Trick: place image in public folder
- Display how many years the employee has worked in the company. Found in the EmployeeCard.
   

#### week 3
- Destructuring in the EmployerCard which used to contain props. 
- Make a new component for the Button so that it will take the necessary attributes:
  . onClick = an action, and has
  . text = that has the text on the button.
- Favicon added
- Primary Secondary button styling ( google images for more explanation)
- Have a way to edit and save card components of each employee when needed; 
  .const toggleFormEdit n setToggleFormEdit in the card. 

#### week 4
- Install react-router-dom for managing routing in the application
- Create a folder for Pages (Root, Login, ErrorPage, Form(to take up new inputs), List(to view the employee cards))
- Modify the header to include a menu with nav links: employees, add new employees
- Prepare form component to take new employees





make a form with arrow function that has a 1.const with useState with role, dept and location

then make a 2.const handlechandge that take name n value = e.target ie, on the trigger of the event, it should target name n value + setting the form in previous state (prevState) => ({..prevState, [name]: value})

return a div with the form- input


use for form for input
--------------------