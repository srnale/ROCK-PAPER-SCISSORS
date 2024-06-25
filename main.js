let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
let msg= document.querySelector("#msg");
let user= document.querySelector("#user");
let comp= document.querySelector("#comp");

choices.forEach((userchoice)=>{
    userchoice.addEventListener("click",()=>{
    let userChoice= userchoice.getAttribute("id");
    gameplay(userChoice);

    })}
   )

const gencompchoice=()=>{
    let options=["Rock","Paper","Scissors"];
    let compchoice=options[Math.floor(Math.random()*3)];
    return compchoice;
}
const gameplay=(userChoice)=>{
    // console.log("user choice is ", userChoice);
    let compchoice=gencompchoice();
    // console.log("computer choice is ",compchoice);
    if(userChoice===compchoice){
        msg.innerText="Draw";
    }
    else if((userChoice==="Rock" &&compchoice==="Scissors")||(userChoice==="Scissors" &&compchoice==="Paper")||(userChoice==="Paper" &&compchoice==="Rock")){
        win(compchoice, userChoice);
    } else{
       lose(compchoice,userChoice);
    }
    

}


    let win=(compchoice, userChoice)=>{

        msg.innerText=`you Win! 
        User = ${userChoice}
        Comp = ${compchoice} `;
        userScore++
        user.innerText=userScore;
}
let lose=(compchoice, userChoice)=>{
    msg.innerText=`you Lose :( 
        User = ${userChoice}
        Comp = ${compchoice} `;
    compScore++;
    comp.innerText=compScore;
}

    
