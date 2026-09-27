form = document.querySelector("form");
inputMainNum = document.querySelector("#mainNum");
inputNum = document.querySelector("#num");
numsList = document.querySelector(".numsList")
divResult = document.querySelector(".result");
nums = [];
let mainNum;

inputNum.disabled = true;

inputMainNum.addEventListener("change", (e) =>
  {
    e.preventDefault();
    // Проверка на 0 в начале
    nums = [];

    let mainNum = inputMainNum.value;
    

    inputNum.disabled = false;
  })

inputNum.addEventListener("keydown", (e) =>
  {
    // e.preventDefault();

    if (e.key === 'Enter')
      {
        let num = inputNum.value;


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


