function sendMail(){
  // Input validation
  const name = document.getElementById("sendername").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Please fill in all required fields");
    return;
  }

  // Set up template parameters
  const templateParams = {
    to_name: "her beutty",               // Recipient's name as defined in your EmailJS template
    to_email: "kimokomono74@gmail.com",   // <-- Add your recipient's email address here
    from_name: name,
    from_email: email,
    subject: subject,
    message: message,
  };

  emailjs
    .send("service_xillhn6", "template_o637ikb", templateParams)
    .then(() => {
      alert("Message sent successfully!");
    })
    .catch((error) => {
      console.error("Failed:", error);
      alert(`Error: ${error.text}`);
    });
}
