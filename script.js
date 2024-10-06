function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


  // On page load, apply the saved theme from localStorage
  document.addEventListener("DOMContentLoaded", function() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.body.classList.add(savedTheme);
      document.querySelector(".topnav").classList.add(savedTheme);
      document.querySelectorAll(".topnav a").forEach(link => {
        link.classList.add(savedTheme);
      });
      document.querySelector(".srch input").classList.add(savedTheme);
      updateButtonIcon(savedTheme);
    }
  });

  // Theme toggle function
  document.getElementById("themeToggleBtn").addEventListener("click", function() {
    const currentTheme = document.body.classList.contains("dark-mode") ? "dark-mode" : "light-mode";
    const newTheme = currentTheme === "dark-mode" ? "light-mode" : "dark-mode";

    document.body.classList.remove(currentTheme);
    document.body.classList.add(newTheme);
    document.querySelector(".topnav").classList.remove(currentTheme);
    document.querySelector(".topnav").classList.add(newTheme);
    document.querySelectorAll(".topnav a").forEach(link => {
      link.classList.remove(currentTheme);
      link.classList.add(newTheme);
    });
    document.querySelector(".srch input").classList.remove(currentTheme);
    document.querySelector(".srch input").classList.add(newTheme);

    // Save the theme to localStorage
    localStorage.setItem("theme", newTheme);
    updateButtonIcon(newTheme);
  });

  // Update button icon based on theme
  function updateButtonIcon(theme) {
    const icon = theme === "dark-mode" ? "🌞" : "🌙";
    document.getElementById("themeToggleBtn").textContent = icon;
  }

