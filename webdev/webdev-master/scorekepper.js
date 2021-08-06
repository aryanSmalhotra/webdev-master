const p1button = document.querySelector('#p1b')
const p2button = document.querySelector('#p2b')
const p1dis = document.querySelector('#p1dis')
const p2dis = document.querySelector('#p2dis')
const resetb = document.querySelector('#reset')
const playTo = document.querySelector('#playTo')


let gameOver = false
let p1score = 0
let p2score = 0
let wScore = 3;
p1button.addEventListener('click', function(e){
    if(!gameOver){
        p1score += 1;
        p1dis.textContent = p1score
        if(p1score === wScore){
            gameOver = true
            p1dis.classList.add('winner')
            p2dis.classList.add('loser')
            p1button.disabled = true
            p2button.disabled = true
            duece();
        }

    }
});

p2button.addEventListener('click', function(e){
    if(!gameOver){
        p2score += 1;
        p2dis.textContent = p2score

        if(p2score === wScore){
            gameOver = true
            p2dis.classList.add('winner')
            p1dis.classList.add('loser')
            p1button.disabled = true
            p2button.disabled = true
        }
    }

    });

playTo.addEventListener('change', function(){
    wScore = parseInt(this.value)
    reset();
});



resetb.addEventListener('click',reset)

function reset(){
    gameOver = false
    p2score = 0
    p1score = 0
    p2dis.textContent = p2score
    p1dis.textContent = p2score
    p1dis.classList.remove('winner', 'loser')
    p2dis.classList.remove('winner', 'loser')
    p1button.disabled = false
    p2button.disabled = false
    };
    const duece = (() => {
        if(wScore-1 == p1score){
            wScore+2 == wScore

        }
    })