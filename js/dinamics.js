


function showContentContainer(idButton, idElementContainer, nameSection){

    /* muestra un frame/marco/container o lo oculta */

    if( document.getElementById(idElementContainer).style.display != "none"){
        //console.log("No esta oculto, ocultar");
        document.getElementById(idElementContainer).style.display = "none";
        document.getElementById(idButton).innerHTML = "Mostrar";
    }else{
        //console.log("si esta oculto, mostrar");
        document.getElementById(idElementContainer).style.display = "block";
        document.getElementById(idButton).innerHTML = "Ocultar";

        document.location = nameSection;
    }
}

document.getElementById("btnShowPInfo").onclick = function(){
    showContentContainer("btnShowPInfo", "personalInfo", "#datos");
};





// boton copiar !

function copy(idElement, idBtnCopy){
        
        let ctrl = document.getElementById(idElement);

        //ctrl.setSelectionRange(0, 99999); // For mobile devices

        navigator.clipboard.writeText(ctrl.innerHTML);

        // succes!

        // cambiar el boton temporalmente a check_box y devolverlo a content_copy:
        function changeStateButton(innerName){ //change innerHTML
            document.getElementById(idBtnCopy).innerHTML = innerName;
        }
        changeStateButton("check_box");
        
        setTimeout(() => { changeStateButton("content_copy") }, 1000);
}



