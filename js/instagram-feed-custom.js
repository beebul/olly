$(document).ready(function() {

  ////// How to get an access token:
  ////// http://jelled.com/instagram/access-token
  ////// https://instagram.com/oauth/authorize/?client_id=3d3c6ba884ad40a1956839d49349f9b6&redirect_uri=http://localhost&response_type=token
  var userFeed = new Instafeed({
    get: 'user',
    userId: 3937365398, //oj_visual_merc
    limit: 36,
    resolution: 'standard_resolution',
    accessToken: '3937365398.ae9b6bb.b2aa6e18bf684db4bf5421a7e32764d5',
    sortBy: 'most-recent',
    template: '<div class="4u 6u(medium) 6u(small) 12u(xsmall) instaimg"><a href="{{image}}" title="{{caption}}" target="_blank" class="galleryImage"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    //template: '<div class="4u 6u(medium) 6u(small) 12u(xsmall) image-fit instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a><h2><span>{{caption}}</span></h2></div>',
  });
  userFeed.run();

  // This will create a single gallery from all elements that have class "gallery-item"
  $('.gallery').magnificPopup({
    type: 'image',
    delegate: 'a',
    //preload: [1, 3], // read about this option in next Lazy-loading section
    navigateByImgClick: true,
    gallery: {
      enabled: true
    }
  });


  var images = ['banner.jpg', 'banner1.jpg'];

  //$("#page-wrapper").css({background:'linear-gradient(red,blue,red)'});

  $('#page-wrapper').css({'background-image': 'url(/olly/images/' + images[Math.floor(Math.random() * images.length)] + ')'});
  $('#page-wrapper').css({
    background: 'linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)'
  });
  //$("#page-wrapper").css({background:'linear-gradient(red,blue,red)'});

});
