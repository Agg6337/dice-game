// Toglogchiin eeljiig hadgalah huwisagch , negdugeer toglogchiig 0 , hoyrdugaar toglogchiig 1 gj temdegley

var activePlayer = 1;


// Toglogchiin tsugluulsan onoog hadgalah huwisagch

var scores = [0, 0];

//Toglogchiin eeljindee tsugluulj  baigaa onoog hadgalah huwisagch

var rounScore = 0;
// Shoonii ali talaaraa buusniig hadgalah huwisgach heregtei. 1-6 gesen utgiig ene huwisagchid sanamsargugeer uusgej ogno

var dice = Math.floor(Math.random() * 6) + 1; // 1 - 6 hurtelh sanamsargu utga gargaj bna

console.log("Shoo : " + dice);

//<div class="player-score" id="score-0">43</div>

// document.querySelector('#score-0').textContent = dice; // 1 - 6 hurtelh sanamsargu utgiig #score-0 id ruu gargaj bna

// document.querySelector('#score-1').innerHTML = dice;

//togloom ehelhed beltgey
document.querySelector('#score-0').textContent = "0";
document.querySelector('#score-1').textContent = "0";
document.querySelector('#current-0').textContent = "0";
document.querySelector('#current-1').textContent = "0";
document.querySelector('.dice').style.display = "none";
