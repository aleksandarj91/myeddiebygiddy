function redirect(url) {
  var ua = navigator.userAgent.toLowerCase();
  var isIE = ua.indexOf("msie") !== -1;
  var version = parseInt(ua.substr(4, 2), 10);

  if (isIE && version < 9) {
    var link = document.createElement("a");
    link.href = url;
    document.body.appendChild(link);
    link.click();
  }

  else {
    window.location.href = url;
  }
}

function getParams() 
{
  let queryParams = new URLSearchParams(window.location.search);
  let q5 = queryParams.get("q5");
  let q6 = queryParams.get("q6");
  let q7 = queryParams.get("q7");
  let q8 = queryParams.get("q8");

  // --------------------------------------------------------------------------
  // Fire the POST request via AJAX
  // --------------------------------------------------------------------------
  $.post(
    "https://lander.eddiebygiddy.com/quiz/ajax_getquizdata.php",
    {
      q5: q5,
      q6: q6,
      q7: q7,
      q8: q8,
    },

    // --------------------------------------------------------------------------
    // On success
    // --------------------------------------------------------------------------
    function (data) {
      // --------------------------------------------------------------------------
      // Dump to the console and process return codes from POST request
      // --------------------------------------------------------------------------
      // console.log(data);

      // --------------------------------------------------------------------------
      // Strip any unwanted characters.
      // --------------------------------------------------------------------------
      data = $.trim(data);

      // console.log("data", data);

      // --------------------------------------------------------------------------
      // Check for any errors.
      // --------------------------------------------------------------------------
      if (data == "ERROR_NO_CONDITIONS") 
      {
        // console.log(data);
        $("#id_offer_conditions_none").show();
      }

      else
      {
        $("#id-about-you").append(data);
        $("#id_offer_conditions").show();
      }

    }
  ); // end function(data)
}

// Jquery document ready function
$(document).ready(function () {

  $("#id_offer_conditions_none").hide();
  $("#id_offer_conditions").hide();

  getParams();

  // --------------------------------------------------------------------------
  // Validate the Form
  // --------------------------------------------------------------------------
  $("#quiz-offer-form1").validate({
    
    // --------------------------------------------------------------------------
    // Process the form submission
    // --------------------------------------------------------------------------
    submitHandler: function (form) {

      // --------------------------------------------------------------------------
      // Grab the inputs
      // --------------------------------------------------------------------------
      var email = $("#email1").val();

      
      // --------------------------------------------------------------------------
      // Fire the POST request via AJAX
      // --------------------------------------------------------------------------
      $.post(
        "https://lander.eddiebygiddy.com/quiz/ajax_quizemail.php",
        {
          email: email,
        },
        // --------------------------------------------------------------------------
        // On success
        // --------------------------------------------------------------------------
        function (data) {
          // --------------------------------------------------------------------------
          // Dump to the console and process return codes from POST request
          // --------------------------------------------------------------------------
          // console.log(data);

          // --------------------------------------------------------------------------
          // Strip any unwanted characters.
          // --------------------------------------------------------------------------
          data = $.trim(data);

          // --------------------------------------------------------------------------
          // Check for any errors.
          // --------------------------------------------------------------------------
          if (data == "ERROR_USER_EXISTS") 
          {
            $("#ID_ERROR_MSGBOX1").html("ERROR: User Already Exists");
            $("#ID_ERROR_MSGBOX1").show();
            // console.log(data);
          } 
          else if (data == "ERROR_INVALID_EMAIL") 
          {
            $("#ID_ERROR_MSGBOX1").html("ERROR: Invalid Email Address");
            $("#ID_ERROR_MSGBOX1").show();
            // console.log(data);
          } 
          else if (data == "ERROR_DATABASE_ADDING_USER") 
          {
            $("#ID_ERROR_MSGBOX1").html("ERROR: Unable to Add Email Address");
            $("#ID_ERROR_MSGBOX1").show();
            // console.log(data);
          } 
          else if (data == "OK") 
          {
            redirect("https://store.eddiebygiddy.com/products/eddie-by-giddy?quizoffer=1");
            console.log("redirecting to production PDP page for offer");
          }
        }
      ); // end function(data)
    }, // end submitHandler: function(form)

    rules: {
      email: {
        required: true,
      },
    }, // end rules

    messages: {
      email: {
        required: "Please enter your email address.",
      },
    }, // end messages
  }); // end validate


  $("#quiz-offer-form2").validate({
    
      // --------------------------------------------------------------------------
      // Process the form submission
      // --------------------------------------------------------------------------
      submitHandler: function (form) {
     
      // --------------------------------------------------------------------------
      // Grab the inputs
      // --------------------------------------------------------------------------
      var email = $("#email2").val();

      // --------------------------------------------------------------------------
      // Fire the POST request via AJAX
      // --------------------------------------------------------------------------
      $.post(
        "https://lander.eddiebygiddy.com/quiz/ajax_quizemail.php",
        {
          email: email,
        },
        // --------------------------------------------------------------------------
        // On success
        // --------------------------------------------------------------------------
        function (data) {
          // --------------------------------------------------------------------------
          // Dump to the console and process return codes from POST request
          // --------------------------------------------------------------------------
          // console.log(data);

          // --------------------------------------------------------------------------
          // Strip any unwanted characters.
          // --------------------------------------------------------------------------
          data = $.trim(data);

          // --------------------------------------------------------------------------
          // Check for any errors.
          // --------------------------------------------------------------------------
          if (data == "ERROR_USER_EXISTS") 
          {
            $("#ID_ERROR_MSGBOX2").html("ERROR: User Already Exists");
            $("#ID_ERROR_MSGBOX2").show();
            // console.log(data);
          } 
          else if (data == "ERROR_INVALID_EMAIL") 
          {
            $("#ID_ERROR_MSGBOX2").html("ERROR: Invalid Email Address");
            $("#ID_ERROR_MSGBOX2").show();
            // console.log(data);
          } 
          else if (data == "ERROR_DATABASE_ADDING_USER") 
          {
            $("#ID_ERROR_MSGBOX2").html("ERROR: Unable to Add Email Address");
            $("#ID_ERROR_MSGBOX2").show();
            // console.log(data);
          } 
          else if (data == "OK") 
          {
            redirect("https://store.eddiebygiddy.com/products/eddie-by-giddy?quizoffer=1");
            console.log("redirecting to production PDP page for offer");
          }
        }
      );
    },

    rules: {
      email: {
        required: true,
      },
    },

    messages: {
      email: {
        required: "Please enter your email address.",
      },
    },
  });

});


