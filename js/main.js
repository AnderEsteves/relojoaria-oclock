
// watch face

let marcadores = document.querySelector(".marcadores");
j=12;
k=24;

 
for (var i = 0; i < 360; i += 6) {
  
  let marcador = document.createElement("span");
  marcador.className = "marcador";
  marcador.style.transform = `rotate(${i}deg) translateY(-150px)`;
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
    
    
    if (j == 12) {
      j = 0;
    }

    j++;


    if (k == 24) {
      k = 12;
    }

    k++;
    
    marcador.appendChild(textOutside); 
    marcador.appendChild(textInside); 
  
  }


}

console.log(marcadores);


/* watch working */



// const interval = setInterval (() => {
//   var date = new Date();

//   let secondsPoint = document.querySelector(".seconds");

//   let minutesPoint = document.querySelector(".minutes");

//   let hourPoint = document.querySelector(".hours");


//   // let secPosition = date.getSeconds() * 6;

//   // let minPosition = date.getMinutes() * 6;

//   // let hourPosition = date.getHours() * 30;


//   // let secPosition = date.getSeconds() * 6;

//   let secPosition = (date.getSeconds() * 6); // Adiciona a fração de segundos para uma rotação mais suave + (date.getMilliseconds() * 0.006)

//   let minPosition = (date.getMinutes() * 6) + (date.getSeconds() / 10); // Correção para o movimento dos minutos

//   let hourPosition = date.getHours() * 30 + (date.getMinutes() / 2); // Ajuste para considerar a fração dos minutos



//   // if (secPosition == 0){
//   //   secondsPoint.style.transform = "none";
//   // }else{
//   //   secondsPoint.style.transform = "0.25s";
//   // }


//   secondsPoint.style.transform = `rotate(${secPosition}deg)`;

//   minutesPoint.style.transform = `rotate(${minPosition - 180}deg)`;

//   hourPoint.style.transform = `rotate(${hourPosition - 180}deg)`;
 
// });

















