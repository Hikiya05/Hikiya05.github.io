let roundsRemaining = 4;

function study() {
    if (roundsRemaining > 0) {
        roundsRemaining--;
        document.getElementById('remaining-rounds').textContent = roundsRemaining;
    } else {
        alert('You have no more rounds left. Please increase your rounds to continue studying.');
    }
}

function increaseRounds() {
    // Here you would implement payment functionality
    // For simplicity, I'll just add 4 more rounds without payment
    roundsRemaining += 4;
    document.getElementById('remaining-rounds').textContent = roundsRemaining;
}
