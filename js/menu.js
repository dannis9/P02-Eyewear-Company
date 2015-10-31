// push menu
var main = function() {
  /* Push the body and the nav over by 200px over */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "200px"
    }, 200);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-200px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });
};

                  
// smooth scrolling 

$(document).ready(function() {
   $('a[href*=#]').bind('click', function(e) {
	e.preventDefault(); //prevent the "normal" behaviour which would be a "hard" jump
       
	var target = $(this).attr("href"); //Get the target
			
	// perform animated scrolling by getting top-position of target-element and set it as scroll target
	$('html, body').stop().animate({ scrollTop: $(target).offset().top}, 500, function() {
	     location.hash = target;  //attach the hash (#jumptarget) to the pageurl
	});
			
	return false;
   });
});

$(document).ready(main);

// image swapping
$('.js-galleryThumbs > *').click(function() {
  
  if ( !$(this).hasClass('isActive') ) {
      $(this).parent().children().removeClass('isActive');
      //$('.js-galleryThumbs > *').removeClass('isActive');
      $(this).addClass('isActive');
      var $number = $(this).index();

      $(this).parent().prev('.js-galleryFeatured').addClass('focusedGallery');
      //$syncList.children('isActive').removeClass('isActive');
      $('.focusedGallery .isActive').removeClass('isActive');
      $(".focusedGallery > *:nth(" + $number + ")").addClass('isActive');
      $('.focusedGallery').removeClass('focusedGallery');

  }
  
});

