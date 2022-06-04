import input from "./input.js";
import Game from "./game.js";
import Player from "./player.js";
import Vector from "./vector.js";
// input.register("PlayerUp", (delta) => {
//   window.document.body.innerHTML = "up";
// });
// input.register("PlayerDown", (delta) => {
//   window.document.body.innerHTML = "down";
// });
// input.register("PlayerLeft", (delta) => {
//   window.document.body.innerHTML = "left";
// });
// input.register("PlayerRight", (delta) => {
//   window.document.body.innerHTML = "right";
// });

const game = new Game(window.document.body, 32);
const player = new Player(game.world, new Vector(10, 10));
function loop(timestamp) {
  var delta = timestamp - lastRender;
  input.update(delta);
  game.update(delta);
  player.update(delta);
  lastRender = timestamp;
  window.requestAnimationFrame(loop);
}

var lastRender = 0;
window.requestAnimationFrame(loop);
