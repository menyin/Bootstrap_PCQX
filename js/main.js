/**
 * Created by CNY on 2016/8/22.
 */
/*由于谷歌加载图片顺序问题所以不用
 $(function () {
 });*/

$(window).load(function () {
    reCarousellineheight();
    reSectionLineheight();
    $(window).resize(function () {
        reCarousellineheight();
        reSectionLineheight();
    });
    function reCarousellineheight() {
        var height = $('.carousel-inner img').eq(0).height() || $('.carousel-inner img').eq(1).height() || $('.carousel-inner img').eq(2).height();
        var fontSize = Math.floor(height / 5)
        $('.carousel-control').css('line-height', height + 'px');
        $('.carousel-control').css('font-size', fontSize + 'px');
    }
    //设置section图文居中垂直对齐
    function reSectionLineheight() {
        var creenWidth=document.documentElement.clientWidth;
        if (creenWidth>=768) {
            var height2 = $('.section2-img').height();
            var heightSelf2 = $('.section2-dsc').height();
            $('.section2-dsc').css('margin-top', (height2 - heightSelf2) / 2);
            var height3 = $('.section3-img').height();
            var heightSelf3 = $('.section3-dsc').height();
            $('.section3-dsc').css('margin-top', (height3 - heightSelf3) / 2);
        }
    }

//设置about页面锚点滚动
    $('.about .panel-body a').click(function () {
        var target=this.dataset.target;
        var offsetTop = $(target).offset().top;
        var navbarHegiht=$('.navbar').height();
        $('html,body').animate({scrollTop:offsetTop-navbarHegiht});
    });

});