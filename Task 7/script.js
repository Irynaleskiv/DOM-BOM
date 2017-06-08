
document.getElementById('player').style.top = '50px';
document.getElementById('player').style.left = '50px';

var bullet,
    bulletDir;

document.body.onkeydown = function (e) {
	var el = document.getElementById('player');
  
  var KEYCODE_LEFT = 37;
  var KEYCODE_RIGHT = 39;
  var KEYCODE_UP = 38;
  var KEYCODE_DOWN = 40;
  var KEYCODE_SPACE = 32;
  var KEYCODE_ENTER = 13;
  
  if (e.keyCode == KEYCODE_LEFT) {
    el.style.transform = "rotate(-90deg)";
    el.style.left = (parseInt(el.style.left) - 10) + 'px';
    bulletDir = 'left';
  }
  else if (e.keyCode == KEYCODE_RIGHT) {
    el.style.transform = "rotate(90deg)";
    el.style.left = (parseInt(el.style.left) + 10) + 'px';
    bulletDir = 'right';
  }
  else if (e.keyCode == KEYCODE_UP) {
    el.style.transform = "rotate(0deg)";
    el.style.top = (parseInt(el.style.top) - 10) + 'px';
    bulletDir = 'up';
  }
  else if (e.keyCode == KEYCODE_DOWN) {
    el.style.transform = "rotate(180deg)";
    el.style.top = (parseInt(el.style.top) + 10) + 'px';
    bulletDir = 'down';
  }
  //shooting by pressing ENTER or SPACE
  if (e.keyCode == KEYCODE_ENTER || e.keyCode == KEYCODE_SPACE) {
    makeBullet();
    if (bulletDir === 'right') { 
      setTimeout(function() {
        document.getElementsByClassName('bullet')[0].classList.add('bullet-move-right');
      }, 50);
      setTimeout(removeBullet, 400);     
    }
    else if (bulletDir === 'left') { 
      setTimeout(function() {
        document.getElementsByClassName('bullet')[0].classList.add('bullet-move-left');
      }, 50);
      setTimeout(removeBullet, 400);
    }
    else if (bulletDir === 'up') {
      setTimeout(function() {
        document.getElementsByClassName('bullet')[0].classList.add('bullet-move-up');
      }, 50);
      setTimeout(removeBullet, 400);
    }
    else if (bulletDir === 'down') {
     setTimeout(function() {
        document.getElementsByClassName('bullet')[0].classList.add('bullet-move-down');
      }, 50);
      setTimeout(removeBullet, 400); 
    }
  }  
}
// making bullet
function makeBullet() {
  bullet = document.createElement('img');
  bullet.src = 'images/bullet.png';
  bullet.className = 'bullet';
  var el = document.getElementById('player');
  el.appendChild(bullet);
}
//removing bullet
function removeBullet () {
  document.getElementById('player').removeChild(bullet);
}