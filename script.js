document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username && password) {
        alert("login successfully!!!!")
        window.location.href = "secondpage.html";
    } else {
        alert("Please enter both username and password.");
    }
});
