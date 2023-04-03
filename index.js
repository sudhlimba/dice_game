var randomnumber1 = Math.floor(Math.random()*6)+1;

var randomimg1 = 'dice'+randomnumber1+'.png';

var randomimgsource1 = 'images/'+randomimg1;

document.querySelector('.img1').setAttribute('src', randomimgsource1);


var randomnumber2 = Math.floor(Math.random()*6)+1;

var randomimg2 = 'dice'+randomnumber2+'.png';

var randomimgsource2 = 'images/'+randomimg2;

document.querySelector('.img2').setAttribute('src', randomimgsource2);


if(randomimg1>randomimg2){
    document.querySelector("h1").innerHTML = "🚩 player 1 wins!"
}
else if(randomimg1<randomimg2){
    document.querySelector("h1").innerHTML = "player 2 wins! 🚩"
}else{
    document.querySelector("h1").innerHTML = "Draw!"
}