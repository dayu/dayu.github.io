;(function($, window, document, undefined) {
  window.method = null;

  $(document).ready(function() {
    $.mobile.ajaxEnabled = false;

    var input = $('#input');
    var output = $('#output');
    var showpw = $('#checkbox-showpw');

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

    showpw.bind("change", function() {
      if(showpw[0].checked) {
        input.prop('type', 'password');
        output.prop('type', 'password');
      } else {
        input.prop('type', 'input');
        output.prop('type', 'input');
      }
    });

    $('#execute').click(execute);

  });
})(jQuery, window, document);
