class CountdownTimer {
  constructor(selector, targetDate = 0) {
    this.element = document.querySelector(selector);
    this.targetDate = targetDate;
  }

  getDays() {
    return Math.floor((this.targetDate - Date.now()) / (1000 * 60 * 60 * 24));
  }

  getHours() {
    return Math.floor(((this.targetDate - Date.now()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  }

  getMinuts() {
    return Math.floor(((this.targetDate - Date.now()) % (1000 * 60 * 60)) / (1000 * 60));
  }

  getSeconds() {
    return Math.floor(((this.targetDate - Date.now()) % (1000 * 60)) / 1000);
  }

  render() {
    this.element.innerHTML = `<div class="timer" id="timer-1">
        <div class="field">
          <span class="value" data-value="days">
            ${this.getDays()}
          </span>
          <span class="label">Days</span>
        </div>

        <div class="field">
          <span class="value" data-value="hours">
            ${this.getHours()}
          </span>
          <span class="label">Hours</span>
        </div>

        <div class="field">
          <span class="value" data-value="mins">
            ${this.getMinuts()}
          </span>
          <span class="label">Minutes</span>
        </div>

        <div class="field">
          <span class="value" data-value="secs">
            ${this.getSeconds()}
          </span>
          <span class="label">Seconds</span>
        </div>
      </div>`;
  }

  start() {
    const interval = setInterval(() => {
      if (this.targetDate <= 0) {
        this.targetDate = 0;
        clearInterval(interval);
      }

      this.render();
    }, 1000);
  }
}

const date = new Date('May 01, 2021');
const timer = new CountdownTimer('#timer-1', date);

timer.start();
