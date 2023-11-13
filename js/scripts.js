// WAYPOINTS
$(function() {
  $('#banners .img-work-container').on('click', function(){
    var $this = $(this);
    var bannerH = $this.attr('data-banner-height'),
        bannerW = $this.attr('data-banner-weight'),
        bannerUrl = $this.attr('data-banner-url');

    iframeHTML= '<iframe id="inlineFrameExample" width="'+ bannerW +'" height="'+ bannerH +'" src="'+ bannerUrl +'"></iframe>';
    $('#overlay .htmlContainer').html(iframeHTML);
    $('#overlay').addClass('visible');

     console.log('click' + bannerH);
  });

  
  $('.backGround').on('click',function(){
    $('#overlay').removeClass('visible');
    $('#overlay .htmlContainer').html('');
    //two clases, one to happen other to appear maybe
  });



  function animatingCSS($listToAnimate){
    
      $listToAnimate.find('.key-word').each(function(index) {
        $(this).css('transition','left .4s ease ' + 400*index + 'ms, color .3s ease '+ 400*index + 'ms').addClass('animated');
      });

  }//animatingCSS

  function animatingCascade(listsToAnimate){
    listsToAnimate.each(function(index){
      var $this = $(this);
      animatingCSS($this);
    });
   
  }  

var waypoints = $('#welcome-section, #banners').waypoint({
  handler: function(direction) {
    $('#' + this.element.id).addClass('animated')
    //console.log(this.element.id + ' hit')
  }
  })

  var waypoints = $('#section_introduction').waypoint({
    handler: function(direction) {
      var $keyWords = $('#' + this.element.id).find('.text-regular');
      animatingCSS($keyWords);
      //console.log(this.element.id + ' hit')
    },
    offset: '70%'
  })

  var waypoints = $('#microsites, #banners').waypoint({
    handler: function(direction) {
      var $this = $('#' + this.element.id);
      $this.addClass('animated');
      animatingCascade($this.find('.list-key-word'));
      //console.log(this.element.id + ' hit')
    },
    offset: '75%'
  })
  
});

$('#emailToCopy').on( "click tap",function() {
  var copyText = 'roberto.unsettled@gmail.com';
  navigator.clipboard.writeText(copyText);

  $('#emailToCopy').addClass('copied');
  setTimeout(function() {
    $('#emailToCopy').removeClass('copied');
   }, 2000);

});