$(document).ready(function () 
{
    //console.log('document is ready');
    //$("#ProductSubmitButton-template--23234327085378__main").hide();
    //$(".rc_widget").hide();
    //$(".rc_popup").hide();
});



$(window).on("load", function (e) 
{
  //console.log ("window is ready")
  setTimeout(function (params) 
  {
      //$("#ProductSubmitButton-template--23234327085378__main").removeAttr("disabled");
      // $("#ProductSubmitButton-template--23234327085378__main").show();
    $("#ProductSubmitButton-{{ section.id }}").show();
      $(".rc_widget").hide();
      $(".rc_popup").hide();
  }, 1000);        
});

// Start Faq page scroll
$('.faq-side-box .dashboard-mainmenu li a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
     var target = $(this.hash);
     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
     if (target.length) {
        $('html, body').animate({
        scrollTop: target.offset().top - 100
        }, 1000);
        return false;
     }
  }
});
// End Faq page scroll

$(".btn-toggle").click(function () {
    $(this).find(".btn").toggleClass("active");
    if ($(this).find(".btn-primary").length > 0) {
        $(this).find(".btn").toggleClass("btn-primary");
    }
    $(this).find(".btn").toggleClass("btn-default");
    if ($(".btn-toggle .btn-primary").text() === "CM") {
        $("td[data-cm]").each(function() {
            $(this).text($(this).data("cm"));
        });
    } else {
        $("td[data-cm]").each(function() {
            $(this).text($(this).data("in"));
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.product_gallery_img');
  images.forEach(image => {
    image.style.display = 'block';
  });
  initializeSlider();
});

function initializeSlider() {
  $(".my-slider-box-2").slick({
    arrows: true,
    infinite: true,
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  });

  $(".my-slider-box-2").on("afterChange", function (event, slick, currentSlide) {
    if (currentSlide > 0) {
      $(".splash-layout-presentation-box").fadeIn();
    }
  });
}


// image slider end
function redirect (url) 
{
  var ua        = navigator.userAgent.toLowerCase();
  var isIE      = ua.indexOf('msie') !== -1;
  var version   = parseInt(ua.substr(4, 2), 10);

  // Internet Explorer 8 and lower
  if (isIE && version < 9) 
  {
    var link = document.createElement('a');
    link.href = url;
    document.body.appendChild(link);
    link.click();
  }

  // All other browsers can use the standard window.location.href 
  else 
  { 
    window.location.href = url; 
  }
}

function appendUTM2AnchorLink ()
{ 
  let searchParams    = new URLSearchParams(window.location.search);
  let utm_id          = searchParams.get('utm_id');
  let utm_source      = searchParams.get('utm_source');
  let utm_medium      = searchParams.get('utm_medium');
  let utm_campaign    = searchParams.get('utm_campaign');
  let utm_term        = searchParams.get('utm_term');
  let utm_content     = searchParams.get('utm_content');
  let strCurrentURL;
  
  // --------------------------------------------------------------------------
  // Check every anchor link in the document that has the replace-url
  // class then use the link, but append any UTM request variables if passed 
  // onto the end of the anchor link. 
  // --------------------------------------------------------------------------
  $("a.replace-url").each(function() 
  {     
    let strLastChar; 
    strCurrentURL = this.href
    
    // --------------------------------------------------------------------------
    // Check if the last character is a slash.. if not then append /?
    // --------------------------------------------------------------------------
    strLastChar = strCurrentURL.substr(-1); 
    if (strLastChar !== '/')  
    {
      strCurrentURL = strCurrentURL + "/?";
    }

    else
    {
      strCurrentURL = strCurrentURL + "?";  
    }

    if (utm_id)
    {
      strCurrentURL = strCurrentURL + "utm_id=" + utm_id + "&";
    }

    if (utm_source)
    {
      strCurrentURL = strCurrentURL + "utm_source=" + utm_source + "&";
    }

    if (utm_medium)
    {
      strCurrentURL = strCurrentURL + "utm_medium=" + utm_medium + "&";
    }

    if (utm_campaign)
    {
      strCurrentURL = strCurrentURL + "utm_campaign=" + utm_campaign + "&";
    }

    if (utm_term)
    {
      strCurrentURL = strCurrentURL + "utm_term=" + utm_term + "&";
    }

    if (utm_content)
    {
      strCurrentURL = strCurrentURL + "utm_content=" + utm_content;
    }      
    
    $(this).attr("href", strCurrentURL);
  });
}

function getUTM ()
{
  let searchParams = new URLSearchParams(window.location.search);
  let utm_id          = searchParams.get('utm_id');
  let utm_source      = searchParams.get('utm_source');
  let utm_medium      = searchParams.get('utm_medium');
  let utm_campaign    = searchParams.get('utm_campaign');
  let utm_term        = searchParams.get('utm_term');
  let utm_content     = searchParams.get('utm_content');
  
}


    $(".my-slider-box").slick({
      arrows: false,
      infinite: true,
      autoplay: true,
      dots: true,
    });
    
    $(".my-slider-box").on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        $(".logo-img").removeClass("active");
        $("#single-img-" + (nextSlide + 1)).addClass("active");
      }
    );
    
    $(".logo-img").click(function () {
      var index = $(this).index();
      $(".my-slider-box").slick("slickGoTo", index);
    });
    
    // --------------------------------------------------------------------------
    // Set initial active button
    // --------------------------------------------------------------------------
    $("#single-img-").addClass("active");

		// --------------------------------------------------------------------------
		// Validate the Form
		// --------------------------------------------------------------------------
		$("#signup-form").validate(
    {
        // --------------------------------------------------------------------------
        // Process the form submission
        // --------------------------------------------------------------------------
        submitHandler: function(form) 
        {   			
          // --------------------------------------------------------------------------
          // Grab the inputs
          // --------------------------------------------------------------------------
          var email       = $('#email').val();
 
        }, // end submitHandler: function(form) 
        
        rules: 
        {
          email: 
          {
            required: true,
          },
        }, // end rules
      
        messages: 
        {
          email: 
          {
            required: "Please enter your email address.",
          },
        } // end messages
    }); // end validate
  //add ga4 start quiz event to take the quiz button
  $("#btn-quiz").click(function () {
    gtag("event", "click", {
      "event_category": "Button",
      "event_label": "QuizStart"
    });
  });
// }); // end document ready
// faq part start
const accordianHeader = document.querySelectorAll(".accordion-header");
const firstAcco = document.getElementById("faqs-collapseAbout1");
const firstAccoHeading = document.getElementById("faqs-headingAbout1");
if (firstAcco.classList.contains("show")) {
  firstAccoHeading.classList.add("show-acco");
} else {
  firstAccoHeading.classList.remove("show-acco");
}

accordianHeader.forEach((accordian) => {
  accordian.addEventListener("click", () => {
    const isActive = accordian.classList.contains("show-acco");
    accordianHeader.forEach((h) => h.classList.remove("show-acco"));
    if (!isActive) {
      accordian.classList.add("show-acco");
    }
  });
});
// faq part end

// Start Faq page sidebar add active
const menuItems = document.querySelectorAll('.faq-menu-item');
menuItems.forEach(item => {
  item.addEventListener('click', function() {
      menuItems.forEach(el => el.classList.remove('active'));
      this.classList.add('active');
  });
});
// End Faq page sidebar add active

  
