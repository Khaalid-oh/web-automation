document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".has-dropdown");

  dropdowns.forEach((dropdown) => {
    let megaMenu =
      dropdown.querySelector(".mega-menu") ||
      dropdown.querySelector(".mega-menu-company") ||
      dropdown.querySelector(".mega-menu-resources");

    dropdown.addEventListener("click", function (e) {
      e.stopPropagation();
      dropdowns.forEach((d) => {
        if (d !== dropdown) {
          d.classList.remove("active");
          let otherMenu =
            d.querySelector(".mega-menu") ||
            d.querySelector(".mega-menu-company") ||
            d.querySelector(".mega-menu-resources");
          if (otherMenu) otherMenu.classList.remove("open");
        }
      });

      dropdown.classList.toggle("active");
      if (megaMenu) megaMenu.classList.toggle("open");
    });
  });

  document.addEventListener("click", function (e) {
    dropdowns.forEach((dropdown) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("active");
        let megaMenu =
          dropdown.querySelector(".mega-menu") ||
          dropdown.querySelector(".mega-menu-company") ||
          dropdown.querySelector(".mega-menu-resources");
        if (megaMenu) megaMenu.classList.remove("open");
      }
    });
  });
});
