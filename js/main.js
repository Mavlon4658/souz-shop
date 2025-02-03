const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

// personal_account_modal
let personal_account_edit = document.querySelector('.personal_account_edit');
let personal_account_edit_close = document.querySelector('.personal_account_edit_close');
let personal_account_modal_bg = document.querySelector('.personal_account_modal_bg');
let personal_data_btn = document.querySelector('.personal_data_btn');

personal_data_btn.addEventListener('click', () => {
    personal_account_edit.classList.add('active');
    personal_account_modal_bg.classList.add('active');
})

personal_account_edit_close.addEventListener('click', () => {
    personal_account_edit.classList.remove('active');
    personal_account_modal_bg.classList.remove('active');
})

personal_account_modal_bg.addEventListener('click', () => {
    personal_account_edit.classList.remove('active');
    personal_account_modal_bg.classList.remove('active');
})


// personal_account_modal

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

const anonsSwp = new Swiper('.anons__swp .swiper', {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: '.anons__swp_next',
        prevEl: '.anons__swp_prev',
    }
});
