document.addEventListener('DOMContentLoaded', () => {
    // Fetch the team-roster.json file located in the same directory
    fetch('team-roster.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the JSON data
        })
        .then(players => {
            console.log('Data loaded:', players); // Log the players data

            const playersContainer = document.getElementById('players-container');
            if (!playersContainer) {
                console.error('Could not find the #players-container element');
                return;
            }

            // Loop through each player in the JSON
            players.forEach(player => {
                const playerDiv = document.createElement('div'); // Create a div for each player
                playerDiv.classList.add('player'); // Add a class for styling

                // Add player image
                const playerImage = document.createElement('img');
                playerImage.src = `images/${player.img_name}`; // Image file path
                playerImage.alt = `${player.name}`;
                playerDiv.appendChild(playerImage); // Append image to player div

                // Add player name with number
                const playerName = document.createElement('h2');
                playerName.textContent = `${player.name} (#${player.number})`;
                playerDiv.appendChild(playerName); // Append name to player div

                // Add player position and location
                const playerDetails = document.createElement('p');
                playerDetails.textContent = `${player.position}, ${player.location}`;
                playerDiv.appendChild(playerDetails); // Append position and location

                // Add player stats (array)
                const playerStats = document.createElement('ul');
                player.stats.forEach(stat => {
                    const statItem = document.createElement('li');
                    statItem.textContent = stat;
                    playerStats.appendChild(statItem); // Append each stat as a list item
                });
                playerDiv.appendChild(playerStats); // Append stats list

                // Append the player div to the players container
                playersContainer.appendChild(playerDiv);
            });
        })
        .catch(error => {
            console.error('Error loading JSON:', error); // Handle fetch errors
        });
});


document.addEventListener("DOMContentLoaded", () => {
    const scheduleContainer = document.getElementById('schedule-container');

    // Fetch the game schedule JSON file
    fetch('game-schedule.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the JSON data
        })
        .then(games => {
            // Log the loaded data
            console.log('Game data loaded:', games);

            if (!scheduleContainer) {
                console.error('Could not find the #schedule-container element');
                return;
            }

            // Loop through each game in the JSON data
            games.forEach(game => {
                // Create a div for each game
                const gameDiv = document.createElement('div');
                gameDiv.classList.add('game');

                // Add the team logo
                const teamLogo = document.createElement('img');
                teamLogo.src = `imageslogos/${game.logo}`; // Image file path
                teamLogo.alt = `${game.team} logo`; // Set alt text for accessibility
                teamLogo.classList.add('team-logo'); // Add a class for styling
                gameDiv.appendChild(teamLogo);

                // Add the game details
                const gameDetails = document.createElement('p');
                gameDetails.textContent = `${game.team} - ${game.date} - @ ${game.location}. Result: ${game.result}`;
                gameDiv.appendChild(gameDetails);

                // Append the game div to the schedule container
                scheduleContainer.appendChild(gameDiv);
            });
        })
        .catch(error => {
            console.error('Error loading game schedule:', error);

            // Show error message in the UI
            const errorMessage = document.createElement('p');
            errorMessage.textContent = 'Failed to load game schedule. Please try again later.';
            scheduleContainer.appendChild(errorMessage);
        });
});

const gameLogo = document.createElement('img');
gameLogo.src = `imageslogos/${game.opponent_logo}`; // From your JSON file
gameLogo.alt = `${game.opponent} logo`;
gameLogo.classList.add('logo-img'); // Add the logo styling class
gameDiv.appendChild(gameLogo); // Append to the game div
