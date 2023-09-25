function computerChoice(){
    var choice = Math.random();
    if (choice < 0.34){
        return "Rock";
    }
    else if (choice <= 0.67){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}
function Reset(){
    document.getElementById("win").innerHTML = 0;
    document.getElementById("lose").innerHTML = 0;
    document.getElementById("result").innerHTML = "";
}
function UpdateScore(winner, input, computerChoiceOut){

    if(winner == "Player"){
        document.getElementById("win").innerHTML = Number(document.getElementById("win").innerHTML) + 1;
        document.getElementById("resultImage").src = "images/" + "win" + ".jpg";
        document.getElementById("result").innerHTML = "You win!" + " " + input + " " + "beats" + " " + computerChoiceOut;
    }
    else if(winner == "Tie"){
        document.getElementById("result").innerHTML = "It's a tie!";
        document.getElementById("resultImage").src = "images/" + "tie" + ".jpg";
    }else{
        document.getElementById("lose").innerHTML = Number(document.getElementById("lose").innerHTML) + 1;
        document.getElementById("result").innerHTML = "You lose!" + " " + computerChoiceOut + " " + "beats" + " " + input;
        document.getElementById("resultImage").src = "images/" + "lose" + ".jpg";
    }
}

function PlayGame(input){
    let computerChoiceOut = computerChoice();
    if(input === computerChoiceOut){
        UpdateScore("Tie", input, computerChoiceOut);
        return;
    }
    else if(input === "Rock"){
        if(computerChoiceOut === "Scissors"){
            UpdateScore("Player", input, computerChoiceOut);
            return;
        }
        else{
            UpdateScore("Computer", input, computerChoiceOut);
        }
    
    }
    else if( input === "Scissors"){
        if(computerChoiceOut === "Paper"){
            UpdateScore("Player",input, computerChoiceOut);
            return;
        }
        else{
            UpdateScore("Computer", input, computerChoiceOut);
        }
    }
    else if (input === "Paper"){
        if(computerChoiceOut === "Rock"){
            UpdateScore("Player",input, computerChoiceOut);
        }
        else{
            UpdateScore("Computer", input, computerChoiceOut);
        }
        
    }

}
