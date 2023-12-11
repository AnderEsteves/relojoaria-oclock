// WATCH 

let points = document.querySelector(".points");
j=12;
k=24;


for (var i = 0; i <360; i += 6){
  let point = document.createElement("span");
  point.className = "point";
  point.style.transform = `rotate(${i}deg) translateY(-250px)`;
  points.appendChild(point);

  //new
  let pontodentro =  document.createElement("span");
  pontodentro.className = "point dentro";
  pontodentro.style.transform = `rotate(${i}deg) translateY(-200px)`;
  pontodentro.appendChild(point);


  if ((i/6) % 5 == 0) {
    let text = document.createElement('span');
    point.className = "point big";
    text.className = "text";
    text.innerHTML = j;
    text.style.transform = `rotate(${-i}deg) translateY(2px)`;

    //new

    let textodentro = documento.createElement('span');
    pontodentro.className = 'dentro';
    textodentro.innerHTML = k;
    textodentro.style.transform = `rotate(${-i}deg) translateY(2px)`;

    if(j == 12){
      j = 0;
    }
    j = j + 1;
    point.appendChild(text);

    if(k == 24){
      k = 0;
    }
    k = k + 1;
    pontodentro.appendChild(textodentro);

  } 

  

}




