$(document).ready(function() {

    ////// How to get an access token:
    ////// http://jelled.com/instagram/access-token
    ////// https://instagram.com/oauth/authorize/?client_id=3d3c6ba884ad40a1956839d49349f9b6&redirect_uri=http://localhost&response_type=token
    var userFeed = new Instafeed({
        get: 'user',
        userId: 47217023,
        limit: 12,
        resolution: 'standard_resolution',
        /////// accessToken: '47217023.3d3c6ba.5110c05ce10f4cecaa98595564fae9fd',
        accessToken: '47217023.ba4c844.d10e45cf32fe468b8274e17bf6798f51',
        sortBy: 'most-recent',
        template: '<div class="instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" height="320" class="img-fluid"/></a></div>',
    });
    userFeed.run();
    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });

});
