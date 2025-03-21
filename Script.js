document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item img");
    const lightboxContainer = document.createElement("div");
    const lightboxImg = document.createElement("img");
    const closeButton = document.createElement("span");

    lightboxContainer.classList.add("lightbox");
    closeButton.classList.add("close-btn");
    closeButton.innerHTML = "&times;";

    lightboxContainer.appendChild(lightboxImg);
    lightboxContainer.appendChild(closeButton);
    document.body.appendChild(lightboxContainer);

    galleryItems.forEach(item => {
        item.addEventListener("click", function () {
            lightboxImg.src = this.src;
            lightboxContainer.classList.add("active");
        });
    });

    closeButton.addEventListener("click", function () {
        lightboxContainer.classList.remove("active");
    });

    lightboxContainer.addEventListener("click", function (e) {
        if (e.target !== lightboxImg) {
            lightboxContainer.classList.remove("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const quoteForm = document.getElementById("quote-form");

    if (quoteForm) {
        quoteForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Mostrar mensaje de confirmación
            document.getElementById("confirmation-message").style.display = "block";

            // Limpiar formulario después del envío
            quoteForm.reset();
        });
    }
});
const quoteForm = document.getElementById("quote-form");
quoteForm.addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("confirmation-message").style.display = "block";
    quoteForm.reset();
});