const keys = ["Q", "W", "E", "R", "A", "S", "D", "F"];
let randomKeys = [];

function createRandomKeys() {
    for (let index = 0; index < keys.length; index++) {
      const element = keys[Math.floor(Math.random() * keys.length)];
      randomKeys.push(element);
    }
  }
  
  function setKeysField() {
    let html = "";
    for (let index = 0; index < randomKeys.length; index++) {
      html += `<span class="key" id="key${index}">${randomKeys[index]}</span>`;
    }
    wasd.innerHTML = html;
  }