// Info Modal
const topItemsInfoArr = [
    {
        title: "Whole Grain Bread",
        descr: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
        price: 40,
    },
    {
        title: "Whole Grain Bread",
        descr: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
        price: 40,
    },
    {
        title: "Whole Grain Bread",
        descr: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
        price: 40,
    },
    {
        title: "Whole Grain Bread",
        descr: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
        price: 40,
    },
    {
        title: "Whole Grain Bread",
        descr: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
        price: 40,
    },
    {
        title: "Whole Grain Bread",
        descr: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
        price: 40,
    },
];
const topItemInfoBtns = document.querySelectorAll(".top__item-info-btn");
const infoModal = document.querySelector(".info-modal");
const infoModalCross = document.querySelector(".info-modal__cross");

infoModal.classList.add("none");

infoModalCross.addEventListener("click", () => infoModal.classList.add("none"));
topItemInfoBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const itemByBtnIndex = topItemsInfoArr[index];

        if(itemByBtnIndex !== undefined) {
            infoModal.querySelector(".info-modal__img").setAttribute("src", `./img/Top/${index + 1}.png`);
            infoModal.querySelector(".info-modal__img").setAttribute("alt", itemByBtnIndex.title);
            infoModal.querySelector(".info-modal__title").innerHTML = itemByBtnIndex.title;
            infoModal.querySelector(".info-modal__descr").innerHTML = itemByBtnIndex.descr;
            infoModal.querySelector(".info-modal__price").innerHTML = `$${itemByBtnIndex.price}`;
            infoModal.classList.remove("none");
        };
    })
});

// Discount Modal
const discountBtn = document.querySelector(".discount__btn");
const discountModal = document.querySelector(".discount-modal");
const discountModalCross = document.querySelector(".discount-modal__cross");
const discountModalShopBtn = document.querySelector(".discount-modal__shop-btn");

discountModal.classList.add("none");

discountBtn.addEventListener("click", () => discountModal.classList.remove("none"));
[discountModalShopBtn, discountModalCross].forEach(btn => btn.addEventListener("click", () => discountModal.classList.add("none")));

// Explore Tabs
const exploreTabs = document.querySelectorAll(".explore__tab");
const exploreItemImgs = document.querySelectorAll(".explore__item-img");
let currentActiveTabIndex = 0;

exploreTabs[currentActiveTabIndex].classList.add("active");

exploreTabs.forEach((tab, tabIndex) => {
    tab.addEventListener("click", () => {
        exploreTabs[currentActiveTabIndex].classList.remove("active");
        exploreTabs[tabIndex].classList.add("active");
        currentActiveTabIndex = tabIndex;

        exploreItemImgs.forEach((img, imgIndex) => {
            img.setAttribute("src", `./img/Explore/${tab.innerHTML}/${imgIndex + 1}.jpg`);
        });
    });
});

// About Modal
const aboutBtn = document.querySelector(".about__btn");
const aboutModal = document.querySelector(".about-modal");
const aboutModalCross = document.querySelector(".about-modal__cross");
const aboutModalShopBtn = document.querySelector(".about-modal__shop-btn");

aboutModal.classList.add("none");

aboutBtn.addEventListener("click", () => aboutModal.classList.remove("none"));
[aboutModalShopBtn, aboutModalCross].forEach(btn => btn.addEventListener("click", () => aboutModal.classList.add("none")));