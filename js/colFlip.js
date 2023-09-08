"use strict";
$(function(){

    //Function return casual number for RGB Color      
    document.addEventListener(`click`, function(e){
        e.preventDefault();

        let target = e.target;
        let targetId = target.getAttribute(`id`);

        switch (targetId) {
            case `def-page`:
                e.preventDefault();

                window.location.reload();
            break;
            case `arr-mode`:
                e.preventDefault();

                fetchHtmlContent(`js/arrContent.json`, arrModeBehavior);
            break;
            case `adv-mode`:
                e.preventDefault();

                fetchHtmlContent(`js/advContent.json`, advModeBehavior);
            break;            
        }
    })        
})