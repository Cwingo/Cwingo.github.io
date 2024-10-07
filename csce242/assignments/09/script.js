// Bird class definition
class Bird {
    constructor(name, size, lifespan, food, habitat, interestingFact, image) {
        this.name = name;
        this.size = size;
        this.lifespan = lifespan;
        this.food = food;
        this.habitat = habitat;
        this.interestingFact = interestingFact;
        this.image = image;
    }

    getSection() {
        return `<div class="bird-box w3-card-4 w3-hover-shadow" onclick="showBirdDetails('${this.name}')">
                    <img src="${this.image}" alt="${this.name}">
                    <h3>${this.name}</h3>
                </div>`;
    }

    expandedSection() {
        return `<p><strong>Size:</strong> ${this.size}</p>
                <p><strong>Lifespan:</strong> ${this.lifespan}</p>
                <p><strong>Food:</strong> ${this.food}</p>
                <p><strong>Habitat:</strong> ${this.habitat}</p>
                <p><strong>Interesting Fact:</strong> ${this.interestingFact}</p>`;
    }
}

// Array of birds with the images folder path
const birds = [
    new Bird("Hummingbird", "2.5 inches", "3-5 years", "Nectar (Sugar water)", "Trees", "They're nicknamed 'Hummers'", "images/549985061-Rufous_Hummingbird-Nathan_Wall-1280x734.jpg"),
    new Bird("Blue Jay", "9-12 inches", "7 years", "Nuts and seeds", "Forests and suburban areas", "They are known for their intelligence and complex social systems.", "images/311635911-480px.jpg"),
    new Bird("Cardinal", "8-9 inches", "15 years", "Seeds and fruits", "Woodlands and gardens", "Male cardinals are known for their bright red color, which they get from their diet.", "images/cardinal-branch-songbird.jpg.webp"),
    new Bird("Robin", "10 inches", "2 years", "Insects and worms", "Gardens and forests", "Robins are known for their early morning singing, often heard at dawn.", "images/European-robin-redbreast.jpg.webp")
];

// Dynamically generate the bird sections
const birdContainer = document.getElementById('birdContainer');
birds.forEach(bird => {
    birdContainer.innerHTML += bird.getSection();
});

// Function to show bird details in modal
function showBirdDetails(birdName) {
    const selectedBird = birds.find(bird => bird.name === birdName);
    document.getElementById('modalTitle').innerText = selectedBird.name;
    document.getElementById('modalContent').innerHTML = selectedBird.expandedSection();
    document.getElementById('birdModal').style.display = 'block';
}
