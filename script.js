function sendMail() {
  var params = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    from_message: document.getElementById("message").value,
  };

  const serviceID = "service_bsfsi1b";
  const templateID = "template_hnw8l6l";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch((err) => console.log(err));
}
