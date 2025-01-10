
numOfTokens = 7
tokenNeededForNextReward = 10

totalNeededTokensEl = document.getElementById("total-required-tokens")
numOfTokensEl = document.getElementById("token-amount")
// numOfTokens = parseInt(numOfTokensEl.innerHTML)
donateBtn = document.getElementById("donate-btn")
progressPercentageEl = document.getElementById("progress-percentage")
progressbarEl = document.getElementById("progressbar-main")

console.log(numOfTokens)

requiredTokensEl = document.getElementById("required-tokens")
requiredTokens = parseInt(requiredTokensEl.innerHTML)


function renderRequiredTokens(currentTokens, totalTokens) {
    requiredTokens = totalTokens - currentTokens
    requiredTokensEl.innerHTML = requiredTokens
}

function addToken() {
    numOfTokensEl.innerHTML = numOfTokens + 1
}

function removeToken() {
    numOfTokensEl.innerHTML = numOfTokens - 1
}

function makeProgress(value, totalValue) {
    if (value === 0) {
        progressPercentageEl.innerHTML = `0 %`
        progressbarEl.style.width = `6%`
    }
    else if (value < totalValue) {
        progressbarEl.style.width = `${value / totalValue * 100}%`
        progressPercentageEl.innerHTML = `${value / totalValue * 100} %`
    } else if (value === totalValue) {
        progressbarEl.style.width = `98%`
        progressPercentageEl.innerHTML = `100 %`
    }

    totalNeededTokensEl.innerHTML = tokenNeededForNextReward
}

// donateBtn.addEventListener("mouseover", function() {
//     donateBtn.innerHTML =  '<a href="donate.html">Donate 1 Eco Brick</a>'
// }) 

// donateBtn.addEventListener("mouseout", function() {
//     donateBtn.innerHTML = '<a href="donate.html">Gain Aura</a>'
// }) 


makeProgress(numOfTokens, tokenNeededForNextReward)

renderRequiredTokens(numOfTokens, tokenNeededForNextReward)

// addToken()