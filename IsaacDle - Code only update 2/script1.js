var rebirth1 = 0
var afterbirth1 = 0
var afterbirthPlus1= 0
var repentance1= 0

var choice1 = function(){  
    if(rebirth1 === 0){
    document.getElementById("Rebirth").style.backgroundColor="rgb(100, 100, 100, 0.2)"
    rebirth1 = 1
    document.getElementById("Rebirth").style.borderStyle="solid";
    document.getElementById("Rebirth").style.borderWidth="1px";
    document.getElementById("Rebirth").style.borderColor="gray";
    }
    else if(rebirth1===1){
        document.getElementById("Rebirth").style.backgroundColor="rgb(0, 0, 0, 0.2)"
        rebirth1= 0
        document.getElementById("Rebirth").style.borderStyle="";
         document.getElementById("Rebirth").style.borderWidth="";
        document.getElementById("Rebirth").style.borderColor="none";
}
}
var choice2 = function(){
    if(afterbirth1 === 0){
    document.getElementById("Afterbirth").style.backgroundColor="rgb(100, 100, 100, 0.2)"
    afterbirth1 = 1
    document.getElementById("Afterbirth").style.borderStyle="solid";
    document.getElementById("Afterbirth").style.borderWidth="1px";
    document.getElementById("Afterbirth").style.borderColor="gray";
    }
    else if(afterbirth1===1){
        document.getElementById("Afterbirth").style.backgroundColor="rgb(0, 0, 0, 0.2)"
        afterbirth1= 0
        document.getElementById("Afterbirth").style.borderStyle="";
        document.getElementById("Afterbirth").style.borderWidth="";
        document.getElementById("Afterbirth").style.borderColor="none";
}
}
var choice3 = function(){
    if(afterbirthPlus1 === 0){
    document.getElementById("Afterbirth+").style.backgroundColor="rgb(100, 100, 100, 0.2)"
    afterbirthPlus1 = 1
    document.getElementById("Afterbirth+").style.borderStyle="solid";
    document.getElementById("Afterbirth+").style.borderWidth="1px";
    document.getElementById("Afterbirth+").style.borderColor="gray";
    }
    else if(afterbirthPlus1===1){
        document.getElementById("Afterbirth+").style.backgroundColor="rgb(0, 0, 0, 0.2)"
        afterbirthPlus1= 0
        document.getElementById("Afterbirth+").style.borderStyle="";
        document.getElementById("Afterbirth+").style.borderWidth="";
        document.getElementById("Afterbirth+").style.borderColor="none";
}
}
var choice4 = function(){
    if(repentance1 === 0){
    document.getElementById("Repentance").style.backgroundColor="rgb(100, 100, 100, 0.2)"
    repentance1 = 1
    document.getElementById("Repentance").style.borderStyle="solid";
    document.getElementById("Repentance").style.borderWidth="1px";
    document.getElementById("Repentance").style.borderColor="gray";
    }
    else if(repentance1===1){
        document.getElementById("Repentance").style.backgroundColor="rgb(0, 0, 0, 0.2)"
        repentance1= 0
        document.getElementById("Repentance").style.borderStyle="";
        document.getElementById("Repentance").style.borderWidth="";
        document.getElementById("Repentance").style.borderColor="none";
}
}

