document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       GET ELEMENTS
    ===================================================== */

    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const continueButtons = document.querySelectorAll(".continue");

    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");

    const yesResponse = document.getElementById("yesResponse");
    const noResponse = document.getElementById("noResponse");


    /* =====================================================
       CURRENT SLIDE
    ===================================================== */

    let currentSlide = 0;


    /* =====================================================
       SHOW SLIDE
    ===================================================== */

    function showSlide(index) {

        /*
            Prevent going before first slide
            or after last slide.
        */

        if (index < 0) {
            index = 0;
        }

        if (index >= slides.length) {
            index = slides.length - 1;
        }


        currentSlide = index;


        /*
            Change active slide
        */

        slides.forEach(function (slide, i) {

            if (i === currentSlide) {
                slide.classList.add("active");
            } else {
                slide.classList.remove("active");
            }

        });


        /*
            Change progress dot
        */

        dots.forEach(function (dot, i) {

            if (i === currentSlide) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }

        });


        /*
            When leaving the final slide,
            hide old responses.
        */

        if (currentSlide !== slides.length - 1) {

            yesResponse.classList.remove("show");
            noResponse.classList.remove("show");

        }

    }


    /* =====================================================
       CONTINUE BUTTONS
    ===================================================== */

    continueButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            showSlide(currentSlide + 1);

        });

    });


    /* =====================================================
       YES BUTTON
    ===================================================== */

    yesButton.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        yesResponse.classList.add("show");

        noResponse.classList.remove("show");

    });


    /* =====================================================
       NO BUTTON
    ===================================================== */

    noButton.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        noResponse.classList.add("show");

        yesResponse.classList.remove("show");

    });


    /* =====================================================
       KEYBOARD NAVIGATION
    ===================================================== */

    document.addEventListener("keydown", function (event) {

        if (event.key === "ArrowRight") {

            showSlide(currentSlide + 1);

        }


        if (event.key === "ArrowLeft") {

            showSlide(currentSlide - 1);

        }

    });


    /* =====================================================
       START
    ===================================================== */

    showSlide(0);

});