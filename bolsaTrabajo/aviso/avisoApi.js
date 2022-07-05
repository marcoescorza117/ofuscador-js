function showMessageConfirm(){
    swal({
        title: "Registro exitoso!",
        text: "Se ha enviado el mensaje de confirmación al correo electronico registrado, " +
            "para continuar, abra el correo y continue con los pasos que se indican en el.",
        type: "success",
        timer: 4000,
        showConfirmButton: false
    }, function(){
        //window.location.href = "/MandosMedios-academico-admin";
    });
}

const fieldsValidateListener = (exp, element)=>{
    element.addEventListener('input',()=>{
        element.value = element.value.replace(exp, " ");
    });
    $('#'+element.id).bind('copy paste', function (e){
        e.preventDefault();
        return false;
    });
}

const validaINCURP = (curp)=>{

    // function regex para validar
    let reg = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/;
    let validado = curp.match(reg);

    if (!validado) {
        return false;
    }

    //funcion interna que valida y hacer coincidir el digito verificador
    function digitoVerificador(curp17) {

        let diccionario = "0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
        let lngSuma = 0.0;
        let lngDigito = 0.0;
        for (let i = 0; i < 17; i++)
            lngSuma = lngSuma + diccionario.indexOf(curp17.charAt(i)) * (18 - i);
        lngDigito = 10 - lngSuma % 10;
        if (lngDigito == 10) return 0;
        return lngDigito;
    }

    if (validado[2] != digitoVerificador(validado[1]))
        return false;
    return true;

}

function mayus(elemet) {
    elemet.value = elemet.value.toUpperCase();
}

const curpValidate =(input)=>{
    mayus(input);
    let curp = input.value.toUpperCase();
    let divCorrecto = document.getElementById('curpValido');
    let divincorrecto = document.getElementById('curpinValido');

    if (validaINCURP(curp)) {

        $('#curpValido').css('display', '');
        divincorrecto.setAttribute('hidden', true);
        divCorrecto.removeAttribute('hidden');
        divCorrecto.innerText = "CURP válido";

    } else {

        divCorrecto.setAttribute('hidden', true);
        divincorrecto.removeAttribute('hidden')
        divincorrecto.innerText = "CURP Inválido";
    }
};

//Set listeners on input
const fieldInputs = ()=>{
    let regx = /^\s+|\s+$|\s+(?=\s)|[^[a-zA-ZáéíóúÁÉÍÓÚñÑ]/g;

    let name = document.getElementById('nombres');
    let firstname = document.getElementById('paterno');
    let lastname = document.getElementById('materno');
    let mail1 = document.getElementById('email1');
    let mail2 = document.getElementById('email2');

    fieldsValidateListener(regx,name);
    fieldsValidateListener(regx,firstname);
    fieldsValidateListener(regx,lastname);
}

const sugestionsEmail = ()=>{

    let domains = ['hotmail.com', 'gmail.com', 'aol.com', "uaeh.edu.mx","yahoo.com","live.com","outlook.com", "yahoo.com.mx", "live.com.mx", "hotmail.es", "hotmail.com.mx", "prodigy.net.mx"];
    let topLevelDomains = ["com", "net", "org", "edu","mx"];

    $('#email1').on('blur', function(event) {
        console.log("event ", event);
        console.log("this ", $(this));
        $(this).mailcheck({
            domains: domains,                       // optional
            topLevelDomains: topLevelDomains,       // optional
            suggested: function(element, suggestion) {
                // callback code
                console.log("suggestion ", suggestion.full);
                $('#suggestion').html("Quiza lo correcto es: <b><i>" + suggestion.full + "</b></i>?");
            },
            empty: function(element) {
                // callback code
                //$('#suggestion').html('No Suggestions :(');
                $('#suggestion').html('');
            }
        });
    });

}

//closure-> get the blank spaces
const validateForm = ()=>{


    let flag = false;
    let form_data = $('#datosRegistro').serializeJSON();

    let name = form_data.nombres.trim();
    let firstName = form_data.paterno.trim();
    let lastName = form_data.materno.trim();
    let gender = form_data.genero;
    let curp = form_data.curp.trim();
    let mail1 = form_data.email1.trim();
    let mail2 = form_data.email1.trim();

    if (name === '' || firstName ==='' || lastName === ''||
        gender === undefined || curp === '' || mail1 === '' || mail2 === ''){
        flag = true
    }
    return flag;
}

const checkEmail = ()=>{
    let flag = false;

    let mail1 =document.getElementById('email1');
    let mail2 = document.getElementById('email2');

    if (mail1.value === mail2.value){
        flag = false;
    }else{
        flag = true;
    }
    return flag;
}

const checkCURP = ()=>{

    let flag = false;
    let form_data = $('#datosRegistro').serializeJSON();
    let curp = form_data.curp.trim();
    if (validaINCURP(curp)) {
        //console.log("valido");
        //$('#curpValido').hide(5000);
        flag = false;
    } else {
        //console.log('invalido');
        flag = true;
    }

    return flag;
}

function constructorForm (name, firstName, lastName, gender, curp, mail2, idValorP){
    this.name = name;
    this.firstName = firstName;
    this.lastname = lastName;
    this.gender = gender;
    this.curp = curp;
    this.mail2 = mail2;
    this.idValorP = idValorP;
}

function formClone(){
    let form_data = $('#datosRegistro').serializeJSON();
    let name = form_data.nombres.trim();
    let firstName = form_data.paterno.trim();
    let lastName = form_data.materno.trim();
    let gender = form_data.genero;
    let curp = form_data.curp.trim();
    let mail2 = form_data.email1.trim();
    let idValorP = document.getElementById('numeroSolicitudP').value;

    /*let name = "Adriana";
    let firstName = "Hernandez";
    let lastName = "Resendiz";
    let gender = "M";
    let curp = "HERA981120MHGSRL13"
    let mail2 = "testing2@hotmail.com"

     */

    let data = new constructorForm(name,firstName,lastName,gender,curp,mail2,idValorP);
    return data; //Return a object

}


const validateData = async ()=>{

    let alert = '';
    let error = false;

    //check blank spaces in the indicated form
    if (validateForm()){
        error = true;
        alerta = '• Verifique informacion en datos generales<br>';
        alert+=alerta;
    }
    if (checkCURP()){
        error = true;
        alerta2 = '• CURP no válida<br>';
        alert+=alerta2;
    }

    if (checkEmail()){
        error = true;
        alerta3 = '• Los correos indicados no coinciden<br>';
        alert+=alerta3;
    }

    if (error){
        swal(
            {
                html: true,
                title: 'Atención',
                text: alert
            }
        );
    }else{
        //Aqui se tienen que ocultar los botones....

        let btnSender = document.getElementById('btnYes').hidden = true;
        let btnSppinner = document.getElementById('btnSpinner').hidden = false;

        await sendData(formClone());
        //console.table(formClone());
    }
}

//Start the script in the page
const startScript =()=>{
    fieldInputs();
    sugestionsEmail()
}

startScript();

//Send data to server jeje

async function sendData(element){

    let id = await $.ajax({
        type:'POST',
        url: '/enviarDataForm',
        data:{
            '_token': $('meta[name="csrf-token"]').attr('content'),
            'name': element.name,
            'firstName':element.firstName,
            'lastname':element.lastname,
            'gender':element.gender,
            'curp': element.curp,
            'mail2':element.mail2,
            'idValorP':element.idValorP
        },
        success: (data)=>{
            console.table(data)
            showResponses(data);
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log("Error. " + errorThrown);
        return "Error al guardar esto" + errorThrown;
    });
}

async function  showResponses(data){
    let btnSender = document.getElementById('btnYes');
    let btnSppinner = document.getElementById('btnSpinner');

    if(data.errors){

        btnSender.hidden = false;
        btnSppinner.hidden = true;
        let arry = data.errors.map((item)=>{
            return '• '+item+'.<br>';
        }).join('');
        swal(
            {
                html: true,
                title: 'Atención',
                text: arry
            }
        );
    }
    if (data.noError === "1"){
        //console.log(data.mensaje);
        btnSender.hidden = false;
        btnSppinner.hidden = true;
        swal(
            {
                html: true,
                title: 'Atención',
                text: data.mensaje
            }
        );
    }
    if (data.noError === "0"){
        /*swal(
            {
                html: true,
                title: 'Atención',
                text: 'Registro satisfactorio.'
            }
        );*/
        await enviarConfirmacion()
        //console.log(data);
    }
}


async function enviarConfirmacion(){
    let confirmacion = document.getElementById('numeroSolicitudP').value;
    let mail2 = document.getElementById('email2').value;

    let btnSender = document.getElementById('btnYes');
    let btnSppinner = document.getElementById('btnSpinner');

    let id = await $.ajax({
        type: 'POST',
        url: '/enviarConfirmacionPass',
        data:{
            '_token': $('meta[name="csrf-token"]').attr('content'),
            'idConfirmacion':confirmacion,
            'mail': mail2
        },
        success: (data) =>{

            btnSender.hidden = false
            btnSppinner.hidden = true;

            swal({
                title: "Registro exitoso!",
                text: "Se ha enviado el mensaje de confirmación al correo electronico registrado, " +
                    "para continuar, abra el correo y continue con los pasos que se indican en el." +
                    "Espere un momento por favor.",
                type: "success",
                timer: 6000,
                showConfirmButton: false
            }, function(){
                window.location.href = "/aviso-de-privacidad";
            });
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log("Error. " + errorThrown);
        swal({
            title: 'Atención',
            text: `Error: ${errorThrown}`
        })
    });
}
