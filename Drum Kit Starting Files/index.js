let allButtons = document.querySelectorAll(".drum");

// CLICK: Event Listeners
allButtons.forEach(button => {
    button.addEventListener('click', function (buttonEvent) {
        playAudio(buttonEvent, button)
    });
});

// KEYPRESS: Event listeners
document.addEventListener('keydown', function (buttonEvent) {
    playAudio(buttonEvent, null)
})

// PLAY AUDIO: Function
function playAudio(buttonEvent, button) {
    let key;
    if (button) {key = button.textContent}

    else {key = buttonEvent.key}

    const audioFiles = {
        "w": "./sounds/crash.mp3",
        "a": "./sounds/kick-bass.mp3",
        "s": "./sounds/snare.mp3",
        "d": "./sounds/tom-1.mp3",
        "j": "./sounds/tom-2.mp3",
        "k": "./sounds/tom-3.mp3",
        "l": "./sounds/tom-4.mp3"
    };

    if (key in audioFiles) {
        new Audio(audioFiles[key]).play();
        console.log(`Played ${key} sound. Path: ${audioFiles[key]}`)
    }
    else {
        console.log("Unable to play button sound")
    }
}