
// Event Class

class Event {

    // Constructor

    constructor(name, category, seats) {

        this.name = name;

        this.category = category;

        this.seats = seats;

    }

}



// Prototype Method

Event.prototype.checkAvailability = function () {

    if(this.seats > 0) {

        return "Seats Available";

    }

    else {

        return "Event Full";

    }

};




// Create Objects

const event1 = new Event(

    "Music Festival",
    "Music",
    20

);

const event2 = new Event(

    "Health Camp",
    "Health",
    0

);




// Store Objects in Array

const events = [

    event1,
    event2

];




// Display Data

const output =
document.getElementById("output");



events.forEach(function(event) {

    // Display Event Details

    output.innerHTML +=

    `
    <div class="eventCard">

        <h2>${event.name}</h2>

        <p>
            Category:
            ${event.category}
        </p>

        <p>
            Seats:
            ${event.seats}
        </p>

        <p>
            Status:
            ${event.checkAvailability()}
        </p>

    </div>
    `;



    // Object.entries()

    console.log(

        Object.entries(event)

    );

});