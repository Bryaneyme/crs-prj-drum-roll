let allButtons = document.querySelectorAll(".drum");

const audioFiles = {
    "w": "./sounds/crash.mp3",
    "a": "./sounds/kick-bass.mp3",
    "s": "./sounds/snare.mp3",
    "d": "./sounds/tom-1.mp3",
    "j": "./sounds/tom-2.mp3",
    "k": "./sounds/tom-3.mp3",
    "l": "./sounds/tom-4.mp3"
};

// eventListener: click
allButtons.forEach(button => {
    button.addEventListener('click', function (buttonEvent) {
        playAudio(buttonEvent, button);
        animateButton(buttonEvent, button);
    });
});

// eventListener: keyPress
document.addEventListener('keydown', function (buttonEvent) {
    playAudio(buttonEvent, null);
    animateButton(buttonEvent, null);
})

function playAudio(buttonEvent, button) {
    let key;
    if (button) { key = button.textContent }

    else { key = buttonEvent.key }

    if (key in audioFiles) {
        new Audio(audioFiles[key]).play();
        console.log(`Played ${key} sound. Path: ${audioFiles[key]}`);
    }
    else {
        console.log("Unable to play button sound");
    }
}

function animateButton(buttonEvent, button) {
    let activeButton;
    if (button) { activeButton = button }

    else { activeButton = document.querySelector(`.${buttonEvent.key}`) }

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed")
    }, 300)
}