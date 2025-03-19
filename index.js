// Add your code here
function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({ name: name, email: email })
    })
    .then(response => response.json()) // Convert response to JSON
    .then(data => {
        console.log("Success:", data); // Log the response data

        // Create a new paragraph element
        const p = document.createElement("p");
        p.textContent = `New User ID: ${data.id}`;

        // Append it to the body
        document.body.appendChild(p);
    })
    .catch(error => {
        console.error("Error:", error);

        // Display error message in the DOM
        const errorMessage = document.createElement("p");
        errorMessage.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorMessage);
    });
}
