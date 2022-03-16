// Togloomiin buh gazart ashiglagdah global huwisagchdiig end zarlay
var activePlayer;
var scores;
var roundScore;

//Shoonii zurgiig uzuuleh elementiig DOM - oos haij olood end hadgalya.
var diceDom = document.querySelector(".dice");

initGame();
// Togloomiig shineer ehlehed beltgeh.
function initGame() {
    // Toglogchiin eeljiig hadgalah huwisagch , negdugeer toglogchiig 0 , hoyrdugaar toglogchiig 1 gj temdegley
    activePlayer = 0;

    // Toglogchiin tsugluulsan onoog hadgalah huwisagch
    scores = [0, 0];

    //Toglogchiin eeljindee tsugluulj  baigaa onoog hadgalah huwisagch
    roundScore = 0;

    //togloom ehelhed beltgey
    document.getElementById("score-0").textContent = '0'; // id aar duudaj ajillahaar bol getElementById
    document.getElementById("score-1").textContent = '0';
    document.getElementById("current-0").textContent = '0';
    document.getElementById("current-1").textContent = '0';

    //Toglogchdiin neriig butsaaj gargah
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 1";
    //
    document.querySelector(".player-0-panel").classList.remove('winner');
    document.querySelector(".player-1-panel").classList.remove('winner');

    //
    document.querySelector(".player-0-panel").classList.remove('active');
    document.querySelector(".player-1-panel").classList.remove('active');

    //
    document.querySelector(".player-0-panel").classList.add('active');

    diceDom.style.display = "none";
}


// shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function shooShid() {
    // 1 - 6 hurtelh sanamsargu utga gargaj bna
    var diceNumber = Math.floor(Math.random() * 6) + 1; // 1 - 6 hurtelh sanamsargu utga gargaj bna


    // shoonii zurgiig web deer duudaj gargaj irne.
    diceDom.style.display = "block";

    // buusan sanamsargui toond hargalzah shoonii zurgiig web deer gargaj irne.
    diceDom.src = "dice-" + diceNumber + ".png";


    //Buusan too ni 1 ees ylgaatai bol idewhtei toglogchiin eeljiin onoog oorchilno

    if (diceNumber !== 1) {
        // 1 ees ylgaatai too buulaa. Buusan toog toglogchid nemj ogno
        roundScore = roundScore + diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    }
    else {
        // 1 buusan tul toglogchiin eeljiig end solij ogno.
        switchToNextPlayer();
    }
});

// Hold tovchnii event listener

document.querySelector('.btn-hold').addEventListener('click', function () {

    // Ug toglogchiin tsugluulsan eeljnii onoog global onoon deer nemj ogno

    scores[activePlayer] = scores[activePlayer] + roundScore;


    //Delgets deer onoog ni oorchilno 

    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    //Ug toglogch hojson esehiig shalgah
    if (scores[activePlayer] >= 10) {
        document.getElementById('name-' + activePlayer).textContent = 'Winner';
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    }
    else {
        //Toglogchiin eeljiin solino
        switchToNextPlayer();
    }
});

// Ene function ni togloh eeljiig daraagiin toglogchruu shiljuulne
function switchToNextPlayer() {

    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
    // Toglogchiin eeljiig nogoo talruu shiljuulne.
    // Ene toglogchiin tsugluulsan onoog 0 bolgoj huwirga.
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    //Ulaan tsegiig shiljuuleh
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //Shoog tur alga bolgono.
    diceDom.style.display = "none";
}

// Shine togloom ehluuleh event listener
document.querySelector(".btn-new").addEventListener("click", function () {
    initGame();
});





