
// Event List

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




// Default Parameter

function addEvent(

    name = "Unknown Event",

    category = "General"

) {

    console.log(

        `${name} - ${category}`

    );

}



addEvent();




// Destructuring

const firstEvent = events[0];

const {

    name,

    category

} = firstEvent;



console.log(name);

console.log(category);




// Spread Operator

const clonedEvents =

[...events];




// Filter Example

const musicEvents =

clonedEvents.filter(

    event =>

    event.category === "Music"

);



console.log(musicEvents);