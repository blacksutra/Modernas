function toggleDropdown(button) {
  var dropdowns = document.getElementsByClassName("dropdown-content");
  for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown !== button.nextElementSibling) {
          openDropdown.classList.remove('show');
      }
  }
  var dropdownContent = button.nextElementSibling;
  dropdownContent.classList.toggle("show");
}

// Cierra el menú si el usuario hace clic fuera de él
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
}
