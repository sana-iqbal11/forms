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
    <div>
    <div>
      <form name="contact" method="POST" netlify action="contactus/?success=true">
      <input type="hidden" name="form-name" value="contact" />

        <p>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />
        </p>
        <p>
          <label htmlFor="message">Messsage</label>
          <textarea id="message" name="message"></textarea>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  </div>
  );
}

export default ContactForm;


