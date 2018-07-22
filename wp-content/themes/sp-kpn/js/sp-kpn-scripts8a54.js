(function(a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|com.asianmedia.sp2|com.asianmedia.ios|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
})(navigator.userAgent || navigator.vendor || window.opera);
jQuery.extend({
    redirectPost: function(location, args)
    {
        var form = '';
        jQuery.each( args, function( key, value ) {
            form += '<input type="hidden" name="'+key+'" value="'+value+'">';
        });
        jQuery('<form action="' + location + '" method="POST">' + form + '</form>').appendTo(jQuery(document.body)).submit();
    }
});
jQuery( document ).ready(function( $ ) {
    //click Search button
    $("#td-header-search-top").on("click", function(event){
        event.preventDefault();
        submitSearchToGoogle($);
    });
    //press enter on Search input field
    $("input#td-header-search").off("keydown");
    $("input#td-header-search").unbind("keydown");
    $("input#td-header-search").on("keyup", function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            event.preventDefault();
            submitSearchToGoogle($);
        }
    });
    //press enter on Mobile Search field
    $("input#td-header-search-mob").off("keydown");
    $("input#td-header-search-mob").on("keyup", function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            event.preventDefault();
            submitMobileSearchToGoogle($);
        }
    });
    //caching of header
    selectMenuFromCachedHeader($);
    //wiki
    wikiNavigation($);
    wikiNodeSelect($);
    wikiLoadMoreClick($);

    //custom selectbox

    $('.custom-select').niceSelect();
    $('.custom-select ul').children("li:first").remove();



    $(".calendar-full-year table").each(function() {
        var count = $(this).index();
        $(this).addClass("month-" + count);
    });


    /* Birthday Page Functions */
    fullYearFunctions($)
    singleMonthFunctions($);
    artistAutoCompleteClickOutside($);
    scrollTopButton($);

});
function scrollTopButton($){
    //adding scroll to the top for aristis/groups/agencies wikis on mobile
    if($(".wikiwannabe_scroll_top_visible").length > 0)
        $(".td-scroll-up").show();
}
function wikiNavigation($) {
        $("ul.wikiwannabe_alphabetic_index li a").on("click", function (event) {
            event.stopImmediatePropagation();

            $(".wikiwannabe-section-wrapper").addClass("wikiwannabe_hidden");
            var index = $(this).data("index");
            $("#wrapper_" + index).removeClass("wikiwannabe_hidden");
        });
}
function wikiNodeSelect($){
    $(".wikiwannabe_toggle").on('click', function(){
            if (!$(this).hasClass("wikiwannabe_toggle_active")) {
                if ($(window).width() < 768) {
                    $(this).addClass("wikiwannabe_toggle_active");
                    $(this).find(".wikiwannabe_toggle_content").addClass("is_active");
                    var image = $(this).find(".wikiwannabe_toggle_content img")[0];
                    var image_url = $(image).data("image");
                    $(image).attr("src", image_url);
                }else{
                    var row = $(this).closest(".td-pb-row")[0];
                    $(row).find(".wikiwannabe_toggle").removeClass("wikiwannabe_toggle_active");
                    $(this).addClass("wikiwannabe_toggle_active");
                    var card = $(this).find(".wikiwannabe_toggle_content").html();
                    var cardholder = $(row).next(".td-pb-row.wikiwannabe_cardholder");
                    $(cardholder).find(".wikiwannabe_cardholder_content").empty().append(card);
                    var image = $(cardholder).find("img")[0];
                    var image_url = $(image).data("image");
                    $(image).attr("src", image_url);
                }
            } else {
                $(this).removeClass("wikiwannabe_toggle_active");
                if ($(window).width() < 768) {
                    $(this).find(".wikiwannabe_toggle_content").removeClass("is_active");
                }else{
                    var row = $(this).closest(".td-pb-row")[0];
                    var cardholder = $(row).next(".td-pb-row.wikiwannabe_cardholder");
                    $(cardholder).find(".wikiwannabe_cardholder_content").empty();
                }
            }
    });

}

function wikiLoadMoreClick($){
    $(".wikiwannabe_load_more").on("click", function(){
        var target = $(this).data("target");
        var row = 0;
        var total_rows = $("."+target).length;
        $("."+target).each(function(){
            if ($(this).hasClass("wikiwannabe_hidden") && row < 4) {
                $(this).removeClass("wikiwannabe_hidden");
                row++;
            }else if(!$(this).hasClass("wikiwannabe_hidden")){
                total_rows--;
            }
        });

        if(total_rows == row || row == 0){
            $(this).parents(".td-pb-row").addClass("wikiwannabe_hidden");
        }

        return false;
    });
}

function artistAutoCompleteClickOutside($){
    $(window).click(function() {
        $("#calendar-artist-autocomplete").hide();
    });

    $('#menucontainer').click(function(event){
        event.stopPropagation();
    });
}


function fullYearFunctions($){
    if($(".calendar-full-year").length > 0){
        $(".calendar-full-year table.calender-month tbody tr td.calendar-item").on("click", function(){
            var day = $(this).text();
            var month = $(this).closest("table.calender-month").data("month");
            var url = $(this).closest("table.calender-month").data("target");

            $.redirectPost(url, {d: day, M: month});
        });
        $(".bday-full-year-header select[name=\"calender_month_dropdown\"]").on("change", function(){
            var month = $(this).val();
            var url = $(this).data("target");

            $.redirectPost(url, {M: month});
        });
        $(".calendar-single-month").on("click","table.calendar-month tbody tr td.calendar-item", function(){
            $("table.calendar-month tbody tr td.calendar-item").removeClass("calendar-selected-item");
            $(this).addClass("calendar-selected-item");
            var month = $(this).closest('.calendar-month').data("month");
            var day = $(this).text();
            updateOnlyList(month, day);
        });
        $(".bday-full-year-header input[name=\"search_by_artist\"]").on('keyup', function(){
            $search_term = $(this).val();
            if($search_term.length > 0) {
                updateAutoComplete($search_term);
            }
        });
        $(".bday-full-year-header #calendar-artist-autocomplete").on("click", ".calendar-artist-suggestion", function(){
            event.stopPropagation();
            var artist_id = $(this).data('value');
            var url = $(this).closest(".bday-full-year-header").find("select").data("target");

            $.redirectPost(url, {A: artist_id});
        });
    }
}

function singleMonthFunctions($){
    if((".calendar-single-month").length > 0){
        $(".bday-months-header button[name=\"calender_full_year\"]").on("click", function(){
            window.location.href = $(this).data("target");
        });
        $(".calendar-single-month").on("click",".calendar-nav", function(){
            var month = $(this).data("month");
            updateCalendarAndList(month, '');
        });
        $(".bday-months-header select[name=\"calender_month_dropdown\"]").on("change", function(){
            var month = $(this).val();
            updateCalendarAndList(month, '');
        });
        $(".calendar-single-month").on("click","table.calendar-month tbody tr td.calendar-item", function(){
            if($(this).hasClass("calendar-selected-item") ||
                    $(this).hasClass("calendar-last-month") ||
                    $(this).hasClass("calendar-next-month"))
                return;
            $("table.calendar-month tbody tr td.calendar-item").removeClass("calendar-selected-item");
            $(this).addClass("calendar-selected-item");
            var month = $(this).closest('.calendar-month').data("month");
            var day = $(this).text();
            updateOnlyList(month, day);
        });
        $(".bday-months-header input[name=\"search_by_artist\"]").on('keyup', function(){
            $search_term = $(this).val();
            if($search_term.length > 0) {
                updateAutoComplete($search_term);
            }else{
                var month = $("table.calendar-month").data("month");
                var day = $("table.calendar-month tbody tr td.calendar-item.calendar-selected-item").text();
                updateOnlyList(month, day);
            }
        });
        $("#calendar-artist-autocomplete").on("click", ".calendar-artist-suggestion", function(){
            event.stopPropagation();
            var artist_id = $(this).data('value');
            var artist_name = $(this).text();
            $("input[name=\"search_by_artist\"]").val(artist_name);
            $("#calendar-artist-autocomplete").hide();
            updateCalendarArtist(artist_id);
        });
    }
}

function updateCalendarAndList(month, day){
    jQuery.ajax({
        type: 'POST',
        url: myAjax.ajaxurl,
        data: {
            action:'get_calendar_month',
            M: month,
            d: day,
        },
        success: function(response){
            var responseObj = JSON.parse(response)
            jQuery('.calendar-single-month').html(responseObj.calendar);
            jQuery('.birthday-single-list').html(responseObj.list);
        },
        error: function(){
            alert('error');
        }
    });
}

function updateOnlyList(month, day){
    jQuery.ajax({
        type: 'POST',
        url: myAjax.ajaxurl,
        data: {
            action:'get_bday_list',
            M: month,
            d: day,
        },
        success: function(response){
            jQuery('.birthday-single-list').html(response);
        },
        error: function(){
            alert('error');
        }
    });
}

function updateCalendarArtist(artist_id){
    jQuery.ajax({
        type: 'POST',
        url: myAjax.ajaxurl,
        data: {
            action:'get_artist_bday',
            A: artist_id
        },
        success: function(response){
            var responseObj = JSON.parse(response)
            jQuery('.calendar-single-month').html(responseObj.calendar);
            jQuery('.birthday-single-list').html(responseObj.list);
        },
        error: function(){
            alert('error');
        }
    });
}

function updateAutoComplete(search_term){
    jQuery.ajax({
        type: 'POST',
        url: myAjax.ajaxurl,
        data: {
            action:'get_artists',
            s: search_term,
        },
        success: function(response){
            if(response.length > 0){
                var artists = JSON.parse(response);
                jQuery("#calendar-artist-autocomplete").empty().show();
                jQuery.each(artists, function(i, item){
                    jQuery("#calendar-artist-autocomplete").append("<div class='calendar-artist-suggestion' data-value='"+item.post_id+"'>"+item.meta_value+"</div>");
                });
            }
        },
        error: function(){
            alert('error');
        }
    });
}

function submitSearchToGoogle($){
    var value = $("#td-header-search").val();
    var input = $(".wp-google-search-wrapper").find("input[name=\"search\"]");
    var search_button = $(".wp-google-search-wrapper").find("button.gsc-search-button");
    $(input).val(value);
    $(search_button).trigger('click');
}

function submitMobileSearchToGoogle($){
    var value = $("#td-header-search-mob").val();
    var input = $(".wp-google-search-wrapper").find("input[name=\"search\"]");
    var search_button = $(".wp-google-search-wrapper").find("button.gsc-search-button");
    $(input).val(value);
    $(search_button).trigger('click');
}

function selectMenuFromCachedHeader($){
    var nav_menu = $(".menu-header-menu-container ul.sf-menu");

    var categories = $(nav_menu).find("li.menu-item");
    $(categories).removeClass("current-menu-item").removeClass("current-category-ancestor");
    $(categories).each(function(){
        var found = false;
        var is_ancestor = false;
        var category = $(this);
        var sub_categories = $(this).find("ul.sub-menu li .td_mega_menu_sub_cats .block-mega-child-cats a");
        if(sub_categories.length > 0) {
            $(sub_categories).each(function (index) {
                var sub_category = $(this);
                var url = $(sub_category).attr("href");
                if (url == location.href) {
                    found = true;
                    is_ancestor = index > 0;
                }
            });
        }else{
            var category_url = $(category).find("a").attr("href");
            if( category_url == location.href){
                found = true;
                is_ancestor = false;
            }
        }

        if(!found) {
            $(category).removeClass("current-menu-item");
        }else if(!is_ancestor){
            $(category).addClass("current-menu-item");
        }else{
            $(category).addClass("current-category-ancestor");
        }
        
        $(sub_categories).removeClass("cur-sub-cat");
        $(sub_categories).first().addClass("cur-sub-cat");
    });
}