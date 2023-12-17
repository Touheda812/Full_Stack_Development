// alert("Hi, there")

let buttonColours = ["red", "blue", "green", "yellow"]
let gamePattern = []

var userClickedPattern = []

$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour)
})


function nextSequence(){
    let randomVariable = Math.floor(Math.random()*4)
    let randomChosenColour = randomVariable[buttonColours]
    gamePattern.push(randomChosenColour)
  //1. Use jQuery to select the button with the same id as the randomChosenColour
  //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100)
  //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3")
    audio.play()
}