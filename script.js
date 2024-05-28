/*formulario "utilidad"*/
 
function boton_click () {
    //definimos todas las constantes chek y text
    const flores=[];
    //pregunta 1
    //const txt_temor =  document.getElementById("temor").value;
    const checkParalizante = document.querySelector('[name="paralizante"]:checked');
    const checkCausa_conocida = document.querySelector('[name="causa_conocida"]:checked');
    const checkDescontrol = document.querySelector('[name="descontrol"]:checked');
    const checkMagico = document.querySelector('[name="magico"]:checked');
    const checkPerdida = document.querySelector('[name="perdida"]:checked');
    //pregunta 2
    //const txt_incertidumbre =  document.getElementById("incertidumbre").value;
    const checkDuda = document.querySelector('[name="duda"]:checked');
    const checkInestabilidad = document.querySelector('[name="inestabilidad"]:checked');
    const checkCansancio = document.querySelector('[name="cansancio"]:checked');
    const checkDepresion_conocida = document.querySelector('[name="depresion_conocida"]:checked');
    const checkDesesperanza = document.querySelector('[name="desesperanza"]:checked');
    const checkIndecision = document.querySelector('[name="indecision"]:checked');
    //pregunta 3
    //const txt_desinteres =  document.getElementById("desinteres").value;
    const checkDesatencion = document.querySelector('[name="desatencion"]:checked');
    const checkNostalgia = document.querySelector('[name="nostalgia"]:checked');
    const checkApatia = document.querySelector('[name="apatia"]:checked');
    const checkCansancio_FyM = document.querySelector('[name="cansancio_FyM"]:checked');
    const checkDialogo = document.querySelector('[name="dialogo"]:checked');
    const checkRepeticion = document.querySelector('[name="repeticion"]:checked');
    const checkDepresion_desc = document.querySelector('[name="depresion_desc"]:checked');
    //pregunta 4
    //const txt_soledad =  document.getElementById("soledad").value;
    const checkOrgullo = document.querySelector('[name="orgullo"]:checked');
    const checkImpaciencia = document.querySelector('[name="impaciencia"]:checked');
    const checkEscucha = document.querySelector('[name="escucha"]:checked');
    //pregunta 5
    //const txt_hipersensibles =  document.getElementById("hipersensibles").value;
    const checkAngustia = document.querySelector('[name="angustia"]:checked');
    const checkSometimiento = document.querySelector('[name="sometimiento"]:checked');
    const checkInfluencia = document.querySelector('[name="influencia"]:checked');
    const checkEnvidia = document.querySelector('[name="envidia"]:checked');
    //pregunta 6
   // const txt_desesperado =  document.getElementById("desesperado").value;
    const checkInseguridad = document.querySelector('[name="inseguridad"]:checked');
    const checkCulpa = document.querySelector('[name="culpa"]:checked');
    const checkAbrumacion = document.querySelector('[name="abrumacion"]:checked');
    const checkAextrema = document.querySelector('[name="aextrema"]:checked');
    const checkShock = document.querySelector('[name="shock"]:checked');
    const checkResentimiento = document.querySelector('[name="resentimiento"]:checked');
    const checkImpureza = document.querySelector('[name="impureza"]:checked');
    const checkNoexpresa = document.querySelector('[name="noexpresa"]:checked');
    //pregunta 7
    //const txt_sufrirxotros =  document.getElementById("sufrirxotros").value;
    const checkPosesivo = document.querySelector('[name="posesivo"]:checked');
    const checkEntusiasmo = document.querySelector('[name="entusiasmo"]:checked');
    const checkAutoritario = document.querySelector('[name="autoritario"]:checked');
    const checkSoberbia = document.querySelector('[name="soberbia"]:checked');
    const checkRepresion = document.querySelector('[name="represion"]:checked');

   
    //si estan checkiadas agregamos la flor a la lista flores
    //pregunta 1
    if(checkParalizante) {
        flores.push(checkParalizante.value );
    }

    if(checkCausa_conocida) {
        flores.push(checkCausa_conocida.value);
    }

    if(checkDescontrol) {
        flores.push(checkDescontrol.value );
    }

    if(checkMagico) {
        flores.push(checkMagico.value );
    }

    if(checkPerdida) {
        flores.push(checkPerdida.value );
    }

    //pregunta 2

    if(checkDuda) {
        flores.push(checkDuda.value);
    }

    if(checkInestabilidad) {
        flores.push(checkInestabilidad.value);
    }

    if(checkCansancio) {
        flores.push(checkCansancio.value);
    }

    if(checkDepresion_conocida) {
        flores.push(checkDepresion_conocida.value);
    }

    if(checkDesesperanza) {
        flores.push(checkDesesperanza.value);
    }

    if(checkIndecision) {
        flores.push(checkIndecision.value);
    }

    //pregunta 3

    if(checkDesatencion) {
        flores.push(checkDesatencion.value);
    }

    if(checkNostalgia) {
        flores.push(checkNostalgia.value);
    }

    if(checkApatia) {
        flores.push(checkApatia.value);
    }

    if(checkCansancio_FyM) {
        flores.push(checkCansancio_FyM.value);
    }

    if(checkDialogo) {
        flores.push(checkDialogo.value);
    }

    if(checkRepeticion) {
        flores.push(checkRepeticion.value);
    }

    if(checkDepresion_desc) {
        flores.push(checkDepresion_desc.value);
    }

    //pregunta 4

    if(checkOrgullo) {
        flores.push(checkOrgullo.value);
    }

    if(checkImpaciencia) {
        flores.push(checkImpaciencia.value);
    }

    if(checkEscucha) {
        flores.push(checkEscucha.value);
    }

    //pregunta 5

    if(checkAngustia) {
        flores.push(checkAngustia.value);
    }

    if(checkSometimiento) {
        flores.push(checkSometimiento.value);
    }

    if(checkInfluencia) {
        flores.push(checkInfluencia.value);
    }

    if(checkEnvidia) {
        flores.push(checkEnvidia.value);
    }

    //pregunta 6

    if(checkInseguridad) {
        flores.push(checkInseguridad.value);
    }

    if(checkCulpa) {
        flores.push(checkCulpa.value);
    }

    if(checkAbrumacion) {
        flores.push(checkAbrumacion.value);
    }

    if(checkAextrema) {
        flores.push(checkAextrema.value);
    }

    if(checkShock) {
        flores.push(checkShock.value);
    }

    if(checkResentimiento) {
        flores.push(checkResentimiento.value);
    }

    if(checkImpureza) {
        flores.push(checkImpureza.value);
    }

    if(checkNoexpresa) {
        flores.push(checkNoexpresa.value);
    }

    //pregunta 7

    if(checkPosesivo) {
        flores.push(checkPosesivo.value);
    }

    if(checkEntusiasmo) {
        flores.push(checkEntusiasmo.value);
    }

    if(checkAutoritario) {
        flores.push(checkAutoritario.value);
    }

    if(checkSoberbia) {
        flores.push(checkSoberbia.value);
    }

    if(checkRepresion) {
        flores.push(checkRepresion.value);
    }

 
    //al final informo con la alerta
    alert ("¡Gracias por sumarte! Esta/s flor/es te acompañara/n:  \n" + flores +
     " \n \n (Esto es a modo de juego. Será necesario que consultes con tu terapeuta floral de confianza)") 
}

























//document.querySelector("#enviar").addEventListener('click', ()=>{
/*

    //const checkParalizante=  document.getElementById("paralizante").value;
    const checkCausa_conocida=document.getElementById("causa_conocida");
    const checkDescontrol=document.getElementById("descontrol");
    const checkMagico=document.getElementById("magico");
    const checkPerdida=document.getElementById("perdida");
    /*function saludo() {
    const checkParalizante=  document.querySelector("#paralizante");
    const checkCausa_conocida=document.querySelector("#causa_conocida");
    const checkDescontrol=document.querySelector("#descontrol");
    const checkMagico=document.querySelector("#magico");
    const checkPerdida=document.querySelector("#perdida");
    const flores=[];

    if (checkParalizante == true){
        flores.push("Rock Rose");
         
    }
    console.log("No tenemos este topping" + checkParalizante + 2);
}
saludo();*/




/*
    if (checkCausa_conocida.checked){
        flores.push("Mimulus");
    }

    
    if (checkDescontrol.checked){
        flores.push("Cherry Plum");
    }

    if (checkMagico.checked){
        flores.push("Aspen");
    }

    if (checkPerdida.checked){
        flores.push("Red Chestnut");
    }
    console.log("No tenemos este topping");
*/

//document.querySelector("#resultado").innerHTML = listado.join("<br>")

//})

