document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".slide");

    let currentSlide = 0;

    function showSlide(index) {

        if (index < 0) {
            index = 0;
        }

        if (index >= slides.length) {
            index = slides.length - 1;
        }

        slides.forEach(function (slide, i) {

            if (i === index) {
                slide.classList.add("active");
            } else {
                slide.classList.remove("active");
            }

        });

        currentSlide = index;
    }


    /* =========================
       NORMAL NEXT BUTTONS
    ========================= */

    document.querySelectorAll(".main-btn[data-next]").forEach(function (button) {

        button.addEventListener("click", function () {

            const nextSlide = parseInt(button.dataset.next);

            showSlide(nextSlide);

        });

    });


    /* =========================
       FIRST BUTTON
    ========================= */

    const firstButton = document.querySelector("#slide1 .main-btn");

    if (firstButton) {

        firstButton.addEventListener("click", function () {

            showSlide(1);

        });

    }


    /* =========================
       YES BUTTON
    ========================= */

    const yesBtn = document.getElementById("yesBtn");

    if (yesBtn) {

        yesBtn.addEventListener("click", function () {

            showSlide(2);

        });

    }


    /* =========================
       NO BUTTON
    ========================= */

    const noBtn = document.getElementById("noBtn");
    const choiceArea = document.getElementById("choiceArea");
    const funnyMessage = document.getElementById("funnyMessage");

    const messages = [
        "Hmm... that button seems nervous. 👀",
        "Nice try, Mirana. 😂",
        "The NO button has decided to leave.",
        "I think you clicked the wrong one. 😭",
        "Okay okay... one more chance? 🥺",
        "The universe clearly wants a YES. 🌙"
    ];

    let attempts = 0;

    function moveNoButton() {

        if (!noBtn || !choiceArea) return;

        const areaWidth = choiceArea.clientWidth;
        const areaHeight = choiceArea.clientHeight;

        const buttonWidth = noBtn.offsetWidth;
        const buttonHeight = noBtn.offsetHeight;

        const maxX = areaWidth - buttonWidth;
        const maxY = areaHeight - buttonHeight;

        const x = Math.max(
            0,
            Math.random() * maxX
        );

        const y = Math.max(
            0,
            Math.random() * maxY
        );

        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";
        noBtn.style.transform = "none";

        funnyMessage.textContent =
            messages[Math.min(attempts, messages.length - 1)];

        attempts++;

    }


    if (noBtn) {

        noBtn.addEventListener(
            "mouseenter",
            moveNoButton
        );

        noBtn.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                moveNoButton();

            }
        );

    }


    /* =========================
       DATE
    ========================= */

    const dateInput =
        document.getElementById("dateInput");

    const dateNext =
        document.getElementById("dateNext");

    let selectedDate = "";

    if (dateInput) {

        const today =
            new Date().toISOString().split("T")[0];

        dateInput.min = today;

        dateInput.addEventListener(
            "change",
            function () {

                selectedDate = this.value;

                if (selectedDate) {

                    dateNext.classList.remove(
                        "disabled"
                    );

                }

            }
        );

    }


    if (dateNext) {

        dateNext.addEventListener(
            "click",
            function () {

                if (!selectedDate) return;

                showSlide(3);

            }
        );

    }


    /* =========================
       TIME
    ========================= */

    let selectedTime = "";

    const timeButtons =
        document.querySelectorAll(
            ".time-grid button"
        );

    const timeNext =
        document.getElementById("timeNext");


    timeButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                timeButtons.forEach(function (item) {

                    item.classList.remove(
                        "selected"
                    );

                });

                button.classList.add(
                    "selected"
                );

                selectedTime =
                    button.dataset.time;

                timeNext.classList.remove(
                    "disabled"
                );

            }
        );

    });


    if (timeNext) {

        timeNext.addEventListener(
            "click",
            function () {

                if (!selectedTime) return;

                showSlide(4);

            }
        );

    }


    /* =========================
       PLATFORM
    ========================= */

    let selectedPlatform = "";

    const platformButtons =
        document.querySelectorAll(
            ".platform-grid button"
        );

    const platformNext =
        document.getElementById(
            "platformNext"
        );


    platformButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                platformButtons.forEach(
                    function (item) {

                        item.classList.remove(
                            "selected"
                        );

                    }
                );

                button.classList.add(
                    "selected"
                );

                selectedPlatform =
                    button.dataset.platform;

                platformNext.classList.remove(
                    "disabled"
                );

            }
        );

    });


    if (platformNext) {

        platformNext.addEventListener(
            "click",
            function () {

                if (!selectedPlatform) return;

                showSlide(5);

            }
        );

    }


    /* =========================
       ACTIVITY
    ========================= */

    let selectedActivity = "";

    const activityButtons =
        document.querySelectorAll(
            ".activity-grid button"
        );

    const activityNext =
        document.getElementById(
            "activityNext"
        );


    activityButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                activityButtons.forEach(
                    function (item) {

                        item.classList.remove(
                            "selected"
                        );

                    }
                );

                button.classList.add(
                    "selected"
                );

                selectedActivity =
                    button.dataset.activity;

                activityNext.classList.remove(
                    "disabled"
                );

            }
        );

    });


    if (activityNext) {

        activityNext.addEventListener(
            "click",
            function () {

                if (!selectedActivity) return;

                showSlide(6);

            }
        );

    }


    /* =========================
       BRING SOMETHING
    ========================= */

    let selectedBring = "";

    const bringButtons =
        document.querySelectorAll(
            ".bring-grid button"
        );

    const bringNext =
        document.getElementById(
            "bringNext"
        );


    bringButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                bringButtons.forEach(
                    function (item) {

                        item.classList.remove(
                            "selected"
                        );

                    }
                );

                button.classList.add(
                    "selected"
                );

                selectedBring =
                    button.dataset.bring;

                bringNext.classList.remove(
                    "disabled"
                );

            }
        );

    });


    /* =========================
       TICKET
    ========================= */

    if (bringNext) {

        bringNext.addEventListener(
            "click",
            function () {

                if (!selectedBring) return;


                const finalDate =
                    document.getElementById(
                        "finalDate"
                    );

                const finalTime =
                    document.getElementById(
                        "finalTime"
                    );

                const finalPlatform =
                    document.getElementById(
                        "finalPlatform"
                    );

                const finalActivity =
                    document.getElementById(
                        "finalActivity"
                    );

                const finalBring =
                    document.getElementById(
                        "finalBring"
                    );


                if (selectedDate) {

                    const date =
                        new Date(
                            selectedDate +
                            "T00:00:00"
                        );

                    finalDate.textContent =
                        date.toLocaleDateString(
                            "en-IN",
                            {
                                weekday: "long",
                                day: "numeric",
                                month: "long",
                                year: "numeric"
                            }
                        );

                }


                finalTime.textContent =
                    selectedTime;

                finalPlatform.textContent =
                    selectedPlatform;

                finalActivity.textContent =
                    selectedActivity;

                finalBring.textContent =
                    selectedBring;


                showSlide(8);

            }
        );

    }


    /* =========================
   WHATSAPP DATE PLAN
========================= */

const whatsappBtn =
    document.getElementById("whatsappBtn");

if (whatsappBtn) {

    whatsappBtn.addEventListener(
        "click",
        function () {

            let readableDate = "";

            if (selectedDate) {

                const date =
                    new Date(
                        selectedDate + "T00:00:00"
                    );

                readableDate =
                    date.toLocaleDateString(
                        "en-IN",
                        {
                            weekday: "long",
                            day: "numeric",
                            month: "long",
                            year: "numeric"
                        }
                    );
            }


            const message =
`Hey Irfan 🌙

It's official — our online date is planned. ♡

👩 Mirana × Irfan

📅 Date: ${readableDate}
🕐 Time: ${selectedTime}
💻 Where: ${selectedPlatform}
🎬 Plan: ${selectedActivity}
🎁 I'm bringing: ${selectedBring}

Our little date is officially booked. 🌙

Two screens.
One evening.
One little memory. ♡`;


            const phoneNumber =
                "918170992553";

            const whatsappURL =
                "https://wa.me/" +
                phoneNumber +
                "?text=" +
                encodeURIComponent(message);


            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}



    /* =========================
       TICKET → FINAL
    ========================= */

    const ticketNext =
        document.getElementById(
            "ticketNext"
        );

    if (ticketNext) {

        ticketNext.addEventListener(
            "click",
            function () {

                showSlide(9);

            }
        );

    }


    /* =========================
       KEYBOARD
    ========================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "ArrowRight") {

                showSlide(
                    currentSlide + 1
                );

            }

            if (event.key === "ArrowLeft") {

                showSlide(
                    currentSlide - 1
                );

            }

        }
    );


});