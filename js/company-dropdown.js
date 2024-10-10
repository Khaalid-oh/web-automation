document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".has-company-dropdown");

    dropdowns.forEach(dropdown => {
        const megaMenu = dropdown.querySelector(".mega-menu-company, .company-container");

        dropdown.addEventListener("click", function (e) {
            e.stopPropagation()
            dropdowns.forEach(d => {
                if (d !== dropdown) {
                    d.classList.remove("active");
                    const menu = d.querySelector(".mega-menu-company, .company-container");
                    if (menu) menu.classList.remove("open");
                }
            });
            dropdown.classList.toggle("active");
            if (megaMenu) megaMenu.classList.toggle("open");
        });
    });

    document.addEventListener("click", function (e) {
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove("active");
                const megaMenu = dropdown.querySelector(".mega-menu-company, .company-container");
                if (megaMenu) megaMenu.classList.remove("open");
            }
        });
    });
});