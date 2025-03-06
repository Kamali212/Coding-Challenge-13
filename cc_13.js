// Task 2 Adding Employee Cards Dynamically\
const employeeContainer = document.getElementById("employeeContainer");

// Function to create employee card
function createEmployee(name, position) {
    const employeeCard = document.createElement('div'); // Create element for employee card
    employeeCard.setAttribute("class", "employeeCard"); // Add class

    const employeeName = document.createElement('h1'); // Create element for employee name
    employeeName.textContent = name; // Employee name
    employeeCard.appendChild(employeeName); // Add name to employee card
    
    const employeePosition = document.createElement('p'); // Create element for employee position
    employeePosition.textContent = position; // Employee position
    employeeCard.appendChild(employeePosition); // Add position to employee card

    const removeButton = document.createElement('button'); // Create remove button to remove employee card
    removeButton.textContent = 'Remove'; //  Add text content
    removeButton.setAttribute("class", "removeButton"); // Add class
    removeButton.addEventListener('click', function(){ // Creating a function to remove employee card when clicked
        employeeContainer.removeChild(employeeCard);
    });
    employeeCard.appendChild(removeButton); // Add remove button to employee card
    employeeContainer.appendChild(employeeCard); // Add employee card to employee container
}

function removeEmployeeCard(card) { // Function that will remove employee card when remove button is clicked 
    employeeContainer.removeChild(card);
}

// Test Cases 
createEmployee('Jayson Tatum', 'Basketball Player');
createEmployee('Erik Spoelstra', 'Head Coach');

