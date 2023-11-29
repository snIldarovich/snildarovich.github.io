//слайдер и встроенные средства thumbs для галереи кликабельных превьюшек

const stickersThumbs = new Swiper(".stickers__slider-thumbs", {
  // spaceBetween: 10,
  // slidesPerView: 3,
  // freeMode: true,
  // watchSlidesProgress: false,
  allowTouchMove: false,
});
const stickers = new Swiper(".stickers__slider", {
  slidesPerView: 1,

  navigation: {
    nextEl: ".stickers__slider-next",
    prevEl: ".stickers__slider-prev",
  },
  thumbs: {
    swiper: stickersThumbs,
  },
});


let content = new Swiper('.stickers__slider-content', {
  slidesPerView: 1,
  allowTouchMove: false,
  navigation: {
    nextEl: ".stickers__slider-next",
    prevEl: ".stickers__slider-prev",
  },
});

//клик по превью и плавнй проезд к верху страницы

var thumbs = document.querySelectorAll(".stickers__slide-thumb");

thumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// кнопка показать/скрыть (max-height прописывается в медизапросах в css)
// срабатываеть при клике, реализация аккордеоном

let acc = document.getElementsByClassName("stickers__btn");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.previousElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// отображение контента при клике

// const tabs = document.querySelectorAll(".stickers__slide-thumb");

  // tabs.forEach((tab) => {
  //   tab.addEventListener("click", () => {
  //     const tabId = tab.getAttribute("data-id");

  //     const contentTabs = document.querySelectorAll(".stickers__item");

  //     // contentTab.forEach((contentTab) => {
  //     //   contentTab.classList.remove("stickers__item--active");
  //     // });

  //     // contentTab.classList.add("stickers__item--active");

  //     contentTabs.forEach((contentTab) => {
  //       if (contentTab.getAttribute("data-id") === tabId) {
  //         contentTab.style.opacity = "1";
  //         // contentTab.style.transform = "translateY(0px);";
  //         // contentTab.classList.remove('stickers__item--active')
  //       } else {
  //         contentTab.style.opacity = "0";
  //         // contentTab.style.transform = "translateY(-20px);";

  //         // contentTab.classList.add('stickers__item--active')
  //       }
  //     });
  //   });
    
  // });


// const tabs = document.querySelectorAll(".stickers__slide-thumb");

// tabs.forEach((tab) => {
//   tab.addEventListener("click", () => {
//     const tabId = tab.getAttribute("data-id");

//     const contentTabs = document.querySelectorAll(".stickers__item");

//     contentTabs.forEach((contentTab) => {
//       contentTab.classList.removeClass("stickers__item--active");
//     });

//     contentTabs.forEach((contentTab) => {
//       if (contentTab.getAttribute("data-id") === tabId) {
//         contentTab.style.opacity = "1";
//         contentTab.classList.addClass("stickers__item--active");
//       } else {
//         contentTab.style.opacity = "0";
//         contentTab.classList.removeClass("stickers__item--active");
//       }
//     });
//   });
// });

// const items = document.querySelectorAll(".stickers__item");

// items.forEach((item) => {
//   item.addEventListener("click", () => {
//     const itemId = item.getAttribute("data-id");

//     // items.forEach((otherItem) => {
//     //   otherItem.classList.remove("stickers__item—active");
//     // });

//     items.forEach((otherItem) => {
//       if (otherItem.getAttribute("data-id") === itemId) {
//         otherItem.style.opacity = "1";
//         otherItem.classList.add("stickers__item—active");
//       } else {
//         otherItem.style.opacity = "0";
//         otherItem.classList.remove("stickers__item—active");
//       }
//     });
//   });
// });

const elements = document.querySelectorAll('.stickers__item');
elements[0].classList.add('.stickers__item--active');
elements[0].style.opacity = 1;
elements[0].style.translateY = 0;

function handleClick() {
  const isActive = this.classList.contains('.stickers__item--active');
  if (isActive) {
    return;
  }

elements.forEach((element) => {
  element.classList.remove('stickers__item--active');
      element.style.opacity = 0;
      element.style.translateY = '20px';
    });
    this.classList.add('stickers__item--active');
    this.style.opacity = 1;
    this.style.translateY = 0;
  }
    elements.forEach((element) => {
      element.addEventListener('click', handleClick);
    });
 