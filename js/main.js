;(function($, window, document, undefined) {
  window.method = null;

  $(document).ready(function() {
    var input = $('#input');
    var output = $('#output');

    var execute = function() {
      try {
//        output.val(hex_sha512(input.val()).toUpperCase());
          output.prop('disabled', false);
          output.val(b64_sha512(input.val()).substring(0, 12)).select();
          
          document.execCommand("copy");
          output.prop('disabled', true);
      } catch(e) {
        output.val(e);
      }
    }

    input.bind('input propertychange', function()  {
      output.val(b64_sha512(input.val()).substring(0, 12))
    });

    input.textareamaxrows({maxrows : 1, maxcharsinrow : 64});

    input.keyup(function() {
      var textlen = maxLength - $(this).val().length;
      $('#rchars').text(textlen);
    });

    $('#execute').click(execute);

  });
})(jQuery, window, document);
