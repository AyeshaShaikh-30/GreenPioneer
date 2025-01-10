document.addEventListener("DOMContentLoaded", function () {
    // Level 0: Start Level Button Logic
    const startLevelButton = document.getElementById("start-level-btn");
    let levelContent = document.getElementById("level0-content");

    // Initially hide the level content for Level 0
    levelContent.style.display = "none";

    if (startLevelButton) {
        startLevelButton.addEventListener("click", function () {
            // Hide the 'Start Level' button for Level 0
            startLevelButton.style.display = "none";
            // Show the level content for Level 0
            levelContent.style.display = "block";
        });
    }

    // Unlock all levels and make them expandable
    unlockAllLevels();
});

// Function to unlock all levels and make them expandable
function unlockAllLevels() {
    const levelButtons = document.querySelectorAll(".start-level-button");

    // Enable all the start level buttons and show level content
    levelButtons.forEach((button) => {
        button.disabled = false; // Remove the 'disabled' attribute
        button.classList.remove("locked"); // Remove the locked class
    });

    const levelContents = document.querySelectorAll(".text-box");
    levelContents.forEach((content) => {
        content.style.display = "block"; // Ensure all levels are visible
    });

    const timelineEl = document.querySelector(".timeline")
    const lvlZeroContent = document.getElementById("level0-content");
    const lvlOneContent = document.getElementById("level1-content");
    const lvlTwoContent = document.getElementById("level2-content");
    const lvlThreeContent = document.getElementById("level3-content");
    const memeContainers = document.querySelectorAll(".meme-container");

    if (lvlZeroContent) lvlZeroContent.style.display = "block";
    if (lvlOneContent) lvlOneContent.style.display = "block";
    if (lvlTwoContent) lvlTwoContent.style.display = "block";
    if (lvlThreeContent) lvlThreeContent.style.display = "block";
    if (timelineEl) timelineEl.style.display = " block"

    memeContainers.forEach((element) => {
        element.style.display = "block";
    });
}

// Function to check the answer for Level 0
function checkAnswer(option) {
    const messageElement = document.getElementById("message");
    const nextLevelButton = document.getElementById("next-level-0");
    const memeContainer = document.getElementById("meme-container");

    const correctAnswers = [1, 2, 4, 5];

    if (nextLevelButton) nextLevelButton.style.display = "none";
    if (memeContainer) memeContainer.style.display = "none";

    

    if (correctAnswers.includes(option)) {
        messageElement.textContent = "🎉 Correct! This plastic is suitable for eco-bricking!";
        if (nextLevelButton) nextLevelButton.style.display = "block";
    } else {
        messageElement.textContent = "❌ Oops! This plastic is recyclable, not for eco-bricks!";
        if (memeContainer) memeContainer.style.display = "block";
    }
}

// Function for Level 1: Check if washed and dried
function checkWashedNDried() {
    const levelMessage = document.getElementById("level1-message");
    const happyMemeVideo = document.getElementById("happy-meme-video");

    if (levelMessage) {
        levelMessage.textContent = "🎉 Awesome! Your eco-brick is ready for the next step!";
        if (happyMemeVideo) happyMemeVideo.style.display = "block";
    }
}

// Function to scroll to the timeline section
function scrollToTimeline() {
    const timeline = document.querySelector(".timeline");
    if (timeline) {
        timeline.scrollIntoView({ behavior: "smooth" });
    }
}
