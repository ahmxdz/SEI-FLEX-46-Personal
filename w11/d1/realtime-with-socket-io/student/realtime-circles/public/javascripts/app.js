 // get our connection to the socket.io server
 const socket = io();
 console.log(socket);

const circles = document.getElementById('circles');
let initials = '';

// Listen for clicks anywhere in the "section"
circles.addEventListener('click', function(evt) {
  // addCircle(evt.clientX, evt.clientY, randomBetween(10,125), getRandomRGBA());

  socket.emit('add-circle', {
    x: evt.clientX,
    y: evt.clientY,
    intitals:intitals
  })
});

socket.on('add-circle',(evt) => {
  addCircle(evt.x,evt.y,evt.initials, randomBetween(10,125), getRandomRGBA)

})


socket.on('clear-circles-clicked', function(data){
  circles.innerHTML = '';
})

document.querySelector('button').addEventListener('click', function() {
  circles.innerHTML = '';
  socket.emit('clear-circles', 'some sort of data');
});


do {
  initials = getInitials();
} while (initials.length < 2 || initials.length > 3);

function getInitials() {
  const input = prompt("Please enter your initials");
  return input ? input.toUpperCase() : '';
}

function addCircle(x, y, dia, rgba) {
  const el = document.createElement('div');
  el.style.left = x - Math.floor(dia / 2 + 0.5) + 'px';
  el.style.top = y - Math.floor(dia / 2 + 0.5) + 'px';
  el.style.width = el.style.height = dia + 'px';
  el.style.backgroundColor = rgba;
  el.style.fontSize = Math.floor(dia / 3) + 'px';
  el.style.color = 'white';
  el.style.textAlign = 'center';
  el.style.lineHeight = dia + 'px';
  el.innerHTML = initials;
  circles.appendChild(el);
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomRGBA() {
  return `rgba(${randomBetween(0, 255)}, ${randomBetween(0, 255)}, ${randomBetween(0, 255)}, ${randomBetween(2, 10) / 10})`;
}
