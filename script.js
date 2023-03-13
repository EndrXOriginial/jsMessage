let jokeArray = ["I'm afraid for the calendar. Its days are numbered.", "Why do fathers take an extra pair of socks when they go golfing? In case they get a hole in one!", "What do you call a factory that makes okay products? A satisfactory.",
"I asked my dog what's two minus two. He said nothing.", "I don't trust those trees. They seem kind of shady."];

// Creates a random number between 0 and the lenght of jokeArray
const randIndex = () => {
    return Math.ceil(Math.random() * (jokeArray.length - 1));
}

// Function takes the array of jokes and prints the one of the jokes using the randIndex on the passed in array
const postMessage = arr => {
    let indexNum = randIndex();
    console.log(indexNum);
    return arr[indexNum];
}

console.log(postMessage(jokeArray));
