document.addEventListener("keydown", function (params) {
  if (params.code === "Space") {
    params.preventDefault();
    start();
  } else if (params.code !== "F5") {
    check(params.code[3]);
  }
});
