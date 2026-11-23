import { useEffect, useRef } from "react";

const RAZORPAY_BUTTON_ID = "pl_OTFNWeRhhhwANi"; // Razorpay Payment Button ID

/** Embeds the Razorpay payment button. Uses a ref so several can coexist. */
function CoursePaymentButton() {
  const formRef = useRef(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form || form.hasChildNodes()) return;
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.async = true;
    script.dataset.payment_button_id = RAZORPAY_BUTTON_ID;
    form.appendChild(script);
  }, []);

  return <form ref={formRef} className="min-h-[44px]" />;
}

export default CoursePaymentButton;
