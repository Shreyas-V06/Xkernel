async function handleSignup() {
    const username = document.getElementById("signupUsername").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    const formData = {
        username,
        email,
        password
    };

    try {
        const response = await fetch("http://localhost:8000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        console.log(username + " "+email + " "+password)

        const result = await response.json();
        console.log(result)

        if (response.ok) {
            window.location.href = "login.html";
        } else {
            document.getElementById("signupError").textContent = result.detail || "Registration failed";
            document.getElementById("signupError").classList.add("show");
        }
    } catch (err) {
        document.getElementById("signupError").textContent = "An error occurred. Please try again.";
        document.getElementById("signupError").classList.add("show");
    }
}

document.getElementById("signupForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;

    const formData = new URLSearchParams();
    formData.append("username", username);
    formData.append("password", password);

    try {
        const response = await fetch("http://localhost:8000/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: formData.toString()
        });

        const result = await response.json();
        const errorElement = document.getElementById("signupError");

        if (response.ok) {
            localStorage.setItem("access_token", result.access_token);
            window.location.href = "dashboard.html"; 
        } else {
            errorElement.textContent = result.detail || "Login failed";
            errorElement.classList.add("show");
        }
    } catch (err) {
        const errorElement = document.getElementById("signupError");
        errorElement.textContent = "An error occurred. Please try again.";
        errorElement.classList.add("show");
    }
});


