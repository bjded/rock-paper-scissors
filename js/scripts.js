console.log("www.ded-soft.com");

// Variables
var player_choices = $('#player-choices');
var cpu_choice = $('#cpu-choice');

function cpuChoice() {
    let choices = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    console.log(random);
    cpu_choice.text(choices[random]);
}

$(document).ready(function() {
    $("#player-choices button").click(function() {
        cpuChoice();
    });
});
