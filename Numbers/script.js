form = document.querySelector("form");
inputMainNum = document.querySelector("#mainNum");
inputNumText = document.querySelector(".numText");
inputNum = document.querySelector("#num");
numsList = document.querySelector(".numsList")
divResult = document.querySelector(".result");
divErrors = document.querySelector(".errors");
let i = 1;
nums = [];
let mainNum;

inputNum.disabled = true;

inputMainNum.addEventListener("change", (e) =>
  {
    e.preventDefault();
    let mainNum = inputMainNum.value;
    if (mainNum.startsWith(0))
      {
        divErrors.style.display = "flex";
        divErrors.style.opacity = 1;
        divErrors.innerHTML = "Ошибка. Основное число не может начинаться с 0.";
        timerErrors();
        return;
      }
    nums = [];
    inputMainNum.disabled = true;
    inputNum.disabled = false;
  })

inputNum.addEventListener("keydown", (e) =>
  {
    // e.preventDefault();

    if (e.key === 'Enter')
      {
        let num = inputNum.value;
        i++;
        inputNumText.textContent = "Число " + i + ":";

        if (num == 0)
          {
            inputNum.disabled = true;
            console.log("Основное число: " + inputMainNum.value);
            for (let i = 0; i < nums.length; i++) 
            {
              if (Number(nums[i]) > Number(inputMainNum.value))
                {
                  divResult.innerHTML = "Первое число, больше основного: " + nums[i];
                  break;
                }
              else
                {
                  divResult.innerHTML = "В наборе отсутствуют числа, которые больше основного.";
                }
            }
          }
        nums.push(num);
        numsList.innerHTML = "Набор чисел: " + nums;
        inputNum.value = '';
      }
  })

function timerErrors()
{
  timerErrors = setInterval(() =>
    {
      divErrors.style.display = "none";
      div.Errors.style.opacity = 0;
    }, 3000);
}




