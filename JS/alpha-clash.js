// function play(){
//     // hide the home screen. to hide the screen add the class hidden to the home screen
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);

//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     console.log(playgroundSection.classList);
// }


function handleKeyboardUpEvent(event){
    const playerPressed = event.key;
    console.log('Player Pressed', playerPressed);

    //get the expected letter
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    console.log(playerPressed, currentAlphabet);
}

document.addEventListener('keyup', handleKeyboardUpEvent);



// function handleKeyboardButtonPress(){
//     console.log('key pressed');
// }

// //capture the key pressed
// document.addEventListener('keyup', handleKeyboardButtonPress)


function continueGame(){
    // step - 1  generate a random alphabet string
    const alphabet = getARandomAlphabet();
    console.log("Your random alphabet",  alphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color to the letter
    setBackGroundColorById(alphabet);

    // setTextColorById(alphabet);
}


function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}
