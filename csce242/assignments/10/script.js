// Function to fetch JSON data
async function fetchIceCreamData() {
    try {
        console.log('Fetching JSON data...');
        const response = await fetch('https://portiaportia.github.io/json/ice-creams.json');
        
        // Check if response is okay
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        // Log the fetched data to see its structure
        console.log('Data fetched:', data);

        // Verify if the data has the 'iceCreamFlavors' property
        if (!data.iceCreamFlavors || !Array.isArray(data.iceCreamFlavors)) {
            throw new Error('Invalid JSON structure. Expected iceCreamFlavors array.');
        }

        return data.iceCreamFlavors;
    } catch (error) {
        console.error('Error fetching the JSON:', error);
        return [];  // Return an empty array in case of error
    }
}

// Function to display a simple message for testing
async function displayIceCreams() {
    const iceCreamFlavors = await fetchIceCreamData();
    
    // If data is empty, show an error message on the page
    const container = document.getElementById('iceCreamContainer');
    if (!iceCreamFlavors.length) {
        container.innerHTML = "<p style='color:red;'>No data fetched. Check your fetch call and the structure of the JSON.</p>";
        return;
    }

    container.innerHTML = `<p style="color:green;">Data fetched successfully! Number of flavors: ${iceCreamFlavors.length}</p>`;
}

// Call the function to display a simple message
displayIceCreams();
