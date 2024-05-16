import React from "react";

function ContactForm() {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  
  //   const myForm = event.target;
  //   const formData = new FormData(myForm);
  
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: new URLSearchParams(formData).toString(),
  //   })
  //     .then(() => navigate("/thank-you/"))
  //     .catch((error) => alert(error));
  // };
  
  return (
    <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />

    <p>
      {/* <label htmlFor="name">Name</label> */}
      <input type="text" id="name" name="name" />
    </p>
    <p>
      {/* <label htmlFor="email">Email</label> */}
      <input type="text" id="email" name="email" />
    </p>
    <p>
      {/* <label htmlFor="message">Message</label> */}
      <textarea id="message" name="message"></textarea>
    </p>
    <p>
      <button type="submit">Send</button>
    </p>
  </form>

  );
}

export default ContactForm;


