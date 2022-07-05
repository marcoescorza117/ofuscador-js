const alerta1 = ()=>{
    swal({
            title: "Atención",
            text: "Este CURP ya se encuentra registrado como un Prospecto administrativo." +
                "¿Desea agregarlo a la bolsa de trabajo Académica?",
            type: "warning",
            showCancelButton: true,
            cancelButtonText: "No, cancelar!",
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Si, estoy de acuerdo",
            closeOnConfirm: false
        },
        function(){

            $('#modal-invitacion').modal('hide');
            swal("Agregado!", "El prospecto fue agregado correctamente.", "success");
        });

}


//Start the scritps on load
//1.- The first is the script for the datatable results of the search
//2.- The "var" called slider is fot the item in the HTML... check if the Singleton pattern can help a little bit

//1.- 第一個是用於搜索的數據表結果的腳本
//2.- 名為“ var”的滑塊是HTML中的項目...檢查Singleton模式是否可以幫助一點
function start(){
    //For the datatable
    $(document).ready(function () {
        $('#data1').DataTable ();
    });

    //Both elements help for the slider in the html
    //Remember update the data and this component when get the new data of the first component
    try{
        $('.js-example-basic-multiple').select2({
            theme: 'bootstrap4',
            width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
            language: {
                noResults: function () {
                    return "No hay resultados.";
                },
                searching: function () {
                    return "Buscando..";
                }
            }
        });

        var slider = document.getElementById('slider');
        noUiSlider.create(slider, {
            start: [18, 80],
            connect: true,

            //Define the initial range
            range: {
                'min': 18,
                'max': 80
            },
            //Formart the range without decimals
            format: wNumb({
                decimals: 3,
                thousand: '.',
                suffix: ' años'
            })
        });

        //listener slider.... these elements catch the slider values
        var skipValues = [
            document.getElementById('skip-value-lower'),
            document.getElementById('skip-value-upper')
        ];
        slider.noUiSlider.on('update', function (values, handle) {
            skipValues[handle].innerHTML = values[handle];
        });

    }catch (error){
        console.log("Error, no se puede cargar el script");
    }
    //get the slider element
}

const sugestionsEmail = ()=>{

    let domains = ['hotmail.com', 'gmail.com', 'aol.com', "uaeh.edu.mx","yahoo.com","live.com","outlook.com", "yahoo.com.mx", "live.com.mx", "hotmail.es", "hotmail.com.mx", "prodigy.net.mx"];
    let topLevelDomains = ["com", "net", "org", "edu","mx"];

    $('#email1').on('blur', function(event) {
        //console.log("event ", event);
        //console.log("this ", $(this));
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

//Send data to server
//Clean data of moda

const validateForm = ()=>{
    let flag = false;
    let form_data = $('#datosProspectoInvitacion').serializeJSON();

    let name = form_data.nombres.trim();
    let firstName = form_data.paterno.trim();
    let lastName = form_data.materno.trim();
    let curp = form_data.curp.trim();
    let mail1 = form_data.email1.trim();
    let mail2 = form_data.email1.trim();

    if (name === '' || firstName ==='' || lastName === ''||
        curp === '' || mail1 === '' || mail2 === ''){
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
    let form_data = $('#datosProspectoInvitacion').serializeJSON();
    let curp = form_data.curp.trim();
    if (validaINCURP(curp)) {
        flag = false;
    } else {
        flag = true;
    }

    return flag;
}

function constructorForm (name, firstName, lastName, curp, mail2){
    this.name = name;
    this.firstName = firstName;
    this.lastname = lastName;
    this.curp = curp;
    this.mail2 = mail2;
}


function formClone(){
    let form_data = $('#datosProspectoInvitacion').serializeJSON();
    let name = form_data.nombres.trim();
    let firstName = form_data.paterno.trim();
    let lastName = form_data.materno.trim();
    let curp = form_data.curp.trim();
    let mail2 = form_data.email1.trim();

    let data = new constructorForm(name,firstName,lastName,curp,mail2);
    return data; //Return a object
}


const validateData = ()=>{
    let alert = '';
    let error = false;
    //check blank spaces in the indicated form
    if (validateForm()){
        error = true;
        alerta = '• Verifique la información en los campos.<br>';
        alert+=alerta;
    }
    /*if (checkCURP()){
        error = true;
        alerta2 = '• CURP no válida.<br>';
        alert+=alerta2;
    }*/

    if (checkEmail()){
        error = true;
        alerta3 = '• Los correos indicados no coinciden.<br>';
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

        formsState(true,false,true)
        sendDataInvitation(formClone());
    }
}

//buttons state and form
const formsState = (send, spinner, formD)=>{
    let buttonSend = null || document.getElementById('btnYes');
    let buttonSpinner = null || document.getElementById('btnSpinner');

    let data = document.getElementById('datosProspectoInvitacion');
    let items = Array.from(data.getElementsByTagName('input'));

    buttonSend.hidden = send;
    buttonSpinner.hidden = spinner;

    items.forEach((item)=>{item.readOnly = formD});
}

//clean the form values after/before
const cleanForm = ()=>{
    let data = document.getElementById('datosProspectoInvitacion');
    let items = Array.from(data.getElementsByTagName('input'));
    items.forEach((item)=>{item.value = ''});

}


//Send data to server
async function sendDataInvitation(element){
    let id = await $.ajax({
        type:'POST',
        url: '/enviarDataFormInvitacion',
        data:{
            '_token': $('meta[name="csrf-token"]').attr('content'),
            'name': element.name,
            'firstName':element.firstName,
            'lastname':element.lastname,
            'curp': element.curp,
            'mail2':element.mail2
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

function showResponses(data){


    if(data.errors){
        let arry = data.errors.map((item)=>{
            return '• '+item+'.<br>';
        }).join('');

        formsState(false,true,false);
        swal(
            {
                html: true,
                title: 'Atención',
                text: arry
            }
        );

    }
    if (data.noError == 1){

        formsState(false,true,false)
        swal(
            {
                html: true,
                title: 'Atención',
                text: data.mensaje
            }
        );

    }
    if (data.noError == 0){
        formsState(true,false,true)
        returnID2(formClone(),data.id)
    }
}

//async function ret

async function returnID2(element,element2){

    let id = await $.ajax({
        type:'POST',
        url: '/idVerificationM',
        data:{
            '_token': $('meta[name="csrf-token"]').attr('content'),
            'name': element.name,
            'firstName':element.firstName,
            'lastname':element.lastname,
            'curp': element.curp,
            'mail2':element.mail2,
            'mailID':element2
        },
        success: (data)=>{
            console.table(data)
            cleanForm();
            formsState(false,true,false);
            swal(
                {
                    html: true,
                    title: 'Atención',
                    text: 'Registro satisfactorio.'
                }
            );
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log("Error. " + errorThrown);
        return "Error al guardar esto" + errorThrown;
    });
}

//Closure object

function makeCounter(n){
    let counter = n;
    return{
        increase: ()=>{
            counter++;
        },
        decrease: ()=>{
            counter--;
        },
        getvalueCounter: ()=>{
            return counter;
        }
    }
}
const startLibrary = ()=>{
    start();
    sugestionsEmail();
}

startLibrary();