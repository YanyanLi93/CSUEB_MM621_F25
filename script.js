let title = document.getElementById("Title");
let ball= document.getElementById("ball");
//set up the function
ball.onclick = function(){
    title.textContent = "You GOT the ball!";
}

const pet = ['Dog', 'Cat', 'Bunny', 'Parrot', 'Fish'];
const input = document.getElementById('Input');
const result = document.getElementById('Output');

input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const userInput = input.value.trim();
        if (pet.includes(userInput)) {
            result.textContent = [userInput] + " is the Best!";
        } else {
            result.textContent = "Invalid Input!";
        }
        inputField.value = '';
    }
});

function submitAnswers() {
    // Get selected answers
    let q1Answer = document.querySelector('input[name="answer1"]:checked');
    let q2Answer = document.querySelector('input[name="answer2"]:checked');
    let q3Answer = document.querySelector('input[name="answer3"]:checked');

    // Create sentence based on answers
    let sentence = "You like " + q2Answer.value + " " + q3Answer.value + " " + q1Answer.value + " pizza.";
    
    // Display the result sentence
    document.getElementById("Pizza").innerHTML = sentence;
}
