function changeActive(){
    var loc = window.location.href; // returns the full URL
    loc = loc.substr(loc.lastIndexOf('/')+1);
    
    $("#sidebar > a > div").removeClass("active");
    $('.sidebar_xs_item').removeClass('active');
    $('.top_navbar_item > a').removeClass('top_navbar_item_active');
    
    $('#sidebar > a[href*="#'+loc+'"] > div').addClass('active');
    $('.sidebar_xs_item[href*="#'+loc+'"]').addClass('active');
    
    $('.top_navbar_item > a[href*="#'+loc+'"').addClass('top_navbar_item_active');
}


$(document).ready(function () {


    $(".sidebar_xs_item").on('click', function(){
        var loc = window.location.href; // returns the full URL
        loc = loc.substr(0,loc.lastIndexOf('/')-1);
        window.location.replace(loc+$(this).attr('href'));
    });


});