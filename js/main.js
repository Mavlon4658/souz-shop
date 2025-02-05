const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

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

const headerSearchInp = document.querySelector('.header__search_inp input');
const headerList = document.querySelector('.header__search_list');
const headerSearchBtn = document.querySelectorAll('.header__search_inp button')[0];
const headerClrBtn = document.querySelector('.header__search_inp .clear');
const headerBottomLeft = document.querySelector('.header__bottom_left');

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

            if (headerList) {
                headerList.classList.remove('active');
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