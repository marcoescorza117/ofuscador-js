let contador = setInterval(cronometro,1000);
function cronometro(){

    let hora = document.getElementById('testingHour').value;
    let end = new Date(hora);

    let _second = 1000;
    let _minute = _second * 60;
    let _hour = _minute * 60;
    let _day = _hour * 24;
    let timer;
    let now = new Date();
    let distance = end - now;
    if (distance <= 0) {
        clearInterval(contador);
        document.getElementById('cronometrojs').innerHTML = 'TIEMPO EXPIRADO!';
        ocultarDiv();
    }
    if(distance >0){
        let days = Math.floor(distance / _day);
        let hours = Math.floor((distance % _day) / _hour);
        let minutes = Math.floor((distance % _hour) / _minute);
        let seconds = Math.floor((distance % _minute) / _second);

        if(hours < 10) { hours = '0' + hours; }
        if(minutes < 10) { minutes = '0' + minutes; }
        if(seconds < 10) { seconds = '0' + seconds; }

        let text = document.getElementById('cronometro');
        text.hidden = false;
        document.getElementById('cronometrojs').innerHTML = ""+hours +":"+minutes+ ":"+seconds;
    }
}
function ocultarDiv(){
    let div = document.getElementById('salida')
    div.style = "animation:scale-out-hor-right .5s cubic-bezier(.55,.085,.68,.53) both";
    mostrarbtn();
}
function  mostrarbtn (){
    let boton = document.getElementById('btnAceptar');
    boton.disabled = false;
    boton.hidden = false;
    boton.style ="-webkit-animation: wobble-hor-bottom 0.8s both;\n" +
        "\t        animation: wobble-hor-bottom 0.8s both;";
    let div = document.getElementById('salida')
    setTimeout(div.remove(),1000);
}
