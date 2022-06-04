import Vector from "./vector.js";

export default class Direction extends Vector {
  constructor(x, y, options = {}) {
    super(x, y);
    this.allowDiagonal = options.allowDiagonal || true;
    this.removeStrafing = options.removeStrafing || false;
  }
  goUp() {
    this.y = -1;
    this.checkStrafing();
    this.checkDiagonal();
  }
  goDown() {
    this.y = 1;
    this.checkStrafing();
    this.checkDiagonal();
  }
  goRight() {
    this.x = 1;
    this.checkStrafing();
    this.checkDiagonal();
  }
  goLeft() {
    this.x = -1;
    this.checkStrafing();
    this.checkDiagonal();
  }
  checkStrafing() {
    if (!this.removeStrafing) return;
    this.checkStrafingLeftDown();
    this.checkStrafingLeftUp();
    this.checkStrafingRightUp();
    this.checkStrafingRightDown();
  }
  checkStrafingLeftUp() {
    if (this.x > 0 && this.y < 0) {
      this.x = 0.5;
      this.y = -0.5;
    }
  }
  checkStrafingLeftDown() {
    if (this.x > 0 && this.y > 0) {
      this.x = 0.5;
      this.y = 0.5;
    }
  }
  checkStrafingRightUp() {
    if (this.x < 0 && this.y < 0) {
      this.x = -0.5;
      this.y = -0.5;
    }
  }
  checkStrafingRightDown() {
    if (this.x < 0 && this.y > 0) {
      this.x = -0.5;
      this.y = 0.5;
    }
  }

  checkDiagonal() {
    if (this.allowDiagonal) return;
    if (this.x !== 0 && this.y !== 0) {
      this.x = 0;
    }
  }
}
