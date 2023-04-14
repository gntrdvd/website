const darkModeButton = document.querySelector(".dark-mode"); //css Klasse
darkModeButton.addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  const isDarkMode = body.classList.contains("dark-mode");
  const text = isDarkMode ? "Light mode again D: ?" : "Dark mode on :D ?"; /*condition ? true expression : false expression*/
  darkModeButton.textContent = text;
}
