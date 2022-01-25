//Inputs
const calcBtn = document.getElementById("calc-btn");
const splitBtn = document.getElementById("split-btn");
const clearBtn = document.getElementById("clear-btn");
const clearBtn1 = document.getElementById("clear-btn1");

//Buttons
const billAmount = document.getElementById("totalbill");
const tipPercentage = document.getElementById("range");
const splitBy = document.getElementById("dropid");

//Slider
const range = document.getElementById("range"),
  rangeV = document.getElementById("rangeV"),
  setValue = () => {
    const newValue = Number(
        ((range.value - range.min) * 100) / (range.max - range.min)
      ),
      newPosition = 10 - newValue * 0.2;
    rangeV.innerHTML = `<span>${range.value}</span>`;
    rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
  };
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener("input", setValue);

//Making results decimal .00 with 2 spots
let decimalMaker = (x) => {
  let splitArr = x.toString().split(`.`);

  if (splitArr.length === 1) {
    let doubleZero = splitArr[0] + ".00";
    return doubleZero;
  } else if (splitArr[1].length < 2) {
    let joined = splitArr.join(".") + "0";
    return joined;
  } else {
    return x;
  }
};

//Tip request
const tipAmt = () => {
  axios.get("http://localhost:5500/tip").then((res) => tipElement(res.data));
};

/// Calculate button container 3
const calcButton = () => {
  let body = {
    billAmount: billAmount.value,
    tipPercentage: tipPercentage.value,
  };

  axios
    .post("http://localhost:5500/calculate", body)
    .then((res) => results(res.data));
};

//creating html for results(total)
const results = (resdata) => {
  const r = document.createElement("span");
  r.id = "total-final";
  var decimaler = decimalMaker(resdata);
  var t = document.createTextNode(`$${decimaler}`);
  r.appendChild(t);
  document.getElementById("totwithtip").appendChild(r);
  tipAmt()
};

//creating html for results (tip)
const tipElement = (resdata) => {
  const r = document.createElement("span");
  r.id = "total-tip";
  var decimaler = decimalMaker(resdata);
  var t = document.createTextNode(`$${decimaler}`);
  r.appendChild(t);
  document.getElementById("tipmoney").appendChild(r);
};

///Container 5 - Splitting the bill
const splitButton = () => {
  const totalWithTip = document.getElementById("total-final");
  let body = {
    splitBy: splitBy.value,
    totalWithTip: totalWithTip.innerHTML.replace("$", ""),
  };
  axios
    .post(`http://localhost:5500/split`, body)
    .then((res) => splitter(res.data));
};

const splitter = (resdata) => {
  const r = document.createElement("span");
  r.id = "total-split";
  var decimaler = decimalMaker(resdata);
  var t = document.createTextNode(`$${decimaler} `);
  r.appendChild(t);
  document.getElementById("splittotal").appendChild(r);
};

const clearFun = () => {
  let total = document.getElementById("total-final");
  total.parentNode.removeChild(total);

  let tip = document.getElementById("total-tip");
  tip.parentNode.removeChild(tip);

  alert("Oldest Result Cleared!");
};

const clearFun1 = () => {
  let splitTotal = document.getElementById("total-split");
  splitTotal.parentNode.removeChild(splitTotal);

  alert("Oldest Split Cleared!");
};


calcBtn.addEventListener("click", calcButton);
splitBtn.addEventListener("click", splitButton);
clearBtn.addEventListener("click", clearFun);
clearBtn1.addEventListener("click", clearFun1);

