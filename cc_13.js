// Task 2 Adding Employee Cards Dynamically
const employeeContainer = document.getElementById("employeeContainer");

// Function to create employee card
function createEmployee(name, position) {
    // Create element for employee card
    const employeeCard = document.createElement('div'); 
    // Add class
    employeeCard.setAttribute("class", "employeeCard"); 
    // Create element for employee name
    const employeeName = document.createElement('h3'); 
    // Employee name
    employeeName.textContent = name; 
    // Add employee name to employee card
    employeeCard.appendChild(employeeName); 
    // Create element for employee position
    const employeePosition = document.createElement('p'); 
    // Employee position
    employeePosition.textContent = position; 
    // Add position to employee card
    employeeCard.appendChild(employeePosition); 
   
    // Create remove button to remove employee card
    const removeButton = document.createElement('button'); 
    //  Add text content
    removeButton.textContent = 'Remove'; 
    // Add class
    removeButton.setAttribute("class", "removeButton"); 
   
    // Creating a function to remove employee card when clicked
    removeButton.addEventListener('click', function(){ 
        event.target.parentElement.remove(employeeCard);
    });
    // Add remove button to employee card
    employeeCard.appendChild(removeButton); 
    // Add employee card to employee container
    employeeContainer.appendChild(employeeCard); 
}



// Test Cases 
createEmployee('Jayson Tatum', 'Basketball Player');
createEmployee('Erik Spoelstra', 'Head Coach');

// Task 3 Converting NodeLists to Arrays for Bulk Updates: Each card should display -Updated
// Select employee cards with querySelectorAll
 const employeeCardNodeList = document.querySelectorAll(".employeeCard");
 // Convernt NodeList to array
 const employeeCardArray =  Array.from(employeeCardNodeList);
 // Use array method to add "Updated" to each employee card
 employeeCardArray.forEach(card => {
    const p = card.querySelector("p");
    if (p) {
        p.textContent += " - Updated";
    }
 })


