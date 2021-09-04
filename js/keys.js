const keys = ["Q", "W", "E", "R", "A", "S", "D", "F"];
let randomKeys = [];
let createRandomKeys = createRandomKeys3;

//Set random type from dropdown
function setRandomType(params) {
  switch (params) {
    case "1":
      createRandomKeys = createRandomKeys1;
      break;
    case "2":
      createRandomKeys = createRandomKeys2;
      break;
    case "3":
      createRandomKeys = createRandomKeys3;
      break;
  }
}

//Type-1 Full random
function createRandomKeys1() {
  console.log("createRandomKeys Type 1 called");
  for (let index = 0; index < keys.length; index++) {
    const element = keys[Math.floor(Math.random() * keys.length)];
    randomKeys.push(element);
  }
}

//Type-2 No more then 2 same
function createRandomKeys2() {
  console.log("createRandomKeys Type 2 called");
  const keys2 = keys.concat(keys);
  for (let index = 0; index < keys.length; index++) {
    const roll = Math.floor(Math.random() * keys2.length);
    randomKeys.push(keys2[roll]);
    keys2.splice(roll, 1);
  }
}

//Type-3 No 3 same in a row
function createRandomKeys3() {
  console.log("createRandomKeys Type 3 called");
  const keys3 = keys;
  for (let i = 0; i < keys.length; i++) {
    const index = Math.floor(Math.random() * keys3.length);
    const element = keys3[index];
    if (element == randomKeys[i - 1] && element == randomKeys[i - 2]) {
      keys3.splice(index, 1);
      const reroll = Math.floor(Math.random() * keys3.length);
      randomKeys.push(keys3[reroll]);
      keys3.push(element);
    } else {
      randomKeys.push(element);
    }
  }
}

function renderRandomKeys() {
  let html = "";
  for (let index = 0; index < randomKeys.length; index++) {
    html += `<span class="key" id="key${index}">${randomKeys[index]}</span>`;
  }
  wasd.innerHTML = html;
}
