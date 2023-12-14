


var showDevOn = false;

document.getElementById("btnDebugDevs").onclick = function(){

    /*
    Funcion que muestra informacion de debug dev, interes de desarrollador,
    solamente para mostrar como estan posicionadas las cajas.
    */

    
    let containersTotal = document.getElementsByClassName("boxContainerTotal");
    
    let containersMedium = document.getElementsByClassName("boxContainerMedium");
    
    let containersBoxItem = document.getElementsByClassName("boxItems");


    showDevOn = !showDevOn;

    for(let i=0; i < containersTotal.length; i++){

        if(showDevOn){
            containersTotal[i].style.border = "1px solid purple";
        }else{
            containersTotal[i].style.border = "0px";
        }
    }

    for(let i=0; i < containersMedium.length; i++){
        
        if(showDevOn){
            containersMedium[i].style.border = "1px solid yellow";
        }else{
            containersMedium[i].style.border = "0px";
        }
    }

    for(let i=0; i < containersBoxItem.length; i++){
        
        if(showDevOn){
            containersBoxItem[i].style.border = "1px solid green";
        }else{
            containersBoxItem[i].style.border = "0px";
        }
    }

    /* ahora, el button que activo esta funcion se comporta como un checkbox, se le da estilo
    y se le quita si esta activado o no, ademas se muestra mas informacion o se oculta: */
    
    if(showDevOn){
        document.getElementById("btnDebugDevs").style.boxShadow = "\
        -4px -4px 5px springgreen,\
        4px -4px 5px springgreen,\
        4px 4px 5px springgreen,\
        -4px 4px 5px springgreen";
        document.getElementById("debugDevBox").style.display = "block";
        document.getElementsByTagName("footer")[0].style.border = "1px solid #00FF80";
    }else{
        document.getElementById("btnDebugDevs").style.boxShadow = "";
        document.getElementById("debugDevBox").style.display = "none";
        document.getElementsByTagName("footer")[0].style.border = "0px";
    }
};








