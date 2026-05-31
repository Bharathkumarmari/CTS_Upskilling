
// Event Data

const events = [

    {
        name: "Music Festival",
        seats: 10
    },

    {
        name: "Food Workshop",
        seats: 5
    }

];




// Access DOM Element

const container =
document.querySelector("#container");




// Create Event Cards

events.forEach(function(event) {

    // Create Card

    const card =
    document.createElement("div");

    card.classList.add("eventCard");



    // Event Title

    const title =
    document.createElement("h2");

    title.textContent =
    event.name;



    // Seat Info

    const seats =
    document.createElement("p");

    seats.textContent =
    `Seats: ${event.seats}`;



    // Register Button

    const registerBtn =
    document.createElement("button");

    registerBtn.textContent =
    "Register";



    // Cancel Button

    const cancelBtn =
    document.createElement("button");

    cancelBtn.textContent =
    "Cancel";



    // Register Event

    registerBtn.onclick = function() {

        if(event.seats > 0) {

            event.seats--;

            seats.textContent =
            `Seats: ${event.seats}`;

        }

    };



    // Cancel Event

    cancelBtn.onclick = function() {

        event.seats++;

        seats.textContent =
        `Seats: ${event.seats}`;

    };



    // Append Elements

    card.appendChild(title);

    card.appendChild(seats);

    card.appendChild(registerBtn);

    card.appendChild(cancelBtn);

    container.appendChild(card);

});