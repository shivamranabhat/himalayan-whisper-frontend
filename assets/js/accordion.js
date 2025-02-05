document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach((accordion) => {
        const title = accordion.querySelector(".title");
        const content = accordion.querySelector(".content");
        const icon = title.querySelector("svg");

        title.addEventListener("click", function () {
            const isOpen = !content.classList.contains("hidden");

            // Close all other accordions
            accordions.forEach((item) => {
                item.querySelector(".content").classList.add("hidden");
                item.querySelector("svg").style.transform = "rotate(0deg)";
            });

            // Toggle current accordion
            if (isOpen) {
                content.classList.add("hidden");
                icon.style.transform = "rotate(0deg)";
            } else {
                content.classList.remove("hidden");
                icon.style.transform = "rotate(180deg)";
            }
        });
    });
});

