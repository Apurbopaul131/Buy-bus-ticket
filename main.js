const addTicketInfoToTicketForm = (ticketName) => {
  const tableBody = document.getElementById("table-body");
  // Step 1: Create the <tr> element and set its class and style
  const tr = document.createElement("tr");
  tr.className = "text-base border-none text-[#03071299]"; // Setting text color using inline style
  // Step 2: Create the <td> elements
  const td1 = document.createElement("td");
  td1.textContent = ticketName;

  const td2 = document.createElement("td");
  td2.textContent = "Economoy"; // Correct the typo if needed

  const td3 = document.createElement("td");
  td3.textContent = "550";

  // Step 3: Append the <td> elements to the <tr>
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);

  //step 4: append the table row <tr> elemtn to table body
  tableBody.insertBefore(tr, tableBody.children[0]);
};

const handleCupponRelatedwork = (totalPrice, numParcent) => {
  //callculate discount
  const discountVal = callculateDiscount(parseInt(totalPrice), numParcent);
  setInnerText("discount-price", discountVal);

  //callculate grand total
  const grandTotal = grandTotalCallculator(totalPrice, discountVal);
  setInnerText("grand-total", grandTotal);

  //show the discount row and hide cuppone box
  classRemoveById("discount-row", "hidden");
  classAddById("cuppon-row", "hidden");
};

document
  .getElementById("manage-ticket")
  .addEventListener("click", function (e) {
    const alSelactArr = Tracker.getElements();
    const seatsIdArr = [
      "A1",
      "A2",
      "A3",
      "A4",
      "B1",
      "B2",
      "B3",
      "B4",
      "C1",
      "C2",
      "C3",
      "C4",
      "D1",
      "D2",
      "D3",
      "D4",
      "E1",
      "E2",
      "E3",
      "E4",
      "F1",
      "F2",
      "F3",
      "F4",
      "G1",
      "G2",
      "G3",
      "G4",
      "H1",
      "H2",
      "H3",
      "H4",
      "I1",
      "I2",
      "I3",
      "I4",
      "J1",
      "J2",
      "J3",
      "J4",
    ];
    //check you are clicked on a button or not
    if (
      seatsIdArr.includes(e.target.id) &&
      !alSelactArr.includes(e.target.id)
    ) {
      //total selacted exact
      const totalSelactedSeat = document.getElementById("selacted-seat");
      //check selacted four or more seat
      if (
        parseInt(totalSelactedSeat.innerText) >= 0 &&
        parseInt(totalSelactedSeat.innerText) <= 3
      ) {
        const buttonElmentId = e.target.id;
        //remove btn backgroud color
        replaceClassNameById(buttonElmentId, "bg-[#F7F8F8]", "bg-[#1DD100]");

        //add new color for selacted seat
        classAddById(buttonElmentId, "text-white");

        //decrease the number of seat by one
        const updateSeatVal = decreaseValueByone("seat-left");
        setInnerText("seat-left", updateSeatVal);

        //incrase selacted seat number
        const selactedSeatVal = increaseValueByone("selacted-seat");
        setInnerText("selacted-seat", selactedSeatVal);

        //add ticket info to ticket form
        addTicketInfoToTicketForm(buttonElmentId);

        //set intical total
        const initialTotalprice = callculateInitialTotal(selactedSeatVal, 550);
        console.log(initialTotalprice);
        setInnerText("total-price", initialTotalprice);

        // Eanble apply cuppon button when selacted seat 4
        if (selactedSeatVal === 4) {
          const appyBtn = document.getElementById("btn-apply");
          appyBtn.disabled = false;
        }

        // calculate grand total
        const grandTotal = grandTotalCallculator(
          parseInt(document.getElementById("total-price").innerText),
          parseInt(document.getElementById("discount-price").innerText)
        );
        setInnerText("grand-total", grandTotal);
        //push id of the array
        Tracker.addElement(e.target.id);
      }
      //when you are try to selact more than four seat then show a alert
      else {
        alert("You can not selact more then four seat...");
      }
    } else {
      console.log("you are clicked outside the key or alredy selacted button");
    }
  });

document.getElementById("btn-apply").addEventListener("click", function () {
  const totalPrice = getInnerText("total-price");
  const cupponInput = document.getElementById("input-cuppon");
  const cupponValue = cupponInput.value;
  if (cupponValue === "NEW15" || cupponValue === "Couple 20") {
    if (cupponValue === "NEW15") {
      handleCupponRelatedwork(totalPrice, 15);
      cupponInput.value = "";
    } else {
      handleCupponRelatedwork(totalPrice, 20);
      cupponInput.value = "";
    }
  } else {
    cupponInput.value = "";
    alert("Yur cuppon is invalid..");
  }
});
