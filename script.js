
/* =================================
   PAGE 2: CLICKABLE PHOTO GALLERY
================================= */

const photoDialog = document.getElementById("photoDialog");
const enlargedPhoto = document.getElementById("enlargedPhoto");
const photoCaption = document.getElementById("photoCaption");
const closePhoto = document.getElementById("closePhoto");

if (
    photoDialog &&
    enlargedPhoto &&
    photoCaption &&
    closePhoto
) {
    const photoButtons = document.querySelectorAll(
        ".photo-button"
    );

    photoButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const imagePath = button.dataset.full;
            const imageAlt = button.dataset.alt || "Memory";
            const image = button.querySelector("img");
            const caption = button
                .closest(".polaroid")
                .querySelector("figcaption");

            enlargedPhoto.src = imagePath;
            enlargedPhoto.alt = imageAlt;

            photoCaption.textContent = caption
                ? caption.textContent
                : imageAlt;

            photoDialog.showModal();
        });
    });

    closePhoto.addEventListener("click", function () {
        photoDialog.close();
    });

    photoDialog.addEventListener("click", function (event) {
        if (event.target === photoDialog) {
            photoDialog.close();
        }
    });

    photoDialog.addEventListener("close", function () {
        enlargedPhoto.removeAttribute("src");
    });
}

/* ========================================
   PAGE 3 — ENVELOPE OPENING
   ======================================== */

(function () {
    const envelope = document.getElementById("openEnvelope");
    const letter = document.getElementById("birthdayLetter");
    const instruction = document.getElementById("letterInstruction");

    if (!envelope || !letter || !instruction) {
        return;
    }

    envelope.addEventListener("click", function () {
        const isOpen = envelope.classList.toggle("is-open");

        envelope.setAttribute("aria-expanded", String(isOpen));

        if (isOpen) {
            instruction.textContent = "A little letter, written just for you. 🤍";

            window.setTimeout(function () {
                letter.classList.add("is-visible");
                letter.setAttribute("aria-hidden", "false");
            }, 500);
        } else {
            letter.classList.remove("is-visible");
            letter.setAttribute("aria-hidden", "true");

            instruction.innerHTML =
                "I wrote something for you, babyyy. 🤍<br>Tap the envelope to open it.";
        }
    });
})();

/* ========================================
   PAGE 4 — HIDDEN MESSAGE INTERACTION
   ======================================== */

(function () {
    const messageCards = document.querySelectorAll(".message-card");
    const messageDialog = document.getElementById("messageDialog");
    const dialogTitle = document.getElementById("dialogTitle");
    const dialogMessage = document.getElementById("dialogMessage");
    const closeMessage = document.getElementById("closeMessage");

    if (
        !messageCards.length ||
        !messageDialog ||
        !dialogTitle ||
        !dialogMessage ||
        !closeMessage
    ) {
        return;
    }

    messageCards.forEach(function (card) {
        card.addEventListener("click", function () {
            const title = card.querySelector(".message-title");
            const message = card.dataset.message;

            dialogTitle.textContent = title
                ? title.textContent
                : "A little note for you";

            dialogMessage.textContent = message || "";

            messageDialog.showModal();
        });
    });

    closeMessage.addEventListener("click", function () {
        messageDialog.close();
    });

    messageDialog.addEventListener("click", function (event) {
        if (event.target === messageDialog) {
            messageDialog.close();
        }
    });
})();
