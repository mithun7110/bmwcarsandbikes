document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("address").value;
    var password = document.getElementById("city").value;
    var password = document.getElementById("pin-code").value;
    var password = document.getElementById("phonenumber").value;
    if (address && city && pin-code && phonenumber) {
        alert("login successfully!!!!")
        window.location.href = "orderpage.html";
    } 
    else {
        alert("Please enter both username and password.");
    }
});