
// watch face

let marcadores = document.querySelector(".marcadores");
k=12;
j=60;

 
for (var i = 0; i < 360; i += 6) {
  
  let marcador = document.createElement("span");
  marcador.className = "marcador";
  marcador.style.transform = `rotate(${i}deg) translateY(-150px)`; //tamaho do relógio
  marcadores.appendChild(marcador);

  if ((i / 6) % 5 == 0) {
    let textOutside = document.createElement('span');
    marcador.className = "marcador big";
    textOutside.className = "textOutside";
    textOutside.innerHTML = j;
    textOutside.style.transform = `rotate(${-i}deg) translateY(2px)`;

    let textInside = document.createElement('span');
    textInside.className = "textInside";
    textInside.innerHTML = k;
    textInside.style.transform = `rotate(${-i}deg) translateY(2px)`;
    
    
    if (k == 12) {
      k = 0;
    }

    k++;


    if (j == 60) {
      j = 0;
    }

    j+=5;
    
    marcador.appendChild(textOutside); 
    marcador.appendChild(textInside); 
  
  }


}






/* watch working */

var date = new Date();


setInterval (() => {

  date = new Date();
  

  let secondsPoint = document.querySelector(".seconds");

  let minutesPoint = document.querySelector(".minutes");

  let hourPoint = document.querySelector(".hours");



  let secPosition = (date.getSeconds() * 6); 
  
  secPosition += 180; 

  let minPosition = (date.getMinutes() * 6); 

  let hourPosition = date.getHours() * 30 + (date.getMinutes() / 2) ; 


  secondsPoint.style.transform = `rotate(${secPosition}deg)`;

  minutesPoint.style.transform = `rotate(${minPosition - 180}deg)`;

  hourPoint.style.transform = `rotate(${hourPosition - 180}deg)`;


  
  // console.log(secPosition);
 
},1000);








// function updateClock() {
//   const now = new Date();
//   const hours = String(now.getHours()).padStart(2, '0');
//   const minutes = String(now.getMinutes()).padStart(2, '0');
//   const seconds = String(now.getSeconds()).padStart(2, '0');
//   const time = `${hours}:${minutes}:${seconds}`;

//   document.getElementById('digital-clock').textContent = time;
// }

// setInterval(updateClock, 1000);

// updateClock();




const options = { weekday: 'short' };
const dayOfWeek = date.toLocaleDateString('en-US', options);

const dayOfMonth = date.getDate();
const combinedDate = `${dayOfWeek} ${dayOfMonth}`;

document.getElementById('date').textContent = combinedDate;





let marcadoresCrono = document.querySelector(".cronografo");

for (var i = 0; i < 360; i += 6) {
  let marcadorCrono = document.createElement("span");
  marcadorCrono.className = "marcadorCrono";
  marcadorCrono.style.transform = `rotate(${i}deg) translateY(-250px)`;
  marcadoresCrono.appendChild(marcadorCrono);
}





// let marcadores = document.querySelector(".marcadores");
// k=12;
// j=60;

// for (var i = 0; i < 360; i += 6) {
  
//   let marcador = document.createElement("span");
//   marcador.className = "marcador";
//   marcador.style.transform = `rotate(${i}deg) translateY(-150px)`;
//   marcadores.appendChild(marcador);

//   if ((i / 6) % 5 == 0) {
//     let textOutside = document.createElement('span');
//     marcador.className = "marcador big";
//     textOutside.className = "textOutside";
//     textOutside.innerHTML = j;
//     textOutside.style.transform = `rotate(${-i}deg) translateY(2px)`;

//     let textInside = document.createElement('span');
//     textInside.className = "textInside";
//     textInside.innerHTML = k;
//     textInside.style.transform = `rotate(${-i}deg) translateY(2px)`;
    
    
//     if (k == 12) {
//       k = 0;
//     }

//     k++;


//     if (j == 60) {
//       j = 0;
//     }

//     j+=5;
    
//     marcador.appendChild(textOutside); 
//     marcador.appendChild(textInside); 
  
//   }





























