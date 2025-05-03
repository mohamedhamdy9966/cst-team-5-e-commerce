const validationRules = {
  firstName: /^[\u0600-\u06FFa-zA-Z ]{2,30}$/,
  secondName: /^[\u0600-\u06FFa-zA-Z ]{2,30}$/,
  country: /^[\u0600-\u06FFa-zA-Z ]{2,30}$/,
  email: /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/,
  streetAddress1: /^.{10,}$/,
  streetAddress2: /^[\u0600-\u06FFa-zA-Z ]{2,30}$/,
  city: /^[\u0600-\u06FFa-zA-Z ]{2,30}$/,
  phone: /^01[0125][0-9]{8}$/,
};

function validateInput(input) {
  const field = input.name;
  const regex = validationRules[field];

  if (!regex) return true;

const trimmedValue = input.value.trim();
if (!trimmedValue && !input.required) return true; // Allow empty optional fields

const isValid = regex.test(trimmedValue);
input.classList.toggle("is-invalid", !isValid);
input.classList.toggle("is-valid", isValid);
return isValid;

}

function setupLiveValidation(formInputs) {
  formInputs.forEach((input) => {
    ["input", "blur"].forEach((event) => {
      input.addEventListener(event, () => validateInput(input));
    });
  });
}

function validateForm(formInputs) {
  return Array.from(formInputs).every((input) => validateInput(input));
}

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("checkoutForm");
  const inputs = document.querySelectorAll(".checkout-form input");

  setupLiveValidation(inputs);



  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Always prevent default first
  
    const isFormValid = validateForm(inputs);
  
    if (!isFormValid) {
      alert("Please correct the errors in the form before placing your order.");
    } else {
      // Redirect only if valid
      window.location.href = "Order Completed.html";
    }
  });
  
  }
);

  

  