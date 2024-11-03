function openLetter() {

    const envelopeFlap = document.getElementById('envelopeFlap');
    envelopeFlap.style.transform = 'translateX(-50%) rotateX(-180deg)';

 
    setTimeout(() => {
        document.getElementById('envelope').style.display = 'none';
        const letterContent = document.getElementById('letterContent');
        letterContent.style.display = 'block';

       
        launchConfetti();
    }, 500);
}

function launchConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 2 + 3 + 's';
        document.body.appendChild(confetti);

     
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}
