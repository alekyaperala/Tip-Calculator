let billAmount = document.getElementById("billAmount");
let percenageTip = document.getElementById("percentageTip");
let errorMessage = "Please Enter a Valid Input.";

function calculateButton() {

    if (billAmount.value === "") {
        document.getElementById("errorMessage").textContent = errorMessage;
    } else if (percenageTip.value === "") {
        document.getElementById("errorMessage").textContent = errorMessage;

    } else {

        let billValue = parseInt(billAmount.value);
        let percentValue = parseInt(percenageTip.value);
        document.getElementById("errorMessage").textContent = "";
        let tipAmount = (percentValue / 100) * billValue;
        let totalAmount = billValue + (percentValue / 100) * billValue;
        document.getElementById("tipAmount").value = tipAmount;
        document.getElementById("totalAmount").value = totalAmount;
    }

}
