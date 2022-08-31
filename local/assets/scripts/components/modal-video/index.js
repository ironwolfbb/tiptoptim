class ModalVideo {
  constructor(props) {
    this.init = props.init;
    this.modal = document.querySelector(props.modalSelector);
    this.openers = document.querySelectorAll(props.openerSelector);
    this.closer = document.querySelectorAll(props.closerSelector);
    this.modalClassActive = props.modalClassActive;
    this.modalFrameSelector = document.querySelector(props.modalFrameSelector);
    this.body = document.querySelector('body');

    if (this.init) {
      this.modalOpen();
      this.modalClose();
    }
  }

  modalOpen() {
    for (let i = 0; i < this.openers.length; i += 1) {
      this.openers[i].addEventListener('click', () => {
        this.modal.classList.add(this.modalClassActive);
        this.modalFrameSelector.src = '';
        this.modalFrameSelector.src = this.openers[i].dataset.src;
        this.body.classList.add('modal-opened');
      });
    }
  }

  modalClose() {
    for (let i = 0; i < this.closer.length; i += 1) {
      this.closer[i].addEventListener('click', () => {
        this.modal.classList.remove(this.modalClassActive);
        this.modalFrameSelector.src = '';
        this.body.classList.remove('modal-opened');
      });
    }
  }
}

export default ModalVideo;
