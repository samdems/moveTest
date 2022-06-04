export default class World {
  constructor(DomParent, tileSize) {
    // this.tileCanvas = this.makeCanvas("tile", DomParent);
    this.PlayerCanvas = this.makeCanvas("player", DomParent);
    this.tileSize = tileSize;
  }
  makeCanvas(id, DomParent) {
    const canvas = document.createElement("canvas");
    canvas.id = id;
    DomParent.appendChild(canvas);
    return canvas;
  }
  fixSize(canvas) {
    const ctx = canvas.getContext("2d");
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
  }
  update(delta) {
    this.fixSize(this.PlayerCanvas);
    // this.fixSize(this.tileCanvas);
  }
}
