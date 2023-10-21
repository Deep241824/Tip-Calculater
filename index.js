function calculateTip() {
  const totalBillInput = document.getElementById("totalBill");
  const experienceSelect = document.getElementById("experience");
  const errorMessage = document.getElementById("errorMessage");
  const tipAmount = document.getElementById("tipAmount");

  // Clear previous error and tip
  errorMessage.textContent = "";
  tipAmount.textContent = "";

  // Validate the total bill input
  const totalBill = parseFloat(totalBillInput.value);
  if (isNaN(totalBill)) {
    errorMessage.textContent =
      "Invalid input. Please enter a valid number for the total bill.";
    return;
  }

  // Calculate the tip based on experience
  const experience = experienceSelect.value;
  let tipPercentage;
  switch (experience) {
    case "excellent":
      tipPercentage = 0.2;
      break;
    case "good":
      tipPercentage = 0.15;
      break;
    case "average":
      tipPercentage = 0.1;
      break;
    default:
      errorMessage.textContent = "Invalid experience level.";
      return;
  }

  const tipAmountTotal = totalBill * tipPercentage;
  tipAmount.textContent = `Per head tip: ₹${(tipAmountTotal / 5).toFixed(2)}`;
}
