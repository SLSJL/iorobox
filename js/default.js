/**
 * Created by SUN on 2016/3/16 0016.
 */

$(function(){
    initFrame();
    bindEvent();

});

$(window).resize(function(){

    initFrame();
});

function initFrame(){
    var windowWidth = $(window).width();

    var menu_main_width = $('.menu-main').width();
    $('.edit').width(windowWidth - menu_main_width);

    var edit_width = $('.edit').width(),
        window_btn_width = $('.window-btn-container').width();
    $('.file-container').width(edit_width - window_btn_width);
}

function bindEvent(){

    var $menubtn = $('.menu-btn');

    $menubtn.click(function(){
        var $menubtnactive = $(".menu-btn-active");

        // 1 . 移除上一个menu-btn-active样式
        if($menubtnactive.css('background-image') != 'none'){
            var c = $menubtnactive.attr('id');
            $menubtnactive.css('background-image',"url(images/svg/"+ c +".svg)");
        }else {
            $(".menu-btn-active > span").css('color','gray');
        }
        $menubtnactive.removeClass('menu-btn-active');

        // 2. 重新获取menu-btn-active样式，改变内容样式
        $(this).addClass('menu-btn-active');

        $menubtnactive = $(".menu-btn-active");

        if($menubtnactive.css('background-image') != 'none'){
            var c = $menubtnactive.attr('id');
            $menubtnactive.css('background-image',"url(images/svg/"+ c +"-hover.svg)");
        }else {
            $(".menu-btn-active > span").css('color','white');
        }

        // 3. 切换子菜单内容
        switchSubmenu(c);
    });

    swichMenuActive();
}

function swichMenuActive(){
    var $menubtnactive = $(".menu-btn-active");
    if($menubtnactive.css('background-image')){
        var c = $menubtnactive.attr('id');
        $menubtnactive.css('background-image',"url(images/svg/"+ c +"-hover.svg)");
    }

    $('#sub_menu_list').append(logicHtml);
}


function switchSubmenu(id){
    var $submenulist = $('#sub_menu_list');

    $submenulist.children().fadeOut(function(){
        $submenulist.children().remove()
    });

    setTimeout(function(){
        switch (id){
            case 'logic':{
                $submenulist.append(logicHtml);
                break;
            }
            case 'function':{
                $submenulist.append(functionHtml);
                break
            }
        }
    }, 500);

}
