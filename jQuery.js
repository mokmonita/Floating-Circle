$(function ball1() {
    $('#div1').animate({
        left: '90%',
        top: '5%',
        height: '50px',
        width: '50px'
    }, 2000).animate({
        left: '5%',
        top: '85%'
    }, 2000).animate({
        top: '85%',
        left: '90%'
    }, 2000).animate({
        top: '5%',
        left: '5%'
    }, 2000, function () {
        ball1()
    });
});

$(function ball2() {
    $('#div2').animate({
        opacity: '0.6',
        top: '20%',
        left: '20%'
    }, 700).animate({
        opacity: '0%',
        top: '40%',
        left: '40%'
    }, 700).animate({
        opacity: '0%',
        top: '60%',
        left: '60%'
    }, 700).animate({
        opacity: '0.6%',
        top: '80%',
        left: '80%'
    }, 700, function () {
        ball2();
    });
});

$(function ball3() {
    $('#div3').animate({
        bottom: '70%',
        left: '20%'
    }, 700).animate({
        bottom: '0%',
        left: '40%'
    }, 700).animate({
        bottom: '70%',
        left: '60%'
    }, 700).animate({
        bottom: '0%',
        left: '90%'
    }, 700).animate({
        bottom: '0%',
        left: '0%'
    }, 20, function () {
        ball3();
    });
});

$(function ball4() {
    $('#div4').animate({
        right: '90%',
        top: '20%'
    }, 1000).animate({
        right: '75%',
        top: '5%',
    }, 1000).animate({
        right: '50%',
        top: '20%'
    }, 1000).animate({
        right: '25%',
        top: '5%'
    }, 1000).animate({
        right: '5%',
        top: '20%'
    }, 1000, function () {
        ball4();
    });
});

$(function ball5() {
    $('#div5').animate({
        right: '90%',
        top: '20%'
    }, 500).animate({
        right: '75%',
        top: '5%',
    }, 500).animate({
        right: '50%',
        top: '20%'
    }, 500).animate({
        right: '25%',
        top: '5%'
    }, 500).animate({
        right: '5%',
        top: '20%'
    }, 500, function () {
        ball5();
    });
});

$(function ball6() {
    $('#div6').animate({
        right: '5%'
    }, 4000).animate({
        bottom: '50%'
    }, 3000).animate({
        right: '90%'
    }, 3000).animate({
        bottom: '20%'
    }, 3000, function () {
        ball6();
    });

});

$(function ball7() {
    $('#div7').animate({
        left: '10%',
    }, 2000).animate({
        bottom: '40%'
    }, 2000).animate({
        left: '30%'
    }, 2000).animate({
        bottom: '30%'
    }, 2000).animate({
        left: '50%'
    }, 2000).animate({
        bottom: '10%'
    }, 10, function () {
        ball7();
    });
});
$(function ball8() {
    $('#div8').animate({
        top: '40%',
        left: '90%'
    }, 2000).animate({
        top: '80%',
        left: '10%'

    }, 1500).animate({
        top: '40%'
    }, 1500, function () {
        ball8();
    });
});

$(function ball9() {
    $('#div9').animate({
        bottom: '10%'
    }, 1000).animate({
        left: '90%'
    }, 1000).animate({
        bottom: '90%'
    }, 1000).animate({
        left: '5%'
    }, 1000, function () {
        ball9();
    });
});

$(function ball10() {
    $('#div10').animate({
        bottom: '90%',
        left: '90%'
    }, 1600).animate({
        bottom: '10%'
    }, 1600).animate({
        bottom: '10%',
        left: '10%'
    }, 1600, function () {
        ball10();
    });
});