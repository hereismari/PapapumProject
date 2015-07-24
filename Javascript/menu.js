(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id))
        return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/all.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

window.fbAsyncInit = function() {
    FB.init({
        appId: '409742669131720',  // Change appId 409742669131720 with your Facebook Application ID
        status: true,
        xfbml: true,
        cookie: true
    });
};

$(document).ready(function() {
    $('.fb-share').click(function() {
        FB.ui({
            method: 'feed',
            name: 'Manoj Yadav',
            link: 'http://www.manojyadav.co.in/',
            picture: 'https://www.gravatar.com/avatar/119a8e2d668922c32083445b01189d67',
            description: 'Manoj Yadav a PHP Developer from Mumbai, India'
        });
    });
});

