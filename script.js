document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector(".theme-btn");

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        toggleBtn.textContent = "☀️";
    }

    // Toggle click
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            toggleBtn.textContent = "☀️";
            localStorage.setItem("theme", "dark");
        } else {
            toggleBtn.textContent = "🌙";
            localStorage.setItem("theme", "light");
        }
    });
});