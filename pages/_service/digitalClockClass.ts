class DigitalClockClass {
  private time: Date;

  constructor() {
    this.time = new Date();
  }

  private updateTime() {
    this.time = new Date();
  }

  private getHours(): string {
    return this.time.getHours().toString().padStart(2, "0");
  }

  private getMinutes(): string {
    return this.time.getMinutes().toString().padStart(2, "0");
  }

  private getSeconds(): string {
    return this.time.getSeconds().toString().padStart(2, "0");
  }

  getTime(): string {
    this.updateTime();
    return `${this.getHours()}:${this.getMinutes()}:${this.getSeconds()}`;
  }
}

export default DigitalClockClass;
