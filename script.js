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
let playerscore=0,computerscore=0;
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
    if(st[4]=='w'){
        st=st+playerSelection+" beats "+computerSelection;
        playerscore++;
    }
    else {
        st=st+computerSelection+" beats "+playerSelection;
        computerscore++;
    }
    return st;
}
const whowin=document.querySelector('.happen');
const computer=document.querySelector('.computer');
const computerchild=computer.querySelector('.score');
const player=document.querySelector('.player');
const playerchild=player.querySelector('.score');
const winner=document.querySelector('.winner');
function game(e){
    if(playerscore==5||computerscore==5)return;
    let computerchoice=getComputerChoice();
    let playerchoice=e.target.className;
    let ans=playRound(playerchoice,computerchoice);
    if(ans[4]=='w')whowin.style.color='green';
    else if(ans[4]=='l')whowin.style.color='red';
    else whowin.style.color='black';
    whowin.textContent=ans;
    computerchild.textContent=`${computerscore}`;
    playerchild.textContent=`${playerscore}`;
    if(playerscore==5){
        winner.style.color='green';
        winner.textContent='Congrats! You won';
    }
    if(computerscore==5){
        winner.style.color='red';
        winner.textContent='Game over :(';
    }
}
const paper=document.querySelector('.paper');
const rock=document.querySelector('.rock');
const scissors=document.querySelector('.scissors');
const restart=document.querySelector('.restart');
paper.addEventListener('click',game);
rock.addEventListener('click',game);
scissors.addEventListener('click',game);
restart.addEventListener('click',()=>{
    playerscore=0;
    computerscore=0;
    whowin.textContent='';
    computerchild.textContent=`${computerscore}`;
    playerchild.textContent=`${playerscore}`;
    winner.style.color='brown';
    winner.textContent='Who gets 5 first wins..good luck';
});


