//  hover in header

$('#home').click(function () {
    $(this).addClass('active');
    $('#about').removeClass('active');
    $('#contact').removeClass('active');
});
$('#about').click(function () {
    $(this).addClass('active');
    $('#home').removeClass('active');
    $('#contact').removeClass('active');
});
$('#contact').click(function () {
    $(this).addClass('active');
    $('#home').removeClass('active');
    $('#about').removeClass('active');
});


//  move line in header

var nav = $('nav');
var line = $('<div />').addClass('line');

line.appendTo(nav);

var active = nav.find('.active');
var pos = 0;
var wid = 0;

if (active.length) {
    pos = active.position().left;
    wid = active.width();
    line.css({
        left: pos,
        width: wid
    });
}

nav.find('ul li a').click(function (e) {
    e.preventDefault();
    if (!$(this).parent().hasClass('active') && !nav.hasClass('animate')) {

        nav.addClass('animate');

        var _this = $(this);

        nav.find('ul li').removeClass('active');

        var position = _this.parent().position();
        var width = _this.parent().width();

        if (position.left >= pos) {
            line.animate({
                width: ((position.left - pos) + width)
            }, 300, function () {
                line.animate({
                    width: width,
                    left: position.left
                }, 150, function () {
                    nav.removeClass('animate');
                });
                _this.parent().addClass('active');
            });
        } else {
            line.animate({
                left: position.left,
                width: ((pos - position.left) + wid)
            }, 300, function () {
                line.animate({
                    width: width
                }, 150, function () {
                    nav.removeClass('animate');
                });
                _this.parent().addClass('active');
            });
        }

        pos = position.left;
        wid = width;
    }
});

//change in dark mode

$('.switch').click(function () {
    $('#main').toggleClass('dark').delay(200);
    $('.navlink').toggleClass('darklinks');
    $('.profile').toggleClass('darkprofile');
    $('.projectbtn').toggleClass('darkprojectbtn');
    $('.projectbtn').toggleClass('pbutton');
    $('.switch').toggleClass('darkswitch');
    $('.switch').toggleClass('bswitch');
    $('.services').toggleClass('darkservices');
    $('.skills').toggleClass('darkskills');
    $('.footer').toggleClass('darkfooter');
    $('.contactpage').toggleClass('darkcontactpage');
    $('.aboutpage').toggleClass('darkaboutpage');
});

// switch on off

const animate = gsap.timeline({ paused: true });
const animateBackground = new TimelineMax({ paused: true });
let toggle = true;

animateBackground
    .to("body", 0.1, { backgroundImage: "none", backgroundColor: "black" }, 0.2)
    .set(".switch", { backgroundColor: "black", border: "3px solid blue" }, 0.2)

animate
    .to(".toggle-button", 0.2, { scale: 0.7 }, 0)
    .set(".toggle", { backgroundColor: "blue" })
    .set(".circle", { display: "none" })
    .to(".moon-mask", 0.2, { translateY: 20, translateX: -10, backgroundColor: "black" }, 0.2)
    .to(".toggle-button", 0.2, { translateY: 44 }, 0.2)
    .to(".toggle-button", 0.2, { scale: 0.9 })

document.getElementsByClassName("switch")[0].addEventListener("click", () => {
    if (toggle) {
        animate.restart();
        animateBackground.restart();
    } else {
        animate.reverse();
        animateBackground.reverse();
    }
    toggle = !toggle;
});


// skills animation


$(function () {
    var one = $('.skills');
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 1450 && scroll <= 2240) {
            one.addClass('movingskills');
        }
        else {
            one.removeClass('movingskills');
        }
    });
})

// scroll animation

AOS.init();


//  changing pages


function home() {
    var x = document.getElementById("homepage");
    var y = document.getElementById("aboutpage");
    var z = document.getElementById("contactpage");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
    } else {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
    }
}


function contact() {
    var x = document.getElementById("homepage");
    var y = document.getElementById("aboutpage");
    var z = document.getElementById("contactpage");
    if (z.style.display === "none") {
        z.style.display = "block";
        y.style.display = "none";
        x.style.display = "none";
    } else {
        z.style.display = "block";
        y.style.display = "none";
        x.style.display = "none";
    }
}

function about() {
    var x = document.getElementById("homepage");
    var y = document.getElementById("aboutpage");
    var z = document.getElementById("contactpage");
    if (y.style.display === "none") {
        y.style.display = "block";
        z.style.display = "none";
        x.style.display = "none";
    } else {
        y.style.display = "block";
        z.style.display = "none";
        x.style.display = "none";
    }
}

// projectbutton

$('.pbutton').click(function () {
    $('.pbutton').toggleClass('projectbtnanimation');
});