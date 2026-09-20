document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll("ul.tabs li.tab");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            e.preventDefault(); // Prevents the page from jumping

            // Extract the plugin's generated IDs
            const target = tab.getAttribute("data-tab");
            const group = tab.parentElement.getAttribute("data-tabgroup");

            // Deactivate all tab buttons in this specific group
            document.querySelectorAll(`ul.tabs[data-tabgroup="${group}"] li.tab`).forEach(t => {
                t.classList.remove("active");
            });

            // Deactivate all code blocks belonging to this group
            contents.forEach(c => {
                if(c.getAttribute("data-tab") && c.getAttribute("data-tab").startsWith(group)) {
                    c.classList.remove("active");
                }
            });

            // Activate the clicked button and its corresponding code block
            tab.classList.add("active");
            document.querySelector(`.tab-content[data-tab="${target}"]`).classList.add("active");
        });
    });
});