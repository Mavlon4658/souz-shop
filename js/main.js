const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

// custom-select
const selectBox = document.getElementById("selectBox");
const selectOptions = document.getElementById("selectOptions");
const selectedValue = document.getElementById("selectedValue");
const selectIcon = document.getElementById("selectIcon");

if (selectBox) {
    selectBox.addEventListener("click", () => {
        selectOptions.style.display = selectOptions.style.display === "block" ? "none" : "block";
        selectIcon.classList.toggle("rotate");
    });
}

document.querySelectorAll(".option").forEach(option => {
    option.addEventListener("click", (e) => {
        selectedValue.textContent = e.target.getAttribute("data-value");
        selectOptions.style.display = "none";
        selectIcon.classList.remove("rotate");
    });
});

document.addEventListener("click", (e) => {
    if (selectBox) {
        if (!selectBox.contains(e.target)) {
            selectOptions.style.display = "none";
            selectIcon.classList.remove("rotate");
        }
    }
});
// custom-select

// personal_account_modal
let personal_account_edit = document.querySelector('.personal_account_edit');
let personal_account_edit_close = document.querySelector('.personal_account_edit_close');
let personal_account_modal_bg = document.querySelector('.personal_account_modal_bg');
let personal_data_btn = document.querySelector('.personal_data_btn');

if (personal_data_btn) {
    personal_data_btn.addEventListener('click', () => {
        personal_account_edit.classList.add('active');
        personal_account_modal_bg.classList.add('active');
    })
}

if (personal_account_edit_close) {
    personal_account_edit_close.addEventListener('click', () => {
        personal_account_edit.classList.remove('active');
        personal_account_modal_bg.classList.remove('active');
    })
}

if (personal_account_modal_bg) {
    personal_account_modal_bg.addEventListener('click', () => {
        personal_account_edit.classList.remove('active');
        personal_account_modal_bg.classList.remove('active');
    })
}
// personal_account_modal

// delivery_address_modal
// let delivery_address_modal = document.querySelector('.delivery_address_modal');
// let delivery_address_modal_close = document.querySelector('.delivery_address_modal_close');
// let delivery_address_btn = document.querySelector('.delivery_address_btn');

// delivery_address_btn.addEventListener('click', () => {
//     delivery_address_modal.classList.add('active');
//     personal_account_modal_bg.classList.add('active');
// })

// delivery_address_modal

// count
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".product_list_count");

    counters.forEach(counter => {
        const decreaseBtn = counter.querySelector(".decrease");
        const increaseBtn = counter.querySelector(".increase");
        const countSpan = counter.querySelector(".count");

        let count = parseInt(countSpan.textContent); // Boshlang‘ich qiymatni olish

        decreaseBtn.addEventListener("click", function () {
        if (count > 1) {
            count--;
            countSpan.textContent = count + " п.м.";
        }
        });

        increaseBtn.addEventListener("click", function () {
        count++;
        countSpan.textContent = count + " п.м.";
        });
    });
});
// count

// heart
document.addEventListener("DOMContentLoaded", function () {
    const heartButtons = document.querySelectorAll(".heart_icon");

    heartButtons.forEach(button => {
        button.addEventListener("click", function () {
        this.classList.toggle("active");
        });
    });
});
// heart

const headSearchEl = document.querySelectorAll('.header__search');

if (headSearchEl.length) {
    headSearchEl.forEach(el => {
        const headerSearchInp = el.querySelector('.header__search_inp input');
        const headerList = el.querySelector('.header__search_list');
        const headerSearchBtn = el.querySelectorAll('.header__search_inp button')[0];
        const headerClrBtn = el.querySelector('.header__search_inp .clear');
        const headerBottomLeft = el.querySelector('.header__bottom_left');
        
        if (headerSearchInp) {
            headerSearchInp.oninput = e => {
                if (e.target.value) {
                    headerList.classList.add('active');
                } else {
                    headerList.classList.remove('active');
                }
            }
        
            headerClrBtn.onclick = () => {
                headerList.classList.remove('active');
                headerSearchInp.value = ''
                headerBottomLeft.classList.remove('active');
            }
        
            headerSearchBtn.onclick = () => {
                headerBottomLeft.classList.add('active');
            }
        }
    })
}


const headBottom = document.querySelector('.header__bottom');
let scrY1 = window.scrollY;
let scrY2 = window.scrollY;

window.addEventListener('scroll', function (e) {
    scrY2 = this.window.scrollY;

    if (scrY2/10 < scrY1/10) {
        headBottom.classList.remove('hide');
    } else {
        if (this.window.scrollY > 150) {
            headBottom.classList.add('hide');

            if (headSearchEl.length) {
                headSearchEl.forEach(el => {
                    el.querySelector('.header__search_list').classList.remove('active');
                })
            }
        }
    }

    scrY1 = scrY2
})

const header = document.querySelector('.header');
const bars = document.querySelector('.bars');
const mobileMenu = document.querySelector('.header .mobile-menu');

bars.onclick = () => {
    mobileMenu.classList.toggle('active');
    bars.classList.toggle('active');
    header.classList.toggle('active');
}

const likeBtn = document.querySelectorAll('.like');

if (likeBtn.length) {
    likeBtn.forEach(btn => {
        btn.onclick = () => {
            btn.classList.toggle('active');
        }
    })
}

const calculate = document.querySelectorAll('.calculate');

if (calculate.length) {
    calculate.forEach(el => {
        const minus = el.querySelector('.minus');
        const plus = el.querySelector('.plus');
        const text = el.querySelector('p');

        plus.onclick = () => {
            text.textContent = parseInt(text.textContent) + 1 + ' п.м.';
        }

        minus.onclick = () => {
            if (parseInt(text.textContent) != 1)
            text.textContent = parseInt(text.textContent) - 1 + ' п.м.';
        }
    })
}


let init = false;
let anonsSwp;
let collectionSwp;
function swiperCard() {
    if (window.innerWidth > 992) {
        if (!init) {
            init = true;
            anonsSwp = new Swiper('.anons__swp .swiper', {
                slidesPerView: 3,
                spaceBetween: 10,
                loop: true,
                navigation: {
                    nextEl: '.anons__swp_next',
                    prevEl: '.anons__swp_prev',
                }
            });
            collectionSwp = new Swiper('.collection-swp .swiper', {
                slidesPerView: 'auto',
                spaceBetween: 27,
                pagination: {
                    el: ".collection-swp__pagination",
                    type: "progressbar",
                },
            })
        }
    } else if (init) {
        anonsSwp.destroy();
        collectionSwp.destroy();
        init = false;
    }
}
swiperCard();
window.addEventListener("resize", swiperCard);

const accordions = document.querySelectorAll('.accordion');

accordions.forEach((item) => {
    const header = item.querySelector('.accordion_btn');
    const content = item.querySelector('.accordion_body');

    if (item.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
    }

    header.addEventListener('click', () => {
        content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
        item.classList.toggle('active');
    });
});

const modalCalsses = ['.call-modal', '.zoom-modal', '.filter-modal'];

modalCalsses.forEach(cls => {
    const modalEl = document.querySelector(cls);
    const modalBg = document.querySelector(`${cls} .main-modal__bg`);
    const modalCloseBtn = document.querySelector(`${cls} .main-modal__close`);
    const modalOpenBtns = document.querySelectorAll(`${cls}__open`);

    if (modalOpenBtns.length) {
        modalOpenBtns.forEach(el => {
            el.onclick = e => {
                e.preventDefault();
                modalEl.classList.add('active');
                bodyHidden();
            }
        })

        modalBg.onclick = () => {
            modalEl.classList.remove('active');
            bodyVisible();
        }

        modalCloseBtn.onclick = () => {
            modalEl.classList.remove('active');
            bodyVisible();
        }
    }
})

const zoomSwp = new Swiper('.zoom-modal .swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: '.zoom-modal .swp-btn__next',
        prevEl: '.zoom-modal .swp-btn__prev',
    }
})

const selects = document.querySelectorAll('.select');

if (selects.length) {
    selects.forEach(el => {
        const btn = el.querySelector('.select-btn');
        const list = el.querySelectorAll('.select-list li');

        btn.onclick = () => {
            el.classList.toggle('active');
        }

        list.forEach(l => {
            l.onclick = () => {
                el.classList.remove('active');
                btn.querySelector('input').value = l.textContent;
            }
        })
    })
}

const sampleContentItem = document.querySelectorAll('.sample-custom__content-body__item');
const sampleMoreBtn = document.querySelector('.sample-custom__content-body .more-btn button');

if (sampleContentItem.length) {
    sampleMoreBtn.onclick = () => {
        sampleContentItem.forEach(el => {
            el.classList.add('active');
        })
        document.querySelector('.sample-custom__content-body .more-btn').classList.add('hidden');
    }
}

const rangesEl = document.querySelectorAll(".form_range");

if (rangesEl.length) {
  rangesEl.forEach(range => {
    let rangeS = range.querySelectorAll("input[type=range]"),
      numberS = range.querySelectorAll("input.val"),
      line = range.querySelector('.line'),
      min = parseFloat(rangeS[0].min),
      max = parseFloat(rangeS[0].max);

    const handleRange = () => {
      let slide1 = parseFloat(rangeS[0].value),
        slide2 = parseFloat(rangeS[1].value);

      if (slide1 > slide2) [slide1, slide2] = [slide2, slide1];

      numberS[0].value = slide1;
      numberS[1].value = slide2;

      line.style.left = 100 * slide1 / max + '%';
      line.style.width = 100 * (slide2 - slide1) / max + '%';
    };

    const handleNumber = () => {
      let num1 = parseFloat(numberS[0].value),
        num2 = parseFloat(numberS[1].value);

      if (num1 > num2) [num1, num2] = [num2, num1];

      rangeS[0].value = num1;
      rangeS[1].value = num2;

      handleRange();
    };

    handleRange();

    rangeS.forEach(el => {
      el.oninput = handleRange;
    });

    numberS.forEach(el => {
      el.oninput = handleNumber;
    });
  });
}
