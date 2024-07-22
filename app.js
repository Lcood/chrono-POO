class Counter {
  constructor(element, value) {
    this.element = element;
    this.value = value;
    this.resetBtn = element.querySelector('.reset');
    this.increaseBtn = element.querySelector('.increase');
    this.decreaseBtn = element.querySelector('.decrease');

    this.valueDom = element.querySelector('.value');
    this.valueDom.textContent = this.value;
    this.increase = this.increase.bind(this);
    this.reset = this.reset.bind(this);
    this.decrease = this.decrease.bind(this);

    this.increaseBtn.addEventListener('click', this.increase);
    this.resetBtn.addEventListener('click', this.reset);
    this.decreaseBtn.addEventListener('click', this.decrease);
  }

  increase() {
    this.value++;
    this.valueDom.textContent = this.value;
  }
  reset() {
    this.value = 0;
    this.valueDom.textContent = this.value;
  }
  decrease() {
    this.value--;
    this.valueDom.textContent = this.value;
  }
}

const firstCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);

function getElement(className) {
  const element = document.querySelector(className);
  if (element) {
    return element;
  } else {
    throw new Error(`Aucun élément trouvé avec class : "${className}"`);
  }
}
