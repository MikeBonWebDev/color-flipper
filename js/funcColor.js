"use strict";
function changeIndex(){
  let maxValue = colors.length - 1;        
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
