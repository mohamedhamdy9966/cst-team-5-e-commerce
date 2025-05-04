const validationRules = {
    firstName: /^[\u0600-\u06FFa-zA-Z ]{2,30}$/,
    lastName: /^[\u0600-\u06FFa-zA-Z ]{2,30}$/,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    address: /^.{10,}$/,
    city: /^[\u0600-\u06FFa-zA-Z ]{2,30}$/,
    phone:/^01[0125][0-9]{8}$/,
  };

  document.addEventListener("DOMContentLoaded", () => {
    const placeOrderBtn = document.querySelector(".place-order-btn");
    placeOrderBtn.addEventListener("click", function (e) {
      const firstName = document.getElementById("firstName").value.trim();
      const lastName = document.getElementById("secondName").value.trim();
      const email = document.getElementById("email").value.trim();
      const address = document.getElementById("streetAddress1").value.trim();
      const city = document.getElementById("city").value.trim();
      const phone = document.getElementById("phone").value.trim();
      if (!validationRules.firstName.test(firstName)) {
        alert("Please enter a valid First Name.");
        return;
      }
      if (!validationRules.lastName.test(lastName)) {
        alert("Please enter a valid Second Name.");
        return;
      }
      if (!validationRules.email.test(email)) {
        alert("Please enter a valid Email.");
        return;
      }
      if (!validationRules.address.test(address)) {
        alert("Address must be at least 10 characters.");
        return;
      }
      if (!validationRules.city.test(city)) {
        alert("Please enter a valid City.");
        return;
      }
      if (!validationRules.phone.test(phone)) {
        alert("Please enter a valid Egyptian phone number.");
        return;
      }
      window.location.href = "../pages/Order Completed.html";
    });
  });
