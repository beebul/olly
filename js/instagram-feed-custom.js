$(document).ready(function() {

    ////// How to get an access token:
    ////// http://jelled.com/instagram/access-token
    ////// https://instagram.com/oauth/authorize/?client_id=3d3c6ba884ad40a1956839d49349f9b6&redirect_uri=http://localhost&response_type=token
    var userFeed = new Instafeed({
        get: 'user',
        userId: 47217023, //oj_visual_merc :3937365398
        limit: 36,
        resolution: 'standard_resolution',
        accessToken: '47217023.3d3c6ba.5110c05ce10f4cecaa98595564fae9fd',
        sortBy: 'most-recent',
        template: '<div class="4u 6u(medium) 6u(small) 12u(xsmall) image-fit instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
        //template: '<div class="4u 6u(medium) 6u(small) 12u(xsmall) image-fit instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a><h2><span>{{caption}}</span></h2></div>',
    });
    userFeed.run();

    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        preload: [1,3], // read about this option in next Lazy-loading section
        navigateByImgClick: true,
        gallery: {
            enabled: true
        }
    });

});
