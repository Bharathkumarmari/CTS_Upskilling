
// Event Array

const events = [];



// Add Events Using push()

events.push({

    name: "Workshop on Baking",

    category: "Food"

});

events.push({

    name: "Rock Music Night",

    category: "Music"

});

events.push({

    name: "Classical Concert",

    category: "Music"

});

events.push({

    name: "Health Awareness Camp",

    category: "Health"

});




// Filter Only Music Events

const musicEvents = events.filter(

    function(event) {

        return event.category === "Music";

    }

);




// Format Event Names Using map()

const formattedEvents = musicEvents.map(

    function(event) {

        return `Event: ${event.name}`;

    }

);




// Display Data

const output =
document.getElementById("output");



formattedEvents.forEach(function(item) {

    output.innerHTML +=

    `
    <div class="card">

        <h2>${item}</h2>

    </div>
    `;

});