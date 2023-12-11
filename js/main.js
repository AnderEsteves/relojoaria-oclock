// WATCH 

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
    textOutside.style.transform = `rotate(${-i}deg) translateY(1px)`;

    let textInside = document.createElement('span');
    textInside.className = "textInside";
    textInside.innerHTML = k;
    textInside.style.transform = `rotate(${-i}deg) translateY(1px)`;
    
    
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





