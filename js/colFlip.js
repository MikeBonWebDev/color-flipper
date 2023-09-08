"use strict";
$(function(){
       
        let colors = [
            `#FF0055`, 
            `blue`, 
            `purple`,
            `yellow`,
            `brown`,
            `black`    
        ];
        

        
        

        //Function return casual number for RGB Color
        let buttonChangeColor = document.getElementById(`btt5`);       
        let inputColor = document.getElementById(`selcolmode`);
        let mode = document.getElementById(`max-container`);
        
        let colorMode = `hex`;        

        inputColor.addEventListener(`change`, function(e){
            let target = e.target;
            let value = target.value;

            if (value === `hex`) {
                colorMode = value;
            } else if (value === `rgba`) {
                colorMode = value;
            }
            return colorMode;

        }, false);

        let colorElement = document.getElementById(`boxcolor2`);
        let colorActual = document.getElementById(`actual-color`);   

        buttonChangeColor.addEventListener(`click`, function(e) {
            e.preventDefault();    

            let actualColor = generateStringColor(colorMode);
            
            colorActual.textContent = `Color: ${actualColor}`;
            colorElement.style.backgroundColor = actualColor;
            
        });

        let applyCol = document.getElementById(`instypedcolor`);

        applyCol.addEventListener(`click`, function(e){
            e.preventDefault();

            let valInp = document.getElementById(`radio3`).value;
            let linearVal = valInp.indexOf(`linear`);
            let radialVal = valInp.indexOf(`radial`);

            if (!linearVal || !radialVal) {
                colorElement.style.background = valInp;
            } else {
                colorElement.style.backgroundColor = valInp;                
            }

            colorActual.textContent = `Color: ${valInp}`;
        })

        let modArr = document.getElementById(`arr-mode`);

        modArr.addEventListener(`click`, function(e){
            e.preventDefault();

            fetch(`js/arrContent.json`)
            .then(response => response.json())
            .then(data => {
            const arrData = data.htmlcontent;
            const contContainer = document.getElementById(`max-container`);
            contContainer.innerHTML = arrData;

            $(`#max-container`)
            .css({
                "display": "flex",
                "align-items": "center",
                "justify-content": "center",
            })
            //Start Color Change jQuery library
            $("#changebtt").on(`click`, function(){
                let j = changeIndex();

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
        })

        $(`#def-page`).on(`click`, function(e){
            e.preventDefault();

            window.location.reload()
        })
})