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



$(document).ready(function () {

    navbar_visible = $("#toggler").is(":visible");
    toggleLogoVisibility(navbar_visible)

    $(window).resize(function () {
        navbar_visible = $("#toggler").is(":visible");
        toggleLogoVisibility(navbar_visible);
    });
});