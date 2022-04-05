console.log("JavaScript is working!");

const tabsButton = document.querySelectorAll(".faq-tabs__button"),
    tabsItem = document.querySelectorAll(".faq-tabs__item");

for (const [i, btn] of tabsButton.entries()) {
    btn.addEventListener("click", (e) => {
        e.preventDefault(false);
        if (tabsItem[i].classList.contains("faq-tabs__item_active"))
            return tabsItem[i].classList.remove("faq-tabs__item_active");
        tabsItem.forEach((element) => {
            element.classList.remove("faq-tabs__item_active");
        });
        tabsItem[i].classList.add("faq-tabs__item_active");
    });
}
