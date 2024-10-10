//...resources-mega-menu
function openResourcesTab(evt, resTabName) {
    var i, restabcontent, restablinks;
    restabcontent = document.getElementsByClassName("restabcontent");
    for (i = 0; i < restabcontent.length; i++) {
      restabcontent[i].style.display = "none";
    }
    restablinks = document.getElementsByClassName("restablinks");
    for (i = 0; i < restablinks.length; i++) {
      restablinks[i].className = restablinks[i].className.replace(" active", "");
    }
    document.getElementById(resTabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  document.getElementById("resDefaultOpen").click();

  document.getElementById('resources-mega-menu').addEventListener('click', function (event) {
    event.stopPropagation();
  });

  // Close the mega menu when clicking outside of it
  document.addEventListener('click', function (event) {
    const isClickInside = document.getElementById('resources-dropdown').contains(event.target);

    if (!isClickInside) {
      document.getElementById('resources-mega-menu').style.display = 'none';
    }
  });

  // Re-open the mega menu
  document.getElementById('resources-dropdown').addEventListener('click', function () {
    const megaMenu = document.getElementById('resources-mega-menu');
    if (megaMenu.style.display === 'block') {
      megaMenu.style.display = 'none';
    } else {
      megaMenu.style.display = 'block';
    }
  });