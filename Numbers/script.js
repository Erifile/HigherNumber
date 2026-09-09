inputMainNum = document.querySelector("#mainNum");
inputNum = document.querySelector("#num");

inputNum.disabled = true;

inputMainNum.addEventListener("change", (e) =>
  {
    e.preventDefault();

    mainNum = inputMainNum.value;
    console.log(mainNum);

    inputNum.disabled = false;
  })


