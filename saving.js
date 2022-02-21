document.getElementById("calculate-button").addEventListener("click", function () {



    // income value input
    const incomeInput = document.getElementById("income-input");
    const incomeInputText = parseFloat(incomeInput.value);
    if (incomeInput.value > 0) {

        incomeInput.value = "";
    }

    else {
        alert("enter a valid number");
    }


    const foodInput = document.getElementById("food-input");
    const foodInputText = parseFloat(foodInput.value);
    if (foodInput.value > 0) {

        foodInput.value = "";
        console.log(foodInputText);
    }
    else {
        foodInput.value = "";
    }




    //rent input value
    const rentInput = document.getElementById("rent-input");
    const rentInputText = parseFloat(rentInput.value);
    if (rentInput.value > 0) {

        rentInput.value = "";
        console.log(rentInputText);
    }
    else {
        rentInput.value = "";
    }




    //cloth input value
    const clothInput = document.getElementById("cloth-input");
    const clothInputText = parseFloat(clothInput.value);
    if (clothInput.value > 0) {

        clothInput.value = "";
        console.log(clothInputText);
    }
    else {
        clothInput.value = "";
    }





    const totalExpense = document.getElementById("total-expense");
    const totalExpenseText = parseFloat(totalExpense.innerText);
    const grandTotalExpenses = totalExpenseText + foodInputText + rentInputText + clothInputText;
    totalExpense.innerText = grandTotalExpenses;

    const remainBalance = document.getElementById("remaining-balance");
    const remainBalanceText = parseFloat(remainBalance.innerText);
    console.log(remainBalanceText);
    const remainBalanceAll = remainBalanceText + foodInputText + rentInputText + clothInputText;
    const finalBalance = incomeInputText - remainBalanceAll;
    console.log(finalBalance);

    if (incomeInputText < remainBalanceAll) {
        alert("you do not have enough money");
    }
    else {
        remainBalance.innerText = finalBalance;
    }


});

function getInputValue(inputId) {

    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input field
    inputField.value = '';
    return amountValue;
}













document.getElementById("save-button").addEventListener("click", function () {

    const incomeeInput = getInputValue("income-input")
    const fooddInput = getInputValue("food-input")
    const renttInput = getInputValue("rent-input")
    const clothsInput = getInputValue("cloth-input");
    const totalCost = fooddInput + renttInput + clothsInput;

    const saveInput = document.getElementById("save-input");
    const saveInputText = parseFloat(saveInput.value);
    saveInput.value = "";

    const balance = saveInputText * totalCost / 100;
    console.log(balance);



    const savingAmount = document.getElementById("saving-total");
    const savingAmountText = parseFloat(savingAmount.innerText);
    savingAmount.innerText = balance;

    const remainingBalance = document.getElementById("balance-total");
    const remainBalanceText = parseFloat(remainingBalance.innerText);
    const remainBalanceTotal = incomeeInput - balance;
    remainingBalance.innerText = remainBalanceTotal;


})