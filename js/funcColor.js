"use strict";
//Start fn behavior for <title> tag
function changeTitle(idTrg) {
  let idTitle = idTrg;
  let titleTag = document.getElementsByTagName(`title`)[0];

  switch (idTitle) {    
    case `arr-mode`:      
      titleTag.textContent = `CF | Array`;
    break;
    case `adv-mode`:      
      titleTag.textContent = `CF | Advanced`;
    break;
    default:
      titleTag.textContent = `CF | Color Flipper`;
    break;
  }
}
//End fn behavior for <title> tag

//Start fn changing `colors[]` index (used in fetch)
function changeIndex(arr){
  let maxValue = arr.length - 1;        
  let i = Math.round(0 - 0.5 + Math.random() * (maxValue + 1));
  return i;            
}
//End fn changing `colors[]` index (used in fetch)

//Start fn return the rgb numbers and Alpha
function generateRGB(min, max) {    
  return min + Math.random() * (max - min);
};
//End fn return the rgb numbers and Alpha

//Start fn return HEX values (used in generateStringColor())
function returnHexValue(value) {
  let valHex = (value.toString(16)).padStart(2, `0`)
  let valHexUp = valHex.toUpperCase();
  return valHexUp;
};
//End fn return HEX values (used in generateStringColor())

//Start Core fn Advanced Mode
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
//End Core fn Advanced Mode

//Start fn with code run in Array Mode (used in fetchHtmlContent())
function arrModeBehavior() {

  //Start responsive set
  let width = screen.width;

  if (width < 400) {
    $(`#flip-box`)
      .css({
        width: `75%`,
      });
  }
  if (width < 300) {
    $(`#changebtt`)
      .text(`SW`);
  }
  //End responsive set

  $(`body`)
    .css({
        background: `white`,
    });
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
          .text(`Color: ` + colors[j])
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
//End fn with code run in Array Mode (used in fetchHtmlContent())

//Start fn with code run in Advanced Mode (used in fetchHtmlContent())
function advModeBehavior() {
  //Start responsive set
  let width = screen.width;

  if (width < 400) {
    $(`#boxcolor2`)
      .css({
        width: `90%`,
      });
    $(`#hide-show`)
      .text(`HS`)
    $(`#instypedcolor`)
      .val(`OK`)
  }
  //End responsive set

  $(`body`)
    .css({
        background: `white`,
    });

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
    let tarGetId = document.getElementById(targId);    
    let colorActual = document.getElementById(`actual-color`);
    let colorElement = document.getElementById(`boxcolor2`);
    let actualColor = generateStringColor(colorMode);
    let valInp = document.getElementById(`radio3`).value;
      

    switch (targId) {
        case `hide-show`:          

          if (tarGetId.className === `changebtt showing`) {
            $(`#selection1`)
            .fadeOut(700);
            tarGetId.className = `changebtt hiding`;
            if (width < 400) {
              tarGetId.textContent =`S`;
            } else {
              tarGetId.textContent =`Show`;
            }        
          } else if (tarGetId.className === `changebtt hiding`){
            $(`#selection1`)
            .fadeIn(700);
            tarGetId.className = `changebtt showing`;
            if (width < 400) {
              tarGetId.textContent =`H`;
            } else {
              tarGetId.textContent =`Hide`;
            }        
          }

        break;
        case `btt5`:
            e.preventDefault();
            
            colorElement.style.background = actualColor;            
            colorActual.textContent = `Color: ${actualColor}`;
            
        break;
        case `instypedcolor`:
            e.preventDefault();
            
            colorElement.style.background = valInp;
            colorActual.textContent = `Color: ${valInp}`;
        break;
      }
  })
}
//End fn with code run in Advanced Mode (used in fetchHtmlContent())

//Start fn to call .json elements
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
    console.error(`Error loading file`, error);
    })
}
//End fn to call .json elements
