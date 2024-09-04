// document.addEventListener("DOMContentLoaded", function () {

//     const dropdowns = document.querySelectorAll(".has-dropdown")

//     dropdowns.forEach(dropdown => {
//         const megaMenu = dropdown.querySelector(".mega-menu")

//         dropdown.addEventListener("click", function (e) {
//             e.stopPropagation(); 
//             dropdowns.forEach(d => {
//                 if (d !== dropdown) {
//                     d.classList.remove("active");
//                     const menu = d.querySelector(".mega-menu");
//                     if (menu) menu.classList.remove("open");
//                 }
//             });
//             dropdown.classList.toggle("active");
//             if (megaMenu) megaMenu.classList.toggle("open");
//         });
//     });

//     //..close the dropdown when clicked outside of the menu
//     document.addEventListener("click", function (e) {
//         dropdowns.forEach(dropdown => {
//             if (!dropdown.contains(e.target)) {
//                 dropdown.classList.remove("active");
//                 const megaMenu = dropdown.querySelector(".mega-menu");
//                 if (megaMenu) megaMenu.classList.remove("open");
//             }
//         })
//     })
// })


document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with the class 'has-dropdown'
    const dropdowns = document.querySelectorAll(".has-dropdown");

    dropdowns.forEach(dropdown => {
        const megaMenu = dropdown.querySelector(".mega-menu, .company-container");

        dropdown.addEventListener("click", function (e) {
            e.stopPropagation(); // Prevent event bubbling
            dropdowns.forEach(d => {
                if (d !== dropdown) {
                    d.classList.remove("active");
                    const menu = d.querySelector(".mega-menu, .company-container");
                    if (menu) menu.classList.remove("open");
                }
            });
            dropdown.classList.toggle("active");
            if (megaMenu) megaMenu.classList.toggle("open");
        });
    });

    // Close dropdown when clicking outside of it
    document.addEventListener("click", function (e) {
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove("active");
                const megaMenu = dropdown.querySelector(".mega-menu, .company-container");
                if (megaMenu) megaMenu.classList.remove("open");
            }
        });
    });
});
