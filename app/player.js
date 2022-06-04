import input from "./input.js";
import Vector from "./vector.js";
import Direction from "./direction.js";
export default class Player {
  constructor(world, startingPos) {
    this.pos = startingPos;
    this.world = world;
    this.speed = 0.25;
    this.direction = new Direction(0, 0, {
      removeStrafing: true,
      allowDiagonal: true,
    });
    this.setupInputs();
  }
  get ctx() {
    return this.world.PlayerCanvas.getContext("2d");
  }
  setupInputs() {
    input.register("PlayerUp", () => this.direction.goUp());
    input.register("PlayerDown", () => this.direction.goDown());
    input.register("PlayerRight", () => this.direction.goRight());
    input.register("PlayerLeft", () => this.direction.goLeft());
  }
  update(delta) {
    this.direction.multiply(this.speed * delta);
    this.pos.move(this.direction);
    this.direction.reset();
    this.render();
  }
  render() {
    const pos = this.pos.copy();
    pos.snapToGrid(this.world.tileSize);
    this.ctx.fillRect(pos.x, pos.y, this.world.tileSize, this.world.tileSize);
  }
}
