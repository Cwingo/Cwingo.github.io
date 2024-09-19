document.addEventListener('DOMContentLoaded', () => {

    // Get references to elements
    const exercise1Link = document.getElementById('exercise1Link');
    const exercise2Link = document.getElementById('exercise2Link');
    const colorSliderSection = document.getElementById('colorSlider');
    const pictureChooserSection = document.getElementById('pictureChooser');
    const slider = document.getElementById('slider');
    const colorMessage = document.getElementById('colorMessage');
    const imageContainer = document.getElementById('imageContainer');

    // Default: Show Exercise 1, hide Exercise 2
    colorSliderSection.style.display = 'flex';
    pictureChooserSection.style.display = 'none';

    // Toggle between Exercise 1 and Exercise 2
    exercise1Link.addEventListener('click', (e) => {
        e.preventDefault();
        console.log("Exercise 1 clicked"); // Log to confirm button click
        colorSliderSection.style.display = 'flex';
        pictureChooserSection.style.display = 'none';
    });

    exercise2Link.addEventListener('click', (e) => {
        e.preventDefault();
        console.log("Exercise 2 clicked"); // Log to confirm button click
        colorSliderSection.style.display = 'none';
        pictureChooserSection.style.display = 'flex';
    });

    // Color Slider logic
    slider.addEventListener('input', (e) => {
        const redValue = e.target.value;
        colorSliderSection.style.backgroundColor = `rgb(${redValue}, 0, 0)`;
        console.log("Slider value: ", redValue); // Log slider value for debugging

        if (redValue < 85) {
            colorMessage.textContent = "Chill";
        } else if (redValue >= 85 && redValue < 170) {
            colorMessage.textContent = "Warm";
        } else {
            colorMessage.textContent = "Hot";
        }
    });

    // Picture Chooser logic
    const picsumBaseUrl = 'https://picsum.photos';

    function loadImage(size) {
        imageContainer.innerHTML = `<img src="${picsumBaseUrl}/${size}/${size}" alt="Random Image">`;
        console.log("Image loaded: ", `${picsumBaseUrl}/${size}/${size}`); // Log image URL for debugging
    }

    document.getElementById('small').addEventListener('click', () => loadImage(200));
    document.getElementById('medium').addEventListener('click', () => loadImage(400));
    document.getElementById('large').addEventListener('click', () => loadImage(600));
});
