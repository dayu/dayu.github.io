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
      output.prop('disabled', false);
      output.val(b64_sha512(input.val()).substring(0, 12))
      output.prop('disabled', true);
    });

    $('#execute').click(execute);

  });
})(jQuery, window, document);
