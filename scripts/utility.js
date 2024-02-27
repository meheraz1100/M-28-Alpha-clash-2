function hideElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden');
}

function setBackGroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

// function setTextColorById(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.add('text-white');
// }

function getARandomAlphabet(){
    // get or create a random alphabet array
    const alphabetString = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    // get a random index from the array 0 -25
    const randomIndex = Math.round(Math.random() * 25);
    // console.log(randomIndex);

    // return the random index
    const alphabet = alphabetString[randomIndex];
    console.log(randomIndex, alphabet);
    return alphabet;
}