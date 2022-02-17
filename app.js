// Toglogchiin eeljiig hadgalah huwisagch , negdugeer toglogchiig 0 , hoyrdugaar toglogchiig 1 gj temdegley

var activePlayer = 0;


// Toglogchiin tsugluulsan onoog hadgalah huwisagch

var scores = [0, 0];

//Toglogchiin eeljindee tsugluulj  baigaa onoog hadgalah huwisagch

var roundScore = 0;
// Shoonii ali talaaraa buusniig hadgalah huwisgach heregtei. 1-6 gesen utgiig ene huwisagchid sanamsargugeer uusgej ogno

var diceNumber = Math.floor(Math.random() * 6) + 1; // 1 - 6 hurtelh sanamsargu utga gargaj bna




//togloom ehelhed beltgey
document.getElementById("score-0").textContent = '0'; // id aar duudaj ajillahaar bol getElementById
document.getElementById("score-1").textContent = '0';
document.getElementById("current-0").textContent = '0';
document.getElementById("current-1").textContent = '0';

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function shooShid() {
    // 1 - 6 hurtelh sanamsargu utga gargaj bna
    var diceNumber = Math.floor(Math.random() * 6) + 1;


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

        // Ene toglogchiin eeljendee tsugluulsan onoog 0 bolgono.
        roundScore = 0;
        document.getElementById("current-" + activePlayer).textContent = 0;

        // Toglogchiin eeljiig nogoo talruu shiljuulne.
        // Herevee idevhtei toglogch ni 0 bwal idevhtei toglogchiig 1 bolgo.
        // Ugui bol idehtei toglogchiig 0 bolgoj huwirga.
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
        // if (activePlayer === 0) {
        //     activePlayer = 1;
        // } else {
        //     activePlayer = 0;
        // }


        //Ulaan tsegiig shiljuuleh
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        //Shoog tur alga bolgono.
        diceDom.style.display = "none";
    }


});


