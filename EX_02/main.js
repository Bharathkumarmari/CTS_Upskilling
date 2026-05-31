
// Constant Variables

const eventName =
    "Community Music Festival";

const eventDate =
    "15 August 2026";


// Mutable Variable

let availableSeats = 50;


// Display Event Information

document.getElementById("eventInfo")
.innerHTML =

`
Event Name: ${eventName} <br>
Event Date: ${eventDate}
`;


// Display Seat Count

document.getElementById("seatInfo")
.innerHTML =

`Available Seats: ${availableSeats}`;



// Registration Function

function registerSeat() {

    // Reduce Seat Count

    availableSeats--;


    // Update Output

    document.getElementById("seatInfo")
    .innerHTML =

    `Available Seats: ${availableSeats}`;

}