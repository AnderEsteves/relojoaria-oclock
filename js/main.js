
let modeChanged = false;
let intervalId; // Armazena o ID do intervalo do relógio


function startClock() {
  intervalId = setInterval(() => {
    // Lógica do relógio aqui
  date = new Date();
    // ... Seu código para atualizar o relógio
    

  let secondsPoint = document.querySelector(".seconds");

  let minutesPoint = document.querySelector(".minutes");

  let hourPoint = document.querySelector(".hours");



  let secPosition = (date.getSeconds() * 6 + 180); 
  
  // secPosition += 180; 

  let minPosition = (date.getMinutes() * 6) + (date.getSeconds() / 10);

  let hourPosition = date.getHours() * 30 + (date.getMinutes() / 2) ; 


  secondsPoint.style.transform = `rotate(${secPosition}deg)`;

  minutesPoint.style.transform = `rotate(${minPosition - 180}deg)`;

  hourPoint.style.transform = `rotate(${hourPosition - 180}deg)`;

  }, 1000);
}

function stopClock() {
  clearInterval(intervalId);
}




function changeMode() {
  let dateElements = document.querySelectorAll(".data");
  let hourElements = document.querySelectorAll(".hours");

  dateElements.forEach(text => {
    text.style.display = modeChanged ? "block" : "none";
  });

  hourElements.forEach(text => {
    text.style.display = modeChanged ? "block" : "none";
  });



  // text Inside
  let textInside = document.querySelectorAll(".textInside");

  textInside.forEach(text => {
    text.style.display = modeChanged ? "block" : "none";
  });


  // date
  let date = document.querySelectorAll(".data");

  date.forEach(text => {
    text.style.display = modeChanged ? "block" : "none";
  })

  
  // hour hand
  let hours = document.querySelectorAll(".hours");

  hours.forEach(text => {
    text.style.display = modeChanged ? "block" : "none";
  })



    // Verifica se o relógio está em execução para parar ou iniciar conforme necessário
    if (modeChanged) {
      startClock(); // Inicia o relógio se o modo for alterado para verdadeiro
    } else {
      stopClock(); // Para o relógio se o modo for alterado para falso
    }


  modeChanged = !modeChanged ;
  // Outras modificações de elementos do relógio conforme necessário


}





// watch face

let marcadores = document.querySelector(".marcadores");
j=12;
k=60;

 
for (var i = 0; i < 360; i += 6) {
  
  let marcador = document.createElement("span");
  marcador.className = "marcador";
  marcador.style.transform = `rotate(${i}deg) translateY(-250px)`; //tamaho do relógio
  marcadores.appendChild(marcador);

  if ((i / 6) % 5 == 0) {
    let textOutside = document.createElement('span');
    marcador.className = "marcador big";
    textOutside.className = "textOutside";
    textOutside.innerHTML = k;
    textOutside.style.transform = `rotate(${-i}deg) translateY(2px)`;

    let textInside = document.createElement('span');
    textInside.className = "textInside";
    textInside.innerHTML = j;
    textInside.style.transform = `rotate(${-i}deg) translateY(2px)`;
    
    //textInside
    if (j == 12) {
      j = 0;
    }

    j++;

    //textOutside
    if (k == 60) {
      k = 0;
    }

    k+=5;
    
    marcador.appendChild(textOutside); 
    marcador.appendChild(textInside); 
  
  }


}


/* watch working */

var date = new Date();


intervalId = setInterval (() => {

  date = new Date();
  

  let secondsPoint = document.querySelector(".seconds");

  let minutesPoint = document.querySelector(".minutes");

  let hourPoint = document.querySelector(".hours");



  let secPosition = (date.getSeconds() * 6 + 180); 
  
  // secPosition += 180; 

  let minPosition = (date.getMinutes() * 6) + (date.getSeconds() / 10);

  let hourPosition = date.getHours() * 30 + (date.getMinutes() / 2) ; 


  secondsPoint.style.transform = `rotate(${secPosition}deg)`;

  minutesPoint.style.transform = `rotate(${minPosition - 180}deg)`;

  hourPoint.style.transform = `rotate(${hourPosition - 180}deg)`;


  console.log(date.getSeconds);
  // console.log(secPosition);
 
},1000);




/* date clock */

const options = { weekday: 'short' };
const dayOfWeek = date.toLocaleDateString('en-US', options);

const dayOfMonth = date.getDate();
const combinedDate = `${dayOfWeek} | ${dayOfMonth}`;

document.getElementById('date').textContent = combinedDate;





let marcadoresCrono = document.querySelector(".cronografo");

for (var i = 0; i < 360; i += 6) {
  let marcadorCrono = document.createElement("span");
  marcadorCrono.className = "marcadorCrono";
  marcadorCrono.style.transform = `rotate(${i}deg) translateY(-250px)`;
  marcadoresCrono.appendChild(marcadorCrono);
}
































