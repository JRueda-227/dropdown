export { Dropdown }

const toggle = document.querySelector('#dropdown-toggle');
const menu = document.querySelector('#dropdown-menu');

toggle.addEventListener('mouseover', () => {
    menu.style.display = 'block';
});
toggle.addEventListener('mouseout', () => {
    menu.style.display = 'none';
});
menu.addEventListener('mouseover', () => {
    menu.style.display = 'block';
});
menu.addEventListener('mouseout', () => {
    menu.style.display = 'none';
});


class Dropdown {
    constructor() {
        
    }
}