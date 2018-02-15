"use strict";
//Objeto con las transformaciones del sonido de la gallina
var data = {
  l: {sound: new Howl({
    src: ['sound/cluck6.mp3'],
  }),
  id :'#si'
},

o: {sound: new Howl({
  src: ['sound/cluck5.mp3']
}),
id :'#las'
},

k: {sound: new Howl({
  src: ['sound/cluck4.mp3']
}),
id :'#la'
},

i: {sound: new Howl({
  src: ['sound/cluck3.mp3']
}),
id :'#sols'
},

j: {sound: new Howl({
  src: ['sound/cluck2.mp3']
}),
id :'#sol'
},

u: {sound: new Howl({
  src: ['sound/cluck1.mp3']
}),
id :'#fas'
},

h: {sound: new Howl({
  src: ['sound/cluck.mp3']
}),
id :'#fa'
},

g:{sound:  new Howl({
  src: ['sound/cluckm1.mp3']
}),
id :'#mi'
},

t: {sound: new Howl({
  src: ['sound/cluckm2.mp3']
}),
id :'#res'
},

f: {sound: new Howl({
  src: ['sound/cluckm3.mp3']
}),
id: '#re'
},

r: {sound: new Howl({
  src: ['sound/cluckm4.mp3']
}),
id :'#dos'
},

d: {sound: new Howl({
  src: ['sound/cluckm5.mp3']
}),
id :'#do'
}
}
//Se dispara una vez se presiona una tecla
function onKeyDown(event){
  if(data[event.key]){
    data[event.key].sound.play();
    $(data[event.key].id).toggleClass('active');
    animarPollos();
  }
}
//Anima a los pollos
function animarPollos(){
  var x = Math.random()*700;
  var y = Math.random()*-370;
  var pollo = Math.floor(Math.random()*13) +1;
  $('.pollo').attr("src","images/pollos/p"+pollo+".png");
  $('.pollo').css({'transform':'translateX('+x+'%) translateY('+y+'%)'});
  $('.pollo').animate({'opacity':'0.5'}, function(){
    $('.pollo').css({'opacity':'0'});
  });
}

//Se dispara una vez se suelta una tecla
function onKeyUp(event){
  if(data[event.key])
  $(data[event.key].id).toggleClass('active');
}

//Asignación de animacion y sonido al hacer click sobre una tecla
$('li').click(function(){
  animarPollos();
});
$('#do').click(function(){
  data['d'].sound.play();
});
$('#dos').click(function(){
  data['r'].sound.play();

});
$('#re').click(function(){
  data['f'].sound.play();

});
$('#res').click(function(){
  data['t'].sound.play();

});
$('#mi').click(function(){
  data['g'].sound.play();

});
$('#fa').click(function(){
  data['h'].sound.play();

});
$('#fas').click(function(){
  data['u'].sound.play();

});
$('#sol').click(function(){
  data['j'].sound.play();

});
$('#sols').click(function(){
  data['i'].sound.play();

});
$('#la').click(function(){
  data['k'].sound.play();

});
$('#las').click(function(){
  data['o'].sound.play();

});
$('#si').click(function(){
  data['l'].sound.play();

});
//Cambia la canción actual
function callback(data, filter) {
  var num = parseInt($('#numero').text());
  num = (num==10)?1:(num+1);
  data
  .forEach(function (d) {
    if(d.numero === num)
    {
    $('#numero').text(num);
    $('#teclas').text(". "+d.nombre+": "+d.teclas);
    }
  })
}

$('#boton-next').click(function() {
  $.getJSON("js/canciones.json", callback);

});
