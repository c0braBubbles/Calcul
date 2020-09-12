var zero=document.getElementById("tall0");
var one = document.getElementById("tall1");
var two = document.getElementById("tall2");
var three = document.getElementById("tall3");
var fore = document.getElementById("tall4");
var five = document.getElementById("tall5");
var six = document.getElementById("tall6");
var seven = document.getElementById("tall7");
var eight = document.getElementById("tall8");
var nine = document.getElementById("tall9");

var clear=document.getElementById("klar");
var done=document.getElementById("erlik");

var btnclose=document.getElementById("closeBtn");


var showbtn = document.getElementById("dropbtn");
var hidebtn = document.getElementById("dropbtn2");
var dropcont = document.getElementById("dropinnhold");


one.onclick = function() {
    calculator.answer.value += "1";
}

two.onclick = function() {
    calculator.answer.value += "2";
}

three.onclick = function() {
    calculator.answer.value += "3";
}

fore.onclick = function() {
    calculator.answer.value += "4";
}

five.onclick = function() {
    calculator.answer.value += "5";
}

six.onclick = function() {
    calculator.answer.value += "6";
}

seven.onclick = function() {
    calculator.answer.value += "7";
}

eight.onclick = function() {
    calculator.answer.value += "8";
}

nine.onclick = function() {
    calculator.answer.value += "9";
}

zero.onclick = function() {
    calculator.answer.value += "0";
}


var pIbtn = document.getElementById("tallpi").onclick = function() {
    calculator.answer.value += Math.PI;
}

var subtract = document.getElementById("minus").onclick = function() {
    calculator.answer.value += "-";
}

var addition = document.getElementById("pluss").onclick = function() {
    calculator.answer.value += "+";
}

var multiplication = document.getElementById("gange").onclick = function() {
    calculator.answer.value += "*";
}

var comma = document.getElementById("komma").onclick = function() {
    calculator.answer.value += ".";
}

var divide = document.getElementById("dele").onclick = function() {
    calculator.answer.value += "/";
}


function equal() {
    document.calculator.answer.value = eval(document.calculator.answer.value);
}

clear.onclick=function() {
    var display = document.getElementById("svar");
    var logging = document.getElementById("loggs")
    logging.innerHTML += display.value + "<br>";
} 

function cleared() {
    calculator.answer.value = "";
}


function openNav() {
    document.getElementById("logg").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
}

function closeNav() {
    document.getElementById("logg").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


function keyCode(event) {
    var x = event.keyCode;
    if(x == 13) {
        equal();
    }
    else if(x==27) {
        cleared();
    }
}

/*
var sound = document.getElementById("lyd");
function audio() {
    sound.play();
}*/


function abc() {
    var x1Text = document.getElementById("eks1");
    var x2Text = document.getElementById("eks2");
    var a = Number(prompt("Type in variabel for a:"));
    var b = Number(prompt("Type in variabel for b:"));
    var c = Number(prompt("Type in variabel for c:"));
    var neg = 0;
    var x1 = 0;
    var x2 = 0;

    neg = Math.pow(b,2)-4*a*c;

    if(neg >= 0) {
        x1 = (-b-Math.sqrt(b*b-4*a*c))/(2*a);
        x2 = (-b+Math.sqrt(b*b-4*a*c))/(2*a);

        x1Text.innerHTML = "x1 = " +x1+ " ";
        x2Text.innerHTML += "x2 = " + x2 + " ";
    }
    else {
        x1Text.innerHTML = "The joint that involves square root of b ^ 2-4 * a * c becomes a negative number, and therefore can not be taken square root without becoming what is called a complex number. Your answer therefore has no solution :)";
    }
}

function nCr() {
    var nCrText = document.getElementById("kombinatorikksvar");
    var n = Number(prompt("Type in variabel for n:"));
    var r = Number(prompt("Type in variabel for r:"));

    function fakultet(n) {
        var sum = 1;
        for(i = n; i--; i <= 1) {
            sum*=(i+1);
        }
        return sum;
    }

    function kombonated() {
        var svar = ((fakultet(n))/(fakultet(r)*fakultet(n-r)));
        return svar;
    }

    nCrText.innerHTML = n + "C" + r + " = " + kombonated(n, r);
}

function nPr() {
    var permutateText = document.getElementById("permuta");

    var n = Number(prompt("Type in value for n: "));
    var r = Number(prompt("Type in value for r: "));

    function fakulity() {
        var sum = 1;

        for(i = n; i--; i <= 1) {
            sum*=(i+1);
        }

        return sum;
    }

    function nppr() {
        var svar = (fakulity(n)/(fakulity(n-r)));
        return svar;
    }

    permutateText.innerHTML = n + "P" + r + " = " + nppr(n,r); 
}


function manske(){
    var bredde=prompt("Skiv inn en bredde");
    var lengde=prompt("Skriv inn en lengde");
    var hoyde=prompt("Skriv inn en høyde");
    var enhet=prompt("Hvilken måleenhet bruker du?");

    var omkretsG=(bredde*2+lengde*2);
    var volum=bredde*lengde*hoyde;
    var volumTrekant=bredde*lengde*hoyde/3;
    var omkretsFull=(4*bredde+4*hoyde+4*bredde+4*lengde+4*lengde+4*hoyde);
    var arealTrekant=(bredde*hoyde)/2;
    var overflateAreal=2*(bredde*hoyde)+2*(bredde*lengde)+2*(lengde*hoyde);

    document.write("<p> <b>Volum= </b> "+volum);
    document.write("<p> <b>Volum av pyramide= </b> "+volumTrekant);
    document.write("<p> <b>Omkrets av prisme</b>= " +omkretsFull);
    document.write("<p> <b>Omkrets av Grundflate</b>= "+omkretsG);
    document.write("<p> <b>Areal av trekant</b>= "+arealTrekant);
    document.write("<p> <b>Areal av overflate</b>= "+overflateAreal);

    function funksjon(){
        document.getElementById("demo");
        var a=Number(prompt("Tast inn variabel: a"));
        var b=Number(prompt("Tast inn variabel: b"));
        var c=Number(prompt("Tast inn variabel: c"));
        var x1=0;
        var x2=0;

        x1=(-b+Math.sqrt(b*b-4*a*c))/2*a;
        x2=(-b-Math.sqrt(b*b-4*a*c))/2*a;

        document.write("<p>x1 = "+x1+"</p>");
        document.write("<p>x2 = "+x2+"</p>");
    }
    function millimeter(){
        document.write("<p>"+bredde+" mm =");
        document.write(" "+bredde/10+" cm =");
        document.write(" "+bredde/100+" dm =");
        document.write(" "+bredde/1000+" m =");
        document.write(" "+bredde/1000000+" km =");
        document.write(" "+(bredde/10000000).toFixed(6+(String(bredde).length))+" mil</p>");
        return;
    }

    function centimeter(){
        document.write("<p>"+bredde*10+" mm =");
        document.write(" "+bredde+" cm =");
        document.write(" "+bredde/10+" dm =");
        document.write(" "+bredde/100+" m =");
        document.write(" "+bredde/100000+" km =");
        document.write(" "+(bredde/1000000).toFixed(6+(String(bredde).length))+" mil</p>");
    }

    function desimeter(){
        document.write("<p>"+bredde*100+" mm =");
        document.write(" "+bredde*10+" cm =");
        document.write(" "+bredde+" dm =");
        document.write(" "+bredde/10+" m =");
        document.write(" "+bredde/10000+" km =");
        document.write(" "+bredde/100000+" mil</p>");
    }

    function meter(){
        document.write("<p>"+bredde*1000+" mm =");
        document.write(" "+bredde*100+" cm =");
        document.write(" "+bredde*10+" dm =");
        document.write(" "+bredde+" m =");
        document.write(" "+bredde/1000+"  km=");
        document.write(" "+bredde/10000+" mil</p>");
    }

    function kilometer(){
        document.write("<p>"+bredde*1000000+" mm =");
        document.write(" "+bredde*100000+" cm =");
        document.write(" "+bredde*100000+" dm =");
        document.write(" "+bredde*1000+" m =");
        document.write(" "+bredde+" km =");
        document.write(" "+bredde/10+" mil</p>");
    }

    function mil(){
        document.write("<p>"+bredde*10000000+" mm =");
        document.write(" "+bredde*1000000+" cm =");
        document.write(" "+bredde*100000+" dm =");
        document.write(" "+bredde*10000+" m =");
        document.write(" "+bredde*10+" km =");
        document.write(" "+bredde+" mil</p>");
    }


    if(enhet==="millimeter"){
        millimeter();
    }

    else if(enhet==="centimeter"){
        centimeter();
    }

    else if(enhet==="desimeter"){
        desimeter();
    }

    else if(enhet==="meter"){
        meter();
    }

    else if(enhet==="kilometer"){
        kilometer();
    }

    else if(enhet==="mil"){
        mil();
    }
    document.write("<p>Trykk CTRL og r, samtidig, for å dra tilbake til hjemmesiden.</p>");
}


function squareRoot() {
    var display = document.getElementById("svar");
    var answer = Math.sqrt(display.value);
    display.value = answer;
} 



/*function potencytwo() {
    var display = document.getElementById("svar");
    var potencyTwoAwnser = (display.value*display.value);

    display.value = potencyTwoAwnser;
}

function potencythree() {
    var display = document.getElementById("svar");
    var potencyThreeAwnser = (display.value*display.value*display.value);

    display.value = potencyThreeAwnser;
}

function potencyfore() {
    var display = document.getElementById("svar");
    var potencyforeAwnser = (display.value*display.value*display.value*display.value);

    display.value = potencyforeAwnser;
}*/

function logarithm() {
    var display = document.getElementById("svar");
    var loganwser = Math.log10(display.value);

    display.value = loganwser;
}


var headclick = document.getElementById("head");
var productclick = document.getElementById("produkt");

headclick.onclick = function() {
    headclick.style.display = "none";
    productclick.style.display = "block";
}

productclick.onclick = function() {
    productclick.style.display = "none";
    headclick.style.display = "block";
}


function equ() {
    window.location = "assets/asset1.html";
}


function clearSite(){
    window.location.reload();
}


function potensdrop() {
    document.getElementById("dropinnhold").classList.toggle("show");
}


window.onclick = function(event) {
    if(!event.target.matches('.numbtn')) {
        var dropdowns = document.getElementsByClassName("dropinnhold");
        var i;

        for(i = 0; i < dropdowns.length; i++) {
            
        }
    }
}
/*var buttonBlock = document.getElementById("blockBtn");
var noneBtn = document.getElementById("noneBtn");
var dropContent = document.getElementById("dropinnhold");

function showMenu() {
    buttonBlock.style.display = "none";
    noneBtn.style.display = "block";
    dropContent.style.display = "block";
}


function hideMenu() {
    buttonBlock.style.display = "block";
    noneBtn.style.display = "none";
    dropContent.style.display = "none";
}*/



function aRows() {}