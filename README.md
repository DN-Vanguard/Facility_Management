# Facility Management System

## <u>Project Description</u>
As companies evolve and grow, so does their team and office space. 
During a businesses "transition period", our application allows facility management and company logistics to view and allocate their employees and their needs.
The managers are given oversight and are able to move employees to different departments, floors, and office locations as needed.

[Click here to check out our app!]()

**AUDIENCE**:
Facility Managers and Logistic Managers

**PROBLEM**:
Managers not being able to accurately assess facility requirements and seating plans during transition periods.

**PRODUCT SOLUTION**:
An application that allows managers to visually comprehend where their employees are stationed. This app also gives managers the tools they need to move employees around floors, departments, and cubicles.

**MVP FEATURES**:
* Which floor departments are on
* Which office space employees are located
* Representation of office space available
    - Ex: '9/12 office space available'

**FUTURE DEVELOPMENT**:
* More buildings can be added
* Employees being in multiple deparments/floors

## <u>Installation Guide</u>
1. Download `Node.js` on your local machine.
2. Clone this repo to your local machine.
3. Run in VSCode and open an integrated terminal.
4. Run `npm install` to load any dependencies (see `package.json` file for more detail).
5. Create a `.env` file and paste these lines of code changing `password` to MySQL's root user password
```
DB_NAME=facility_db
DB_PASSWORD=password
DB_USER=root
```
6. Initial database login to the MySQL shell using `mysql -u root -p`.
7. Run the schema file with `source db/schema.sql`.
8. Run the seed database provided using `npm run seed`.

## <u>Usage</u>
After proper installation (see above), run `npm start` in the command line within the integrated terminal.

## <u>User Story</u>
```md
AS A facility manager at a company during their a 'transition period'
I WANT to be aware of which location my employees are
SO THAT I can accurately assess employees, departments, office space, and floor plans.
```

## <u>Acceptance Criteria</u>
```md
GIVEN I am registered facility user 
WHEN I Login as a user 
THEN I can be loged back in as a former user.
WHEN I add my first name, last name, email and password
THEN a new account is opened with a page where my name is diplayed with a welcome. 
WHEN I hit an edit button 
THEN my facility manager id and email can be edited.
WHEN I hit the delete button 
THEN my facility manager id and email can be deleted.
WHEN I use my nav bar to display list of employees 
THEN a list of employees and their department is diplayed. 
WHEN I use my nav bar to display list of departments  
THEN a card with the employees name, department, employee id, email, phone number, bulding number, floor number are displayed.  
WHEN I use my nav bar to display list of floor 
THEN a list of seat number, employee id and floor id is diplayed. 

```

## <u>Wireframe</u>
![Laptop View]()
![Tablet View]()

## <u>Technologie Used</u>
* HTML 
* CSS 
* Javascript 
* Node.js
* Express.js
* MySQL
* Insomia Core
* Heroku
