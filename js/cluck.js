"use strict";
//Objeto con las transformaciones del sonido de la gallina
var data = {

  q: {
    sound: new Howl({src: ['sound/cluckm12.mp3']}),
    id :'#dom'
  },
  2: {
    sound: new Howl({src: ['sound/cluckm11.mp3']}),
    id :'#dosm'
  },
  w: {
    sound: new Howl({src: ['sound/cluckm10.mp3']}),
    id :'#rem'
  },
  3: {
    sound: new Howl({src: ['sound/cluckm9.mp3']}),
    id :'#resm'
  },
  e: {
    sound: new Howl({src: ['sound/cluckm8.mp3']}),
    id :'#mim'
  },
  r: {
    sound: new Howl({src: ['sound/cluckm7.mp3']}),
    id :'#fam'
  },
  5: {
    sound: new Howl({src: ['sound/cluckm6.mp3']}),
    id :'#fasm'
  },
  t: {
    sound: new Howl({src: ['sound/cluckm5.mp3']}),
    id :'#solm'
  },
  6: {
    sound: new Howl({src: ['sound/cluckm4.mp3']}),
    id :'#soslm'
  },
  y: {
    sound: new Howl({src: ['sound/cluckm3.mp3']}),
    id :'#lam'
  },
  7: {
    sound: new Howl({src: ['sound/cluckm2.mp3']}),
    id :'#lasm'
  },
  u: {
    sound: new Howl({src: ['sound/cluckm1.mp3']}),
    id :'#sim'
  },
  z: {
    sound: new Howl({src: ['sound/cluck.mp3']}),
    id :'#do'
  },
  s: {
    sound: new Howl({src: ['sound/cluck1.mp3']}),
    id :'#dos'
  },
  x: {
    sound: new Howl({src: ['sound/cluck2.mp3']}),
    id :'#re'
  },
  d: {
    sound: new Howl({src: ['sound/cluck3.mp3']}),
    id :'#res'
  },
  c: {
    sound: new Howl({src: ['sound/cluck4.mp3']}),
    id :'#mi'
  },
  v: {
    sound: new Howl({src: ['sound/cluck5.mp3']}),
    id :'#fa'
  },
  g: {
    sound: new Howl({src: ['sound/cluck6.mp3']}),
    id :'#fas'
  },
  b: {
    sound: new Howl({src: ['sound/cluck7.mp3']}),
    id :'#sol'
  },
  h: {
    sound: new Howl({src: ['sound/cluck8.mp3']}),
    id :'#sols'
  },
  n: {
    sound: new Howl({src: ['sound/cluck9.mp3']}),
    id :'#la'
  },
  j: {
    sound: new Howl({src: ['sound/cluck10.mp3']}),
    id :'#las'
  },
  m: {
    sound: new Howl({src: ['sound/cluck11.mp3']}),
    id :'#si'
  },
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
$('#dom').click(function(){
  data['q'].sound.play();
});
$('#dosm').click(function(){
  data['2'].sound.play();

});
$('#res').click(function(){
  data['w'].sound.play();

});
$('#resm').click(function(){
  data['3'].sound.play();

});
$('#mim').click(function(){
  data['e'].sound.play();

});
$('#fam').click(function(){
  data['r'].sound.play();

});
$('#fasm').click(function(){
  data['5'].sound.play();

});
$('#solm').click(function(){
  data['t'].sound.play();

});
$('#solsm').click(function(){
  data['6'].sound.play();

});
$('#lam').click(function(){
  data['y'].sound.play();

});
$('#lasm').click(function(){
  data['7'].sound.play();

});
$('#sim').click(function(){
  data['u'].sound.play();

});
$('#do').click(function(){
  data['z'].sound.play();
});
$('#dos').click(function(){
  data['s'].sound.play();

});
$('#re').click(function(){
  data['x'].sound.play();

});
$('#res').click(function(){
  data['d'].sound.play();

});
$('#mi').click(function(){
  data['c'].sound.play();

});
$('#fa').click(function(){
  data['v'].sound.play();

});
$('#fas').click(function(){
  data['g'].sound.play();

});
$('#sol').click(function(){
  data['b'].sound.play();

});
$('#sols').click(function(){
  data['h'].sound.play();

});
$('#la').click(function(){
  data['n'].sound.play();

});
$('#las').click(function(){
  data['j'].sound.play();

});
$('#si').click(function(){
  data['m'].sound.play();

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
