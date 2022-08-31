class Tabs {
  constructor(props) {
    this.init = props.init;
    this.tabPanel = props.tabPanel;
    this.tabButton = props.tabButton;
    this.tabButtonActive = props.tabButtonActive;
    this.textWrap = props.textWrap;
    this.text = props.text;
    this.textActive = props.textActive;
    this.item = props.item;
    this.itemDisable = props.itemDisable;
    this.target = props.target;

    if (this.init) {
      this.render();
    }
  }

  render() {
    const tabPanel = document.querySelector(this.tabPanel);
    if (!tabPanel) return;
    const buttons = tabPanel.querySelectorAll(this.tabButton);
    const textWrap = document.querySelector(this.textWrap);
    const texts = textWrap.querySelectorAll(this.text);
    const items = document.querySelectorAll(this.item);

    for (let i = 0; i < buttons.length; i += 1) {
      buttons[i].addEventListener('click', () => {
        buttons[i].classList.add(this.tabButtonActive);
        this.removeActiveButton(buttons, i);
        const target = buttons[i].dataset.category;
        const text = textWrap.querySelector(`[${this.target}=${target}]`);
        this.removeActiveText(texts, i);
        text.classList.add(this.textActive);

        if (target === 'all') {
          for (let j = 0; j < items.length; j += 1) {
            items[j].classList.remove(this.itemDisable);
          }
        } else {
          this.switch(items, target);
        }
      });
    }
  }

  removeActiveButton(buttons, index) {
    for (let i = 0; i < buttons.length; i += 1) {
      if (i === index) continue;
      buttons[i].classList.remove(this.tabButtonActive);
    }
  }

  removeActiveText(texts, index) {
    for (let i = 0; i < texts.length; i += 1) {
      if (i == index) continue;
      texts[i].classList.remove(this.textActive);
    }
  }

  switch(items, target) {
    for (let i = 0; i < items.length; i += 1) {
      (items[i].dataset.category === target) ? items[i].classList.remove(this.itemDisable) : items[i].classList.add(this.itemDisable);
    }
  }
}

export default Tabs;
