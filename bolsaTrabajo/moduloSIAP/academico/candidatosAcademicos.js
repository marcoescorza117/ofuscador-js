//Primer script vista 7 dias
const startFunctions = ()=>{
    setTimeout(()=>{
        ultimosRegistros().then(r => console.log("Success"));
    },1000)
}

const ultimosRegistros = async () =>{
    let id = await $.ajax({
        type:'GET',
        url: '/reclutamientoAcademico/ultimosRegistrosAC',
        data:{
            _token: $('meta[name="csrf-token"]').attr("content"),
        },
        success: (data)=>{
            let sppiner = document.getElementById('spinner-show').hidden=true;
            let result = document.getElementById('result').hidden=false;
            let values = '';

            //Get the Array data
            data.forEach((item)=>{
                values +=
                    `<tr>
                        <td class="sorting_1"><div class="btn-group mr-2"><a title="Ver detalles" class="btn btn-secondary boton" href="/reclutamientoAcademico/detalleProspecto/${item.idPersona}"><i class="fas fa-id-card"></i>   </a></div></td>
                        <td>${item.paterno}</td>
                        <td>${item.materno}</td>
                        <td>${item.nombres}</td>
                    </tr>`;
            });
            let tbody = document.getElementById('resultados');
            tbody.innerHTML = values;
            $('#data1').DataTable();
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log("Error. " + errorThrown);
        return "Error al guardar esto" + errorThrown;
    });
}

//Functions to send invitation
const curpValidate = (input) => {
    mayus(input);
    let curp = input.value.toUpperCase();
    let divCorrecto = document.getElementById("curpValido");
    let divincorrecto = document.getElementById("curpinValido");

    if (validaINCURP(curp)) {
        $("#curpValido").css("display", "");
        divincorrecto.setAttribute("hidden", true);
        divCorrecto.removeAttribute("hidden");
        divCorrecto.innerText = "CURP válido";
    } else {
        divCorrecto.setAttribute("hidden", true);
        divincorrecto.removeAttribute("hidden");
        divincorrecto.innerText = "CURP Inválido";
    }
};

function mayus(elemet) {
    elemet.value = elemet.value.toUpperCase();
}

const validateForm = () => {
    let flag = false;
    let form_data = $("#datosProspectoInvitacion").serializeJSON();

    let name = form_data.nombres.trim();
    let firstName = form_data.paterno.trim();
    let lastName = form_data.materno.trim();
    let curp = form_data.curp.trim();
    let mail1 = form_data.email1.trim();
    let mail2 = form_data.email1.trim();

    if (
        name === "" ||
        firstName === "" ||
        lastName === "" ||
        curp === "" ||
        mail1 === "" ||
        mail2 === ""
    ) {
        flag = true;
    }

    return flag;
}

const checkCURP = () => {
    let flag = false;
    let form_data = $("#datosProspectoInvitacion").serializeJSON();
    let curp = form_data.curp.trim();
    if (validaINCURP(curp)) {
        flag = false;
    } else {
        flag = true;
    }

    return flag;
}


const validaINCURP = (curp) => {
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
        lngDigito = 10 - (lngSuma % 10);
        if (lngDigito == 10) return 0;
        return lngDigito;
    }

    if (validado[2] != digitoVerificador(validado[1])) return false;
    return true;
};

const checkEmail = () => {
    let flag = false;

    let mail1 = document.getElementById("email1");
    let mail2 = document.getElementById("email2");

    if (mail1.value === mail2.value) {
        flag = false;
    } else {
        flag = true;
    }
    return flag;
};

//Constructor
function constructorForm(name, firstName, lastName, curp, mail2) {
    this.name = name;
    this.firstName = firstName;
    this.lastname = lastName;
    this.curp = curp;
    this.mail2 = mail2;
}

function formClone() {
    let form_data = $("#datosProspectoInvitacion").serializeJSON();
    let name = form_data.nombres.trim();
    let firstName = form_data.paterno.trim();
    let lastName = form_data.materno.trim();
    let curp = form_data.curp.trim();
    let mail2 = form_data.email1.trim();

    let data = new constructorForm(name, firstName, lastName, curp, mail2);
    return data; //Return a object
}

const sugestionsEmail = () => {
    let domains = [
        "hotmail.com",
        "gmail.com",
        "aol.com",
        "uaeh.edu.mx",
        "yahoo.com",
        "live.com",
        "outlook.com",
        "yahoo.com.mx",
        "live.com.mx",
        "hotmail.es",
        "hotmail.com.mx",
        "prodigy.net.mx",
    ];
    let topLevelDomains = ["com", "net", "org", "edu", "mx"];

    $("#email1").on("blur", function (event) {
        //console.log("event ", event);
        //console.log("this ", $(this));
        $(this).mailcheck({
            domains: domains, // optional
            topLevelDomains: topLevelDomains, // optional
            suggested: function (element, suggestion) {
                // callback code
                console.log("suggestion ", suggestion.full);
                $("#suggestion").html(
                    "Quiza lo correcto es: <b><i>" + suggestion.full + "</b></i>?"
                );
            },
            empty: function (element) {
                // callback code
                //$('#suggestion').html('No Suggestions :(');
                $("#suggestion").html("");
            },
        });
    });
};

const validateData = async () => {
    let alert = "";
    let error = false;
    //check blank spaces in the indicated form
    if (validateForm()) {
        error = true;
        alerta = "• Verifique la información en los campos.<br>";
        alert += alerta;
    }
    if (checkCURP()){
        error = true;
        alerta2 = '• CURP no válida.<br>';
        alert+=alerta2;
    }

    if (checkEmail()) {
        error = true;
        alerta3 = "• Los correos indicados no coinciden.<br>";
        alert += alerta3;
    }

    if (error) {
        swal({
            html: true,
            title: "Atención",
            text: alert,
            type: "warning"
        });
    } else {
        formsState(true, false, true);
         await sendDataInvitation(formClone());
    }
};

async function sendDataInvitation(element) {
    let id = await $.ajax({
        type: "POST",
        url: "/reclutamientoAcademico/enviarInvitacionAcad",
        data: {
            _token: $('meta[name="csrf-token"]').attr("content"),
            name: element.name,
            firstName: element.firstName,
            lastname: element.lastname,
            curp: element.curp,
            mail2: element.mail2,
        },
        success: (data) => {
            console.table(data);
            showResponses(data);
        },
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log("Error. " + errorThrown);
        return "Error al guardar esto" + errorThrown;
    });
}

async function showResponses(data) {
    console.log(data)
    if (data.errors) {
        let arry = data.errors
            .map((item) => {
                return "• " + item + ".<br>";
            })
            .join("");

        formsState(false, true, false);
        swal({
            html: true,
            title: "Atención",
            text: arry,
            type: "warning"
        });
    }
    if (data.noError === "1") {
        formsState(false, true, false);
        swal({
            html: true,
            title: "Atención",
            text: data.mensaje,
            type: "warning"
        });
    }
    if (data.noError === "0") {
        formsState(true, false, true);
        await returnID2(formClone(), data.id);
    }
}

//async function ret
async function returnID2(element, element2) {
    let id = await $.ajax({
        type: "POST",
        url: "/reclutamientoAcademico/idVerificationAca",
        data: {
            _token: $('meta[name="csrf-token"]').attr("content"),
            name: element.name,
            firstName: element.firstName,
            lastname: element.lastname,
            curp: element.curp,
            mail2: element.mail2,
            mailID: element2,
        },
        success: (data) => {
            console.table(data);
            cleanForm();

            formsState(false, true, false);
            swal({
                html: true,
                title: "Atención",
                text: "Registro satisfactorio.",
                type: "success"
            },function (){
                $('#modal-invitacion').modal('toggle');
            });

        },
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log("Error. " + errorThrown);
        return "Error al guardar esto" + errorThrown;
    });
}
//clean the form values after/before
const cleanForm = () => {
    let data = document.getElementById("datosProspectoInvitacion");
    let items = Array.from(data.getElementsByTagName("input"));
    items.forEach((item) => {
        item.value = "";
    });
};

//buttons state and form
const formsState = (send, spinner, formD) => {
    let buttonSend = document.getElementById("btnYes");
    let buttonSpinner = document.getElementById("btnSpinner");

    let data = document.getElementById("datosProspectoInvitacion");
    let items = Array.from(data.getElementsByTagName("input"));

    buttonSend.hidden = send;
    buttonSpinner.hidden = spinner;

    items.forEach((item) => {
        item.readOnly = formD;
    });
}

function fieldClean (){
    let form = document.getElementById("datosProspectoInvitacion")
    let data = form.getElementsByTagName('input');
    let array = [...data]
    for (let i = 1; i < array.length; i++) {
        array[i].value = ''
    }
    document.getElementById('curpValido').hidden = true;
    document.getElementById('curpinValido').hidden = true;
    $("#suggestion").html("");
}

//end functions to send invitation

startFunctions();
sugestionsEmail();
