$(document).ready(function () {
    //--------- Carousel-----------
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 300,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    rows: 2,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    rows: 2,
                }
            }
        ]

    });
    $('.feedbacks-carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1124,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]

    });


//--------- WoW js-----------
    new WOW({
        animateClass: 'animate__animated'
    }).init();


//--------- Scrolling-----------
    $('a[href^="#"]').click(function () {
        let anchor = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(anchor).offset().top
        }, 700);
    })

    document.getElementById('reserve').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('reservation').scrollIntoView({
            block: 'center',
            behavior: 'smooth'
        })
    });


//--------- Validation-----------
    let name = $('#name');
    let phone = $('#phone');
    let close = $('#close');
    let thanksContainer = $('#thanks-container');
    let loader = $('.loader');

    $('#submit-form').click(function () {
        loader.css('display', 'flex');


        let hasError = false;

        $('.error').css('opacity', '0%');

        if (!name.val()) {
            name.next().css('opacity', '100%');
            loader.css('display', 'none');
            hasError = true;
        }
        if (!phone.val()) {
            phone.next().css('opacity', '100%');
            loader.css('display', 'none');
            hasError = true;
        }

        if (!hasError) {
            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: {name: name.val(), phone: phone.val()}
            })
                .done(function (msg) {
                    close.click(function () {
                        thanksContainer.css('display', 'none');
                    })
                    loader.hide();
                    if (msg.success === 0) {
                        alert('Заказ не создан!');
                    } else {
                        thanksContainer.css('display', 'flex');
                    }
                });
        }
    });


//--------- Phone Mask-----------
    $(document).ready(function () {
        phone.mask("+7 (999) 999-99-9");
    });


//--------- Menu Burger-----------
    let burgerMenu = $('#burger-menu');
    let closeBurgerMenu = $('.close');
    let mainMenu = $('.menu');


    burgerMenu.click(function () {
        mainMenu.css('display', 'flex');
        $('.menu > *').click(() => {
            mainMenu.hide();
        })
    });
    closeBurgerMenu.click(function () {
        mainMenu.css('display', 'none');
    });

});


//--------- Menu Swap-----------

let chicken = $('#chicken');
let beef = $('#beef');
let duck = $('#duck');
let cancer = $('#cancer');
let beefCaroucel = $('.carousel.meat');
let chickenCaroucel = $('.carousel.chicken');
let duckCaroucel = $('.carousel.duck');
let crabCaroucel = $('.carousel.cancer');

$(document).ready(function () {

    chickenCaroucel.show();

    chicken.click(function () {

        chickenCaroucel.css('opacity', '1');
        beefCaroucel.css('opacity', '0');
        duckCaroucel.css('opacity', '0');
        crabCaroucel.css('opacity', '0');

    });
    beef.click(function () {

        beefCaroucel.css('opacity', '1');
        chickenCaroucel.css('opacity', '0');
        duckCaroucel.css('opacity', '0');
        crabCaroucel.css('opacity', '0');

    });
    duck.click(function () {

        duckCaroucel.css('opacity', '1');
        beefCaroucel.css('opacity', '0');
        chickenCaroucel.css('opacity', '0');
        crabCaroucel.css('opacity', '0');

    });
    cancer.click(function () {

        crabCaroucel.css('opacity', '1');
        beefCaroucel.css('opacity', '0');
        chickenCaroucel.css('opacity', '0');
        duckCaroucel.css('opacity', '0');

    });
})