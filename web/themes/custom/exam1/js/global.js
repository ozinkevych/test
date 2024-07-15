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

(function ($, Drupal) {
  Drupal.behaviors.readMoreToggle = {
    attach: function (context, settings) {
      $('.read-more-link', context).once('read-more-toggle').on('click', function(e) {
        e.preventDefault();
        var $article = $(this).closest('.article-preview');
        var $bodyContent = $article.find('.body-content');
        var $shortBody = $bodyContent.find('.body-short');
        var $fullBody = $bodyContent.find('.body-full');

        if ($fullBody.is(':hidden')) {
          $shortBody.hide();
          $fullBody.show();
          $(this).text('READ LESS');
        } else {
          $fullBody.hide();
          $shortBody.show();
          $(this).text('READ MORE');
        }
      });
    }
  };
})(jQuery, Drupal);


