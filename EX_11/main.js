
const form =
document.getElementById("registerForm");



form.addEventListener(

"submit",

function(event) {

    // Prevent Reload

    event.preventDefault();



    // Access Form Data

    const name =
    form.elements["username"].value;

    const email =
    form.elements["email"].value;

    const selectedEvent =
    form.elements["event"].value;



    // Validation

    let valid = true;



    if(name === "") {

        document.getElementById(
        "nameError"
        ).textContent =

        "Name Required";

        valid = false;

    }



    if(email === "") {

        document.getElementById(
        "emailError"
        ).textContent =

        "Email Required";

        valid = false;

    }



    if(valid) {

        alert(

        `Registered for ${selectedEvent}`

        );

    }

});