document.addEventListener("keydown", function (params) {
  if (params.code === "Space") {
    start();
  } else if (params.code !== "F5") {
    check(params.code[3]);
  }
});
