
async function submitRegistration() {

    const userData = {

        name: "Bharath",

        email: "bharath@gmail.com"

    };



    try {

        // Simulate Delay

        setTimeout(async function() {

            const response = await fetch(

            'https://jsonplaceholder.typicode.com/posts',

            {

                method: "POST",

                headers: {

                    "Content-Type":
                    "application/json"

                },

                body: JSON.stringify(
                    userData
                )

            }

            );



            const result =
            await response.json();



            console.log(result);

            alert(
                "Registration Successful"
            );

        }, 2000);

    }

    catch(error) {

        alert(
            "Submission Failed"
        );

    }

}



submitRegistration();