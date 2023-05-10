
mut1desc = "Pro Klick einen Cube mehr ;D<br>";
mut5desc = "Pro Klick 10 Cube mehr ;D<br>";
mut6desc = "Pro Klick 100 Cube mehr ;D<br>";
mut2desc = "Pro Sekunde 1 Cubes mehr<br>";
mut3desc = "Pro Sekunde 8 Cubes mehr<br>";
mut4desc = "Pro Sekunde 30 Cubes mehr<br>";
mut7desc = "Pro Sekunde 150 Cubes mehr<br>";
if(localStorage.einmal2 != 1 && localStorage.einmal2 != 2) {
    localStorage.wert = 1;
    localStorage.mut1counter = 0;
    localStorage.mut1price = 40;
    localStorage.mut5counter = 0;
    localStorage.mut5price = 2000;
    localStorage.mut6counter = 0;
    localStorage.mut6price = 50000;
    localStorage.mut2counter = 0;
    localStorage.mut2counterreal = 0;
    localStorage.mut2price = 200;
    localStorage.mut3counter = 0;
    localStorage.mut3counterreal = 0;
    localStorage.mut3price = 2000;
    localStorage.mut7counter = 0;
    localStorage.mut7counterreal = 0;
    localStorage.mut7price = 50000;
    localStorage.sektakt = 0;
    localStorage.einmal2 = 1;
    localStorage.cookies = 0;
}
if(localStorage.einmal2 < 2) {
    localStorage.einmal2 = 2;
    localStorage.mut4counter = 0;
    localStorage.mut4price = 5000;
    localStorage.mut4counterreal = 0;
}
function site_Load() {
    //name abfrage
    if (!localStorage.username) {
        localStorage.username = prompt("Username: ");
    }
    localStorage.sektakt = 0;
    renewDisplay();
}
function renewDisplay() {
    document.getElementById("result").innerHTML = localStorage.cookies;
    document.getElementById("cookieswert").innerHTML = "pro Klick: " + localStorage.wert + "<br>pro Sekunde: " + (Number(localStorage.mut2counter) + Number(localStorage.mut3counter) + (Number(localStorage.mut4counter)) + (Number(localStorage.mut7counter)));
    document.getElementById("mut1price").innerHTML = mut1desc + "kosten: " + localStorage.mut1price;
    document.getElementById("mut1score").innerHTML = "<br>Gekauft: " + localStorage.mut1counter;
    document.getElementById("mut2price").innerHTML = mut2desc + "kosten: " + localStorage.mut2price;
    document.getElementById("mut2score").innerHTML = "<br>Gekauft: " + localStorage.mut2counter;
    document.getElementById("mut3price").innerHTML = mut3desc + "kosten: " + localStorage.mut3price;
    document.getElementById("mut3score").innerHTML = "<br>Gekauft: " + (Number(localStorage.mut3counter)/8);
    document.getElementById("mut4price").innerHTML = mut4desc + "kosten: " + localStorage.mut4price;
    document.getElementById("mut4score").innerHTML = "<br>Gekauft: " + (Number(localStorage.mut4counter)/30);
    document.getElementById("mut5price").innerHTML = mut5desc + "kosten: " + localStorage.mut5price;
    document.getElementById("mut5score").innerHTML = "<br>Gekauft: " + (Number(localStorage.mut5counter)/10);
    document.getElementById("mut6price").innerHTML = mut6desc + "kosten: " + localStorage.mut6price;
    document.getElementById("mut6score").innerHTML = "<br>Gekauft: " + (Number(localStorage.mut6counter)/100);
    document.getElementById("mut7price").innerHTML = mut7desc + "kosten: " + localStorage.mut7price;
    document.getElementById("mut7score").innerHTML = "<br>Gekauft: " + (Number(localStorage.mut7counter)/150);
    document.getElementById("scoreboard").innerHTML = "1. " + localStorage.username + " (" + localStorage.cookies + " Cubes)";
    Sekundentakt();
}
function Sekundentakt() {
    if(localStorage.sektakt==0 && (localStorage.mut2counter>0 || localStorage.mut3counter>0 || localStorage.mut4counter>0)) {
        localStorage.sektakt=1;
        setInterval(function(){ 
            cookies1 = Number(localStorage.cookies) + (Number(localStorage.mut2counterreal) + Number(localStorage.mut3counterreal) + Number(localStorage.mut4counterreal));
            cookies1 = Math.round( cookies1 * 10 ) / 10;
            localStorage.cookies = cookies1.toFixed(1);
            renewDisplay();
        }, 100);
    }
}
function cookiesButton() {
    if(localStorage.cookies) {
        
        localStorage.cookies = Number(localStorage.cookies)+Number(localStorage.wert);
        localStorage.cookies = Number(localStorage.cookies).toFixed(1);
    } else {
        localStorage.cookies = 1;
    }
    renewDisplay();
}
function resetGame() {
    bestaetigung = prompt('Bitte gebe "jaichwill" ein, um zu Bestätigen das alles gelöscht wird');
    if(bestaetigung=="jaichwill") localStorage.einmal2 = 0;
    window.location.reload(false);
}
function mut1() {
    if(Number(localStorage.cookies)>=Number(localStorage.mut1price)) {
        localStorage.cookies = Number(localStorage.cookies)-Number(localStorage.mut1price);
        localStorage.wert++;
        localStorage.mut1counter++;
        localStorage.mut1price = localStorage.mut1price*1.1;
    }
    localStorage.mut1price = Math.round(localStorage.mut1price);
    renewDisplay();
}
function mut2() {
    if(Number(localStorage.cookies)>=Number(localStorage.mut2price)) {
        localStorage.cookies = Number(localStorage.cookies)-Number(localStorage.mut2price);
        localStorage.mut2counter++;
        localStorage.mut2counterreal = Number(localStorage.mut2counterreal)+0.1;
        localStorage.mut2price = localStorage.mut2price*1.2;
    }
    localStorage.mut2price = Math.round(localStorage.mut2price);
    renewDisplay();
}
function mut3() {
    if(Number(localStorage.cookies)>=Number(localStorage.mut3price)) {
        localStorage.cookies = Number(localStorage.cookies)-Number(localStorage.mut3price);
        localStorage.mut3counter = 8 + Number(localStorage.mut3counter);
        localStorage.mut3counterreal = Number(localStorage.mut3counterreal)+0.8;
        localStorage.mut3price = localStorage.mut3price*1.2;
    }
    localStorage.mut3price = Math.round(localStorage.mut3price);
    renewDisplay();
}
function mut4() {
    if(Number(localStorage.cookies)>=Number(localStorage.mut4price)) {
        localStorage.cookies = Number(localStorage.cookies)-Number(localStorage.mut4price);
        localStorage.mut4counter = 30 + Number(localStorage.mut4counter);
        localStorage.mut4counterreal = Number(localStorage.mut4counterreal)+3;
        localStorage.mut4price = localStorage.mut4price*1.2;
    }
    localStorage.mut4price = Math.round(localStorage.mut4price);
    renewDisplay();
}
function mut5() {
    if(Number(localStorage.cookies)>=Number(localStorage.mut5price)) {
        localStorage.cookies = Number(localStorage.cookies)-Number(localStorage.mut5price);
        localStorage.wert = 10 + Number(localStorage.wert);
        localStorage.mut5counter = 10 + Number(localStorage.mut5counter);
        localStorage.mut5price = localStorage.mut5price*1.2;
    }
    localStorage.mut5price = Math.round(localStorage.mut5price);
    renewDisplay();
}
function mut6() {
    if(Number(localStorage.cookies)>=Number(localStorage.mut6price)) {
        localStorage.cookies = Number(localStorage.cookies)-Number(localStorage.mut6price);
        localStorage.wert = 100 + Number(localStorage.wert);
        localStorage.mut6counter = 100 + Number(localStorage.mut6counter);
        localStorage.mut6price = localStorage.mut6price*1.2;
    }
    localStorage.mut6price = Math.round(localStorage.mut6price);
    renewDisplay();
}
function mut7() {
    if(Number(localStorage.cookies)>=Number(localStorage.mut7price)) {
        localStorage.cookies = Number(localStorage.cookies)-Number(localStorage.mut7price);
        localStorage.mut7counter = 150 + Number(localStorage.mut7counter);
        localStorage.mut7counterreal = Number(localStorage.mut7counterreal)+150;
        localStorage.mut7price = localStorage.mut7price*1.2;
    }
    localStorage.mut7price = Math.round(localStorage.mut7price);
    renewDisplay();
}

