// ============================================
// RUKSA SULTANA - BIRTHDAY SURPRISE
// CLEAN NAVIGATION
// ============================================

let currentSlide = 1;


// SHOW A SLIDE
function showSlide(number) {

    const slides = document.querySelectorAll(".slide");

    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    const target = document.getElementById("slide" + number);

    if (target) {
        target.classList.add("active");
        currentSlide = number;
    }
}


// NEXT SLIDE
function nextSlide() {

    if (currentSlide < 5) {
        showSlide(currentSlide + 1);
    }

}


// ============================================
// WAIT UNTIL HTML IS LOADED
// ============================================

document.addEventListener("DOMContentLoaded", function() {

    // FIRST BUTTON
    const startButton =
        document.getElementById("startButton");

    if (startButton) {

        startButton.addEventListener("click", function() {

            console.log("FIRST BUTTON CLICKED");

            showSlide(2);

        });

    }


    // SLIDE 3 → SLIDE 4
    const surpriseButton =
        document.getElementById("surpriseButton");

    if (surpriseButton) {

        surpriseButton.addEventListener("click", function() {

            showSlide(4);

        });

    }


    // PAYMENT BUTTON
    const payButton =
        document.getElementById("payButton");

    if (payButton) {

        payButton.addEventListener("click", function() {

            const panel =
                document.getElementById("upiPanel");

            if (panel) {
                panel.classList.add("show");
            }

            createUPIQRCode();

        });

    }


    // CLOSE PAYMENT PANEL
    const closeButton =
        document.querySelector(".upi-close");

    if (closeButton) {

        closeButton.addEventListener("click", function() {

            const panel =
                document.getElementById("upiPanel");

            if (panel) {
                panel.classList.remove("show");
            }

        });

    }

});


// ============================================
// UPI QR
// ============================================

function createUPIQRCode() {

    const qrContainer =
        document.getElementById("upiQRCode");

    if (!qrContainer) return;

    qrContainer.innerHTML = "";

    if (typeof QRCode === "undefined") {

        console.log("QR library not loaded");

        return;

    }


    const upiID =
        "8170992553-3@ybl";

    const amount =
        "10.00";

    const name =
        "Ruksa Birthday Surprise";

    const note =
        "Birthday Surprise";


    const upiLink =
        "upi://pay" +
        "?pa=" + encodeURIComponent(upiID) +
        "&pn=" + encodeURIComponent(name) +
        "&am=" + amount +
        "&cu=INR" +
        "&tn=" + encodeURIComponent(note);


    new QRCode(
        qrContainer,
        {
            text: upiLink,
            width: 180,
            height: 180,
            colorDark: "#111111",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        }
    );

}


// ============================================
// DEMO UNLOCK
// ============================================

function demoUnlock() {

    showSlide(5);

    createConfetti(100);

}


// ============================================
// CONFETTI
// ============================================

function createConfetti(amount) {

    const symbols = [
        "❤️",
        "💗",
        "✨",
        "🌸",
        "🎉"
    ];


    for (let i = 0; i < amount; i++) {

        const piece =
            document.createElement("div");

        piece.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        piece.style.position = "fixed";

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.top = "-30px";

        piece.style.fontSize =
            12 + Math.random() * 20 + "px";

        piece.style.zIndex = "99999";

        piece.style.pointerEvents = "none";


        document.body.appendChild(piece);


        piece.animate(
            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        "translateY(110vh) rotate(500deg)",
                    opacity: 0
                }
            ],
            {
                duration:
                    2000 +
                    Math.random() * 2500,

                easing: "ease-out"
            }
        );


        setTimeout(function() {

            piece.remove();

        }, 5000);

    }

}


// ============================================
// RESTART
// ============================================

function restart() {

    location.reload();

}



/* =========================================
   ENTRY SCREEN → FIRST SLIDE
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const entryScreen = document.getElementById("entryScreen");
    const enterButton = document.getElementById("enterSurprise");

    if (!entryScreen || !enterButton) {
        console.log("Entry elements not found.");
        return;
    }

    enterButton.addEventListener("click", function () {

        console.log("OPEN BUTTON CLICKED");

        // Hide the extra entry
        entryScreen.classList.add("hide");

        // Show your existing first slide
        const firstSlide = document.getElementById("slide1");

        if (firstSlide) {
            firstSlide.classList.add("active");
        }

        // Remove entry completely after animation
        setTimeout(function () {
            entryScreen.style.display = "none";
        }, 800);

    });

});