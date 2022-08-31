class Success {
    constructor(props) {
        this.init = props.init;
        this.modalSelector = props.modalSelector;
        this.modalClose = props.modalClose;
        this.bodyClass = props.bodyClass;

        if (this.init) {
            this.render();
        }
    }

    render() {
        const modal = document.querySelector(this.modalSelector);
        if (!modal) return;

        const close = modal.querySelectorAll(this.modalClose);
        const body = document.querySelector('body');

        for (let i = 0; i < close.length; i += 1) {
            close[i].addEventListener('click', () => {
                body.classList.remove(this.bodyClass);
            });
        }
    }
}

export default Success;
