 //change theme
 function changeTheme() {
    let sunIcon = document.getElementById('sun-icon').querySelector('use');

    // Toggle dark mode class on body
    document.body.classList.toggle('darkMode');

    if (document.body.classList.contains('darkMode')) {
        sunIcon.setAttribute('xlink:href', 'images/sprite (10).svg#moon (1)');
    } else {
        sunIcon.setAttribute('xlink:href', 'images/sprite (10).svg#sun (1)');
    }
}

//function to select role
let selectedRole = 'user'; // default to user

// Step 1: Listen for role selection
document.querySelector('.role-selector').addEventListener("click", e => {
    const clicked = e.target;

    if (clicked.classList.contains("role-btn")) {
        // Remove 'selected' class from all buttons
        document.querySelectorAll(".role-btn").forEach(btn =>
            btn.classList.remove("selected")
        );

        // Add it to the clicked one
        clicked.classList.add("selected");

        // Save selected role ('admin' or 'user')
        selectedRole = clicked.dataset.role;
    }
});

// Step 2: Handle form submission
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const emailInput = document.querySelectorAll(".input-field")[0].value.trim().toLowerCase();
    const passwordInput = document.querySelectorAll(".input-field")[1].value;

    const loginBtn = document.querySelector(".login-button");
    loginBtn.textContent = "Logging in...";
    loginBtn.disabled = true;

    // Step 3: Check if any employee matches email, password, and selected role
    const matchedUser = employees.find(emp =>
        emp.email === emailInput &&
        emp.password === passwordInput &&
        emp.accountType === selectedRole
    );

    setTimeout(() => {
        if (matchedUser) {
            alert(`Welcome, ${matchedUser.firstName}!`);
            window.location.href = "dashboard.html";
        } else {
            alert("Invalid credentials or wrong role selected.");
            loginBtn.textContent = "Login";
            loginBtn.disabled = false;
        }
    }, 1000);
});
