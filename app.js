// Toglogchiin eeljiig hadgalah huwisagch , negdugeer toglogchiig 0 , hoyrdugaar toglogchiig 1 gj temdegley

var activePlayer = 1;


// Toglogchiin tsugluulsan onoog hadgalah huwisagch

var scores = [0, 0];

//Toglogchiin eeljindee tsugluulj  baigaa onoog hadgalah huwisagch

var rounScore = 0;
// Shoonii ali talaaraa buusniig hadgalah huwisgach heregtei. 1-6 gesen utgiig ene huwisagchid sanamsargugeer uusgej ogno

var diceNumber = Math.floor(Math.random() * 6) + 1; // 1 - 6 hurtelh sanamsargu utga gargaj bna




//togloom ehelhed beltgey
document.getElementById("score-0").textContent = '0'; // id aar duudaj ajillahaar bol getElementById
document.getElementById("score-1").textContent = '0';
document.getElementById("current-0").textContent = '0';
document.getElementById("current-1").textContent = '0';

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none"; // class aar duudaj ajillahaar bol querySelector
// document.querySelector(".btn-roll").addEventListener("click", shooShid); // click eventeer shooShid functiong ajilluulj bna
document.querySelector(".btn-roll").addEventListener("click", function shooShid() {
    var diceNumber = Math.floor(Math.random() * 6) + 1; // 1 - 6 hurtelh sanamsargu utga gargaj bna
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";
});   // anonymous function ashiglaj baina


