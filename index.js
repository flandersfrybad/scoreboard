
let homeScore = document.getElementById("homeScore")
let scoreHome = 0

let guestScore = document.getElementById("guestScore")
let scoreGuest = 0

function homeAdjust(points) {
    scoreHome += points
    homeScore.textContent = scoreHome
    updateHomeScoreColor()  
}

function updateHomeScoreColor() {
    if (scoreHome < 0) {
        homeScore.classList.add("negative");
    } else {
        homeScore.classList.remove("negative");
    }
}

function guestAdjust(points) {
    scoreGuest += points
    guestScore.textContent = scoreGuest
    updateGuestScoreColor()  
}

function updateGuestScoreColor() {
    if (scoreGuest < 0) {
        guestScore.classList.add("negative");
    } else {
        guestScore.classList.remove("negative");
    }
}

function winner() {
    const winnerBanner = document.getElementById("winnerBanner");

    if (scoreHome < scoreGuest) {
        winnerBanner.innerHTML = `<span class="negative">${scoreHome}</span> vs ${scoreGuest}<br>Home Wins!`;
    } else if (scoreGuest < scoreHome) {
        winnerBanner.innerHTML = `${scoreHome} vs <span class="negative">${scoreGuest}</span><br>Guest Wins!`;
    } else {
        winnerBanner.innerHTML = `${scoreHome} vs ${scoreGuest}<br>It's a Tie!`;
    }

    winnerBanner.style.display = 'block';

    setTimeout(() => {
        winnerBanner.style.display = 'none';
        resetScores();
    }, 2000); // Display for 2 seconds
}

function resetScores() {
    scoreHome = 0;
    scoreGuest = 0;
    homeScore.textContent = scoreHome;
    guestScore.textContent = scoreGuest;
    homeScore.classList.remove("negative");
    guestScore.classList.remove("negative");
}

