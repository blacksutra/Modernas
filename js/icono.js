let isDarkMode = false; // Inicialmente en modo claro
const button = document.getElementById("theme-toggle");

// Función para cambiar el icono y el estado
function changeIcon() {
  if (isDarkMode) {
    // Cambiar al icono original y el modo claro
    button.innerHTML = '<i class="fa-regular fa-sun" style="color: #005eff;"></i>';
    isDarkMode = false;
  } else {
    // Cambiar al icono diferente y el modo oscuro
    button.innerHTML = '<i class="fa-regular fa-moon" style="color: #005eff;" style=":hover"></i>';
    isDarkMode = true;
  }
}

// Cambia al icono inicial en modo claro
changeIcon();




//'<i class="fa-regular fa-moon" style="color: #005eff;"></i>' oscuro



//'<i class="fa-regular fa-sun" style="color: #005eff;"></i>'