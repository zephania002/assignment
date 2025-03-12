function toggleSubMenu(element) {
    let subMenu = element.nextElementSibling;
    if (subMenu.style.display === "block") {
        subMenu.style.display = "none";
    } else {
        subMenu.style.display = "block";
    }
}
