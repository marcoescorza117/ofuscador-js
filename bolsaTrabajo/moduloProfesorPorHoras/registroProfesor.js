/**
 * Funcion para envio de informacion al servidor
 * @param url
 * @param type
 * @param formData
 * @returns {Promise<*>}
 */
const fetchData = async (url, type, formData = null) => {
    let id = await $.ajax({
        type: type,
        url: '/convocatoria/profesor/' + url,
        data: {
            '_token': $('meta[name="csrf-token"]').attr('content'),
            data: formData
        }, success: (data) => {
            return data;
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {
        swal({
            title: "Atención",
            text: "Lamentablemente sucedio un error al obtener los datos, intente recargar la pagina o intente más tarde.",
            type: "error"
        });
    });
    return id;
}

const sugestionsEmails = () => {

    let domains = ['hotmail.com', 'gmail.com', 'aol.com', "uaeh.edu.mx", "yahoo.com", "live.com", "outlook.com", "outlook.es", "yahoo.com.mx", "live.com.mx", "hotmail.es", "hotmail.com.mx", "prodigy.net.mx"];
    let topLevelDomains = ["com", "net", "org", "edu", "mx"];

    $('#email1').on('blur', function (event) {
        $(this).mailcheck({
            domains: domains,                       // optional
            topLevelDomains: topLevelDomains,       // optional
            suggested: function (element, suggestion) {
                $('#suggestion').html("Quiza lo correcto sea: <b><i>" + suggestion.full + "</b></i>?");
            },
            empty: function (element) {
                $('#suggestion').html('');
            }
        });
    });

}
sugestionsEmails();

/**
 * * Verifica la validez del CURP
 * @param input
 * @constructor
 */
const CURPValidator = (input) => {
    removerEspacios(input);
    mayus(input);
    let curp = input.value.toUpperCase();
    let divCorrecto = document.getElementById('curpValido');
    let divincorrecto = document.getElementById('curpinValido');

    if (validaInputCURP(curp)) {

        $('#curpValido').css('display', '');
        divincorrecto.setAttribute('hidden', true);
        divCorrecto.removeAttribute('hidden');
        divCorrecto.innerText = "CURP válido";

    } else {

        divCorrecto.setAttribute('hidden', true);
        divincorrecto.removeAttribute('hidden')
        divincorrecto.innerText = "CURP Inválido";
    }
}

const validaInputCURP = (curp) => {


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

/**
 * *
 * @param elemet
 */
function mayus(elemet) {
    elemet.value = elemet.value.toUpperCase();
}

/**
 * * Remueve espacios en blanco de elementos
 * @param item
 */
const removerEspacios = (item) => {
    let expresion = /^\s+|\s+$|\s+(?=\s)/g;
    item.value = item.value.replace(expresion, " ");
}


const validateFormulario = () => {
    let form_data = $('#datosRegistro').serializeJSON();

    let name = form_data.nombres.trim();
    let firstName = form_data.paterno.trim();
    let lastName = form_data.materno.trim();
    let gender = form_data.genero;
    let curp = form_data.curp.trim();
    let mail1 = form_data.email1.trim();
    let mail2 = form_data.email2.trim();

    return name === ''
        || firstName === ''
        || lastName === ''
        || gender === undefined
        || curp === ''
        || mail1 === ''
        || mail2 === '';
}

const checkCURPCampo = () => {

    let form_data = $('#datosRegistro').serializeJSON();
    let curp = form_data.curp.trim();
    return !validaInputCURP(curp)
}

const checkEmailCampo = () => {
    let mail1 = document.getElementById('email1');
    let mail2 = document.getElementById('email2');
    return !(mail1.value === mail2.value)
}

const validarDatosRegistro = async () => {

    let alert = '';
    let error = false;

    if (validateFormulario()) {
        error = true;
        alert += '• Verifique información en datos generales<br>';
    }

    if (checkCURPCampo()) {
        error = true;
        alert += '• CURP no válida<br>';
    }

    if (checkEmailCampo()) {
        error = true;
        alert += '• Los correos indicados no coinciden<br>';
    }

    if (error) {
        swal({
            html: true,
            title: 'Atención',
            text: alert,
            type: "warning"
        });
    } else {
        console.log("Generar objeto aqui")
        let btnSender = document.getElementById('btnYes').hidden = true; // ??
        let btnSppinner = document.getElementById('btnSpinner').hidden = false; // ?
        await formObject();
    }
}


const formObject = async () => {

    let form_data = $('#datosRegistro').serializeJSON();

    let name = form_data.nombres.trim();
    let firstName = form_data.paterno.trim();
    let lastName = form_data.materno.trim();
    let gender = form_data.genero;
    let curp = form_data.curp.trim();
    let mail1 = form_data.email1.trim();
    let mail2 = form_data.email2.trim();


    let array = [];

    let obj = {
        name: name
        , firstName: firstName
        , lastName: lastName
        , gender: gender
        , curp: curp
        , mail1: mail1
        , mail2: mail2
    }

    array.push(obj)

    let data = JSON.stringify(array)

    await fetchData('enviarFormulario', 'POST', data).then((data) => {
        console.log(data)
        showResponseSend(data);

    }).catch((err) => {
        console.error(err)
        //Hace falta atrapar al error que se se genera...
    })

}

const showResponseSend = (data) => {

    let btnSender = document.getElementById('btnYes');
    let btnSppinner = document.getElementById('btnSpinner');

    if (data.errors) {

        btnSender.hidden = false;
        btnSppinner.hidden = true;
        let arry = data.errors.map((item) => {
            return '• ' + item + '.<br>';
        }).join('');
        swal(
            {
                html: true,
                title: 'Atención',
                text: arry
            }
        );
    }
    if (data.noError === "1") {
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
    if (data.noError === "0") {

        btnSender.hidden = false
        btnSppinner.hidden = true;

        swal({
            title: "Registro exitoso!",
            text: "Se ha enviado el mensaje de confirmación al correo electrónico registrado, " +
                "para continuar, abra el correo y continue con los pasos que se indican en el." +
                "Espere un momento por favor.",
            type: "success",
            timer: 6000,
            showConfirmButton: false
        }, function () {
            window.location.href = "/bolsa-trabajo/login";
        });
    }
}
