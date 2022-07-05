function start() {
    //For the datatable
    //Both elements help for the slider in the html
    //Remember update the data and this component when get the new data of the first component
    try {
        $(".js-example-basic-multiple").select2({
            theme: "bootstrap4",
            width: $(this).data("width")
                ? $(this).data("width")
                : $(this).hasClass("w-100")
                    ? "100%"
                    : "style",
            language: {
                noResults: function () {
                    return "No hay resultados.";
                },
                searching: function () {
                    return "Buscando..";
                },
            },
        });

        var slider = document.getElementById("slider");
        noUiSlider.create(slider, {
            start: [18, 80],
            connect: true,

            //Define the initial range
            range: {
                min: 18,
                max: 80,
            },
            //Formart the range without decimals
            format: wNumb({
                decimals: 3,
                thousand: ".",
                suffix: " años",
            }),
        });

        //listener slider.... these elements catch the slider values
        var skipValues = [
            document.getElementById("skip-value-lower"),
            document.getElementById("skip-value-upper"),
        ];
        slider.noUiSlider.on("update", function (values, handle) {
            skipValues[handle].innerHTML = values[handle];
        });
    } catch (error) {
        console.log("Error, no se puede cargar el script");
    }
    //get the slider element
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


//Funciones para busqueda ********************
//Busqueda

function getItemsSearch(nombres, apPaterno, apMaterno, curp) {

    this.nombres = nombres;
    this.apPaterno = apPaterno;
    this.apMaterno = apMaterno;
    this.curp = curp;
}

function formSeach (){
    let form = document.getElementById('buscarProspectoForm');
    let collection = form.getElementsByTagName('input')
    //console.log(collection)
    let arrayCollecion = [...collection];

    //Using destructuring
    let [key, nombre, apPaterno, apMaterno, curp] = arrayCollecion;

    let objData = new getItemsSearch(nombre.value, apPaterno.value,apMaterno.value, curp.value);
    return objData;

}
//Page search
async function busquedaPerfilesAC(){

    let btn = document.getElementById('btnDescargar').hidden = true

    let datosEmp = "";
    let spinner = document.getElementById("spinner-div");
    let tableResult = document.getElementById("resultados");
    $('#dataProspectos').DataTable().destroy();
    spinner.hidden = false;
    tableResult.hidden = true;
    let id = await $.ajax({
        type: 'POST',
        url:'/reclutamientoAcademico/busquedaPerfiAc',
        data:{
            _token: $('meta[name="csrf-token"]').attr("content"),
            fields: JSON.stringify(formSeach())
        },success: (data) =>{
            spinner.hidden = true;

            //let datosForm = data.result1;
            //datosEmp = data;
            tableResult.hidden = false;
            console.log(data);
            let values = '';
            //Get the Array data
            data.forEach((item)=>{
                values +=
                    `<tr>
                        <td class="sorting_1"><div class="btn-group mr-2"><a title="Ver detalles" class="btn btn-secondary boton" href="/reclutamientoAcademico/detalleProspecto/${item.idPersona}"><i class="fas fa-id-card"></i>   </a></div></td>
                        <td>${item.apPaterno}</td>
                        <td>${item.apMaterno}</td>
                        <td>${item.nombres}</td>
                        <td>${item.curp}</td>
                    </tr>`;
            });
            let tbody = document.getElementById('resultadosProspectos');
            tbody.innerHTML = values;
            $('#dataProspectos').DataTable();

            return data;

        }
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log("Error. " + errorThrown);
        return "Error al guardar esto" + errorThrown;
    });

    /*let objs = id.obs

    let id2 = await $.ajax({
        type: 'POST',
        url:'/reclutamientoAcademico/busquedaPerfiAcDomicilios',
        data:{
            _token: $('meta[name="csrf-token"]').attr("content"),
             data: objs //JSON.stringify(formSeach())
        },success: (data) =>{
            return data;
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log("Error. " + errorThrown);
        return "Error al guardar esto" + errorThrown;
    });

    //Se tiene que enviar el ID, esto con el fin de obtener la dioreccion de cada uno de los empleados... tener cuidado de hacer esto..
    await devolverTabla(id, id2);
    document.getElementById('btnDescargar').hidden = false*/

}


const  devolverTabla = async (datosEmp, datosDom)=>{

    let data =  `<table class="table table-striped table-responsive" id="tableResultadoEXCEL">
                        <thead>
                            <tr>

                                <th>FechaValidacionCuenta</th>
                                <th>rfc</th>
                                <th>CURP</th>
                                <th>Nombre</th>
                                <th>EstadoCivil</th>
                                <th>Sexo</th>
                                <th>TipoSangre</th>
                                <th>NSS</th>
                                <th>Calle</th>
                                <th>numExterior</th>
                                <th>numInterior</th>
                                <th>Colonia</th>
                                <th>CodigoPostal</th>
                                <th>Ciudad</th>
                                <th>Municipio</th>
                                <th>Estado</th>
                                <th>PaisOrigen</th>
                                <th>EstadoOrigen</th>
                                <th>MunicipioOrigen</th>
                                <th>LugarNacimiento</th>
                                <th>LugarNacimientoDocumento</th>
                                <th>Estado-Extranjero</th>
                                <th>Provincia-Extranjero</th>
                                <th>FechaNacimiento</th>
                                <th>FechaNacimiento</th>
                                <th>Edad</th>
                                <th>CorreoElectronico</th>
                                <th>Telefonos</th>
                                <th>Escolaridad Máxima</th>
                                <th>Padre</th>
                                <th>Madre</th>
                                <th>Conyúge</th>
                                <th>Fecha de Matrimonio</th>
                                ${obtainsTitle(datosEmp)}
                            </tr>
                        </thead>

                        <tbody>
                            ${unionData(datosEmp, datosDom)}
                        </tbody>
                    </table>`;
    let destino = document.getElementById('tableExcelResult');
    destino.innerHTML = data;
   // let btn = document.getElementById('btnDescargar').hidden = false
}

const obtainsTitle = (datosEmp) =>{
    let infoParientes  = datosEmp.infoParientes; // necesario para obtener las n titulos de hijos
    let daaa = infoParientes.filter( item => item.idTipoParentesco === "3")

    let idPersons = [];
    daaa.forEach(item => idPersons.push(item.idPersona))

    let idUniques = [...new Set(idPersons)];

    console.warn(idUniques) // Valores Unicos

    let Ocurrences = [];
    idUniques.forEach((itemPersonaId)=>{

        let items = daaa.filter(item => item.idPersona === itemPersonaId)
        Ocurrences.push(items.length);
    });


    let maxValue = Math.max(...Ocurrences);

    let titles = "";
    for (let i = 0; i <maxValue; i++) {
        titles += ` <th>Nombre hijo: ${i+1}</th>
                    <th>Fecha nacimiento hijo: ${i+1}</th>`
    }
    return titles;
}

const unionData = (datosEmp, datosDom) =>{


    let data  = datosEmp.obs // CandidatosTotales
    let infoPersona = datosEmp.info_Persona;
    let tipoSangre = datosEmp.tipoSangre;
    let segSocial  = datosEmp.segSocial;
    let numTelefonos = datosEmp.telefonos;
    let maxEscolaridad = datosEmp.maxEscolaridad;
    let datosNacimiento = datosEmp.datosNacimiento;
    let infoParientes  = datosEmp.infoParientes;
    let result1 = datosEmp.result1;

    let dataReturn = ""
    data.forEach((item)=>{
        dataReturn += `<tr>

                                ${ObtenerFechaActivacion(item, result1)}
                                ${ObtenerInformacionPersona(item, infoPersona)}
                                ${ObtenerTipoSangre(item, tipoSangre)}
                                ${ObtenerSegSocial(item, segSocial)}
                                ${ObtenerDomicilio(item, datosDom)}
                                ${ObtenerDatosNacimiento(item, datosNacimiento)}
                                ${ObtenerCorreo(item, result1)}
                                <td>${ObtenerTelefono(item, numTelefonos)}</td>
                                ${ObtenerEscolaridadMax(item, maxEscolaridad)}
                                ${ObtenerFamiliares(item, infoParientes)}
                            </tr>`;
    });
    return dataReturn;
}
const ObtenerFechaActivacion =(idPersona, result1)=>{

    let data = result1.find(item => item.idPersona2 === idPersona)
    //console.log(data)
    if (data=== undefined || data === null){
        return `<td> </td>`
    }else{
        return `<td>${data.fechaValidado !== null ? data.fechaValidado: ''}</td>`
    }

}


const ObtenerDomicilio = (idPersona, datosDom)=>{

    let data = datosDom.filter(item => item.idPersona === idPersona)
    if (data.length === 0){
        return `<td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>`;
    }else{

        let dataReturn = "";
        data.forEach((item)=>{

            dataReturn += ` <td>${item.calle} </td>
                            <td>${item.numeroExterior} </td>
                            <td>${item.numeroInterior} </td>
                            <td>${item.colonia} </td>
                            <td>${item.codigoPostal} </td>
                            <td>${item.ciudad} </td>
                            <td>${item.municipio} </td>
                            <td>${item.entidadFederativa} </td>`
        });
        return dataReturn;
    }
}

const ObtenerFamiliares = (idPersona, infoParientes) =>{

    let data = infoParientes.filter(item => item.idPersona === idPersona)

    let stringCases = "";
    if(data.length === 0 ){
        return `<td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>`
    }else{

        let padre = data.find(item => item.idTipoParentesco === "2")
        stringCases += padre === undefined ? `<td> </td>`
            : `<td>Nombre: ${padre.paterno} ${padre.materno} ${padre.nombres} </td>`

        let madre = data.find(item => item.idTipoParentesco === "1")
        stringCases += madre === undefined ? `<td> </td>`
            : `<td>Nombre: ${madre.paterno} ${madre.materno} ${madre.nombres} </td>`

        let conyuge = data.find(item => item.idTipoParentesco === "4")
        stringCases += conyuge === undefined ? `<td> </td>
                                                <td> </td>`
            : `<td>Nombre: ${conyuge.paterno} ${conyuge.materno} ${conyuge.nombres}</td>
                <td>${conversorTiempoStringDMY(conyuge.fecha)}</td>`

        let hijos = data.filter(item => item.idTipoParentesco === "3")
        let variableHijos = ``

        hijos.forEach((item)=>{
            variableHijos += `<td>${item.paterno} ${item.materno} ${item.nombres} </td>
                              <td>${item.fecha === null || undefined ? "":conversorTiempoStringDMY(item.fecha)}</td>`
        })
        stringCases += variableHijos;
        return  stringCases;
    }

}

const ObtenerEscolaridadMax = (idPersona, maxEscolaridad)=> {

    let data = maxEscolaridad.find(item => item.idPersona === idPersona)
    let text = "";
    if (data !== undefined) {
        text += `${data.estudio}`
        return `<td>${text}</td>`;
    } else {
        return `<td>  </td>`;
    }
}

const ObtenerTipoSangre = (idPersona, tipoSangre) =>{

    let data = tipoSangre.find(item => item.idPersona === idPersona)

    if (data !== undefined) {
        return `<td>${data.grupoSanguineo} ${convertidorDatosSangre(data)}</td>`
    } else {
        return `<td> </td>`
    }
}

const convertidorDatosSangre = (data) =>{

    let text = ""
    if (data.factorRH === '-'){
        text+= "RH -"
    }else{
        text+= "RH +"
    }
    return text;
}

const ObtenerSegSocial = (idPersona, segSocial) =>{

    let data = segSocial.find(item => item.idPersona === idPersona)

    if (data !== undefined) {
        return `<td>${data.numeroSeguridadSocial}</td>`
    } else {
        return `<td> </td>`
    }
}

const ObtenerCorreo = (idPersona, datosCorreo) =>{



    let data = datosCorreo.find(item => item.idPersona2 === idPersona)
    //console.log(data)
    if (data=== undefined){
        return `<td> </td>`
    }else{
        return `<td>${data.correoElectronico}</td>`
    }

}

const ObtenerDatosNacimiento = (idPersona, datosNacimiento) =>{

    let data = datosNacimiento.find(item => item.idPersona === idPersona)

    if (data ===  undefined){
        return `<td> </td>
                <td>  </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>`
    }else{

        return `<td>${data.pais}</td>
                <td>${data.entidadFederativa}</td>
                <td>${data.municipio} </td>
                <td>${data.municipio}</td>
                <td>${data.lugarActa}</td>
                <td>${data.estado !==null ? data.estado : ''}</td>
                <td>${data.provincia !==null ? data.provincia : ''}</td>
                <td>${conversorTiempoStringDMY(data.fechaNacimiento)}</td>
                <td>${conversorTiempoString(data.fechaNacimiento)}</td>
                <td>${conversorTiempoStringEdad(data.fechaNacimiento)}</td>`
    }




}

const conversorTiempoStringEdad = (dateString)=>{

    dateString.toString();
    let a = moment(dateString).locale('es');
    let b = moment(a, 'YYYYMMDD').fromNow();
    let data1 = b.split(" ")[1]
    let data2 = b.split(" ")[2]

    return `${data1} ${data2}`
}

const conversorTiempoString = (dateString)=>{

    dateString.toString();
    let a = moment(dateString).locale('es');
    let time = a.format('DD MMMM YYYY');
    let day = time.split(" ")[0]
    let month = time.split(" ")[1]
    let year = time.split(" ")[2]

    return `${day} de ${month} de ${year}`

}

const conversorTiempoStringDMY = (dateString)=>{

    dateString.toString();
    let a = moment(dateString).locale('es');
    return  a.format('L');

}

const ObtenerTelefono = (idPersona, numTelefonos) =>{
    let data = numTelefonos.filter(item => item.idPersona === idPersona)
    let text = "";

    if(data.length > 1 ){
        data.forEach((item)=>{
            text+= ` ${item.telefono} -`
        })

        text.slice(0,-1)
        //console.log(text)
        text = text.slice(0, -1);
        //console.log(textValue.slice(0,-1))

    }else{
        data.forEach((item)=>{
            text+= `${item.telefono}  `
        })
    }


    return text;
}

const ObtenerInformacionPersona = (idPersona, infoPersona) =>{

    let data = infoPersona.find(item => item.idPersona === idPersona)
    let html = `
            <td>${data.rfc}</td>
            <td>${data.curp}</td>
            <td>${data.nombreCompletoPMN}</td>
            <td>${data.estadoCivil === null ? " ": data.estadoCivil}</td>
            <td>${data.genero}</td>`;
    return html;
}

const descargarDoc = ()=>{

    var wb = XLSX.utils.table_to_book(document.getElementById("tableResultadoEXCEL"));
    /* Export to file (start a download) */
    XLSX.writeFile(wb, "reporte-academico.xlsx");
}

start();
sugestionsEmail();
