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

  darkButton: document.getElementById("dark"),

  darkButtonStatus: true,

  originalTranslateY: 1,

  borderDate: document.querySelector(".borderDate"),

  menuClock: document.querySelector(".menuClock"),

  menuCronometro: document.querySelector(".menuCronometro"),

  circuloInside: document.querySelector(".circuloInside"),

  divClock: document.querySelector(".clock"),

  larguraTela: window.innerWidth,

  dateClock: document.getElementById("date"),

  fontInside: "1rem", // Define o tamanho inicial da fonte

  fontOutside: "3rem",

  changeDarkButton: function () {
    let textInside = document.querySelectorAll(".textInside");
    let textOutside = document.querySelectorAll(".textOutside");

    let colorBorderDate = document.querySelector(".borderDate");

    let marcadores = document.querySelectorAll(".marcador");

    let minutesElement = document.querySelector(".minutes");
    let hoursElement = document.querySelector(".hours");

    let minuteHoursHands = document.querySelectorAll(".minutes, .hours");

    let clockBackground = document.querySelectorAll(".clockContainer");

    darkButton.innerHTML = this.darkButtonStatus ? "Modo Claro" : "Modo Escuro";

    textInside.forEach((text) => {
      text.style.color = this.darkButtonStatus ? "white" : "black";
    });

    textOutside.forEach((text) => {
      text.style.color = this.darkButtonStatus ? "white" : "black";
    });

    minuteHoursHands.forEach((text) => {
      text.style.background = this.darkButtonStatus ? "white" : "black";
    });

    marcadores.forEach((text) => {
      text.style.background = this.darkButtonStatus ? "#39ff14" : "blue";
      text.style.borderColor = this.darkButtonStatus ? "#39ff14" : "blue";
    });

    // Adiciona ou remove a classe dark-mode para os elementos
    minutesElement.classList.toggle("dark-mode", this.darkButtonStatus);
    hoursElement.classList.toggle("dark-mode", this.darkButtonStatus);

    clockBackground.forEach((text) => {
      text.style.background = this.darkButtonStatus ? "black" : "white";
    });

    this.circuloInside.style.borderColor = this.darkButtonStatus
      ? "#39ff14"
      : "navy";

    colorBorderDate.style.borderColor = this.darkButtonStatus
      ? "#39ff14"
      : "blue";

    colorBorderDate.style.backgroundColor = this.darkButtonStatus
      ? "#39ff14"
      : "white";

    this.darkButtonStatus = !this.darkButtonStatus;
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
        // textOutside.style.transform = `rotate(${-i}deg) translateY(2px)`;
        textOutside.style.transform = `rotate(${-i}deg) translateY(${
          this.originalTranslateY
        }px)`;

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
    const formattedMinutes =
      this.minutes < 10 ? `0${this.minutes}` : this.minutes;
    const formattedSeconds =
      this.seconds < 10 ? `0${this.seconds}` : this.seconds;

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

    dateElement.style.display = this.modeChanged ? "absolute" : "relative";

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
      dateElement.style.visibility = "visible";
    } else {
      // No modo relógio
      this.stopClock();
      this.resetSecondAndMinuteHands();
      this.changetextInside();

      modeButton.innerHTML = "Modo relógio";

      // Restaurar posição do date
      dateElement.style.position = "absolute";
      dateElement.style.visibility = "hidden";

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

  fullScreen: function (state = true) {
    let element = document.querySelector(".clockContainer");

    if (state && !document.fullscreenElement) {
      element.requestFullscreen();

      // Ajustando o tamanho do relogio
      this.originalTranslateY = -350;
      this.updateMarcadoresTranslateY();

      // circuloInside
      this.circuloInside.style.width = "500px";
      this.circuloInside.style.height = "500px";

      this.circuloInside.style.top = "-12%";
      this.circuloInside.style.left = "-12%";

      this.circuloInside.style.border = "5px solid blue";

      //date
      this.borderDate.style.left = "90%";

      //handsClock
      this.secondHand.style.height = "383px";
      this.minuteHand.style.height = "316px";
      this.hourHand.style.height = "256px";

      //menuClock
      this.menuClock.style.top = "62%";

      //menuCronometro
      this.menuCronometro.style.top = "70%";

      //divClock
      this.divClock.style.top = "45%";
    } else {
      if (state) {
        document.exitFullscreen();
      }

      // Volta ao tamanho original
      this.originalTranslateY = -250;
      this.updateMarcadoresTranslateY();

      // circuloInside
      this.circuloInside.style.width = "310px";
      this.circuloInside.style.height = "310px";

      this.circuloInside.style.top = "12%";
      this.circuloInside.style.left = "12%";

      this.circuloInside.style.border = "3px solid blue";

      //date
      this.borderDate.style.left = "70%";

      //handsClock
      this.secondHand.style.height = "283px";
      this.minuteHand.style.height = "220px";
      this.hourHand.style.height = "158px";

      //menuClock
      this.menuClock.style.top = "32%";

      //menuCronometro
      this.menuCronometro.style.top = "40%";

      //divClock
      this.divClock.style.top = "42%";
    }
  },

  updateMarcadoresTranslateY: function () {
    // Atualizar todos os marcadores com o novo valor de translateY
    let marcadores = document.querySelector(".marcadores");
    marcadores.childNodes.forEach((marcador, index) => {
      marcador.style.transform = `rotate(${index * 6}deg) translateY(${
        this.originalTranslateY
      }px)`;
    });
  },

  checkScreenWidth: function () {
    console.log("Verificando a largura da tela:", this.larguraTela);

    if (this.larguraTela <= 640) {
      console.log("Menor ou igual a 640");

      // circuloInside
      this.circuloInside.style.width = "180px";
      this.circuloInside.style.height = "180px";

      this.circuloInside.style.top = "28%";
      this.circuloInside.style.left = "28%";

      this.circuloInside.style.border = "2.2px solid blue";

      // Código para larguras de tela menores ou iguais a 640
      this.originalTranslateY = -150;
      this.updateMarcadoresTranslateY();

      //borderDate
      this.borderDate.style.top = "43%";
      this.borderDate.style.left = "54%";
      this.borderDate.style.border = "2px solid blue";
      this.borderDate.style.width = "12rem";
      this.borderDate.style.height = "5rem";

      // marcador.big > textInside
      let textInsideElements = document.querySelectorAll(
        ".marcador.big > .textInside"
      );
      textInsideElements.forEach((text) => {
        text.style.top = "calc(220% - 7px)";
        text.style.left = "calc(50% - 26px)";
      });

      //date
      this.dateClock.style.fontSize = "2.6rem";

      //cronometro
      this.chronoDisplay.style.fontSize = "2.6rem";

      //textoDentro
      this.fontInside = "3rem";

      //textoFora
      this.fontOutside = "2.2rem";

      //handsClock
      this.secondHand.style.height = "182px";
      this.minuteHand.style.height = "134px";
      this.hourHand.style.height = "94px";

      //marcadores
      let marcadorElement = document.querySelectorAll(".marcador");
      marcadorElement.forEach((text) => {
        text.style.width = "5px";
      });

      //marcadores
      let marcadorBigElement = document.querySelectorAll(".marcador.big");
      marcadorBigElement.forEach((text) => {
        text.style.width = "1px";
      });


      var elementos = document.querySelectorAll(".custom-before");

      elementos.forEach(function (elemento) {
        elemento.style.setProperty("--largura-before", "8px");
      });
    }

    // else if (this.larguraTela <= 768) {
    //   console.log("Menor ou igual a 768");

    //   // Código para larguras de tela menores ou iguais a 768, mas maiores que 640
    //   this.originalTranslateY = -200;
    //   this.updateMarcadoresTranslateY();

    //     //borderDate
    //     this.borderDate.style.top = "43%";
    //     this.borderDate.style.left = "62%";
    //     this.borderDate.style.border = "3px solid yellow";
    //     this.borderDate.style.width = "13rem";
    //     this.borderDate.style.height = "6rem";

    //     //textoDentro
    //     this.fontSize = "4rem";

    //     //textoFora
    //     this.fontSizeOutside = "1rem";

    // }
    else if (this.larguraTela <= 1536) {
      console.log("Menor ou igual a 1536");

      // Código para larguras de tela menores ou iguais a 1536, mas maiores que 768
      this.originalTranslateY = -200;
      this.updateMarcadoresTranslateY();

      // circuloInside
      this.circuloInside.style.width = "230px";
      this.circuloInside.style.height = "230px";

      this.circuloInside.style.top = "22%";
      this.circuloInside.style.left = "22%";

      //handsClock
      this.secondHand.style.height = "232px";
      this.minuteHand.style.height = "180px";
      this.hourHand.style.height = "158px";

      //textoDentro
      this.fontInside = "4rem";

      // marcador.big > textInside
      let textInsideElements = document.querySelectorAll(
        ".marcador.big > .textInside"
      );
      textInsideElements.forEach((text) => {
        text.style.top = "calc(300% - 7px)";
        text.style.left = "calc(50% - 24px)";
      });

      //borderDate
      this.borderDate.style.top = "43%";
      this.borderDate.style.left = "62%";
      this.borderDate.style.border = "3px solid blue";
      this.borderDate.style.width = "13rem";
      this.borderDate.style.height = "6rem";

      //date
      this.dateClock.style.fontSize = "3rem";

      //cronometro
      this.chronoDisplay.style.fontSize = "3rem";

      //ponteiros
      this.hourHand.style.height = "124px";
    } else {
      console.log("Maior que 1536");

      // Código para larguras de tela maiores que 1536
      this.originalTranslateY = -250;
      this.updateMarcadoresTranslateY();

      //tamanho relogio
      this.originalTranslateY = -250;
      this.updateMarcadoresTranslateY();

      // circuloInside
      this.circuloInside.style.width = "310px";
      this.circuloInside.style.height = "310px";

      this.circuloInside.style.top = "12%";
      this.circuloInside.style.left = "12%";

      //handsClock
      this.secondHand.style.height = "283px";
      this.minuteHand.style.height = "220px";
      this.hourHand.style.height = "158px";

      //textoDentro
      this.fontInside = "5rem";

      //textoFora

      this.fontOutside = "3rem";

      // marcador.big > textInside
      let textInsideElements = document.querySelectorAll(
        ".marcador.big > .textInside"
      );
      textInsideElements.forEach((text) => {
        text.style.top = "calc(350% - 7px)";
        text.style.left = "calc(50% - 28px)";
      });

      //borderDate
      this.borderDate.style.top = "41%";
      this.borderDate.style.left = "70%";
      this.borderDate.style.border = "4px solid blue";
      this.borderDate.style.width = "15rem";
      this.borderDate.style.height = "7rem";

      //date
      this.dateClock.style.fontSize = "3.8rem";

      //cronometro
      this.chronoDisplay.style.fontSize = "3.8rem";

      //ponteiros
      this.hourHand.style.height = "158px";

      var elementos = document.querySelectorAll(".custom-before");

      elementos.forEach(function (elemento) {
        elemento.style.setProperty("--largura-before", "12px");
      });
    }

    // O restante do código comum independente da largura da tela
    // ...

    // Alterar o tamanho da fonte textInside
    let textoDentro = document.querySelectorAll(".marcador.big > .textInside");
    textoDentro.forEach((text) => {
      text.style.fontSize = this.fontInside;
    });

    // Alterar o tamanho da fonte textInside
    let textoFora = document.querySelectorAll(".marcador.big > .textOutside");
    textoFora.forEach((text) => {
      text.style.fontSize = this.fontOutside;
    });

    this.updateMarcadoresTranslateY();
  },

  // checkScreenWidth: function () {
  //   if (this.larguraTela <= 1536) {

  //     console.log("1 if");

  //     //tamanho relogio
  //     this.originalTranslateY = -200;
  //     this.updateMarcadoresTranslateY();

  //     // circuloInside
  //     this.circuloInside.style.width = "230px";
  //     this.circuloInside.style.height = "230px";

  //     this.circuloInside.style.top = "22%";
  //     this.circuloInside.style.left = "22%";

  //     //handsClock
  //     this.secondHand.style.height = "232px";
  //     this.minuteHand.style.height = "180px";
  //     this.hourHand.style.height = "158px";

  //     //textoDentro
  //     this.fontSize = "4rem";

  //     // marcador.big > textInside
  //     let textInsideElements = document.querySelectorAll(
  //       ".marcador.big > .textInside"
  //     );
  //     textInsideElements.forEach((text) => {
  //       text.style.top = "calc(300% - 7px)";
  //       text.style.left = "calc(50% - 24px)";
  //     });

  //     //borderDate
  //     this.borderDate.style.top = "43%";
  //     this.borderDate.style.left = "62%";
  //     this.borderDate.style.border = "3px solid blue";
  //     this.borderDate.style.width = "13rem";
  //     this.borderDate.style.height = "6rem";

  //     //date
  //     this.dateClock.style.fontSize = "3rem";

  //     //cronometro
  //     this.chronoDisplay.style.fontSize = "3rem";

  //     //ponteiros
  //     this.hourHand.style.height = "124px";

  //   }

  //    if (this.larguraTela <= 768) {
  //     console.log("2 if");

  //     //tamanho relogio
  //     this.originalTranslateY = -170;
  //     this.updateMarcadoresTranslateY();

  //     //borderDate
  //     this.borderDate.style.top = "43%";
  //     this.borderDate.style.left = "62%";
  //     this.borderDate.style.border = "3px solid yellow";
  //     this.borderDate.style.width = "13rem";
  //     this.borderDate.style.height = "6rem";

  //     //textoDentro
  //     this.fontSize = "3rem";

  //     //textoFora
  //     this.fontSizeOutside = "0.1rem";

  //   }

  //   if (this.larguraTela <= 640) {

  //     //tamanho relogio
  //     this.originalTranslateY = -150;
  //     this.updateMarcadoresTranslateY();

  //     //borderDate
  //     this.borderDate.style.top = "43%";
  //     this.borderDate.style.left = "62%";
  //     this.borderDate.style.border = "3px solid red";
  //     this.borderDate.style.width = "13rem";
  //     this.borderDate.style.height = "6rem";

  //     //textoDentro
  //     this.fontSize = "3rem";

  //     //textoFora
  //     this.fontSizeOutside = "0.1rem";

  //   }

  //   else {

  //     //tamanho relogio
  //     this.originalTranslateY = -250;
  //     this.updateMarcadoresTranslateY();

  //     // circuloInside
  //     this.circuloInside.style.width = "310px";
  //     this.circuloInside.style.height = "310px";

  //     this.circuloInside.style.top = "12%";
  //     this.circuloInside.style.left = "12%";

  //     //handsClock
  //     this.secondHand.style.height = "283px";
  //     this.minuteHand.style.height = "220px";
  //     this.hourHand.style.height = "158px";

  //     //textoDentro
  //     this.fontSize = "5rem";

  //     // marcador.big > textInside
  //     let textInsideElements = document.querySelectorAll(
  //       ".marcador.big > .textInside"
  //     );
  //     textInsideElements.forEach((text) => {
  //       text.style.top = "calc(350% - 7px)";
  //       text.style.left = "calc(50% - 28px)";
  //     });

  //     //borderDate
  //     this.borderDate.style.top = "41%";
  //     this.borderDate.style.left = "70%";
  //     this.borderDate.style.border = "4px solid blue";
  //     this.borderDate.style.width = "15rem";
  //     this.borderDate.style.height = "7rem";

  //     //date
  //     this.dateClock.style.fontSize = "3.8rem";

  //     //cronometro
  //     this.chronoDisplay.style.fontSize = "3.8rem";

  //     //ponteiros
  //     this.hourHand.style.height = "158px";

  //     //textoFora
  //     this.fontSizeOutside = "3rem";
  //   }

  //   // Alterar o tamanho da fonte textInside
  //   let textoDentro = document.querySelectorAll(".marcador.big > .textInside");
  //   textoDentro.forEach((text) => {
  //     text.style.fontSize = this.fontSize;
  //   });

  //   // Alterar o tamanho da fonte textOutside
  //   let textoFora = document.querySelectorAll(".marcador.big > .textOutside");
  //   textoFora.forEach((text) => {
  //     text.style.fontSizeOutside = this.fontSizeOutside;
  //   });

  //   this.updateMarcadoresTranslateY();
  // },

  screenSize: function () {
    // Atualiza a propriedade larguraTela ao lidar com o evento resize
    this.larguraTela = window.innerWidth;

    console.log(this.larguraTela);
    // Chama a função de verificação de largura de tela
    this.checkScreenWidth();
  },

  start: function () {
    this.createData();
    this.createMarcadores();
    this.startClock();
    this.checkScreenWidth();

    document.addEventListener("fullscreenchange", () => {
      if (!document.fullscreenElement) {
        this.fullScreen(false);
      }
    });

    // Adiciona um event listener para o evento resize
    window.addEventListener("resize", () => this.screenSize());
  },
};

engine.start();
