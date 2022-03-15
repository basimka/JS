function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

let ktoHodit = "X"
let pHod = document.getElementById("pHod")
let b0Inner = document.getElementById("b0")
let b1Inner = document.getElementById("b1")
let b2Inner = document.getElementById("b2")
let b3Inner = document.getElementById("b3")
let b4Inner = document.getElementById("b4")
let b5Inner = document.getElementById("b5")
let b6Inner = document.getElementById("b6")
let b7Inner = document.getElementById("b7")
let b8Inner = document.getElementById("b8")
let i
let pole = []

function bClick(){
    if( ktoHodit == "O"){
        ktoHodit = "X"
    }
    else{
        ktoHodit = "O"      
    }
    pHod.innerHTML = ktoHodit 
}

function bSpase(){
    console.log("Privet")
}

function bStart(){
    let ConstRandom = getRandomInt(2)
    console.log(ConstRandom)
    if (ConstRandom == 1){
        ktoHodit = "O"
    } else {
        ktoHodit = "X"
    }
    pHod.innerHTML = ktoHodit
    b0Inner.innerHTML = ""
    b1Inner.innerHTML = ""
    b2Inner.innerHTML = ""
    b3Inner.innerHTML = ""
    b4Inner.innerHTML = ""
    b5Inner.innerHTML = ""
    b6Inner.innerHTML = ""
    b7Inner.innerHTML = ""
    b8Inner.innerHTML = ""

    for (i = 0; i<9; i++){
        delete pole[i]
    }

    }

function winProverka(){
    if (pole[0] == ktoHodit && pole[1] == ktoHodit && pole[2] == ktoHodit ){
        alert("Игрок играющий за - " + ktoHodit + " Победил!!!")
        bStart()
    } else if (pole[3] == ktoHodit && pole[4] == ktoHodit && pole[5] == ktoHodit ){
        alert("Игрок играющий за - " + ktoHodit + " Победил!!!")
        bStart()

    } else if (pole[6] == ktoHodit && pole[7] == ktoHodit && pole[8] == ktoHodit ){
        alert("Игрок играющий за - " + ktoHodit + " Победил!!!")
        bStart()
    } else if (pole[0] == ktoHodit && pole[3] == ktoHodit && pole[6] == ktoHodit ){
        alert("Игрок играющий за - " + ktoHodit + " Победил!!!")
        bStart()

    } else if (pole[1] == ktoHodit && pole[4] == ktoHodit && pole[7] == ktoHodit ){
        alert("Игрок играющий за - " + ktoHodit + " Победил!!!")
        bStart()

    } else if (pole[2] == ktoHodit && pole[5] == ktoHodit && pole[8] == ktoHodit ){
        alert("Игрок играющий за - " + ktoHodit + " Победил!!!")
        bStart()

    } else if (pole[0] == ktoHodit && pole[4] == ktoHodit && pole[8] == ktoHodit ){
        alert("Игрок играющий за - " + ktoHodit + " Победил!!!")
        bStart()

    } else if (pole[2] == ktoHodit && pole[4] == ktoHodit && pole[6] == ktoHodit ){
        alert("Игрок играющий за - " + ktoHodit + " Победил!!!")
        bStart()

    } else {
        //console.log("Все ОК")
    }
}    




document.querySelector("#b0").onclick = function(){
    if(b0Inner.innerHTML ==""){
        if( ktoHodit == "O"){
            b0Inner.innerHTML = "O"
            pole[0] = "O"
            winProverka()
            ktoHodit = "X"
        }
        else{
            b0Inner.innerHTML = "X"
            pole[0] = "X"
            winProverka()
            ktoHodit = "O"  
    }
        pHod.innerHTML = ktoHodit
    } else{
        console.log("Занято")
    }
    //console.log(pole)
    
}

document.querySelector("#b1").onclick = function(){
    if(b1Inner.innerHTML ==""){
        if( ktoHodit == "O"){
            b1Inner.innerHTML = "O"
            pole[1] = "O"
            winProverka()
            ktoHodit = "X"
        }
        else{
            b1Inner.innerHTML = "X"
            pole[1] = "X"
            winProverka()
            ktoHodit = "O"  
    }
        pHod.innerHTML = ktoHodit
    } else{
        console.log("Занято")
    }
    //console.log(pole)
    
}
document.querySelector("#b2").onclick = function(){
    if(b2Inner.innerHTML ==""){
        if( ktoHodit == "O"){
            b2Inner.innerHTML = "O"
            pole[2] = "O"
            winProverka()
            ktoHodit = "X"
        }
        else{
            b2Inner.innerHTML = "X"
            pole[2] = "X"
            winProverka()
            ktoHodit = "O"  
    }
        pHod.innerHTML = ktoHodit
    } else{
        console.log("Занято")
    }
    //console.log(pole)
    
}
document.querySelector("#b3").onclick = function(){
    if(b3Inner.innerHTML ==""){
        if( ktoHodit == "O"){
            b3Inner.innerHTML = "O"
            pole[3] = "O"
            winProverka()
            ktoHodit = "X"
        }
        else{
            b3Inner.innerHTML = "X"
            pole[3] = "X"
            winProverka()
            ktoHodit = "O"  
    }
        pHod.innerHTML = ktoHodit
    } else{
        console.log("Занято")
    }
    //console.log(pole)
}
document.querySelector("#b4").onclick = function(){
    if(b4Inner.innerHTML ==""){
        if( ktoHodit == "O"){
            b4Inner.innerHTML = "O"
            pole[4] = "O"
            winProverka()
            ktoHodit = "X"
        }
        else{
            b4Inner.innerHTML = "X"
            pole[4] = "X"
            winProverka()
            ktoHodit = "O"  
    }
        pHod.innerHTML = ktoHodit
    } else{
        console.log("Занято")
    }
    //console.log(pole)
}
document.querySelector("#b5").onclick = function(){
    if(b5Inner.innerHTML ==""){
        if( ktoHodit == "O"){
            b5Inner.innerHTML = "O"
            pole[5] = "O"
            winProverka()
            ktoHodit = "X"
        }
        else{
            b5Inner.innerHTML = "X"
            pole[5] = "X"
            winProverka()
            ktoHodit = "O"  
    }
        pHod.innerHTML = ktoHodit
    } else{
        console.log("Занято")
    }
    //console.log(pole)
}
document.querySelector("#b6").onclick = function(){
    if(b6Inner.innerHTML ==""){
        if( ktoHodit == "O"){
            b6Inner.innerHTML = "O"
            pole[6] = "O"
            winProverka()
            ktoHodit = "X"
        }
        else{
            b6Inner.innerHTML = "X"
            pole[6] = "X"
            winProverka()
            ktoHodit = "O"  
    }
        pHod.innerHTML = ktoHodit
    } else{
        console.log("Занято")
    }
    //console.log(pole)
}
document.querySelector("#b7").onclick = function(){
    if(b7Inner.innerHTML ==""){
        if( ktoHodit == "O"){
            b7Inner.innerHTML = "O"
            pole[7] = "O"
            winProverka()
            ktoHodit = "X"
        }
        else{
            b7Inner.innerHTML = "X"
            pole[7] = "X"
            winProverka()
            ktoHodit = "O"  
    }
        pHod.innerHTML = ktoHodit
    } else{
        console.log("Занято")
    }
    //console.log(pole)
}
document.querySelector("#b8").onclick = function(){
    if(b8Inner.innerHTML ==""){
        if( ktoHodit == "O"){
            b8Inner.innerHTML = "O"
            pole[8] = "O"
            winProverka()
            ktoHodit = "X"
        }
        else{
            b8Inner.innerHTML = "X"
            pole[8] = "X"
            winProverka()
            ktoHodit = "O"  
    }
        pHod.innerHTML = ktoHodit
    } else{
        console.log("Занято")
    }
    //console.log(pole)
}

document.querySelector("#bStart").onclick = function(){
    bStart()
}