// Counter
let count = 0;
document.getElementById('counter').addEventListener('click', function() {
  count += 1;
  this.textContent = count;
});

// Random image 
document.getElementById('randomImage').addEventListener('click', function() {
  this.src = 'https://picsum.photos/200?random=' + Math.floor(Math.random() * 1000);
});

// Slider 
const slider = document.getElementById('slider');
const square = document.getElementById('square');

slider.addEventListener('input', function() {
  let sliderValue = slider.value;
  square.style.transform = `translateX(${sliderValue * 2}px)`;  // Adjust multiplier as necessary
});
