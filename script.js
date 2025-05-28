const emailInput = document.getElementById("email");
const btn = document.getElementById("btn");
const form = document.querySelector(".form");
const warning = document.querySelector(".warning");
const successMsg = document.querySelector(".success-card");
const card = document.querySelector(".container");
const dismissBtn = document.querySelector(".success-btn");

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
function inputFunction(e) {
  e.preventDefault();
  const emailValue = emailInput.value.trim();

  if (emailValue === "" || !isValidEmail(emailValue)) {
    console.log("empty");
    emailInput.style.borderColor = "hsl(4, 100%, 67%)";
    warning.style.display = "block";
  } else {
    console.log("email entered: ", emailInput.value);
    card.style.display = "none";
    successMsg.style.display = "flex";

    const successText = successMsg.querySelector("p");
    successText.innerHTML = `A confirmation email has been sent to <b>${emailValue}</b>.
      Please open it and click the button inside to confirm your subscription.`;
  }
}

dismissBtn.addEventListener("click", () => {
  successMsg.style.display = "none";
  card.style.display = "flex";
  emailInput.value = "";
});

form.addEventListener("submit", inputFunction);
btn.addEventListener("click", inputFunction);
