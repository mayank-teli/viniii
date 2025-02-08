let clickCount = 0;

function increaseYesSize() {
    const yesBtn = document.getElementById("yesBtn");
    clickCount++;

    if (clickCount === 1) {
        yesBtn.style.fontSize = "24px";
        yesBtn.style.padding = "15px 30px";
    } else if (clickCount === 2) {
        yesBtn.style.fontSize = "32px";
        yesBtn.style.padding = "30px 80px";
    } else if (clickCount === 3) {
        yesBtn.style.fontSize = "40px";
        yesBtn.style.padding = "50px 100px";
    } else if (clickCount === 4) {
        yesBtn.style.fontSize = "80px";
        yesBtn.style.padding = "80px 160px";
        yesBtn.style.position = "absolute";
        yesBtn.style.top = "50%";
        yesBtn.style.left = "50%";
        yesBtn.style.transform = "translate(-50%, -50%)";
    }
}

function goToNextPage() {
    window.location.href = "valentine.html";
}
