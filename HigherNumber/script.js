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
let errorTimeout;

//  подчерквание бОльшего числа
// доделать проверки ошибкок
inputNum.disabled = true;

inputMainNum.addEventListener("change", (e) =>
  {
    e.preventDefault();
    let mainNum = inputMainNum.value;
    console.log(mainNum);
    // if (mainNum == "")
    //   {
    //     divErrors.textContent = "Введите основное число";
    //     displayError();
    //     return;
    //   }
    if (mainNum.startsWith(0) && mainNum.toString().length > 1 && !mainNum.includes(".") && !mainNum.includes(","))
      {
        divErrors.textContent = "Целое число не может начинаться с 0.";
        displayError();
        return;
      }
    if (mainNum.includes(".") || mainNum.includes(","))
      {
        if (mainNum.startsWith(".") || mainNum.startsWith(","))
          {
            divErrors.textContent = "Число не может начинаться с запятой или точки";
            displayError();
            return;
          }
        if ((mainNum.toString().length) < 3)
          {
            divErrors.textContent = "Десятичное число не дописано";
            displayError();
            return;
          }
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

        nums.push(num);
        numsList.textContent = "Набор чисел: \n" + nums;
        inputNum.value = '';
        if (num == 0)
          {
            inputNum.disabled = true;
            for (let i = 0; i < nums.length; i++) 
            {
              if (Number(nums[i]) > Number(inputMainNum.value))
                {
                  divResult.textContent = "Основное число: " + inputMainNum.value + "\nПервое число, которое больше основного: " + nums[i] + " (" + Number(i+1) + "-e)";
                  break;
                }
              else
                {
                  divResult.textContent = "Основное число: " + inputMainNum.value + "\nВ наборе отсутствуют числа, которые больше основного.";
                }
            }
          }
        
      }
  })



function displayError()
{
  divErrors.style.display = "flex";
  divErrors.classList.add("show");
  timerError();
}
function timerError()
{
  clearTimeout(errorTimeout);
  errorTimeout = setTimeout(() =>
    {
      divErrors.style.display = "none";
      divErrors.classList.remove("show");
    }, 2000);
}





