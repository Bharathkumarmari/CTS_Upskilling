
// DOM Elements

const loader =
document.getElementById("loader");

const output =
document.getElementById("output");




// USING .then() and .catch()

fetch(
'https://jsonplaceholder.typicode.com/posts'
)

.then(function(response) {

    return response.json();

})

.then(function(data) {

    console.log(data);

})

.catch(function(error) {

    console.log(
        "Error:",
        error
    );

});





// USING async/await

async function loadEvents() {

    try {

        // Fetch Data

        const response = await fetch(

        'https://jsonplaceholder.typicode.com/posts'

        );

        const data =
        await response.json();



        // Hide Loader

        loader.style.display =
        "none";



        // Display Limited Data

        data.slice(0,5).forEach(

            function(event) {

                output.innerHTML +=

                `
                <div class="eventCard">

                    <h2>
                        ${event.title}
                    </h2>

                    <p>
                        ${event.body}
                    </p>

                </div>
                `;

            }

        );

    }

    catch(error) {

        loader.innerHTML =
        "Failed to Load Data";

        console.log(error);

    }

}



// Call Function

loadEvents();