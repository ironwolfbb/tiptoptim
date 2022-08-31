class BounceField {
  constructor(props) {
    this.init = props.init;
    this.wrapSelector = document.querySelectorAll(props.wrapSelector);
    this.wrapActiveClass = props.wrapActiveClass;
    this.fieldSelector = props.fieldSelector;

    if (this.init) {
      this.render();
    }
  }

  render() {
    for (let i = 0; i < this.wrapSelector.length; i += 1) {
      const field = this.wrapSelector[i].querySelector(this.fieldSelector);

      if (field) {
        field.addEventListener('focus', () => {
          this.wrapSelector[i].classList.add(this.wrapActiveClass);
        });

        field.addEventListener('focusout', () => {
          if (field.value <= 0) {
            this.wrapSelector[i].classList.remove(this.wrapActiveClass);
          }
        });
      }
    }
  }
}

export default BounceField;
