const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');
card.addEventListener('mousemove', runEvent);
const changeBtn = document.getElementById('changeBtn');
var quotes =[
  'Your New Year will be filled with lots of happiness and joy',
  'You will lots of Joy and Excitement',
  'Believe in Yourself and Enjoy to Full'
]
function newquote()
{
  var num= Math.floor(Math.random()*(quotes.length));
  document.getElementById('changeBtn').innerHTML = quotes[num];
}



// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
  document.getElementById('im').style.display = 'block';
}


document.getElementById('main').addEventListener('click', function(e){
  
  document.getElementById('im2').style.display = 'block';
  
  e.preventDefault();
});



