const memes = [
    {
        img: "images/meme1.jpeg", 
        tip: "Be the voice for change—ask for eco-friendly options when dining out. Every request counts!!!🌱🍴"
    },
    {
        img: "images/meme2.jpeg",
        tip: "If we truly care about marine life, let's act! Reduce plastic, recycle responsibly, and protect our oceans.🐟🌊♻️"
    },
    {
        img: "images/meme3.jpeg",
        tip: "Say no to double standards. Use reusables and inspire others to do the same!🚫🧴🌍"
    },
    {
        img: "images/meme4.jpeg",
        tip: "What you throw away can end up in a turtle's home. Choose wisely, act responsibly.🐢🏠🗑️"
    },
    {
        img:"images/meme8.jpeg",
        tip: "Don't let this be your dinner in 2050! 🍔🚫 Support sustainable habits today for a better tomorrow. 🌱🌊"
    },
    {
        img:"images/meme9.jpeg",
        tip: "Small steps matter, but we need giant leaps! 🚀♻️ Join us in the fight against plastic pollution. 💪🌍"
    },
    {
        img:"images/meme7.jpeg",
        tip: "Don’t be like a drifting plastic bag! 💨🌍 Carry reusable totes and lead the change. 🛍️♻️"
    },
    {
        img:"images/meme6.jpeg",
        tip:"Be smort, not plastic! 🌟🐟 Say no to single-use plastics and yes to ocean-friendly choices! 🌊✨"
    },
    {
        img:"images/meme5.jpeg",
        tip: "Let’s banish the devil! 🚫🔥 Choose eco-friendly alternatives today. 🌍💚"
    }
];


function generateMeme() {
    const randomIndex = Math.floor(Math.random() * memes.length);
    const selectedMeme = memes[randomIndex];
    document.getElementById("meme-image").src = selectedMeme.img;
    document.getElementById("meme-tip").innerText = selectedMeme.tip;
}


window.onload = () => {
    generateMeme();
    loadQuiz();
};



let currentQuestion = 0;
const quizData = [
    {
        question: "If your plastic bottle could talk, what would it say?",
        options: [
            "Recycle me, bro! I’m worth it ♻️.",
            "Bruh, I just wanna vibe in a landfill 🥲.",
            "Toss me, IDC 🤷."
        ],
        results: [
            "Your bottle says THANK YOU! 🎉 You've just saved it from 500 years of regret and gave it a second life 🌍✨.",
            "Oh no! 500 years in a landfill? That’s a whole eternity of sadness 💔. Let’s do better next time!",
            "The turtles are judging you hard 🐢. They deserve clean oceans, not plastic drama!"
        ],
        meme: "images/Plasticbootle.avif"
    },
    {
        question: "What’s your favorite way to ditch single-use plastic?",
        options: [
            "Reusable bottles? I’m trendy like that 🚰.",
            "Paper straws? Ew, no thanks 🥤.",
            "IDK, I just toss them 🙄."
        ],
        results: [
            "You’re an eco-warrior! 🌟 Keep rocking those reusable bottles and inspiring change. The planet is smiling because of you 🌍💚.",
            "You’re trying, and we see you! 🐳 Every small step counts, but let’s aim for bigger ones for a cleaner future 🌊✨.",
            "Plastic Larry says, ‘Why, though? 🥲’ Let’s swap tossing for recycling and make a difference today!"
        ],
        meme: "images/AI image.webp"
    },
    {
        question: "What’s your guilty plastic habit?",
        options: [
            "Plastic cups at every party 🎉.",
            "Takeout containers 24/7 🍔.",
            "Shopping bags for days 🛍️."
        ],
        results: [
            "Let’s level up the party game! 🥳 Reusable cups not only look cooler but also help save the planet 🌍✨.",
            "Takeout is life, we get it! 🍔 But reusable lunchboxes can make you an eco-champion AND keep your food fresh 🌱💼.",
            "Canvas totes are not just a vibe—they’re a revolution! 🛍️✨ Say goodbye to plastic bags and hello to a greener you 🌍."
        ],
        meme: "images/aiimage3.webp"
    },
    {
        question: "What would you do if a turtle slid into your DMs?",
        options: [
            "Apologize for all the straws 🥺.",
            "Flex my reusable bottle 🐢.",
            "Leave it on read 👀."
        ],
        results: [
            "The turtle forgives you (for now) 🐢✨. But you’ve got homework: ditch the straws and protect marine life 🌊.",
            "The turtles are clapping for you! 🐢👏 You’re a legend for rocking that reusable bottle and leading the change 🌟.",
            "Leaving it on read? Yikes! 😤 The turtle is disappointed. Time to show some love for the ocean and ditch the plastic drama."
        ],
        meme: "images/turtle.webp"
    },
    {
        question: "How often do you toss plastic guilt-free?",
        options: [
            "Never, I'm an angel 😇",
            "Sometimes, don’t judge 👀",
            "All the time 🤷‍♂️"
        ],
        results: [
            "Angel status unlocked! 😇🌟 Keep being the eco-hero we need. Every piece of plastic avoided is a win for the planet 💚.",
            "Nobody’s perfect, but we know you care! 🌍✨ Let’s work on making guilt-free choices every day and protect our future 🌿.",
            "Uh-oh, 🚩 alert! Tossing plastic all the time isn’t cool. Let’s turn that habit around and start recycling like a boss ♻️!"
        ]
    },
    {
        question: "What’s your plastic’s destiny?",
        options: [
            "Trash",
            "Recycle",
            "EcoBrick"
        ],
        results: [
            "Plastic graveyard incoming 💀. Let’s change that fate! The planet deserves better than eternal trash piles 🌍💔.",
            "High five for recycling ✋! You’re giving plastic a second chance at life while protecting the environment 🌟♻️.",
            "EcoHero alert 🚨! Turning plastic waste into EcoBricks is next-level sustainability. You’re a trendsetter for the planet 🌿✨."
        ]
    }
];


function loadQuiz() {
    const quiz = quizData[currentQuestion];
    document.getElementById("quiz-question").innerText = quiz.question;
    document.getElementById("quiz-option-1").innerText = quiz.options[0];
    document.getElementById("quiz-option-2").innerText = quiz.options[1];
    document.getElementById("quiz-option-3").innerText = quiz.options[2];
}

function answerQuiz(option) {
    const quiz = quizData[currentQuestion];
    
   
    document.getElementById("future-result").innerText = quiz.results[option - 1];
    
    
    if (quiz.meme) {
        document.getElementById("quiz-meme").src = quiz.meme;
        document.getElementById("quiz-meme").style.display = "block"; 
    } else {
        document.getElementById("quiz-meme").style.display = "none"; 
    }
    
    currentQuestion = (currentQuestion + 1) % quizData.length;
    setTimeout(loadQuiz, 3000); 
}


window.onload = () => {
    loadQuiz();
    generateMeme();
};







