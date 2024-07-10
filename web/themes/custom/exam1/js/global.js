/**
 * @file
 * Global utilities.
 *
 */
document.addEventListener('DOMContentLoaded', function() {
  var toggler = document.querySelector('.navbar-toggler');
  var menu = document.querySelector('.navbar-collapse');

  toggler.addEventListener('click', function() {
    menu.classList.toggle('show');
  });
});
