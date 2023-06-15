$(document).ready(function(){
    let toggleVal = 0;
    let navbarVal = 0;
    setDefault();
    showHidePage(1);
    controlShowHide();
    addClickToggle();
    showHideEvent();
});

function setDefault(){
    $("#intro-navbar").css('border','2px solid #0f8a11');
    $("#intro").css('background-color','rgb(56, 182, 60)');
}

function controlShowHide(){
    $("#intro-navbar").click(function(){
        console.log("inside Introduction");
        $("#intro").css('background-color','rgb(56, 182, 60)');
        showHidePage(1);
        borderRadius(1);
    });

    $("#we-are-navbar").click(function(){
        console.log("inside WE are");
        $("#we-are").css('background-color','rgb(65, 170, 255)');
        showHidePage(2);
        borderRadius(2);
    });

    $("#events-navbar").click(function(){
        console.log("inside Events");
        $("#events").css('background-color','#f85347');
        showHidePage(3);
        borderRadius(3);
    });

    $("#reach-us-navbar").click(function(){
        console.log("inside Reach Us");
        $("#reach-us").css('background-color','rgb(134, 113, 253)');
        showHidePage(4);
        borderRadius(4);
    });
}

function showHidePage(showId){
    $("#intro").hide();
    $("#we-are").hide();
    $("#events").hide();
    $("#reach-us").hide();
    switch(showId){
        case 1: 
            $("#intro").show();
            break;
        case 2: 
            $("#we-are").show();
            break;
        case 3: 
            $("#events").show();
            break;
        case 4: 
            $("#reach-us").show();
            break;
        default:
    }
}

function addClickToggle(toggleVal){
    $("#toggle-switch").click(function(){
        navbarAnimation(toggleVal);
         if(toggleVal == 1){
            toggleVal = 0;
            $("#switch").css('background-color','green');
            $("#toggle-switch").css('left','20px');
        }
        else{
            toggleVal = 1;
            $("#switch").css('background-color','darkred');
            $("#toggle-switch").css('left','0px');
        }        
    });
    
}


function navbarAnimation(toggleVal){
    if(toggleVal == 1)
    {
        $("#intro-navbar").css('animation-duration','1.4s');
        $("#we-are-navbar").css('animation-duration','1s');
        $("#events-navbar").css('animation-duration','1.3s');
        $("#reach-us-navbar").css('animation-duration','1.1s');
        $("#toggle-text-ON").show();
        $("#toggle-text-OFF").hide();
    }
    else{
        $("#intro-navbar").css('animation-duration','0s');
        $("#we-are-navbar").css('animation-duration','0s');
        $("#events-navbar").css('animation-duration','0s');
        $("#reach-us-navbar").css('animation-duration','0s');
        $("#toggle-text-ON").hide();
        $("#toggle-text-OFF").show();
    }
}

function borderRadius(selTab){
    $("#intro-navbar").css('border','');
    $("#we-are-navbar").css('border','');
    $("#events-navbar").css('border','');
    $("#reach-us-navbar").css('border','');
    switch(selTab){
        case 1:
            $("#intro-navbar").css('border','2px solid #0f8a11');
            break;
        case 2:
            $("#we-are-navbar").css('border','2px solid #0066b9');
            break;
        case 3:
            $("#events-navbar").css('border','2px solid #fc4235');
            break;
        case 4:
            $("#reach-us-navbar").css('border','2px solid #a89009');
            break;
    }
}

function showHideEvent(){
    $("#flip-card-one").hover(() => {
        $("#flip-below-one").css('opacity','0');
    },
    () => {
        $("#flip-below-one").css('opacity','1');
    });

    $("#flip-card-two").hover(() => {
        $("#flip-below-two").css('opacity','0');
    },
    () => {
        $("#flip-below-two").css('opacity','1');
    });

    $("#flip-card-three").hover(() => {
        $("#flip-below-three").css('opacity','0');
    },
    () => {
        $("#flip-below-three").css('opacity','1');
    });
}