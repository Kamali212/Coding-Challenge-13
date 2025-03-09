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
    removeButton.addEventListener('click', function(event){ 

        // Task 4: Use stopPropagation() to prevent Event from bubbling up
        event.stopPropagation()
        //Task 4: Attach a click event listener to the "Remove" button that removes its parent employee card using removeChild
        employeeContainer.removeChild(employeeCard);
    });
    // Add remove button to employee card
    employeeCard.appendChild(removeButton); 
    // Add employee card to employee container
    employeeContainer.appendChild(employeeCard); 

// Task 5: Inline editing of employee details 

// Create edit button 
const editButton = document.createElement('button')
editButton.textContent = 'Edit';
editButton.setAttribute('class', "editButton")

// Edit button 
editButton.addEventListener('dblclick', function() {
    
    // Pre-populate the input fields with the existing employee name and position.
    const nameInput = document.createElement('input');
    nameInput.value = employeeName.textContent;
    
    const positionInput = document.createElement('input');
    positionInput.value = employeePosition.textContent;
    
    // Add the input content to employee card
    employeeCard.appendChild(nameInput);
    employeeCard.appendChild(positionInput);

    // Remove static content from employee card
    employeeCard.removeChild(employeeName);
    employeeCard.removeChild(employeePosition);

    // Create save button when edit button is double clicked
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.setAttribute("class", "saveButton")
    
    // Save input when save button is clicked 
    saveButton.addEventListener('click', function() {
        // Update text content to input values
        employeeName.textContent = nameInput.value;
        employeePosition.textContent = positionInput.value;
        
        // Add static conent to employee card
        employeeCard.appendChild(employeeName);
        employeeCard.appendChild(employeePosition);

        // Remove input content from employee card
        employeeCard.removeChild(nameInput);
        employeeCard.removeChild(positionInput);

        // Remove save button after saving so it doesn't add everytime edit button is clicked
        saveButton.remove();
    })
    
    // Add save button when edit button is double clicked
    employeeCard.appendChild(saveButton)
})
// Add edit button to employee card
employeeCard.appendChild(editButton)
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

 // Task 4: Implementing Removal of Employee Cards with Event Bubbling
 // Add a message when employee card is clicked
employeeContainer.addEventListener('click', function(event)
{console.log("Employee Card Clicked")})

