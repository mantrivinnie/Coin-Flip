let coin = document.querySelector(`.coin`);
let coinResult = document.querySelector(`.cResult`);
let flipButton = document.querySelector(`.flip`);
let resetButton = document.querySelector(`.reset`);
let heads=0;
let tails=0;
let totalFlips = 0;

flipButton.addEventListener(`click`,()=> {
    let num=Math.floor(Math.random()*2)+1;
    
    coin.style.animation ="none";

        if( num==1){
            setTimeout(function(){
              coin.style.animation ="spinTails 3s forwards";
              displayResult("Heads!!");
            },1000);
            heads++;
        }
        else{
            setTimeout(function(){
                coin.style.animation ="spinHeads 3s forwards";
                displayResult("Tails!!");
              },1000);
              tails++;
        } 
        
        coinResult.textContent = "";
        totalFlips++;
        setTimeout(updateStats, 3000);
        disableButton();
});
 
//function coinResult(){
//     if(num==1)
//     console.log("Heads");
//     else
//     console.log("Tails");
// }

function updateStats() {
    document.querySelector('#headCount').textContent = `Heads : ${heads}`;
    document.querySelector('#tailCount').textContent = `Tails : ${tails}`;
    document.querySelector('#totalFlips').textContent = `Total Flips: ${totalFlips}`;
}

 
function disableButton() {
    flipButton.disabled = true;
    setTimeout(() => {
       flipButton.disabled = false;
       coinResult.textContent = "";
    }, 3000); // Enable the button after 3 seconds (or adjust the time as needed)
}

resetButton.addEventListener("click", ()=>{
    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    updateStats();
    coinResult.textContent = "Heads v/s Tails";
})

function displayResult(result) {
    setTimeout(()=>{coinResult.textContent = `${result}`}
    , 2000);
    
}

 


 

