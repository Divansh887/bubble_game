var pbtm = document.querySelector(".pbtm")
var hitrn = 0;

// bubble bana do aur usme random number paas kardo

function makeBubble() {

      for (let i = 0; i < 160; i++) {

            let a = document.createElement('div')
            a.classList.add('boxes');
            pbtm.appendChild(a);
            a.innerText = Math.floor(Math.random() * 9);

      }
}

makeBubble();

// sb hum chahte hai ki timer chale

var timer = 60;

function clockTimer() {
      
      setInterval(() => {

            if(timer>=0){  
            var printTimer = document.querySelector('.timer')
            printTimer.textContent = timer--;
            }

            else { 
                  document.querySelector(".pbtm").innerHTML = `<h1>Game Over</h1>`;
            }    
            
      }, 1000)


}


clockTimer();

//hit par hame ek random number lana hai

function hitRandomNumber() {

hitrn = Math.floor(Math.random()*9)
document.querySelector('.hit').innerText = hitrn;

}

hitRandomNumber();

// hame score ki value me 10 se increment karna hai

var score = 0;

function increaseScore(){

      score += 10;
      document.querySelector('.score').textContent = score;
}

// ek function banao jo ye cheej check kare ki kya hit ka number aur click ka number match kar raha hai ek dusre se
// ek ek bubble par event listener lagane se acha hai pure pbtm par laga do

function checkMatched() {
      const boxesList = document.querySelectorAll('.boxes');
      
      boxesList.forEach(function(box) {



            
        box.addEventListener("click", function(e) {

            // number use hota hai integer banane ke liye
            var a = Number(box.textContent)
            
            if(a === hitrn){
                  
                  increaseScore();
                  hitRandomNumber();
                  box.innerText = rn;
                  var rn = Math.floor(Math.random() * 9);
            }
        });
      });
    }
    
    checkMatched();

    // kala string hota hai neela number hota hai
    




