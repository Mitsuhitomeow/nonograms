export default class Stopwatch {
  constructor() {
    this.second = 0;
    this.minute = 0;
    this.hour = 0;
    this.time = '';
    this.running = false;
  }

  start() {
    this.running = true;
    setInterval(() => {
      this.tick();
    }, 1000);
  }

  tick() {
    this.second += 1;

    if (this.second === 60) {
      this.second = 0;
      this.minute += 1;

      if (this.minute === 60) {
        this.minute = 0;
        this.hour += 1;
      }
    }

    this.time = `${Stopwatch.formatTime(this.hour)}:${Stopwatch.formatTime(this.minute)}:${Stopwatch.formatTime(this.second)}`;
  }

  static formatTime(value) {
    return value < 10 ? `0${value}` : value;
  }

  getTime() {
    return this.time;
  }

  isRunning() {
    return this.running;
  }
}
