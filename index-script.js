function toggleLogoVisibility(visibility) {

    if (visibility) {
        $("#logo-text").hide();

        // $("#helloAccountName").hide();
        // $("#accountPic").hide();
        // $("#yourAccount").show();
        // $(".top_menu_icon").hide();
        // $(".top_menu_text").show();


    } else {
        $("#logo-text").show();

        // $("#helloAccountName").show();
        // $("#accountPic").show();
        // $("#yourAccount").hide();
        // $(".top_menu_icon").show();
        // $(".top_menu_text").hide();

    }
}
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

    navbar_visible = $("#toggler").is(":visible");
    toggleLogoVisibility(navbar_visible)

    $(window).resize(function () {
        navbar_visible = $("#toggler").is(":visible");
        toggleLogoVisibility(navbar_visible);
    });

    $(".sidebar_xs_item").on('click', function(){
        var loc = window.location.href; // returns the full URL
        loc = loc.substr(0,loc.lastIndexOf('/')-1);
        window.location.replace(loc+$(this).attr('href'));
    });


});