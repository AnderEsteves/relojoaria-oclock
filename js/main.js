const engine = {
  date: new Date(),
  modeChanged: false,
  intervalIdClock: null, // Armazena o ID do intervalo do relógio3


  intervalIdChrono: null,
  seconds: 0,
  minutes: 0,
  secPosition: 0,

  secondHand: document.querySelector(".seconds"),
  minuteHand: document.querySelector(".minutes"),
  hourHand: document.querySelector(".hours"),

  startButton: document.getElementById("start"),
  stopButton: document.getElementById("stop"),
  resetButton: document.getElementById("reset"),

  chronoDisplay: document.getElementById("chronoDisplay"),

  fullscreenButton: document.getElementById("fullscreenButton"),


  currentColorScheme: {
    clockFace: {
      markers: "blue",
      bigMarkers: "red",
      textInside: "black",
      textOutside: "black",
      clockHands: "black",
      pivot: "red",
      borderDate: "blue",
      
    },
    background: "white",
  },


  changeColors: function () {
    const clockFace = document.querySelector(".clock");
    const markers = document.querySelectorAll(".marcador");
    const bigMarkersTextInside = document.querySelectorAll(".marcador.big, .textInside");
    const bigMarkersTextOutside = document.querySelectorAll(".marcador.big, .textOutside");
    const secondHands = document.querySelectorAll(".seconds");//".seconds, .minutes, .hours")
    const pivot = document.querySelector(".pivot");
    const borderDate = document.querySelector(".borderDate");

    const circuloInside = document.querySelector(".circuloInside");
    const colorBorderDate = document.querySelector(".borderDate");
  

    // Atualiza a cor do rosto do relógio
    clockFace.style.background = this.currentColorScheme.background;
    


    circuloInside.style.background = this.currentColorScheme.clockFace.circuloInside;
    colorBorderDate.style.background = this.currentColorScheme.clockFace.borderDate;

  


    // Atualiza a cor dos marcadores
    markers.forEach((marker) => {
      marker.style.background = this.currentColorScheme.clockFace.markers;
      marker.style.borderColor = this.currentColorScheme.clockFace.markers;
    });

    // Atualiza a cor dos grandes marcadores (textInside)
    bigMarkersTextInside.forEach((textInside) => {
      textInside.style.color = this.currentColorScheme.clockFace.textInside;
    });

    // Atualiza a cor dos grandes marcadores (textOutside)
    bigMarkersTextOutside.forEach((textOutside) => {
      textOutside.style.color = this.currentColorScheme.clockFace.textOutside;
    });

    // Atualiza a cor dos ponteiros do relógio
    secondHands.forEach((hand) => {
      hand.style.background = this.currentColorScheme.clockFace.clockHands;
    });

    // Atualiza a cor do pino (pivot)
    pivot.style.background = this.currentColorScheme.clockFace.pivot;

    // Atualiza a cor da borda da data
    borderDate.style.borderColor = this.currentColorScheme.clockFace.borderDate;
  },

  changeColorScheme: function (scheme) {
    switch (scheme) {
      case 'dark':
        this.currentColorScheme = {
          clockFace: {
            markers: "#39ff14",
            bigMarkers: "white",
            textInside: "white",
            textOutside: "white",
            secondHands: "red",
            pivot: "red",

            borderDate: "#39ff14",
            circuloInside: "#39ff14",
            colorBorderDate:"#39ff14",
            minutesAndHoursBefore: "white",
          },
          // background: "black",
        };
      break;
      default: // Padrão
        this.currentColorScheme = {
          clockFace: {
            markers: "blue",
            bigMarkers: "red",
            textInside: "black",
            textOutside: "black",
            clockHands: "black",
            pivot: "red",
            borderDate: "blue",
          },
          background: "white",
        };
    }

    this.changeColors();
  },

  createMarcadores: function () {
    let marcadores = document.querySelector(".marcadores");
    j = 12;
    k = 60;

    for (var i = 0; i < 360; i += 6) {
      let marcador = document.createElement("span");
      marcador.className = "marcador";
      marcador.style.transform = `rotate(${i}deg) translateY(-250px)`; //tamaho do relógio
      marcadores.appendChild(marcador);

      if ((i / 6) % 5 == 0) {
        let textOutside = document.createElement("span");
        marcador.className = "marcador big";
        textOutside.className = "textOutside";
        textOutside.innerHTML = k;
        textOutside.style.transform = `rotate(${-i}deg) translateY(2px)`;

        let textInside = document.createElement("span");
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

        k += 5;

        marcador.appendChild(textOutside);
        marcador.appendChild(textInside);
      }
    }
  },

  startClock: function () {
    this.intervalIdClock = setInterval(() => {
      date = new Date();

      let secPosition = date.getSeconds() * 6 + 180;
      let minPosition = date.getMinutes() * 6 + date.getSeconds() / 10;
      let hourPosition = date.getHours() * 30 + date.getMinutes() / 2;

      this.secondHand.style.transform = `rotate(${secPosition}deg)`;
      this.minuteHand.style.transform = `rotate(${minPosition - 180}deg)`;
      this.hourHand.style.transform = `rotate(${hourPosition - 180}deg)`;
    }, 1000);
  },

  stopClock: function () {
    clearInterval(this.intervalIdClock);
  },

  resetSecondAndMinuteHands: function () {
    // this.secondHand = document.querySelector(".seconds");
    // this.minuteHand = document.querySelector(".minutes");

    // Definindo uma transição suave para os ponteiros
    this.secondHand.style.transition = "transform 1s ease-in-out";
    this.minuteHand.style.transition = "transform 1s ease-in-out";

    // Definindo a posição inicial dos ponteiros após um pequeno atraso
    setTimeout(() => {
      this.secondHand.style.transform = "rotate(180deg)";
      this.minuteHand.style.transform = "rotate(180deg)";
    }, 50); // Tempo de espera antes de aplicar a transformação
  },

  updateChronoDisplay: function () {
    // Atualiza o display do cronômetro digital
    const formattedMinutes = this.minutes < 10 ? `0${this.minutes}` : this.minutes;
    const formattedSeconds = this.seconds < 10 ? `0${this.seconds}` : this.seconds;
    
    this.chronoDisplay.textContent = `${formattedMinutes}:${formattedSeconds}`;
  },

  startChronograph: function () {
    this.secondHand.style.transition = "none";
    this.minuteHand.style.transition = "none";

    this.intervalIdChrono = setInterval(() => {
      this.seconds++;

      this.updateChronoDisplay();

      

      let secPosition = this.seconds * 6 + 180;
      this.secondHand.style.transform = `rotate(${secPosition}deg)`;

      if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes++;
        let minPosition = this.minutes * 6 + this.seconds / 10 - 180;
        this.minuteHand.style.transform = `rotate(${minPosition}deg)`;
      }
    }, 1000);
  },

  stopChronograph: function () {
    clearInterval(this.intervalIdChrono);
  },

  resetChronograph: function () {
    clearInterval(this.intervalIdChrono);

    // Zera os segundos e minutos
    this.seconds = 0;
    this.minutes = 0;

    this.updateChronoDisplay();

    this.secondHand.style.transition = "transform 1s ease-in-out";
    this.minuteHand.style.transition = "transform 1s ease-in-out";

    // Define a rotação dos ponteiros de segundos e minutos para 0 graus
    this.secondHand.style.transform = "rotate(180deg)";
    this.minuteHand.style.transform = "rotate(180deg)";

    setTimeout(() => {
      this.secondHand.style.transition = "none";
      this.minuteHand.style.transition = "none";
    }, 2000);
  },

  changetextInside: function () {},

  changeMode: function () {
    // Selecionar os elementos relevantes
    let textInsideElements = document.querySelectorAll(".textInside");
    let dateElement = document.getElementById("date");
    let hoursElements = document.querySelectorAll(".hours");
    
    // Alternar a exibição dos elementos
    textInsideElements.forEach((text) => {
      text.style.display = this.modeChanged ? "block" : "none";
    });
  
    dateElement.style.display = this.modeChanged ? "block" : "none";
  
    hoursElements.forEach((text) => {
      text.style.display = this.modeChanged ? "block" : "none";
    });

  
    // Verificar se o relógio está em execução para parar ou iniciar conforme necessário
    if (this.modeChanged) {
      this.startClock();
      modeButton.innerHTML = "Modo cronógrafo";
  
      // Ocultar botões no modo cronógrafo
      this.startButton.style.display = "none";
      this.stopButton.style.display = "none";
      this.resetButton.style.display = "none";
  
      // Ajustar posição do date
      dateElement.style.position = "absolute";
      dateElement.style.top = "5%";
      dateElement.style.left = "5%";
  
      // Parar e zerar cronômetro
      this.stopChronograph();
      this.resetChronograph();

      this.chronoDisplay.style.display = "none";

      this.changeColors();

    } else {
      // No modo relógio
      this.stopClock();
      this.resetSecondAndMinuteHands();
      this.changetextInside();
  
      modeButton.innerHTML = "Modo relógio";
  
      // Restaurar posição do date
      dateElement.style.position = "relative"; 
  
      // Exibir botões no modo relógio
      this.startButton.style.display = "block";
      this.stopButton.style.display = "block";
      this.resetButton.style.display = "block";

      this.chronoDisplay.style.display = "block";
      this.chronoDisplay.textContent = "00:00";
    }
  
    // Alternar o estado do modo
    this.modeChanged = !this.modeChanged;

    
  },


  createData: function () {
    const options = { weekday: "short" };
    const dayOfWeek = this.date.toLocaleDateString("en-US", options);

    const dayOfMonth = this.date.getDate();

    const dayOfMonthFormatted = dayOfMonth < 10 ? `0${dayOfMonth}` : dayOfMonth;

    const combinedDate = `${dayOfWeek} | ${dayOfMonthFormatted}`;

    document.getElementById("date").textContent = combinedDate;
  },



  changeFullscreen: function () {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else{
      document.exitFullscreen();
    }
  },


  setupEventListeners: function () {
    // chama a função quando clica no botão
    this.fullscreenButton.addEventListener("click", () => {
      this.changeFullscreen();
    });
  },

  start: function () {
    this.createData();
    this.createMarcadores();
    this.startClock();
    this.setupEventListeners();

  },
};

engine.start();
