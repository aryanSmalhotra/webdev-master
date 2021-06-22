let maximum = parseInt(prompt("Enter your number"));
while(!maximum) {
    maximum = parseInt(prompt("Enter a valid number"));
}
const target = Math.floor(Math.random()* maximum) + 1;
let attempts = 1;

let guess = parseInt(prompt("Enter your guess"));
while(parseInt(guess) !== target){
   if (guess ==='q') break;
    attempts++;
    


    if(guess > target){
       guess = prompt("to high");
    }else{
       guess = prompt("to low");
    }
}

if(guess === 'q'){
    console.log(`you lose the number was ${target} so easy`)}
    
else{
    console.log(`Congratulations you got it took you ${attempts} attempts to get it right`)
    
}


 























