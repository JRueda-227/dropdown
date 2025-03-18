class Dropdown {
    constructor(toggle, menu) {
        this.toggle = toggle;
        this.menu = menu;

        this.init();
    }

    showMenu() {
        this.menu.style.display = 'block';
    }

    hideMenu() {
        this.menu.style.display = 'none';
    }

    init() {
        this.toggle.addEventListener('mouseover', () => {
            this.showMenu();
        });

        this.toggle.addEventListener('mouseout', () => {
            this.hideMenu();
        });

        this.menu.addEventListener('mouseover', () => {
            this.showMenu();
        });

        this.menu.addEventListener('mouseout', () => {
            this.hideMenu();
        });
    }
}

export { Dropdown }