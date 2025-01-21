const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

const headerSearchInp = document.querySelector('.header__search_inp input');
const headerList = document.querySelector('.header__search_list');

if (headerSearchInp) {
    headerSearchInp.oninput = e => {
        if (e.target.value) {
            headerList.classList.add('active');
        } else {
            headerList.classList.remove('active');
        }
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
        }
    }
    
    scrY1 = scrY2
})