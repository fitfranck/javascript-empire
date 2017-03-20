'use strict';

var quotes = new Array({
  'author': '- Yoda',
  'quote': 'When 900 years old, you reach… Look as good, you will not.'
}, {
  'author': '- Senator palpatine',
  'quote': 'The Dark Side of the Force is the pathway to many abilities some consider to be.. Unnatural.'
}, {
  'author': '- Count Dooku',
  'quote': 'I sense great fear in you, Skywalker. You have hate… you have anger… but you don’t use them.'
}, {
  'author': '- Darth vader',
  'quote': 'Luke, you can destroy the Emperor. He has foreseen this. It is your destiny. Join me, and together we can rule the galaxy as father and son.'
}, {
  'author': '- Princess leila',
  'quote': 'Aren\'t you a little short for a storm trooper?'
}, {
  'author': '- Yoda',
  'quote': 'Mmm. Lost a planet, Master Obi-Wan has. How embarrassing.'
}, {
  'author': '- Qui-Gon Jinn',
  'quote': 'Your focus determines your reality'
}, {
  'author': '- Yoda',
  'quote': 'Do. Or do not. There is no try.'
}, {
  'author': '- Obi-Wan-Kenobi',
  'quote': 'In my experience there is no such thing as luck.'
}, {
  'author': '- Yoda',
  'quote': 'If once you start down the dark side, forever will it dominate your destiney, consume you it will, as it did Obi-Wan\'s apprentice'
}, {
  'author': '- Darth Vader',
  'quote': 'The Force is strong with this one.'
});

var image = new Array(
	'C:\Users\franck\Desktop\web appli\starwars-master1\image\Yoda.jpg'
	,
	'C:\Users\franck\Desktop\web appli\starwars-master1\image\senator.jpg'
	,
	'C:\Users\franck\Desktop\web appli\starwars-master1\image\CountDooju.jpg'
	,
	'C:\Users\franck\Desktop\web appli\starwars-master1\image\Dark.jpg'
	,
	'C:\Users\franck\Desktop\web appli\starwars-master1\image\PrincesseLeila.jpg'
	,
	'C:\Users\franck\Desktop\web appli\starwars-master1\image\yoda1.jpg'
	,
	'C:\Users\franck\Desktop\web appli\starwars-master1\image\QuiGonJhin.jpg'
	,
	'C:\Users\franck\Desktop\web appli\starwars-master1\image\yoda2.jpg'
	,
	'C:\Users\franck\Desktop\web appli\starwars-master1\image\obiWan.jpg'
	,
	'C:\Users\franck\Desktop\web appli\starwars-master1\image\yoda3.jpg'
	,	
	'C:\Users\franck\Desktop\web appli\starwars-master1\image\Vador.jpg'
	);


function ChaineAleatoire(nbcar,ListeCar){
	
	var Chaine ='';
	for(var i = 0; i < nbcar; i++) Chaine = Chaine + ListeCar[Math.floor(Math.random()*ListeCar.length)];
	return Chaine;
}

var tableauRandom =(

ChaineAleatoire(4,new Array("a","d","o","y")), // yoda
ChaineAleatoire(10,new Array("c","d","j","n","o","o","o","u","t","u")),
ChaineAleatoire(8,new Array("a","a","d","e","h","r","t","v")),
ChaineAleatoire(14,new Array("a","e","e","e","i","i","l","l","n","p","r","s","s")),
ChaineAleatoire(10,new Array("a","d","o","y")), // yoda
ChaineAleatoire(4,new Array("g","h","i","i","j","n","o","q","u")),
ChaineAleatoire(4,new Array("a","d","o","y")), // yoda
ChaineAleatoire(12,new Array("a","o","b","w","a","n","k","e","n","o","b","i")),
ChaineAleatoire(4,new Array("a","d","o","y")), // yoda
ChaineAleatoire(8,new Array("a","a","d","e","h","r","t","v")),
ChaineAleatoire(4,new Array("a","d","o","y")) // yoda
);





var liaisonTableauCitIm= new Array(quotes,image);

var liaisonTableauNmRdm= new Array(quotes,tableauRandom);

function showMe(id)
{
	var t = liaisonTableauCitIm[0][id];
	var y = liaisonTableauCitIm[1][id];
	var a = liaisonTableauNmRdm[0][id];
	var b = liaisonTableauNmRdm[1][id];
	alert(t["author","quote"]);  
	if (confirm("Voulez-vous voir une autre typographie?")) {
    alert(tableauRandom[0][id]);
  }
  else {
    alert("non")
  }
	document.getElementById('image').innerHTML = y;
	document.getElementById('tableauRandom').innerHTML = b;
}


/*function showMe(id)
{
var t = liaisonTableauCitIm[0][id];
var y = liaisonTableauCitIm[1][id];
alert(t["author","quote"]);
document.getElementById('image').innerHTML = y[1];
}
/*function showMe2(id2)
{
	var a = liaisonTableauNmRdm[0][id2];
	var b = liaisonTableauNmRdm[1][id2];
	alert(a["author","quote"]);
	document.getElementById('image').innerHTML = b[1];
}*/
