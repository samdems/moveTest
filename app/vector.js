export default class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.startingX = x;
    this.startingY = y;
  }
  moveX(x) {
    this.x = this.x + x;
  }
  moveY(y) {
    this.y = this.y + y;
  }
  move(vector) {
    this.moveX(vector.x);
    this.moveY(vector.y);
  }
  multiply(amount) {
    this.x = this.x * amount;
    this.y = this.y * amount;
  }
  snapToGrid(size) {
    this.x = this.roundMultiple(size, this.x);
    this.y = this.roundMultiple(size, this.y);
  }
  roundMultiple(key, num) {
    return Math.round(num / key) * key;
  }
  reset() {
    this.x = this.startingX;
    this.y = this.startingY;
  }
  copy() {
    return new Vector(this.x, this.y);
  }
  clone(vector) {
    this.x = vector.x;
    this.y = vector.y;
  }
}
