const pantalla = document.getElementById("screen")
const buttons = document.querySelectorAll(".btn")

buttons.forEach(boton => {
    boton.addEventListener("click", () => {
        const buttonpress = boton.textContent;

        if(boton.id === "c"){
            pantalla.textContent = "0"
            return;
        }

        if(boton.id === "delete") {
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Error!") { //si tenemos un solo carcter en pantalla vuelva el textconten a 0 sino borre ultimo digito 
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1) //quite la uktima posicion no sabemos cual   
            }
            return;
        }

        if(boton.id === "equal") {
            try {
                pantalla.textContent = eval(pantalla.textContent) //esta funcion evalua el string si tiene op matematicas

            } catch {
                pantalla.textContent = "Error!"
            }
            return
        }

        if(pantalla.textContent === "0" || pantalla.textContent === "Error!"){
            pantalla.textContent = buttonpress
        } else {
            pantalla.textContent += buttonpress
        }  //+= al valor que tiene le sumas
    })
})