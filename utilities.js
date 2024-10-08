const classRemoveById = (elementId, className) => {
  const targetElement = document.getElementById(elementId);
  targetElement.classList.remove(className);
};
const classAddById = (elementId, className) => {
  const targetElement = document.getElementById(elementId);
  targetElement.classList.add(className);
};

const replaceClassNameById = (elementId, oldClass, newClass) => {
  const targetElement = document.getElementById(elementId);
  targetElement.classList.replace(oldClass, newClass);
};

const increaseValueByone = (seatId) => {
  const seatElement = document.getElementById(seatId);
  const seatElementVal = parseInt(seatElement.innerText);
  const updateSeatVal = seatElementVal + 1;
  return updateSeatVal;
};

const decreaseValueByone = (seatId) => {
  const seatElement = document.getElementById(seatId);
  const seatElementVal = parseInt(seatElement.innerText);
  const updateSeatVal = seatElementVal - 1;
  return updateSeatVal;
};

const setInnerText = (id, textVal) => {
  const targetEle = document.getElementById(id);
  targetEle.innerText = textVal;
};
const getInnerText = (id) => {
  const targetEle = document.getElementById(id);
  return targetEle.innerText;
};

const grandTotalCallculator = (totalPrice, disPrice) => {
  return totalPrice - disPrice;
};
const callculateInitialTotal = (ticketNum, perTicketPrice) => {
  const initialTotalPrict = ticketNum * perTicketPrice;
  return initialTotalPrict;
};
const callculateDiscount = (totalPrice, parcent) => {
  const discoutPrice = totalPrice * (parcent / 100);
  return discoutPrice;
};

//track the id of the element which are clicked one time
//using Singleton Pattern we are control the the arr which are initialize with empry arr.
const Tracker = (function () {
  let trackedElements = []; // Private array

  return {
    addElement: function (element) {
      trackedElements.push(element);
    },
    getElements: function () {
      //To prevent external modification of the array
      return trackedElements.slice(); // Return a copy of the array
    },
  };
})();

const showAlert = (alertTitle, alertDes) => {
  setInnerText("alert-title", alertTitle);
  setInnerText("alert-description", alertDes);
  classRemoveById("alert-show", "hidden");
};

const closeAlert = () => {
  classAddById("alert-show", "hidden");
};
