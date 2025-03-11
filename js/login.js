document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    if (username === "findingmoli" && password === "24022025") {
        alert("Login berhasil! Selamat datang, " + username);
        window.location.href = "../dashboard.html"; // Gantilah dengan halaman yang sesuai
    } else {
        errorMessage.textContent = "Username atau password salah!";
    }
});
