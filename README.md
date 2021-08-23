# Facility Management System

## <u>Project Description</u>
As companies evolve and grow, so does their team and office space. 
During a businesses "transition period", our application allows facility management and company logistics to view their employees in different departments, floors, and office space, and see which area needs to be filled.

[Click here to check out our app!]()

**AUDIENCE**:
Facility Managers

**PROBLEM**:
Facility managers strugle to view the overall work space and the number of employees in their respective departments, floors and office space.
During a "transition period" it is difficult to accomodate new employees and support to certain departments.

**PRODUCT SOLUTION**:
An application that allows managers to visually comprehend where their employees are stationed. 

**MVP FEATURES**:
* Login interface & Logout
* Creating users (facility managers) with a secure password
    - Edit and saving users information
    - Deleting users if needed (if you're logged in as the current user)
* Viewing list of employees, departments, and buildings/floors
    - View and navigate employees between the chosen criteria
* Edit and saving employee's personal information

**FUTURE DEVELOPMENT**:
* Delete employees directly through interface
* Adding employees, departments, and buildings/floors directly through interface
* Change employee's placement of seat number, department and building/floor directly through interface
* Employees being in multiple deparments
* Real time facility management.
    - Example: 7/50 cubicles on Floor 3 in Building A available

## <u>Installation Guide</u>
1. Download `Node.js` on your local machine.
2. Clone this repo to your local machine.
3. Run in VSCode and open an integrated terminal.
4. Run `npm install` to load any dependencies (see `package.json` file for more detail).
5. Create a `.env` file and paste these lines of code changing `password` to your MySQL's root user password
```
DB_NAME=facility_db
DB_PASSWORD=password
DB_USER=root
```
6. Initial database login to the MySQL shell using `mysql -u root -p`.
7. Run the schema file with `source db/schema.sql`.
8. Run the seed database provided using `npm run seed`.

## <u>Usage</u>
After proper installation (see above), run `npm start` in the command line within the integrated terminal to access the back end data.

## <u>User Story</u>
```md
AS A facility manager at a company during their 'transition period'
I WANT to be aware of which location my employees are
SO THAT I can accurately assess employees, departments, office space, and floor plans.
```

## <u>Thought Process</u>
```md
GIVEN I am registered facility manager, 
WHEN I login through the user interface,
THEN I am directed to a homepage where I see: EMPLOYEES, DEPARTMENTS, AND FLOORS.
WHEN I click the side menu navigation bar,
THEN I am presented with the following options: EMPLOYEES, DEPARTMENTS, FLOORS, USER MANAGEMENT, AND LOGOUT.
WHEN I click EMPLOYEES from the homepage or the nav bar,
THEN I am presented with a list of all EMPLOYEES and their corresponding DEPARTMENTS. 
WHEN I click one of the EMPLOYEES from the EMPLOYEE list,
THEN I am presented with the EMPLOYEE'S: first and last name, department name, employee ID, phone number, email, seat number, floor number, and building.
WHEN I click DEPARTMENTS from the homepage or nav bar,
THEN I am presented with a list of DEPARTMENTS. 
WHEN I click one of the DEPARTMENTS in the DEPARTMENTS list,
THEN I am presented with the list of EMPLOYEES with their corresponding EMPLOYEE ID.
WHEN I click and am able to click that employees name, department name, employee ID, phone number, email seat number, floor number, and building.
WHEN I click floors from the homepage or nav bar
THEN I am presented with the list of floors and their corresponding building code and I am able to the employees and the corresponding departments they work in when I click each employee and from here I can click the employee details. 
WHEN I click the user managment from the nav bar 
THEN I am presented with list of facility managers and with the option to add new facility manager. 
WHEN I click the facility manager 
THEN I am presented with managers name, facility ID number, email, and phone number and with the ablity to edit or delete the managers details. 
When I want to create new facilty manager
THEN I am presented with a form requesting my first and last name, email, phone number and password with a minimum of 8 characters and I am able to click the new facility manager in the facility manager user list as well as log back in as a new facility manager user.
WHEN I delete a facility manager 
THEN I am able to remove that user from the list of user managment list. 
When I edit the facility managers detail 
Then I am presented with a form to edit facility managers first and last name, email, phone number, password 8 characters long, and retype password for verefication. 
```

## <u>Wireframe</u>
![Laptop View]()
![Tablet View]()

## <u>Technologie Used</u>
* Handlebars
* Javascript 
* Node.js
* Express.js
* MySQL
* Insomia Core
* Heroku
