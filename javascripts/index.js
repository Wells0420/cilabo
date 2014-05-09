$(function() {
    if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i))) {
        location.replace('mobile');
    }
    var isIE = navigator.userAgent.toUpperCase().indexOf("MSIE") == -1 ? false: true;
    var str_ua = navigator.userAgent.toLowerCase();
    if (isIE && str_ua.indexOf('10.0') < 0 && str_ua.indexOf('9.0') < 0) {
        location.replace('pc');
    }

    //dom绑定
    $('.sp6 .btn-2').click(function() {
        $('html,body').animate({
            scrollTop: 3000
        },
        400);
    });
    var sp1 = $('.sp1'),
    s1Bgs1 = $('.s1-bgs1'),
    s1Bgs2 = $('.s1-bgs2'),
    s1Bgs3 = $('.s1-bgs3'),
    sp1Title = $('.sp1-title'),
    sp1Subtitle = $('.sp1-subtitle'),
    sp1Pic1 = $('.sp1-pic1'),
    sp1Pic2 = $('.sp1-pic2'),
    sp1Pic3 = $('.sp1-pic3'),
    //sp2
    s2Title = $('.s2-title'),
    s2Pic1 = $('.s2-pic1'),
    s2Pic2 = $('.s2-pic2'),
    s2Pic3 = $('.s2-pic3'),
    s2Pic4 = $('.s2-pic4'),
    s2Pic5 = $('.s2-pic5'),
    s2Pic6 = $('.s2-pic6'),
    s2Pic7 = $('.s2-pic7'),
    s2Pic8 = $('.s2-pic8'),
    s2Pic9 = $('.s2-pic9'),
    s2Rot1 = $('#browse-FF .pie'),
    s2Rot2 = $('#browse-FF2 .pie2'),
    //sp3
    s3Title = $('.s3-title'),
    s3Pic1 = $('.s3-pic1'),
    s3Pic2 = $('.s3-pic2'),
    s3Pic4 = $('.s3-pic4'),
    s3Pic5 = $('.s3-pic5'),
    s3Pic6 = $('.s3-pic6'),
    s3Pic7 = $('.s3-pic7'),
    s3Pic8 = $('.s3-pic8'),
    s3Pic9 = $('.s3-pic9'),
    s3Pic10 = $('.s3-pic10'),
    s3Pic11 = $('.s3-pic11'),
    s3shu1 = $('.shuz1'),
    s3shu2 = $('.shuz2'),
    //sp4
    s4Title = $('.s4-title'),
    s4Sub = $('.s4-subtitle'),
    s4Nav = $('.s4-nav'),
    s4Pic1 = $('.s4-pic1'),
    s4Pic2 = $('.s4-pic2'),
    s4Pic3 = $('.s4-pic3'),
    s4Pic4 = $('.s4-pic4'),
    sctc1 = $('.tc4-1'),
    sctc2 = $('.tc4-2'),
    //sp5
    s5Title = $('.s5-title'),
    s5Pic1 = $('.s5-pic1'),
    s5Pic2 = $('.s5-pic2'),
    s5Pic3 = $('.s5-pic3'),
    s5Pic4 = $('.s5-pic4'),
    s5Pic5 = $('.s5-pic5'),
    s5Pic6 = $('.s5-pic6'),
    s5Pic7 = $('.s5-pic7'),
    s5Pic8 = $('.s5-pic8'),
    s5Pic9 = $('.s5-pic9'),
    s5Pic10 = $('.s5-pic10'),
    s5Pic11 = $('.s5-pic11'),
    s5Pic12 = $('.s5-pic12'),
    s5Pic13 = $('.s5-pic13'),
    s5Pic14 = $('.s5-pic14'),
    //sp6
    s6Title = $('.s6-title'),
    s6Content = $('.s6-content'),
    s6Pic1 = $('.s6-pic1'),
    s6Pic2 = $('.s6-pic2');

    $('.btn-1').css('top', ($(window).height() / 2 - 200) + 'px');
    $('.btn-2').css('top', ($(window).height() / 2 + 43) + 'px');
    $('.btn-a').css('top', ($(window).height() / 2 - 60) + 'px');

    window.onresize = function() {
        $('.btn-1').css('top', ($(window).height() / 2 - 200) + 'px');
        $('.btn-2').css('top', ($(window).height() / 2 + 43) + 'px');
        $('.btn-a').css('top', ($(window).height() / 2 - 60) + 'px');
        $('.sp6').height($(window).height());
    }

    /*---- 初始化 ----*/
    $('.sp6').height($(window).height());
    $(document).scrollTop(0);

    if ($(window).height() < 700) {
        $('.s6-pic1').css('width', '300px').css('height', '400px');
        $('.s6-pic2').css('left', '270px').css('bottom', '90px');
        sp1Pic1.css('top', ($(window).height() / 2 + 45) + 'px');
    }

    var isWebkit = function() {
        var str_ua = navigator.userAgent.toLowerCase();
        if ((/webkit/i.test(str_ua)) && (str_ua.indexOf('windows') > 0)) return true;
        else return false;
    }
    if (isWebkit()) {
        var win = document.getElementById('win');
        new scrollHelp(win);
    }
    var $windows = $(window),
    $winhei = $windows.height(),
    $dochei = $(document).height();
    ret();

    $windows.bind('scroll',
    function(e) {
        var sctop = ($windows.scrollTop());
        if (parallStart($('.sp1'), sctop)) s1parallaxScroll(sctop);
        if (parallStart($('.sp2'), sctop)) s2parallaxScroll(sctop);
        if (parallStart($('.sp3'), sctop)) s3parallaxScroll(sctop);
        if (parallStart($('.sp4'), sctop)) s4parallaxScroll(sctop);
        if (parallStart($('.sp5'), sctop)) s5parallaxScroll(sctop);
        if (parallStart($('.sp6'), sctop)) s6parallaxScroll(sctop);
        ret();
    });

    //计算是否开启动画
    function parallStart(e, tp) {
        var scrTop = $windows.scrollTop(); //滚动条高度
        var eTop = parseInt(e.css('top')); //div的顶部
        var eBtm = eTop + e.height(); //div底部
        var startTop = scrTop + $winhei; //开始动画顶部
        return ! ((eTop < startTop) && (eBtm < scrTop));
    }

    function s1parallaxScroll(sctop) {

        if (sctop < 400 && sctop > 60 && sp1Pic2.css('display') === 'none') {
            sp1Pic2.fadeIn(1000);

        } else if (sctop > 700 && sp1Pic2.css('display') !== 'none') {
            sp1Pic2.fadeOut(500);
        }
        ParallaxHelp.prBak(sp1, -0.2351111111, 0, sctop);
        ParallaxHelp.prTop(s1Bgs1, -1.1, -50, sctop);
        ParallaxHelp.prTop(s1Bgs2, -0.798123123123, 450, sctop);
        ParallaxHelp.prTop(s1Bgs3, -1.1123123123, 150, sctop);
        ParallaxHelp.prTop(sp1Title, 0.3822237, 130, sctop);
        ParallaxHelp.prTop(sp1Subtitle, 0.387, 178, sctop);
        ParallaxHelp.prTop(sp1Pic1, 0.1, 300, sctop);
        ParallaxHelp.prTop(sp1Pic2, 0.2, 600, sctop);
        ParallaxHelp.prTop(sp1Pic3, -0.23, 300, sctop);
    }
    function s2parallaxScroll(sctop) {
        if (sctop > 650 && sctop < 1500 && s2Pic1.css('display') === 'none') {
            s2Pic1.stop().fadeIn(600,
            function() {
                s2Rot1.addClass('rot1');
            });
            s2Pic2.stop().fadeIn(600,
            function() {
                s2Rot2.addClass('rot2');
            });
        } else if ((sctop < 650 || sctop > 1500) && s2Pic2.css('display') !== 'none') {
            s2Pic1.stop().fadeOut(400);
            s2Pic2.stop().fadeOut(400);
            s2Rot1.removeClass('rot1');
            s2Rot2.removeClass('rot2');
        }

        ParallaxHelp.prTop(s2Pic3, 0.35, 700, sctop);
        ParallaxHelp.prLeft(s2Pic4, -0.13, -750, sctop);
        ParallaxHelp.prTop(s2Pic4, 0.57, 570, sctop);
        ParallaxHelp.prTop(s2Pic5, 0.15, 470, sctop);
        ParallaxHelp.prLeft(s2Pic6, 0.23, 670, sctop);
        ParallaxHelp.prLeft(s2Pic7, 0.37, 770, sctop);
        ParallaxHelp.prTop(s2Pic7, 0.5, 600, sctop);
        ParallaxHelp.prFade(s2Pic8, 1100, 1950, 1000, sctop);
        ParallaxHelp.prFade(s2Pic9, 1100, 1950, 1000, sctop);
    }
    function s3parallaxScroll(sctop) {
        // if (sctop>1850  && sctop<2600 && $('.sp3 .btn-1').css('display')==='none') {	
        if (sctop > 1850 && sctop < 2600) {
            $('.sp3 .btn-2').stop().fadeIn(600,
            function() {
                s3Pic4.stop().fadeIn(100);
                s3Pic5.stop().fadeIn(100,
                function() {
                    s3shu1.stop().animate({
                        width: 165,
                        height: 173,
                        left: 114,
                        top: 40
                    },
                    600);
                    s3shu2.stop().animate({
                        width: 181,
                        height: 145,
                        left: 110,
                        top: 51
                    },
                    600);
                    s3Pic6.animate({
                        marginLeft: '-334px',
                        opacity: '0.9'
                    },
                    400);
                    s3Pic7.animate({
                        marginLeft: '80px',
                        opacity: '0.9'
                    },
                    400);
                    ParallaxHelp.sp3Ani([s3Pic8, s3Pic9, s3Pic10, s3Pic11], 1820, 2550, 250, sctop);
                });
            });
        } else if ((sctop < 1750 || sctop > 2600) && $('.sp3 .btn-1').css('display') === 'block') {
            s3shu1.stop().animate({
                width: 0,
                height: 0,
                left: 198,
                top: 132
            },
            1000);
            s3shu2.stop().animate({
                width: 0,
                height: 0,
                left: 196,
                top: 132
            },
            1000);
        }

        ParallaxHelp.prWei(s3Pic1, 2200, 2600, 2000, sctop);
        ParallaxHelp.prTop(s3Pic1, -0.551, -770, sctop);
        ParallaxHelp.prWei(s3Pic2, 2200, 2600, 2000, sctop);
        ParallaxHelp.prTop(s3Pic2, 0.551, 1570, sctop);
        ParallaxHelp.prTop(s3Pic6, -0.17386, 160, sctop);
        ParallaxHelp.prTop(s3Pic7, -0.17386, 160, sctop);

    }
    function s4parallaxScroll(sctop) {
        if (sctop > 2820 && sctop < 3600) {
            $('.sp4 .btn-1').stop().fadeIn(2000);
            $('.sp4 .btn-2').stop().fadeIn(2000);
            $('.sp4 .btn-a').stop().fadeIn(2000);
        } else if ((sctop < 2750 || sctop > 3620) && $('.sp4 .btn-1').css('display') !== 'none') {}
        if (sctop > 3216) {
            s4Title.fadeOut(600);
        } else {
            s4Title.fadeIn(600);
        }
        if (sctop > 2916) {
            s4Nav.fadeIn(600);
        } else {
            s4Nav.fadeOut(600);
        }
        ParallaxHelp.prTop(s4Sub, 0.08145, 500, sctop);
        ParallaxHelp.prTop(s4Nav, -0.2745, -400, sctop);
        ParallaxHelp.prTop(s4Pic1, -0.7845, -2200, sctop);
        ParallaxHelp.prTop(s4Pic2, -0.2745, -400, sctop);
        ParallaxHelp.prTop(s4Pic3, 0.1745, 1090, sctop);
        ParallaxHelp.prTop(s4Pic4, -0.2745, -400, sctop);
        if (sctop > 2800 && sctop < 3600 && (s4Pic4.css('marginLeft') == '-250px')) {
            s4Pic4.stop().animate({
                marginLeft: -150,
                opacity: 1
            },
            1000,
            function() {
                s4Pic2.stop().fadeIn(600,
                function() {
                    sctc1.animate({
                        width: 165,
                        height: 136,
                        right: 0,
                        top: 0
                    },
                    200,
                    function() {
                        sctc2.animate({
                            height: 68,
                            opacity: 1
                        },
                        600);
                    });
                });
            });
        }
    }
    function s5parallaxScroll(sctop) {
        if (sctop > 3820 && sctop < 4500 && $('.sp5 .btn-1').css('display') === 'none') {
            $('.sp5 .btn-1').stop().fadeIn(1000);
            $('.sp5 .btn-2').stop().fadeIn(1000);
            $('.sp5 .btn-a').stop().fadeIn(1000);
        } else if ((sctop < 3750 || sctop > 4620) && $('.sp5 .btn-1').css('display') !== 'none') {}
        ParallaxHelp.sp5pho([s5Pic2, s5Pic3, s5Pic4], 3700, 5000, 300, sctop);
        ParallaxHelp.prFade(s5Pic5, 3750, 4850, 800, sctop);
        ParallaxHelp.prFade(s5Pic6, 3850, 4850, 800, sctop);
        ParallaxHelp.prFade(s5Pic7, 3970, 4950, 800, sctop);
        ParallaxHelp.sp5Ani([s5Pic8, s5Pic9, s5Pic10, s5Pic11, s5Pic12, s5Pic13, s5Pic14], 3950, 5000, 100, sctop);
    }
    function s6parallaxScroll(sctop) {
        ParallaxHelp.prTop(s6Title, -0.251, -1100, sctop);
        ParallaxHelp.prTop(s6Content, -0.351, -1450, sctop);

        if (sctop >= 4700 && s6Pic1.css('left') !== '0px') {
            s6Content.fadeIn(700,
            function() {
                s6Pic1.stop().animate({
                    left: '0px'
                },
                600,
                function() {
                    s6Pic2.fadeIn(600);
                    $('.sp6 .btn-1').stop().fadeIn(1000);
                    $('.sp6 .btn-2').stop().fadeIn(1000);
                    $('.sp6 .btn-a').stop().fadeIn(1000);
                });
            });
        } else if (sctop < 4700 && s6Pic1.css('left') == '0px') {
            s6Pic1.stop().animate({
                left: '-500px'
            },
            600,
            function() {
                s6Pic2.fadeOut(300,
                function() {
                    s6Content.fadeOut(200);
                });
            });
        }
    }

    var dt = 4.32; //5.21
    var dl = 0;
    var r = 900;

    function ret() {
        var dlt = ($windows.scrollTop() + $(window).height() / 2) / $(document).height();
        // if (dt<4.66913) {//4.56913
        dt = dlt * 0.824 + 4.31;
        var Py = Math.sin(dt) * r;
        var Px = Math.cos(dt) * r;
        $('#redtit').css({
            'left': (Px + 340) + 'px',
            'top': (Py + r) + 'px'
        });
        console.log(dlt);
        // }else if (dt>4.66913) {
        // 	dt = dlt * 0.833+4.33;
        // 	var Py=Math.sin(dt)*r;
        // 	var Px=Math.cos(dt)*r;
        // 	$('#redtit').css({'left':(Px+370)+'px','top':(Py+627)+'px'});
        // }
        if (dt < 4.4317) {
            $('#redtit').css('background', 'url(images/titpr.png) 0 0 no-repeat');
        } else if (dt > 4.4317 && dt < 4.55) {
            $('#redtit').css('background', 'url(images/titpr2.png) 0 0 no-repeat');
        } else if (dt > 4.55 && dt < 4.7456) {
            $('#redtit').css('background', 'url(images/titpr3.png) 0 0 no-repeat');
        } else if (dt > 4.7463 && dt < 4.8898) {
            $('#redtit').css('background', 'url(images/titpr4.png) 0 0 no-repeat');
        } else if (dt > 4.88 && dt < 5.011) {
            $('#redtit').css('background', 'url(images/titpr5.png) 0 0 no-repeat');
        } else if (dt > 5.02) {
            $('#redtit').css('background', 'url(images/titpr6.png) 0 0 no-repeat');
        }
    }

    $('.sp01').click(function() {
        $('html,body').animate({
            scrollTop: 0
        },
        600,
        function() {
            $('html,body').animate({
                scrollTop: 1
            },
            20);
        });
    });
    $('.sp02').click(function() {
        $('html,body').animate({
            scrollTop: 1000
        },
        600,
        function() {
            $('html,body').animate({
                scrollTop: 1001
            },
            10);
        });
    });
    $('.sp03').click(function() {
        $('html,body').animate({
            scrollTop: 2000
        },
        600,
        function() {
            $('html,body').animate({
                scrollTop: 2001
            },
            10);
        });
    });
    $('.sp04').click(function() {
        $('html,body').animate({
            scrollTop: 3000
        },
        600,
        function() {
            $('html,body').animate({
                scrollTop: 3001
            },
            10);
        });
    });
    $('.sp05').click(function() {
        $('html,body').animate({
            scrollTop: 4000
        },
        600,
        function() {
            $('html,body').animate({
                scrollTop: 4000
            },
            10);
        });
    });
    $('.sp06').click(function() {
        $('html,body').animate({
            scrollTop: 5100
        },
        600,
        function() {
            $('html,body').animate({
                scrollTop: 5101
            },
            10);
        });
    });
    sp1Pic2.click(function() {
        $('html,body').animate({
            scrollTop: 4000
        },
        600);
    });
    $('.site-logo').click(function() {
        $('html,body').animate({
            scrollTop: 0
        },
        600);
    });

    var Img = function() {
        var T$ = function(id) {
            return document.getElementById(id);
        }
        var ua = navigator.userAgent,
        isIE = /msie/i.test(ua) && !window.opera;
        var i = 0,
        sinDeg = 0,
        cosDeg = 0,
        timer = null;
        var rotate = function(target, degree) {
            target = T$(target);
            var orginW = target.clientWidth,
            orginH = target.clientHeight;
            clearInterval(timer);
            function run(angle) {
                if (isIE) { // IE
                    cosDeg = Math.cos(angle * Math.PI / 180);
                    sinDeg = Math.sin(angle * Math.PI / 180);
                    with(target.filters.item(0)) {
                        M11 = M22 = cosDeg;
                        M12 = -(M21 = sinDeg);
                    }
                    target.style.top = (orginH - target.offsetHeight) / 2 + 'px';
                    target.style.left = (orginW - target.offsetWidth) / 2 + 'px';
                } else if (target.style.MozTransform !== undefined) { // Mozilla
                    target.style.MozTransform = 'rotate(' + angle + 'deg)';
                } else if (target.style.OTransform !== undefined) { // Opera
                    target.style.OTransform = 'rotate(' + angle + 'deg)';
                } else if (target.style.webkitTransform !== undefined) { // Chrome Safari
                    console.log(angle);
                    target.style.webkitTransform = 'rotate(' + angle + 'deg)';
                } else {
                    target.style.transform = "rotate(" + angle + "deg)";
                }
            }

            timer = setInterval(function() {
                i += 10;
                run(i);
                if (i > degree - 1) {
                    i = 0;
                    clearInterval(timer);
                }
            },
            0);
        }
        return {
            rotate: rotate
        }
    } ();
});