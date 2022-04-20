var intro = [`soRry i can't come`,`pleaSe forgive my absence`]
var scapeGoat = [`my nephEw`,`the ghost of hitler`]
var delay = [`just shit the bed`,`died in front of me`]


function normalizeText(string){
    return string.toLowerCase()
}

function capitalizeFirstLetter(string) {
    string = string.toLowerCase()
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

function excuse(){
   let control = parseInt(Math.random()*intro.length)
   let ex = intro[control]
   ex = capitalizeFirstLetter(ex)
   document.getElementById('pt1').innerHTML = capitalizeFirstLetter(ex) + '&nbsp'
   control = parseInt(Math.random()*scapeGoat.length)
   ex = scapeGoat[control]
   document.getElementById('pt2').innerHTML = normalizeText(ex) + '&nbsp'
   control = parseInt(Math.random()*delay.length)
   ex = delay[control]
   document.getElementById('pt3').innerHTML = normalizeText(ex)
   document.getElementsByClassName("center")[0].style.backgroundColor = "#5ead60"
   //.map(x=>x.style.backgroundColor = "blue")
}
