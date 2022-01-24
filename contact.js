//buttons for contact page
const contactBtn = document.getElementById("contact-btn");

//inputs for contact page
//does this select all 3 inputs I have that have a class name of 'contactip'?
const contactName = document.querySelectorAll(".contactip");

  const subForm = () => {
     
    let body = {contactName: contactName.value };
    console.log(body);
    axios
    .post("http://localhost:5500/contact", body)
    .then((res) => console.log(res));
  };

  //event listener for contact page
contactBtn.addEventListener("click", subForm);