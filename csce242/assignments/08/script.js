// Associative array containing image data
const images = [
    {
        src: 'images/birthday.jpg', // Updated to reflect image folder location
        title: 'Birthday',
        description: 'A fun birthday celebration with a party hat.'
    },
    {
        src: 'images/clown.jpg', // Updated path
        title: 'Clown',
        description: 'A  clown ready to entertain.'
    },
    {
        src: 'images/rain.jpg', // Updated path
        title: 'Rain',
        description: 'I think it’s time to bring your umbrella.'
    },
    {
        src: 'images/read.jpg', // Updated path
        title: 'Reading',
        description: 'Engaged in some reading with a book.'
    },
    {
        src: 'images/shovel.jpg', // Updated path
        title: 'Gardening',
        description: 'Ready for some gardening with a shovel.'
    },
    {
        src: 'images/work.jpg', // Updated path
        title: 'Working',
        description: 'Hard at work on the laptop.'
    }
];

// Function to load images onto the page
function loadImages() {
    const gallery = document.getElementById('image-gallery');

    images.forEach((imageData, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = imageData.src;
        imgElement.alt = imageData.title;
        imgElement.dataset.index = index; // Store index for reference
        imgElement.addEventListener('click', showDescription);

        // Check if the image path is correct
        console.log(`Attempting to load image from: ${imgElement.src}`);

        gallery.appendChild(imgElement);
    });
}

// Function to display image title and description
function showDescription(event) {
    const imageIndex = event.target.dataset.index;
    const imageData = images[imageIndex];

    const titleElement = document.getElementById('image-title');
    const descriptionElement = document.getElementById('image-description');

    titleElement.textContent = imageData.title;
    descriptionElement.textContent = imageData.description;

    // Show the description container
    document.getElementById('description-container').style.display = 'block';
}

// Load images when the page loads
window.onload = loadImages;

