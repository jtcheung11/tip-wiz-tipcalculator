//buttons for contact page
const contactBtn = document.getElementById("contact-btn");

//inputs for contact page
const contactName = document.getElementById("input_name")
const contactEmail = document.getElementById("input_email")
const contactText = document.getElementById("input_text")

  const subForm = () => {

    let body = {
        contactName: contactName.value,
        contactEmail: contactEmail.value,
        contactText: contactText.value,
    };
    // console.log(body);
    axios
    .post("http://localhost:5500/contact", body)
    .then((res) => console.log(res.body));
    // alert("Recieved, we will be in contact soon.")
  };

  //event listener for contact page
contactBtn.addEventListener("click", subForm);