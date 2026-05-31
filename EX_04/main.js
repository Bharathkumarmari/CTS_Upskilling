
// Event Array

const events = [];



// Function to Add Event

function addEvent(name, category, seats) {

    events.push({

        name: name,

        category: category,

        seats: seats

    });

}



// Add Sample Events

addEvent(
    "Music Festival",
    "Music",
    10
);

addEvent(
    "Health Camp",
    "Health",
    20
);

addEvent(
    "Food Fair",
    "Food",
    15
);

addEvent(
    "Rock Concert",
    "Music",
    5
);




// Register User Function

function registerUser(eventName) {

    const event = events.find(

        function(item) {

            return item.name === eventName;

        }

    );

    if(event && event.seats > 0) {

        event.seats--;

        alert(
            `Registered for ${eventName}`
        );

    }

    else {

        alert(
            "No seats available!"
        );

    }

}





// Filter Events by Category

function filterEventsByCategory(category) {

    return events.filter(

        function(event) {

            return event.category === category;

        }

    );

}





// Closure Example

function registrationTracker(category) {

    let totalRegistrations = 0;

    return function () {

        totalRegistrations++;

        console.log(

            `${category} Registrations:
            ${totalRegistrations}`

        );

    };

}



// Create Closure Instance

const musicTracker =
registrationTracker("Music");



// Simulate Registrations

musicTracker();

musicTracker();

musicTracker();





// Higher-Order Function

function dynamicFilter(callback) {

    return events.filter(callback);

}



// Callback Function

const filteredEvents = dynamicFilter(

    function(event) {

        return event.seats >= 10;

    }

);




// Display Events

const container =
document.getElementById("eventContainer");



filteredEvents.forEach(function(event) {

    container.innerHTML +=

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

        <button
            onclick="registerUser('${event.name}')">

            Register

        </button>

    </div>
    `;

});