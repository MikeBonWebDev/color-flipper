"use strict";
$(function(){
    //Start Main leading Event Listener 
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

                changeTitle(targetId);

                fetchHtmlContent(`js/arrContent.json`, arrModeBehavior);
            break;
            case `adv-mode`:
                e.preventDefault();

                changeTitle(targetId);                              
                
                fetchHtmlContent(`js/advContent.json`, advModeBehavior);
            break;            
        }
    })
    //End Main leading Event Listener        
})