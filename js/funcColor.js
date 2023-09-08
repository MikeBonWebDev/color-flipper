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
function fetchHtmlContent() {
  fetch(`js/arrContent.json`)
  .then(response => response.json())
  .then(data => {
    const arrData = data.htmlcontent;
    const contContainer = document.getElementById(`max-container`);
    contContainer.innerHTML = arrData;
    
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
  })
  .catch(error => {
  console.error(`Errore nel caricamento del File`, error);
  })
}
