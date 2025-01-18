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