import React, { useEffect } from "react";

function CoursePaymentButton() {
  useEffect(() => {
    const rzpPaymentForm = document.getElementById("rzp_payment_form");

    if (!rzpPaymentForm.hasChildNodes()) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_OTFNWeRhhhwANi"; // Replace with your actual Razorpay Payment Button ID
      rzpPaymentForm.appendChild(script);
    }
  }, []);

  return (
    <div className="m-2">
     
      <form id="rzp_payment_form"></form>
      
    </div>
  );
}

export default CoursePaymentButton;
