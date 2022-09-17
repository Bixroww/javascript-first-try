// events

const btn = document.querySelector('#btn');
const img = document.getElementById('img');

btn.addEventListener('click', () => {
     img.classList.toggle('show')
    
})

//****************************************************

const mouseEvent  =   document.querySelector('.mouseEvent');
const horizontal  =   document.querySelector('.horizontal');
const vertical  =   document.querySelector('.vertical');

mouseEvent.addEventListener('mousemove', (event) => {
   horizontal.innerHTML =  event.x;
   vertical.innerHTML =  event.y;
   mouseEvent.style.left = event.x / window.innerWidth * 100 +"%";

// condition

   if (event.x > 500){
      document.body.style.filter = "blur(3px)";
   } else {
      document.body.style.filter = "none"
   }
})
