jQuery( document ).ready(function( $ ) {
    show_notification_box($)
    //show_hide_on_scroll($);
    remove_on_close($);

    show_notification_box_mobile($);
    show_hide_on_scroll_on_mobile($);
    remove_on_close_on_mobile($);
} );

function show_notification_box($){
    //remove on mobile
    (function(a) {
        (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|com.asianmedia.sp2|com.asianmedia.ios|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
    })(navigator.userAgent || navigator.vendor || window.opera);

    if(jQuery.browser.mobile){
        $('.td-feature-notification-box').remove();
        return;
    }

    //remove when viewing the latest post
    var is_post_page = $('body.single.single-post').length > 0;
    if(is_post_page) {
        var page_post_id = $('body.single.single-post').attr('class').match(/\bpostid-(\d+)\b/)[1];
        var feature_box_post_id = $(".td-feature-notification-box").data('id');

        if (page_post_id == feature_box_post_id) {
            $('.td-feature-notification-box').remove();
            return;
        }
    }

    //remove when user has closed it once in the current session
    if (typeof(Storage) !== "undefined") {
        if (sessionStorage.getItem("featured-box-closed")) {
            $('.td-feature-notification-box').remove();
            return;
        }
    }

    $('.td-feature-notification-box').addClass('td-display-notification-box');
}

function remove_on_close($){
    $(".td-close-feature-notification-box").on("click", function(){
        $('.td-feature-notification-box').removeClass('td-display-notification-box');
        setTimeout(function(){
            $(".td-feature-notification-box").remove();
            if (typeof(Storage) !== "undefined") {
                sessionStorage.setItem("featured-box-closed", true);
            }
        }, 700)

    });
}

function show_hide_on_scroll($){
    $(document).scroll(function() {
        var y = $(window).scrollTop();
        if (y > 800) {
            $('.td-feature-notification-box').removeClass('td-display-notification-box');
        } else {
            $('.td-feature-notification-box').addClass('td-display-notification-box');
        }
    });
}

/*************Mobile********************/

function show_notification_box_mobile($){
    //remove on mobile
    (function(a) {
        (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|com.asianmedia.sp2|com.asianmedia.ios|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
    })(navigator.userAgent || navigator.vendor || window.opera);

    if(!jQuery.browser.mobile){
        $('.td-mobile-feature-notification-box').remove();
        return;
    }

    //remove when viewing the latest post
    var is_post_page = $('body.single.single-post').length > 0;
    if(is_post_page) {
        var page_post_id = $('body.single.single-post').attr('class').match(/\bpostid-(\d+)\b/)[1];
        var feature_box_post_id = $(".td-mobile-feature-notification-box").data('id');

        if (page_post_id == feature_box_post_id) {
            $('.td-mobile-feature-notification-box').remove();
            return;
        }
    }

    //remove when user has closed it once in the current session
    if (typeof(Storage) !== "undefined") {
        if (sessionStorage.getItem("mobile-featured-box-closed")) {
            $('.td-mobile-feature-notification-box').remove();
            return;
        }
    }

    $('.td-mobile-feature-notification-box').addClass('td-display-mobile-notification-box');
}

function remove_on_close_on_mobile($){
    $(".td-close-mobile-feature-notification-box").on("click", function(){
        $('.td-mobile-feature-notification-box').removeClass('td-display-mobile-notification-box');
        setTimeout(function(){
            $(".td-mobile-feature-notification-box").remove();
            if (typeof(Storage) !== "undefined") {
                sessionStorage.setItem("mobile-featured-box-closed", true);
            }
        }, 700)

    });
}

function show_hide_on_scroll_on_mobile($){
    $(document).scroll(function() {
        var y = $(window).scrollTop();
        if (y < 800) {
            $('.td-mobile-feature-notification-box').removeClass('td-display-mobile-notification-box');
        } else {
            $('.td-mobile-feature-notification-box').addClass('td-display-mobile-notification-box');
        }
    });
}