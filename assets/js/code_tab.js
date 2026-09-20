document.addEventListener("DOMContentLoaded", () => {
    const tabLinks = document.querySelectorAll("ul.tab li a");

    tabLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Prevents the browser from jumping to the top

            const currentLi = link.parentElement;
            const ulTab = currentLi.closest("ul.tab");

            // The plugin generates a unique UUID in data-tab, which matches the ID of the content UL
            const targetId = ulTab.getAttribute("data-tab");
            const contentUl = document.getElementById(targetId);

            if (!contentUl) return;

            // Deactivate all tabs in this button list
            ulTab.querySelectorAll("li").forEach(li => li.classList.remove("active"));
            currentLi.classList.add("active");

            // Deactivate all code panels in the content list
            Array.from(contentUl.children).forEach(panel => panel.classList.remove("active"));

            // Activate the code panel with the matching index
            const tabIndex = Array.from(ulTab.children).indexOf(currentLi);
            if (contentUl.children[tabIndex]) {
                contentUl.children[tabIndex].classList.add("active");
            }
        });
    });
});