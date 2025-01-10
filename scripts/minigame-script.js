// Get references to elements
const startButton = document.getElementById('start-game');
const storyline = document.getElementById('storyline');
const gameArea = document.getElementById('game-area');
const dragItems = document.querySelectorAll('#drag-items div');
const dropZones = document.querySelectorAll('.drop-zone');
const feedback = document.getElementById('feedback');
const lifePointsDisplay = document.getElementById('life-points');
const aqiBox = document.getElementById('aqi-box');
const aqiLevelDisplay = document.getElementById('aqi-level');
const animation = document.getElementById('animation');
const heartIcons = document.querySelectorAll('.heart-icon'); // Heart icons
const dragonAnimation = document.getElementById('dragon-animation');

// Show popup image for specific actions
function showPopupImage(imageSrc, duration = 3000) {
  const popupImage = document.createElement('img');
  popupImage.src = imageSrc;
  popupImage.alt = 'Popup Image';
  popupImage.style.position = 'fixed';
  popupImage.style.top = '50%';
  popupImage.style.left = '50%';
  popupImage.style.transform = 'translate(-50%, -50%)';
  popupImage.style.zIndex = '1000';
  popupImage.style.width = '500px';
  popupImage.style.transition = 'opacity 0.5s ease-in-out';
  popupImage.style.opacity = '1';
  document.body.appendChild(popupImage);

  // Remove the image after the specified duration
  setTimeout(() => {
    popupImage.style.opacity = '0';
    setTimeout(() => {
      document.body.removeChild(popupImage);
    }, 500); // Wait for fade-out animation
  }, duration);
}

// Initialize game variables
let lifePoints = 3;
let aqiLevel = 50;

// Start the game
startButton.addEventListener('click', () => {
  storyline.style.display = 'none';
  gameArea.style.display = 'block';
});

// Handle drag start for all draggable items
dragItems.forEach((item) => {
  item.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text', e.target.id);
  });
});

// Handle drag over and drop events for each drop zone
dropZones.forEach((zone) => {
  zone.addEventListener('dragover', (e) => {
    e.preventDefault(); // Allow drop
  });

  zone.addEventListener('drop', (e) => {
    e.preventDefault();
    const draggedItem = e.dataTransfer.getData('text');
    handleDrop(draggedItem, zone.id);
  });
});

function displayNextButton() {
  // Check if the button already exists
  if (document.getElementById('next-button')) return;

  // Create the Next button
  const nextButton = document.createElement('button');
  nextButton.id = 'next-button';
  nextButton.textContent = 'Next';
  nextButton.style.marginLeft = '10px'; // Position beside AQI level
  nextButton.style.padding = '10px 20px';
  nextButton.style.fontSize = '1rem';
  nextButton.style.borderRadius = '8px';
  nextButton.style.cursor = 'pointer';
  nextButton.style.background = 'linear-gradient(45deg, #4CAF50, #8BC34A)';
  nextButton.style.color = 'white';

  // Add click event listener to move to the next level
  nextButton.addEventListener('click', () => {
    alert('Moving to the next level!'); // Replace with actual functionality
    nextButton.remove(); // Remove the button after clicking
  });

  // Append the button beside the AQI box
  aqiBox.parentElement.appendChild(nextButton);
}

function handleDrop(draggedItem, zoneId) {
  switch (zoneId) {
    case 'bin':
      feedback.textContent = 'Good job! You disposed of it correctly.';
      showPopupImage('YAY(1).png');
      displayNextButton(); // Call the Next button display
      break;
    case 'road':
      feedback.textContent = 'Wrong choice! Throwing it on the road harms the environment.';
      lifePoints -= 1;
      showPopupImage('roadpopup.png');
      showAnimation('road');
      break;
    case 'fire':
      feedback.textContent = 'Burning plastic pollutes the air severely.';
      aqiLevel += 30;
      showPopupImage('AQI RISING.png');
      showAnimation('fire');
      showDragon(); // Show the dragon animation for 3 seconds
      break;
    default:
      feedback.textContent = 'Unknown action.';
      break;
  }

  // Update the progress display
  updateProgress();

  // Check for Game Over or Warning
  if (lifePoints <= 0) {
    alert('Game Over! Try again to make better choices.');
    resetGame();
  } else if (aqiLevel > 200) {
    feedback.textContent += ' Warning: AQI is critically high!';
  }
}

// Show dragon animation for 3 seconds when burning plastic
function showDragon() {
  dragonAnimation.style.display = 'block'; // Show the dragon
  dragonAnimation.src = 'AQI RISING.png';
  // Hide the dragon after 3 seconds
  setTimeout(() => {
    dragonAnimation.style.display = 'none';
  }, 4000); // 4000 milliseconds = 4 seconds
}

// Update the UI for life points and AQI
function updateProgress() {
  lifePointsDisplay.textContent = lifePoints;
  aqiLevelDisplay.textContent = aqiLevel;
  updateHeartIcons();
  updateAQIBox();
}

// Function to update the AQI box color based on AQI level
function updateAQIBox() {
  let color = ''; // Default color

  if (aqiLevel <= 50) {
    color = 'green'; // Good air quality
  } else if (aqiLevel <= 150) {
    color = 'orange'; // Moderate air quality
  } else if (aqiLevel <= 200) {
    color = 'red'; // Unhealthy for sensitive groups
  } else if (aqiLevel <= 300) {
    color = 'purple'; // Unhealthy air quality
  } else if (aqiLevel <= 400) {
    color = 'maroon'; // Very unhealthy air quality
  } else {
    color = 'gray'; // Hazardous air quality
  }

  // Update the AQI box color and AQI level text
  aqiBox.style.backgroundColor = color;
  aqiLevelDisplay.textContent = aqiLevel;
}

// Update heart icons based on life points
function updateHeartIcons() {
  heartIcons.forEach((heart, index) => {
    if (index >= lifePoints) {
      heart.style.display = 'none'; // Hide the heart icon
    } else {
      heart.style.display = 'inline-block'; // Show the heart icon
    }
  });
}

// Show appropriate animation based on the zone
function showAnimation(type) {
  animation.style.display = 'none'; // Hide previous animation
  if (type === 'fire') {
    animation.src = 'smoke.gif'; // Replace with your smoke animation image or GIF
    feedback.textContent += ' Watch how burning affects the air!';
  } else if (type === 'road') {
    animation.src = 'litter.gif'; // Replace with a litter animation image or GIF
    feedback.textContent += ' Trash makes the environment dirty.';
  } else {
    return;
  }
  animation.style.display = 'block';
}

// Reset game state
function resetGame() {
  gameArea.style.display = 'none';
  document.getElementById('info-page').style.display = 'block';

  lifePoints = 3;
  aqiLevel = 50;
  lifePointsDisplay.textContent = lifePoints;
  aqiLevelDisplay.textContent = aqiLevel;
  feedback.textContent = '';
  animation.style.display = 'none'; // Hide animation
  updateHeartIcons(); // Reset heart icons

  const nextButton = document.getElementById('next-button');
  if (nextButton) nextButton.remove();
}
