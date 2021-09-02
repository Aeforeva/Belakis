document.addEventListener("keydown", function (params) {
  if (params.code === "Space") {
    start();
  } else {
    check(params.code[3]);
  }
});
