var keys = [];
window.addEventListener("keydown", (e) => (keys[e.code] = true));
window.addEventListener("keyup", (e) => delete keys[e.code]);

export default keys;
