document.getElementById("loginForm").addEventListener("submit", function(e) {

    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "irfu" && password === "4444") {

        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("studentName", username);

        window.location.href = "index.html";

    } else {

        alert("Invalid Username or Password");

    }

});