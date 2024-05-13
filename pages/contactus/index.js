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
    <form name="contact" method="post" netlify-honeypot="bot-field">
      <p>
        <label htmlFor="name">Name</label> <br />
        <input type="text" id="name" name="name" required />
      </p>
      <p>
        <label htmlFor="email">Email</label> <br />
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="message">Message</label> <br />
        <textarea id="message" name="message" required></textarea>
      </p>
      <p>
        <input type="submit" value="Submit message" />
      </p>
    </form>

    </div>
  </div>
  );
}

export default ContactForm;


