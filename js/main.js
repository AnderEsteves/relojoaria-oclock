
let modeChanged = false;
let intervalId; // Armazena o ID do intervalo do relógio
let transitionInProgress = false;



function startClock() {
  intervalId = setInterval(() => {
    // Lógica do relógio aqui
  date = new Date();
    // ... Seu código para atualizar o relógio
    

  let secondsPoint = document.querySelector(".seconds");
  let minutesPoint = document.querySelector(".minutes");
  let hourPoint = document.querySelector(".hours");


  let secPosition = (date.getSeconds() * 6 + 180); 
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



function resetSecondAndMinuteHands() {
  let secondsPoint = document.querySelector(".seconds");
  let minutesPoint = document.querySelector(".minutes");


  // Adicionando uma transição suave para os ponteiros
  secondsPoint.style.transition = "transform 1s ease-in-out";
  minutesPoint.style.transition = "transform 1s ease-in-out";

  // Define a posição dos ponteiros de segundo e minuto para 0 graus
  secondsPoint.style.transform = "rotate(180deg)";
  minutesPoint.style.transform = "rotate(180deg)";

  // Removendo a transição após o efeito
  setTimeout(() => {
    secondsPoint.style.transition = "";
    minutesPoint.style.transition = "";
  }, 1000); // Tempo total de 1 segundo para a transição
}




// function resetSecondAndMinuteHands() {
//   let secondsPoint = document.querySelector(".seconds");
//   let minutesPoint = document.querySelector(".minutes");

//   // Definindo uma transição suave para os ponteiros
//   secondsPoint.style.transition = "transform 1s ease-in-out";
//   minutesPoint.style.transition = "transform 1s ease-in-out";

//   // Definindo a posição inicial dos ponteiros após um pequeno atraso
//   setTimeout(() => {
//     secondsPoint.style.transform = "rotate(180deg)";
//     minutesPoint.style.transform = "rotate(180deg)";
//   }, 50); // Tempo de espera antes de aplicar a transformação
// }





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

 

  //Verifica se o relógio está em execução para parar ou iniciar conforme necessário
  if (modeChanged) {
    startClock(); 
    modeButton.innerHTML = "Modo cronógrafo";
  } else {
    stopClock();
    resetSecondAndMinuteHands();
    modeButton.innerHTML = "Modo relógio";
  }
  
 // Reinicia os ponteiros de segundo e minuto se o modo for alterado
  // if (!modeChanged) {
  //   resetSecondAndMinuteHands();
  // }



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
  
  let minPosition = (date.getMinutes() * 6) + (date.getSeconds() / 10);

  let hourPosition = date.getHours() * 30 + (date.getMinutes() / 2) ; 


  secondsPoint.style.transform = `rotate(${secPosition}deg)`;

  minutesPoint.style.transform = `rotate(${minPosition - 180}deg)`;

  hourPoint.style.transform = `rotate(${hourPosition - 180}deg)`;


  // console.log(date.getSeconds);
  console.log(secPosition);
 
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
































