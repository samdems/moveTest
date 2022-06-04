import input from "./input.js";
import Vector from "./vector.js";
export default class Player {
  constructor(world, startingPos) {
    this.pos = startingPos;
    this.world = world;
    this.speed = 0.25;
    this.direction = new Vector(0, 0);
    this.setupInputs();
  }
  get ctx() {
    return this.world.PlayerCanvas.getContext("2d");
  }
  setupInputs() {
    input.register("PlayerUp", () => (this.direction.y = -1));
    input.register("PlayerDown", () => (this.direction.y = 1));
    input.register("PlayerRight", () => (this.direction.x = 1));
    input.register("PlayerLeft", () => (this.direction.x = -1));
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
