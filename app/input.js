import keys from "./keys.js";
import { keyMap } from "../config.js";
class Input {
  constructor() {
    this.funcMap = {};
  }
  register(key, func) {
    this.funcMap[key] = func;
  }
  update(delta) {
    Object.keys(keys).forEach(this.checkKey.bind(this, delta));
  }
  checkKey(delta, key) {
    if (!keyMap[key]) return;
    const command = keyMap[key].id;
    if (!this.funcMap[command]) return;
    this.funcMap[command](delta);
  }
}

const input = new Input();

export default input;
