"use strict";
function changeIndex(arr){
  let maxValue = arr.length - 1;        
  let i = Math.round(0 - 0.5 + Math.random() * (maxValue + 1));
  return i;            
}

function generateRGB(min, max) {    
  return min + Math.random() * (max - min);
};

function returnHexValue(value) {
  let valHex = (value.toString(16)).padStart(2, `0`)
  let valHexUp = valHex.toUpperCase();
  return valHexUp;
};

function generateStringColor(what) {
  let valR;
  let valG;
  let valB;
  let valAlpha;
  let stringColor;
  let hexColor;

  valR = Math.floor(generateRGB(0, 255));
  valG = Math.floor(generateRGB(0, 255));
  valB = Math.floor(generateRGB(0, 255));    

  switch(what) {

    case "rgb":

    stringColor = `rgb(${valR}, ${valG}, ${valB})`;
    return stringColor;

    case "rgba":

        valAlpha = generateRGB(0, 1).toFixed(1);

        stringColor = `rgba(${valR}, ${valG}, ${valB}, ${valAlpha})`;
        return stringColor;

    break;

    case "hex":

        hexColor = `#${returnHexValue(valR) + returnHexValue(valG) + returnHexValue(valB)}`;

        if (isFinite(valAlpha)) {
        hexColor += `, Alpha: ${valAlpha}`;
        }

        return hexColor;

    break;
  }    
}
function arrModeBehavior() {
  let colors = [
    `#FF0055`, 
    `blue`, 
    `purple`,
    `yellow`,
    `brown`,
    `black`    
  ];

  $(`#max-container`)
  .css({
      "display": "flex",
      "align-items": "center",
      "justify-content": "center",
  })
  //Start Color Change jQuery library
  $("#changebtt").on(`click`, function(){
      let j = changeIndex(colors);

      $(`#flip-box`)                
          .css({
          "background-color" : colors[j]
          })               
      
      if(colors[j].valueOf() === `black` || colors[j].valueOf() === `brown`){
          $(`#currentcolor`).css({
              "color": "white"
          });
          $(`#flip-box`).css({
              "border": "5px solid white"
          });
      } else {
          $(`#currentcolor`).css({
              "color": "black"
          });
          $(`#flip-box`).css({
              "border": "5px solid black"
          });
          
      }
      $(`#currentcolor`)
          .text(`Colore: ` + colors[j])
          .fadeIn(700);
  })
  //End Color Change jQuery library

  /*
  //Start Color change Vanilla JS
  let buttonChange = document.getElementById(`changebtt`);

  buttonChange.addEventListener("click", function(){
      let j = changeIndex();
      let arColors = colors[j];
      let boxColor = document.getElementById(`flip-box`);
      let actualColor = document.getElementById(`currentcolor`);

      if(arColors === `black` || arColors === `brown`){
          actualColor.style.color = "white";
      } else {
          actualColor.style.color = "black";
      }
      
      actualColor.textContent = `Colore: ` + arColors;
      boxColor.style.backgroundColor = arColors;
  })
  //End Color change Vanilla JS
  */  
}

function advModeBehavior() {
  let inputColor = document.getElementById(`selcolmode`);
  let colorMode = `hex`;        

  inputColor.addEventListener(`change`, function(){            
      let value = this.value;

      if (value === `hex`) {
          colorMode = value;
      } else if (value === `rgba`) {
          colorMode = value;
      } else if (value === `rgb`) {
          colorMode = value;
      }
      return colorMode;

  }, false);    

  document.addEventListener(`click`, function(e){
    let target = e.target;
    let targId = target.getAttribute(`id`);
    let colorActual = document.getElementById(`actual-color`);
    let colorElement = document.getElementById(`boxcolor2`);
    let actualColor = generateStringColor(colorMode);
    let valInp = document.getElementById(`radio3`).value;
    let linearVal = valInp.indexOf(`linear`);
    let radialVal = valInp.indexOf(`radial`);
    

    switch (targId) {
        case `btt5`:
            e.preventDefault();                    
            
            colorActual.textContent = `Color: ${actualColor}`;
            colorElement.style.backgroundColor = actualColor;
        break;
        case `instypedcolor`:
            e.preventDefault();           

            if (!linearVal || !radialVal) {
                colorElement.style.background = valInp;
            } else {
                colorElement.style.backgroundColor = valInp;                
            }

            colorActual.textContent = `Color: ${valInp}`;
        break;
      }
  })
}
function fetchHtmlContent(fileToCall, contentFunction) {
  fetch(fileToCall)
  .then(response => response.json())
  .then(data => {
    const arrData = data.htmlcontent;
    const contContainer = document.getElementById(`max-container`);
    contContainer.innerHTML = arrData;
    
    if (contentFunction) {
      contentFunction();
    }
    
  })
  .catch(error => {
  console.error(`Errore nel caricamento del File`, error);
  })
}
