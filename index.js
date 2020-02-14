let inputNum;

const setNum = content => {
  inputNum = content.value;
};

const getNum = () => {
  document.querySelector("#outcome").innerHTML = romanNumeral(inputNum);
};

const romanNumeral = num => {
  let roman = "";
  let q;
  while (findBase(num) > 0) {
    q = Math.floor(num / findBase(num));
    for (var i = 0; i < q; i++) {
      roman += romanBase(findBase(num));
    }
    num = num % findBase(num);
  }
  return roman;
};

const findBase = num => {
  if (num >= 1000) {
    return 1000;
  } else if (num < 1000 && num >= 900) {
    return 900;
  } else if (num < 900 && num >= 500) {
    return 500;
  } else if (num < 500 && num >= 400) {
    return 400;
  } else if (num < 400 && num >= 100) {
    return 100;
  } else if (num < 100 && num >= 90) {
    return 90;
  } else if (num < 90 && num >= 50) {
    return 50;
  } else if (num < 50 && num >= 40) {
    return 40;
  } else if (num < 40 && num >= 10) {
    return 10;
  } else if (num == 9) {
    return 9;
  } else if (num < 9 && num >= 5) {
    return 5;
  } else if (num == 4) {
    return 4;
  } else if (num < 4 && num >= 1) {
    return 1;
  } else {
    return -1;
  }
};

const romanBase = base => {
  return base == 1000
    ? "M"
    : base == 900
    ? "CM"
    : base == 500
    ? "D"
    : base == 400
    ? "CD"
    : base == 100
    ? "C"
    : base == 90
    ? "XC"
    : base == 50
    ? "L"
    : base == 40
    ? "XL"
    : base == 10
    ? "X"
    : base == 9
    ? "IX"
    : base == 5
    ? "V"
    : base == 4
    ? "IV"
    : "I";
};
