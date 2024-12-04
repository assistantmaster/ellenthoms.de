if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
    }, false);
  } else {
    document.attachEvent('oncontextmenu', function() {
      alert("You've tried to open context menu");
      window.event.returnValue = false;
    });
  }


  function toggleMenu() {
    // Hamburger-Icon umschalten
    const burger = document.querySelector('.burger-6');
    burger.classList.toggle('is-closed');

    // Menüfeld umschalten
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
    }