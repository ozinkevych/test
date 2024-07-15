(function ($) {
  Drupal.behaviors.readMoreToggle = {
    attach: function (context, settings) {
      $('.read-more-link', context).once('read-more-toggle').on('click', function(e) {
        e.preventDefault();
        var $article = $(this).closest('.article-preview');
        var $shortBody = $article.find('.body-short');
        var $fullBody = $article.find('.body-full');

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
})(jQuery);
