const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

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
})