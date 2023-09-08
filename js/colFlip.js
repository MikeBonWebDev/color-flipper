"use strict";
$(function(){

    //Function return casual number for RGB Color      
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
            case `arr-mode`:
                e.preventDefault();

                fetchHtmlContent();
            break;
            case `def-page`:
                e.preventDefault();

                window.location.reload();
            break;
        }
    })        
})