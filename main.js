// JavaScript for login functionality
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting the traditional way

    // Get the values of the input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hardcoded credentials (for demo purposes)
    const validUsername = 'user';
    const validPassword = 'password';

    // Check if the username and password match the hardcoded values
    if (username === validUsername && password === validPassword) {
        // Login success: Redirect to another page (or show success message)
        alert('Login Successful!');
        // Redirect to another page (e.g., home.html)
        // window.location.href = "home.html";
    } else {
        // Show error message if credentials are incorrect
        document.getElementById('error-message').textContent = 'Invalid username or password!';
    }
});
