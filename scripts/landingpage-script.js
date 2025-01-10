let answers = [];
let avatar = "";
let currentQuestionIndex = 0;

const questions = [
  { 
    question: "How woke are you about the environmental impact of plastic?", 
    options: ["Full-on woke! 🌍✨I’m actively slashing my plastic footprint", "Kinda woke—I do my part when I can.  🌱", "I’ve thought about it, but it’s not always on my radar.🤔", "Not gonna lie, I Barely think about it 😬"], 
    funfacts: [
        "🌍Plastic ain’t slick! Your vibe’s giving ‘main character energy,’ and the turtles? They’re cheering for you. 🐢💖 #PlasticSlayer",
        "🌱You’re out here vibin’ responsibly. One reusable bottle = 167 fewer plastic sins. Hydrate, slay, repeat. 💧✨",
        "🤔Lowkey thinking about it? Big step. You’re this close to being the eco bestie Earth needs. 🌍💕",
        "😬Plot twist: Even saying no to one straw makes you a lowkey hero. The turtles are side-eyeing, but they still love you. 🥤🐢"

    ] 
  },
  { 
    question: "How often are you out here recycling?", 
    options: ["All day, every day! Recycling is basically my vibe. ♻️💪","I recycle when it's easy or when I’m in the mood. 🤷‍♀️","I try, but it’s not always happening, lol. 😅","Recycling? Nah, not really my thing. 🙈"],
    funfacts: [
      "♻️You’re recycling like it’s a side hustle, and Earth? She’s ready to Venmo you some good karma. 💸🌍", 
      "🤷‍♀️Big mood: Recycling when you can still slays. One aluminum can = 3 extra hours of Netflix energy. 📺🍿", 
      "😅Trying > not trying. Every can you recycle could power your phone while you scroll TikTok for hours. 📱♻️", 
      "🙈Recycling isn’t just a flex; it’s the ultimate glow-up. Save trash, save vibes, save the planet. 🗑️✨"
    ] 
  },
  { 
    question: "How deep is your plastic knowledge?", 
    options: ["I’m a plastic pro—PET, HDPE, you name it. 🔍💡", "I know a few, but I’m still learning the deets. 👀", "TBH, I’m not sure about most of them. 🤷‍♂️", "I wanna dive in and level up my plastic knowledge! 📚🔍   "], 
    funfacts: [
      "🔍PET and HDPE? You’re basically the Einstein of plastics. PET is like the Beyoncé of recyclables—always slays. 🐝♻️", 
      "👀Knowing even one plastic type = big brain energy. You’re def on the eco-upgrade path. 🚀🌱", 
      "🤷‍♂️No shame, bestie! Quick cheat code: Most bottles are PET (#1) and super recyclable. You’re welcome. 💡♻️", 
      "📚Plastic facts = the ultimate eco cheat sheet. Start learn"
    ] 
  },
  { 
    question: "You’ve just finished a snack with a plastic wrapper. What do you do with it?", 
    options: ["I’ll recycle it if possible or get creative and repurpose it! ♻️✨", "Tossing it in the trash... I’m not sure if it’s recyclable tbh. 🤷‍♀️🌱", "I’ll leave it on my desk and hope I figure it out later. 😅", "Yep, straight to the trash—no cap. 🗑️"], 
    funfacts: [
      "♻️Snack wrappers = lowkey art supplies. Turn trash into treasure, Picasso. 🖌️✨", 
      "🤷‍♀️Most snack wrappers = trash, not recycling. But hey, reusable snacks? That’s a vibe. 🌱✨", 
      "🤷‍♀️Most snack wrappers = trash, not recycling. But hey, reusable snacks? That’s a vibe. 🌱✨", 
      "🗑️Big oof, but real talk: 8 million metric tons of plastic hit oceans every year. Plot twist: You can change that. 🐟💔"

    ] 
  },
  { 
    question: "You’re about to throw something away that could be recycled, but the recycling bin is a bit far. What do you do?", 
    options: ["I walk the extra steps to make sure it gets recycled. 🚶‍♀️♻️", "I leave it in the trash, but next time I'll make an effort. 😅", "I wonder if it’s even worth recycling in the first place... 🤔" , "I wonder if it’s even worth recycling in the first place... 🤔"], 
    funfacts: [
      "🚶‍♀️Walking for the recycle bin? Cardio + saving Earth = win-win. Fitness and eco vibes unlocked. 💪🌍", 
      "😅Trash happens, but redemption arcs slap. Recycling one can saves enough power to keep your phone charged. 🔋♻️", 
      "😬Skipping those steps = missed opportunity. Recycling saves 700 lbs of CO2 per ton. That’s def worth it. 🌍✨", 
      "🤔It’s giving ‘existential eco crisis,’ but trust me—recycling is a whole vibe. Less landfill = more planet. 🌟🌏"

    ] 
  }
];

function startQuestionnaire() {
  gsap.to('.landing-page', { opacity: 0, duration: 1, onComplete: () => {
    document.querySelector('.landing-page').style.display = 'none';
    document.querySelector('.questionnaire-container').style.display = 'flex';
    gsap.to('.questionnaire-container', { opacity: 1, duration: 1 });
    loadQuestion();
  }});
}

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById('question').innerText = currentQuestion.question;
  document.querySelectorAll('.option').forEach((btn, index) => {
    btn.innerText = currentQuestion.options[index];
    btn.style.pointerEvents = 'auto'; // Re-enable options
    btn.style.filter = 'none'; // Remove blur
    btn.onclick = () => selectOption(index);
  });
  document.getElementById('funfact').style.display = 'none';
}

function selectOption(index) {
  const currentQuestion = questions[currentQuestionIndex];
  const selectedOption = String.fromCharCode(65 + index); // A, B, C, D
  answers.push(selectedOption);

  // Blur other options and display fun fact
  document.querySelectorAll('.option').forEach((btn, i) => {
    if (i !== index) {
      btn.style.filter = 'blur(5px)';
      btn.style.pointerEvents = 'none'; // Disable other options
    }
  });

  // Show the fun fact with animation
  const funfact = document.getElementById('funfact');
  showFunFact(selectedOption, funfact);

  // After 3 seconds, move to the next question or reveal avatar
  setTimeout(() => {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      gsap.to('.question-card', { opacity: 0, duration: 1, onComplete: () => {
        loadQuestion();
        gsap.to('.question-card', { opacity: 1, duration: 1 });
      }});
    } else {
      assignAvatar();
    }
  }, 1500);
}

function showFunFact(option, funfact) {
  const currentQuestion = questions[currentQuestionIndex];
  let fact = "";
  if (option === "A") fact = currentQuestion.funfacts[0];
  if (option === "B") fact = currentQuestion.funfacts[1];
  if (option === "C") fact = currentQuestion.funfacts[2];
  if (option === "D") fact = currentQuestion.funfacts[3];

  funfact.innerText = fact;
  gsap.fromTo(funfact, { opacity: 0 }, { opacity: 1, duration: 0.6 });
  funfact.style.display = "block";

  // Highlight fun fact box
  funfact.style.backgroundColor = "#4DA1A9"; // Highlight background color
}

function assignAvatar() {
  let avatarTagline = "";
  let avatarStrengths = [];

  // Check answers to determine avatar based on combination of answers
  if (answers.every(ans => ans === "A")) {
      avatar = "Enviro (Expert Recycler) 🌍";
      avatarTagline = "I’m Enviro, the expert recycler! Ready to take on the planet’s plastic problem?";
      avatarStrengths = [
          "Highly Knowledgeable: Deep understanding of various types of plastics.",
          "Active Advocate: Promotes recycling and eco-friendly practices.",
          "Consistency: Lives by a sustainable lifestyle.",
          "Creative Recycler: Finds creative ways to repurpose waste.",
          "Leader: Inspires others to take action."
      ];
      document.getElementById('avatarImage').src = "images/eco-recycler-transparent.png";
  } else if (answers.every(ans => ans === "B")) {
      avatar = "EcoMan (Plastic Champion) 🌱";
      avatarTagline = "I’m EcoMan, your ally in tackling plastic waste. Let’s clean up this world!";
      avatarStrengths = [
          "Dedicated Effort: Does their part to reduce plastic usage.",
          "Knowledgeable: Understands recycling methods.",
          "Flexibility: Willing to adapt and learn more.",
          "Resourceful: Balances eco-friendly habits with convenience.",
          "Optimistic: Always motivated to improve."
      ];
      document.getElementById('avatarImage').src = "images/eco-champion-transparent.png";
  } else if (answers.some(ans => ans === "C") || answers.some(ans => ans === "D")) {
      avatar = "Greenie (Eco Novice) 🌿";
      avatarTagline = "I’m Greenie! I’ll help you take your first step towards a greener world.";
      avatarStrengths = [
          "Willingness to Learn: Open to learning more.",
          "Curious: Interested in understanding environmental impact.",
          "Future-focused: Aiming to improve eco-conscious decisions.",
          "Supportive: Connecting with others on sustainability.",
          "Hopeful: Believes small changes can make a big impact."
      ];
      document.getElementById('avatarImage').src = "images/eco-novice-transparent.png";
  } else {
      avatar = "Enviro (Expert Recycler) 🌍";
      avatarTagline = "I’m Enviro, the expert recycler! Ready to take on the planet’s plastic problem?";
      avatarStrengths = [
          "Highly Knowledgeable: Deep understanding of various types of plastics.",
          "Active Advocate: Promotes recycling and eco-friendly practices.",
          "Consistency: Lives by a sustainable lifestyle.",
          "Creative Recycler: Finds creative ways to repurpose waste.",
          "Leader: Inspires others to take action."
      ];
      document.getElementById('avatarImage').src = "images/eco-recycler-transparent.png";
  }

  document.getElementById('avatarMessage').innerText = avatarTagline;

  const avatarStrengthsList = document.getElementById('avatarStrengths');
  avatarStrengthsList.innerHTML = "";
  avatarStrengths.forEach(strength => {
      const listItem = document.createElement('li');
      listItem.innerText = strength;
      avatarStrengthsList.appendChild(listItem);
  });

  // Show the avatar section with animation
  gsap.to('.questionnaire-container', { opacity: 0, duration: 1, onComplete: () => {
      document.querySelector('.questionnaire-container').style.display = 'none';
      document.getElementById('avatarSection').style.display = 'flex';
      document.getElementById('avatarSection').classList.add('active');
      gsap.to('#avatarSection', { opacity: 1, duration: 1 });
  }});
}


