"use strict";
$(function(){    
    //Start responsive set
    let width = screen.width;

    if (width < 400) {
        $(`#main-title`)
            .css({
                fontSize: `175%`,
            });
        $(`#main-paragraph`)
            .css({
                fontSize: `112.5%`
            })
        $(`#arr-button`)            
            .css({
                width: `20%`,                
            })
        $(`#adv-button`)            
            .css({
                width: `25%`,                
            })
    }
    //End responsive set
    
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
            case `arr-button`:
                e.preventDefault();

                changeTitle(targetId);

                fetchHtmlContent(`js/arrContent.json`, arrModeBehavior);
            break;
            case `adv-mode`:
                e.preventDefault();

                changeTitle(targetId);                              
                
                fetchHtmlContent(`js/advContent.json`, advModeBehavior);
            break;            
            case `adv-button`:
                e.preventDefault();

                changeTitle(targetId);                              
                
                fetchHtmlContent(`js/advContent.json`, advModeBehavior);
            break;            
        }
    })
    //End Main leading Event Listener        
})