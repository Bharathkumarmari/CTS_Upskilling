
// Event Data

const events = [

    {
        name: "Music Festival",
        category: "Music"
    },

    {
        name: "Food Workshop",
        category: "Food"
    }

];



const eventList =
document.querySelector("#eventList");



const categoryFilter =
document.querySelector("#categoryFilter");



const searchBox =
document.querySelector("#searchBox");




// Display Events

function displayEvents(data) {

    eventList.innerHTML = "";

    data.forEach(function(event) {

        const div =
        document.createElement("div");

        div.innerHTML =

        `
        <h2>${event.name}</h2>

        <button onclick="registerEvent()">

            Register

        </button>
        `;

        eventList.appendChild(div);

    });

}



// Register Button

function registerEvent() {

    alert(
        "Registration Successful!"
    );

}



// Dropdown Filter

categoryFilter.onchange = function() {

    const selected =
    categoryFilter.value;

    if(selected === "All") {

        displayEvents(events);

    }

    else {

        const filtered =
        events.filter(function(event) {

            return event.category === selected;

        });

        displayEvents(filtered);

    }

};




// Keyboard Search

searchBox.onkeydown = function() {

    const keyword =
    searchBox.value.toLowerCase();

    const searched =
    events.filter(function(event) {

        return event.name
        .toLowerCase()
        .includes(keyword);

    });

    displayEvents(searched);

};




// Initial Display

displayEvents(events);