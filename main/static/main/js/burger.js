const desktopBtn = document.querySelector('.btn-desktop-box');
const menu = document.querySelector('.mobile-nav');

const burger = document.querySelector('.burger');



burger.addEventListener('click', () => {
    if (desktopBtn.style.display === 'none' || menu.style.display === 'none') {
        desktopBtn.style.display = 'flex';
        menu.style.display = 'block';
    } else {
        desktopBtn.style.display = 'none';
        menu.style.display = 'none';
    }
});


const show = () => {
    const singbtns = document.querySelector('.signup');
    const emp = document.querySelector('.employer-employee');

    singbtns.style.display = 'none';
    emp.style.display = 'flex';
};

