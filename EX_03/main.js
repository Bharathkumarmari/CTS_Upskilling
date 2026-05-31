
// Event Array

const events = [

    {
        name: "Music Festival",
        seats: 10,
        isPast: false
    },

    {
        name: "Health Camp",
        seats: 0,
        isPast: false
    },

    {
        name: "Food Fair",
        seats: 15,
        isPast: true
    },

    {
        name: "Sports Meet",
        seats: 5,
        isPast: false
    }

];


// Select Container

const container =
document.getElementById("eventContainer");



// Loop Through Events

events.forEach(function(event, index) {

    // Condition Check

    if(event.isPast) {

        console.log(
            `${event.name} is a past event`
        );

    }

    else if(event.seats <= 0) {

        console.log(
            `${event.name} is full`
        );

    }

    else {

        // Create Event Card

        container.innerHTML +=

        `
        <div class="eventCard">

            <h2>${event.name}</h2>

            <p>
                Available Seats:
                ${event.seats}
            </p>

            <button onclick="register(${index})">

                Register

            </button>

        </div>
        `;

    }

});




// Registration Function

function register(index) {

    try {

        // Check Seat Availability

        if(events[index].seats <= 0) {

            throw "No seats available!";

        }

        // Reduce Seats

        events[index].seats--;

        alert(
            "Registration Successful!"
        );

        location.reload();

    }

    catch(error) {

        alert(
            "Error: " + error
        );

    }

}