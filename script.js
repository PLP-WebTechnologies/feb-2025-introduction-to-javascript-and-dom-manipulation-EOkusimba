document.addEventListener("DOMContentLoaded", function () {
    const changeTextBtn = document.getElementById("changeTextBtn");
    const changeColorBtn = document.getElementById("changeColorBtn");
    const addParagraphBtn = document.getElementById("addParagraphBtn");
    const removeElementBtn = document.getElementById("removeElementBtn");
    const subtitle = document.querySelector(".header-subtitle"); // Correct selector
    const header = document.querySelector(".header");
    const storyContent = document.querySelector(".story-content"); // Correct selector

    // Ensure buttons exist before adding event listeners
    if (changeTextBtn && subtitle) {
        changeTextBtn.addEventListener("click", function () {
            subtitle.textContent = "Embrace the bugs, conquer the world!";
        });
    }

    if (changeColorBtn && header) {
        changeColorBtn.addEventListener("click", function () {
            header.classList.toggle("modified");
        });
    }

    if (addParagraphBtn && storyContent) {
        addParagraphBtn.addEventListener("click", function () {
            let newParagraph = document.createElement("p");
            newParagraph.textContent = "Follow me for more coding stories!";
            storyContent.appendChild(newParagraph);
        });
    }

    if (removeElementBtn && storyContent) {
        removeElementBtn.addEventListener("click", function () {
            let elementToRemove = storyContent.querySelector("p:last-child");
            if (elementToRemove) {
                elementToRemove.remove();
            }
        });
    }
});
