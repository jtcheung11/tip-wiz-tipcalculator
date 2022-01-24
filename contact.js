//buttons for contact page
const contactBtn = document.getElementById("contact-btn");

//inputs for contact page
//does this select all 3 inputs I have that have a class name of 'contactip'?
const contactForm = document.querySelectorAll(".contactip");

console.log(contactForm)
  const subForm = () => {
    
    //will this make body all 3 inputs that have classname of contacttip?
    let body = {contactForm: contactForm.value };
    console.log(body);
    axios
    .post("http://localhost:5500/contact", body)
    .then((res) => console.log(res));
  };

  //event listener for contact page
contactBtn.addEventListener("click", subForm);