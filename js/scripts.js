// WAYPOINTS
$(function() {
  
    $('.waitingFor-animationFade').addClass('animationFade');

  // $('#hello').waypoint(function() {
  //   $('#hello .underline').addClass('active');
  // }, {
  //   offset: '85%'
  // });

  $('#welcome-section').waypoint(function() {
    $('#welcome-title').addClass('animated');
  }, {
    offset: '85%'
  });

  $('#section_introduction').waypoint(function() {
    var $keyWords = $(this).find('.key-word');
    
    $keyWords.each(function(index) {
      $(this).css('transition','left .4s ease ' + 400*index + 'ms, color .3s ease '+ 400*index + 'ms').addClass('animated');
      //console.log($(this));
  });

    //$('.key-word').addClass('animated');
  }, {
    offset: '85%'
  });

  $('#w6').waypoint(function() {
    $('#w6').addClass('animated');
  }, {
    offset: '85%'
  });
  
});

// $('#emailToCopy').on( "click tap",function() {
//   var copyText = 'roberto.unsettled@gmail.com';
//   navigator.clipboard.writeText(copyText);

//   $('#emailToCopy').addClass('copied');
//   setTimeout(function() {
//     $('#emailToCopy').removeClass('copied');
//    }, 2000);

// });