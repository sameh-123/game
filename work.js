function getComputerChoice(){
    let x=Math.floor(Math.random()*3);
    switch(x){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}
function playRound(playerSelection, computerSelection) {
    if(playerSelection[0]==computerSelection[0])return "It's a Draw";
    let st;
    if(playerSelection[0]=='r'){
        if(computerSelection[0]=='s')st="You win,";
        else st="You lose,"
    }
    else if(playerSelection[0]=='p'){
        if(computerSelection[0]=='r')st="You win,";
        else st="You lose,"
    }
    else {
        if(computerSelection[0]=='p')st="You win,";
        else st="You lose,"
    }
    if(st[4]=='w')st=st+playerSelection+" beats "+computerSelection;
    else st=st+computerSelection+" beats "+playerSelection;
    return st;
}
function game(){
    let computer=getComputerChoice();
    let player=prompt("Select your weapon");
    player=player.toLowerCase();
    alert(playRound(player,computer));
}
for(let i=0;i<5;i++){
    game();
}

