import World from "./World.js";
export default class game {
  constructor(DomParent, tileSize) {
    this.world = new World(DomParent, tileSize);
  }
  update(delta) {
    this.world.update(delta);
  }
}
