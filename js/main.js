;(function($, window, document, undefined) {
  window.method = null;

  $(document).ready(function() {
    $.mobile.ajaxEnabled = false;

    var input = $('#input');
    var output = $('#output');
    var showkey = $('#checkbox-showkey');
    var showpw = $('#checkbox-showpw');

    var execute = function() {
      try {
//        output.val(hex_sha512(input.val()).toUpperCase());
          output.prop('disabled', false);
          if(!showpw[0].checked) {
            output.prop('type', 'text');
          }
          inputkey = input.val();
          if(inputkey.length == 0) {
            output.val("").select();
          } else {
            output.val(b64_sha512(inputkey).substring(0, 12)).select();
          }
          document.execCommand("copy");
          if(!showpw[0].checked) {
            output.prop('type', 'password');
          }
          output.prop('disabled', true);
      } catch(e) {
        output.val(e);
      }
    }

    function checkshowkey() {
      if(showkey[0].checked) {
        input.prop('type', 'text');
      } else {
        input.prop('type', 'password');
      }
    }

    function checkshowpassword() {
      if(showpw[0].checked) {
        output.prop('type', 'text');
      } else {
        output.prop('type', 'password');
      }
    }

    input.bind('input propertychange', function()  {
      var inputkey = input.val();
      var outputpw;

      if(inputkey.length == 0) {
        output.val("");
      } else {
        outputpw = b64_sha512(inputkey).substring(0, 12);
     

        output.prop('disabled', false);
        if(!showpw[0].checked) {
          
          output.prop('type', 'text');
          output.val(""); 
          setTimeout(
            function(){ 
              output.val(outputpw);
              output.prop('type', 'password'); 
              output.prop('disabled', true);
            }, 
            1000);
        } else {
          output.val(outputpw);
          output.prop('disabled', true);
        }
      }
    });

    showkey.bind("change", function() {
      checkshowkey();
    });

    showpw.bind("change", function() {
      checkshowpassword();
    });

    checkshowkey();
    checkshowpassword();
    
    $('#execute').click(execute);

  });
})(jQuery, window, document);
