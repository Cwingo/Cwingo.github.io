// Function to fetch and display ice creams
async function fetchIceCreams() {
    try {
        // Fetch the ice cream data from JSON
        const response = await fetch('https://portiaportia.github.io/json/ice-creams.json');
        const data = await response.json();

        // Filter out images with '-2' in the name
        const filteredIceCreams = data.filter(iceCream => !iceCream.image.includes('-2'));

        // Get the container element
        const container = document.getElementById('iceCreamContainer');

        // Loop through the filtered ice creams and create HTML elements
        filteredIceCreams.forEach(iceCream => {
            const imgContainer = document.createElement('div');
            imgContainer.classList.add('img-container');

            // Create image element
            const img = document.createElement('img');
            img.src = `https://portiaportia.github.io/json/images/ice-creams/${iceCream.image}`;
            img.alt = iceCream.name;
            img.classList.add('ice-cream-image');

            // Create overlay for hover effect
            const overlay = document.createElement('div');
            overlay.classList.add('overlay');
            overlay.textContent = iceCream.name;

            // Append image and overlay to container
            imgContainer.appendChild(img);
            imgContainer.appendChild(overlay);

            // Append container to the main grid
            container.appendChild(imgContainer);
        });

    } catch (error) {
        console.error('Error fetching ice creams:', error);
    }
}

// Run the function to fetch and display the ice creams
fetchIceCreams();
