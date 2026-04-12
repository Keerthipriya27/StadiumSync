const startButton = document.getElementById('start-battle-btn');
const resetButton = document.getElementById('reset-btn');
const promptOne = document.getElementById('prompt-1');
const promptTwo = document.getElementById('prompt-2');
const resultText = document.getElementById('result-text');
const scoreP1 = document.getElementById('score-p1');
const scoreP2 = document.getElementById('score-p2');
const playerOneCard = document.getElementById('player-1-card');
const playerTwoCard = document.getElementById('player-2-card');

let score1 = 0;
let score2 = 0;

function promptScore(text) {
    const cleaned = text.trim();
    if (!cleaned) {
        return 0;
    }

    const words = cleaned.split(/\s+/).length;
    const hasConstraint = /(must|should|only|exactly|avoid|format)/i.test(cleaned);
    const hasRole = /(act as|you are|role|expert)/i.test(cleaned);
    const hasStructure = /(:|-|\n|1\.|2\.)/.test(cleaned);

    let score = Math.min(words, 120);
    if (hasConstraint) score += 15;
    if (hasRole) score += 15;
    if (hasStructure) score += 10;

    return score;
}

function setCardState(winnerCard, loserCard) {
    playerOneCard.classList.remove('winner', 'loser');
    playerTwoCard.classList.remove('winner', 'loser');

    if (winnerCard) winnerCard.classList.add('winner');
    if (loserCard) loserCard.classList.add('loser');
}

startButton.addEventListener('click', () => {
    const text1 = promptOne.value;
    const text2 = promptTwo.value;

    if (!text1.trim() || !text2.trim()) {
        resultText.textContent = 'Please enter both prompts to start the battle.';
        setCardState(null, null);
        return;
    }

    const p1 = promptScore(text1);
    const p2 = promptScore(text2);

    if (p1 === p2) {
        resultText.textContent = `Draw! Both prompts are strong (${p1} vs ${p2}). Refine wording for a clear winner.`;
        setCardState(null, null);
        return;
    }

    if (p1 > p2) {
        score1 += 1;
        resultText.textContent = `Player 1 wins this round! Score: ${p1} vs ${p2}`;
        setCardState(playerOneCard, playerTwoCard);
    } else {
        score2 += 1;
        resultText.textContent = `Player 2 wins this round! Score: ${p2} vs ${p1}`;
        setCardState(playerTwoCard, playerOneCard);
    }

    scoreP1.textContent = `Player 1: ${score1}`;
    scoreP2.textContent = `Player 2: ${score2}`;
});

resetButton.addEventListener('click', () => {
    promptOne.value = '';
    promptTwo.value = '';
    score1 = 0;
    score2 = 0;
    scoreP1.textContent = 'Player 1: 0';
    scoreP2.textContent = 'Player 2: 0';
    resultText.textContent = 'Enter both prompts and click Start Battle.';
    setCardState(null, null);
});