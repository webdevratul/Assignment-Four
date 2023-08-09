function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Please provide a valid number!";
  }
  return number ** 3;
}
const number = 4;
const resultOne = cubeNumber(number);


function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Please Provide a valid string value!";
  } else {
    if (string1 == string2) {
      return true;
    } else {
      return false;
    }
  }
}
const resultTwo = matchFinder("Bangladesh", "Bangladesh");


function sortMaker(arr) {
  if (!Array.isArray(arr)) {
    return "Please provide a valid array";
  } else {
    if (arr.length !== 2) {
      return "The array must have two elements !";
    } else {
      if (arr[0] >= 0 && arr[1] >= 0) {
        if (arr[0] == arr[1]) {
          return "Equal";
        } else {
          arr.sort(function (a, b) {
            return b - a;
          });
          return arr;
        }
      } else {
        return "Invalid Input!";
      }
    }
  }
}
const arr = [2, 3];
const resultThree = sortMaker(arr);


function findAddress(obj) {
  let street = obj.street || "__";
  let house = obj.house || "__";
  let Earth = obj.Earth || "__";

  return `${street}, ${house}, ${Earth}`;
}
let obj = {
  house: "15A",
  Earth: "Perfect",
};
let resultFour = findAddress(obj);


function canPay(changeArray, totalDue) {
  if (changeArray.length == 0) {
    return "Please provide a valid array empty array are not excepted !";
  } else {
    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
      sum += changeArray[i];
    }
    if (sum >= totalDue) {
      return true;
    } else {
      return false;
    }
  }
}
let changeArray = [1, 2, 10];
let totalDue = 10;
let resultFIve = canPay(changeArray, totalDue);
