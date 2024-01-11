function toggleDropdown(dropdown) {
    var dropdownContent = dropdown.getElementsByClassName("dropdown-content")[0];
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}