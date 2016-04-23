/**
 * Created by SUN on 2016/3/16 0016.
 */

$(function () {
    initFrame();
    bindEvent();

    var $jkyk = $("#jkyk");
    var flag = 0;

    var $listItem = $('#jkyk > ul > li');
    var $ul = $('#jkyk > ul');


    $('.jkyk-btn').click(function (evet) {
        evet.stopPropagation();
        $jkyk.animate({height: '286px'}, 'fast');
    });

    $listItem.click(function (evet) {
        evet.stopPropagation();

        var v = $(this).text();
        if(v == '上一页' || v == '下一页'){

        }else {
            $('.jkyk-txt').val(v);
            $jkyk.animate({height: '30'}, 'slow');
        }
    });

    $ul.mouseleave(function (evet) {
        evet.stopPropagation();
        $jkyk.animate({height: '30'}, 'slow');
    });
});

$(window).resize(function () {
    initFrame();
});

function initFrame() {
    var windowWidth = $(window).width();

    var menu_main_width = $('.menu-main').width();
    $('.edit').width(windowWidth - menu_main_width);

    var edit_width = $('.edit').width(),
        window_btn_width = $('.window-btn-container').width();
    $('.file-container').width(edit_width - window_btn_width);
}

function bindEvent() {

    var $menubtn = $('.menu-btn');

    $menubtn.click(function () {
        var $menubtnactive = $(".menu-btn-active");

        // 1 . 移除上一个menu-btn-active样式
        if ($menubtnactive.css('background-image') != 'none') {
            var c = $menubtnactive.attr('id');
            $menubtnactive.css('background-image', "url(images/svg/" + c + ".svg)");
        } else {
            $(".menu-btn-active > span").css('color', 'gray');
        }
        $menubtnactive.removeClass('menu-btn-active');

        // 2. 重新获取menu-btn-active样式，改变内容样式
        $(this).addClass('menu-btn-active');

        $menubtnactive = $(".menu-btn-active");
        var c = $menubtnactive.attr('id');

        if ($menubtnactive.css('background-image') != 'none') {
            $menubtnactive.css('background-image', "url(images/svg/" + c + "-hover.svg)");
        } else {
            $(".menu-btn-active > span").css('color', 'white');
        }

        // 3. 切换子菜单内容
        switchSubmenu(c);
    });

    swichMenuActive();
}

function swichMenuActive() {
    var $menubtnactive = $(".menu-btn-active");
    if ($menubtnactive.css('background-image')) {
        var c = $menubtnactive.attr('id');
        $menubtnactive.css('background-image', "url(images/svg/" + c + "-hover.svg)");
    }

    $('#sub_menu_list').append(logicHtml);
}


function switchSubmenu(id) {
    var $submenulist = $('#sub_menu_list');

    $submenulist.children().fadeOut(function () {
        $submenulist.children().remove()
    });

    setTimeout(function () {
        switch (id) {
            case 'logic':
            {
                $submenulist.append(logicHtml);
                break;
            }
            case 'function':
            {
                $submenulist.append(functionHtml);
                break;
            }
            case 'clock':
            {
                $submenulist.append(timeHtml);
                break;
            }
            case 'IO':
            {
                $submenulist.append(ioHtml);
                break;
            }
            case 'AD':
            {
                $submenulist.append(adHtml);
                break;
            }
            case 'COM':
            {
                $submenulist.append(comHtml);
                break;
            }
            default:
                ;
        }
    }, 500);

}
